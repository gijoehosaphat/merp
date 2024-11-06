export class MerpItemSheet extends ItemSheet {
  override get template() {
    return `systems/merp/templates/items/item-${this.item.type}-sheet.hbs`
  }

  override getData() {
    const context = super.getData()

    const itemData = this.document.toObject(false)

    return {
      ...context,
      system: itemData.system,
      flags: itemData.flags,
      config: CONFIG.MERP,
      // effects: prepareActiveEffectCategories(this.item.effects)
    }
  }
}
