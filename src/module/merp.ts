import { MERP } from './helpers/config'
import { MerpItemSheet } from './sheets/item-sheet'
import { MerpActorSheet } from './sheets/actor-sheet'

import { preloadHandlebarsTemplates } from './helpers/templates'

Hooks.once('init', function () {
  CONFIG.debug.hooks = process.env.DEBUG_HOOKS === 'true' || false
  CONFIG.MERP = MERP

  console.log('Initializing MERP System.')

  Actors.unregisterSheet('core', ActorSheet)
  Actors.registerSheet('actor', MerpActorSheet, { makeDefault: true })

  Items.unregisterSheet('core', ItemSheet)
  Items.registerSheet('item', MerpItemSheet, { makeDefault: true })

  return preloadHandlebarsTemplates()
})
