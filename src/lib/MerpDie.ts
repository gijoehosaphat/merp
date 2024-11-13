import { DiceRollParseNode } from '@league-of-foundry-developers/foundry-vtt-types/src/foundry/client-esm/dice/_types.mjs'
import DiceTerm from '@league-of-foundry-developers/foundry-vtt-types/src/foundry/client-esm/dice/terms/dice.mjs'

export class MerpDie extends foundry.dice.terms.Die {
  original = ''

  /** @inheritdoc */
  override get expression() {
    return this.original
  }

  /* -------------------------------------------- */
  /*  Dice Term Methods                           */
  /* -------------------------------------------- */

  override async roll({
    minimize = false,
    maximize = false,
  }: // ...options
  {
    minimize?: boolean
    maximize?: boolean
  } = {}): Promise<DiceTerm.Result> {
    const roll: DiceTerm.Result = {
      result: 0,
      active: true,
    }
    // roll.result = await this._roll(options);
    if (this.faces) {
      if (minimize) {
        roll.result = Math.min(1, this.faces)
      } else if (maximize) {
        roll.result = this.faces
      } else if (roll.result === undefined) {
        let result = this.randomFace()
        roll.result = result

        while (result === this.faces) {
          result = this.randomFace()
          roll.result += result
        }
      }

      this.results.push(roll)
    }
    return roll
  }

  /* -------------------------------------------- */
  /*  Factory Methods                             */
  /* -------------------------------------------- */

  /** @override */
  static override fromParseNode(node: DiceRollParseNode): DiceTerm {
    let { number, faces } = node

    if (!number) {
      number = 1
    }

    if (number.class) {
      number = Roll.defaultImplementation.fromTerms(
        Roll.defaultImplementation.instantiateAST(number)
      )
    }

    if (faces.class) {
      faces = Roll.defaultImplementation.fromTerms(
        Roll.defaultImplementation.instantiateAST(faces)
      )
    }

    const modifiers = Array.from(
      (node.modifiers || '').matchAll(this.MODIFIER_REGEXP)
    ).map(([m]: any) => m)

    const cls = CONFIG.Dice.terms.l

    const data = { ...node, number, faces, modifiers, class: cls.name }

    return this.fromData(data)
  }
}
