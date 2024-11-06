// import {
//   onManageActiveEffect,
//   prepareActiveEffectCategories,
// } from '../helpers/effects.mjs';

/**
 * Extend the basic ActorSheet with some very simple modifications
 * @extends {ActorSheet}
 */
export class MerpActorSheet extends ActorSheet {
  /** @override */
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

  /** @override */
  override get template() {
    return `systems/merp/templates/actors/actor-${this.actor.type}-sheet.hbs`
  }

  /* -------------------------------------------- */

  /** @override */
  override getData() {
    // Retrieve the data structure from the base sheet. You can inspect or log
    // the context variable to see the structure, but some key properties for
    // sheets are the actor object, the data object, whether or not it's
    // editable, the items array, and the effects array.
    const context = super.getData()

    const actorData = this.document.toObject(false)

    return {
      ...context,
      system: actorData.system,
      flags: actorData.flags,
      config: CONFIG.MERP,
      // effects: prepareActiveEffectCategories(this.item.effects)
    }
  }
}
