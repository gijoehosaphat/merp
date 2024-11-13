export class MerpActor extends Actor {
  override prepareData() {
    // Prepare data for the actor. Calling the super version of this executes
    // the following, in order: data reset (to clear active effects),
    // prepareBaseData(), prepareEmbeddedDocuments() (including active effects),
    // prepareDerivedData().
    super.prepareData()
  }

  override prepareBaseData() {
    // Data modifications in this step occur before processing embedded
    // documents or derived data.
  }

  override prepareDerivedData() {
    // const actorData = this
    // const flags = actorData.flags.boilerplate || {}
  }

  // override getRollData() {
  //   return super.getRollData()
  //   // return { ...super.getRollData(), ...(this.system.getRollData?.() ?? null) }
  // }

  toPlainObject(): Object {
    const result = { ...this }
    // console.log('system', this.system)
    // Simplify system data.
    // result.system = this.system.toPlainObject()

    // Add items.
    // result.items = this.items?.size > 0 ? this.items.contents : []

    // Add effects.
    // result.effects = this.effects?.size > 0 ? this.effects.contents : []

    return result
  }
}
