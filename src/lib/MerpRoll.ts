import { MerpDie } from './MerpDie'
import { RollParseNode } from '@league-of-foundry-developers/foundry-vtt-types/src/foundry/client-esm/dice/_types.mjs'
import RollTerm from '@league-of-foundry-developers/foundry-vtt-types/src/foundry/client-esm/dice/terms/term.mjs'

export class MerpRoll extends foundry.dice.Roll {
  /**
   * Instantiate the nodes in an AST sub-tree into RollTerm instances.
   * @param {RollParseNode} ast  The root of the AST sub-tree.
   * @returns {RollTerm[]}
   */
  static override instantiateAST(ast: RollParseNode): RollTerm[] {
    return CONFIG.Dice.parser.flattenTree(ast).map((node) => {
      if (node.class === 'MerpDiceTerm') {
        const { formula } = node
        const dD = MerpDie.fromParseNode(node)
        dD.original = formula
        return dD
      }

      const cls = foundry.dice.terms[node.class] ?? foundry.dice.terms.RollTerm
      return cls.fromParseNode(node)
    })
  }
}
