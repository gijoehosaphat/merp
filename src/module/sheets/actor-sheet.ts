// import { ActorData } from '@league-of-foundry-developers/foundry-vtt-types/src/foundry/common/documents/_types.mjs'
import { getSheet } from '../helpers/sheet/sheet'

// interface MerpActorData extends ActorData {
//   sheet: any
//   config: any
// }
export class MerpActorSheet extends ActorSheet {
  static override get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      classes: ['sheet', 'actor'],
      width: 1000,
      height: 800,
      tabs: [
        {
          navSelector: '.sheet-tabs',
          contentSelector: '.sheet-body',
          initial: 'skills',
        },
      ],
    })
  }

  override get template() {
    return `systems/merp/templates/actors/actor-${this.actor.type}-sheet.hbs`
  }

  /* -------------------------------------------- */

  override getData() {
    // Retrieve the data structure from the base sheet. You can inspect or log
    // the context variable to see the structure, but some key properties for
    // sheets are the actor object, the data object, whether or not it's
    // editable, the items array, and the effects array.
    const context = super.getData()

    const actorData = this.actor.toObject(false)
    // console.log('actorData', actorData)
    return {
      ...context,
      system: actorData.system,
      flags: actorData.flags,
      config: CONFIG.MERP,
      sheet: getSheet(actorData),
      // effects: prepareActiveEffectCategories(this.item.effects)
    }
  }

  override activateListeners(html: JQuery) {
    super.activateListeners(html)

    // Render the item sheet for viewing/editing prior to the editable check.
    html.on('click', '.item-edit', (ev) => {
      const li = $(ev.currentTarget).parents('.item')
      const item = this.actor.items.get(li.data('itemId'))
      item?.sheet?.render(true)
    })

    // Delete Inventory Item
    html.on('click', '.item-delete', (ev) => {
      const li = $(ev.currentTarget).parents('.item')
      const item = this.actor.items.get(li.data('itemId'))
      item?.delete()
      li.slideUp(200, () => this.render(false))
    })

    // Skill Editor
    html.on('click', '.skillEditorIncrement', (event: JQuery.ClickEvent) => {
      const element = event.currentTarget
      const dataset = element.dataset
      const newRank = Math.min(
        20,
        Math.max(0, Number(dataset.rank) + Number(dataset.change))
      )
      if (!isNaN(newRank)) {
        this.actor.update({ [dataset.field]: newRank })
      }
    })

    // Rollable abilities.
    html.on('click', '.rollable', this._onRoll.bind(this))
  }

  _onRoll(event: JQuery.ClickEvent) {
    event.preventDefault()
    const element = event.currentTarget
    const dataset = element.dataset

    // // Handle item rolls.
    // if (dataset.rollType) {
    //   if (dataset.rollType == 'item') {
    //     const itemId = element.closest('.item').dataset.itemId;
    //     const item = this.actor.items.get(itemId);
    //     if (item) return item.roll();
    //   }
    // }

    // Handle rolls that supply the formula directly.
    if (dataset.roll) {
      let label = dataset.label ? `Skill: ${dataset.label}` : ''
      let roll = new Roll('1d100')

      // let roll = new Roll(dataset.roll)
      roll.toMessage({
        speaker: ChatMessage.getSpeaker({ actor: this.actor }),
        flavor: label,
        rollMode: game.settings?.get('core', 'rollMode'),
      })
      // return roll
    }

    // return null
  }
}

// https://github.com/Cynicide/RMSS-FoundryVTT/blob/develop/rmss/module/sheets/skills/rmss_skill_sheet.js
// foundry.dice.terms.Die
// resources/app
// client-esm/dice

class MerpDie extends foundry.dice.terms.Die {}
