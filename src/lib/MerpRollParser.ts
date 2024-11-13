import {
  DiceRollParseNode,
  NumericRollParseNode,
  ParentheticalRollParseNode,
} from '@league-of-foundry-developers/foundry-vtt-types/src/foundry/client-esm/dice/_types.mjs'

export class MerpRollParser extends foundry.dice.RollParser {
  override _onDiceTerm(
    number: NumericRollParseNode | ParentheticalRollParseNode | null,
    faces: string | NumericRollParseNode | ParentheticalRollParseNode | null,
    modifiers: string | null,
    flavor: string | null,
    formula: string
  ): DiceRollParseNode {
    // if (CONFIG.debug.rollParsing) {
    //   // eslint-disable-next-line no-console
    //   console.debug(
    //     this.constructor.formatDebug(
    //       'onDiceTerm',
    //       number,
    //       faces,
    //       modifiers,
    //       flavor,
    //       formula
    //     )
    //   )
    // }

    // // We're going to manipulate modifiers, make sure it's defined.
    // const sanitisedModifiers = modifiers === null ? '' : modifiers

    // const loc = sanitisedModifiers?.indexOf('!')
    // const useNewDieType = loc !== -1

    // if (useNewDieType) {
    //   // Remove the ! since it has been used to change the type of Die
    //   const alteredModifiers =
    //     sanitisedModifiers.slice(0, loc) + sanitisedModifiers.slice(loc + 1)

    //   return {
    //     class: 'MerpDiceTerm',
    //     formula,
    //     modifiers: alteredModifiers,
    //     number,
    //     faces,
    //     evaluated: false,
    //     options: { flavor },
    //   }
    // }

    return {
      class: 'DiceTerm',
      formula,
      modifiers: modifiers || '',
      // modifiers,//: sanitisedModifiers,
      number: {
        class: 'NumericRollParseNode',
        formula,
        term: number ? number.toString() : '1',
        // number: number ? number : 1,
        options: { flavour: flavor || '' },
      },
      faces: {
        class: 'NumericRollParseNode',
        formula,
        term: faces ? faces.toString() : '1',
        // faces: faces ? faces : 1,
        options: { flavour: flavor || '' },
      },
      // evaluated: false,
      // options: { flavor },
      options: { flavour: flavor || '' },
    }
  }
}
