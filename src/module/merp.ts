import { MERP } from './helpers/config'
import { MerpActor } from './documents/actor'
import { MerpItemSheet } from './sheets/item-sheet'
import { MerpActorSheet } from './sheets/actor-sheet'

import { preloadHandlebarsTemplates } from './helpers/templates'

import './helpers/handlebars'
// import { MerpRollParser } from '@src/lib/MerpRollParser'
// import { MerpDie } from '@src/lib/MerpDie'
// import { MerpRoll } from '@src/lib/MerpRoll'

Hooks.once('init', function () {
  console.info('Initializing MERP System.')
  // game['merp'] = 'dude'
  // {
  //   // MerpActor,
  // }

  CONFIG.debug.hooks = process.env.DEBUG_HOOKS === 'true' || false
  CONFIG.MERP = MERP
  CONFIG.Actor.documentClass = MerpActor

  // Make the parser recognise and construct a MySystemDie
  // CONFIG.Dice.parser = MerpRollParser
  // CONFIG.Dice.rolls = [MerpRoll]

  // if (!('l' in CONFIG.Dice.terms)) {
  //   CONFIG.Dice.terms.l = MerpDie
  // }

  console.log(CONFIG)
  // console.log('methods', CONFIG.Dice.fulfillment.methods)

  preloadHandlebarsTemplates()

  Actors.unregisterSheet('core', ActorSheet)
  Items.unregisterSheet('core', ItemSheet)

  Actors.registerSheet('actor', MerpActorSheet, { makeDefault: true })
  Items.registerSheet('item', MerpItemSheet, { makeDefault: true })
})
