import { genderSelect } from './character/genders'
import { languages } from './character/languages'
import { professionSelect } from './character/professions'
import { races, raceSelect } from './character/races'
import { realmSelect } from './character/realms'
import { skills } from './character/skills'

declare global {
  interface CONFIG {
    MERP: typeof MERP
  }
}

export const MERP = {
  criticalTypes: {
    heat: 'criticalTypes.heat',
    cold: 'criticalTypes.cold',
    electricity: 'criticalTypes.electricity',
    impact: 'criticalTypes.impact',
    crush: 'criticalTypes.crush',
    slash: 'criticalTypes.slash',
    puncture: 'criticalTypes.puncture',
    unbalancing: 'criticalTypes.unbalancing',
    grappling: 'criticalTypes.grappling',
    largeCreaturePhysical: 'criticalTypes.largeCreaturePhysical',
    largeCreatureSpell: 'criticalTypes.largeCreatureSpell',
  },
  criticalLevels: {
    t: 'T',
    a: 'A',
    b: 'B',
    c: 'C',
    d: 'D',
    e: 'E',
  },
  weaponTypes: {
    oneHandedEdged: 'character.weaponSkills.oneHandedEdged',
    oneHandedConcussion: 'character.weaponSkills.oneHandedConcussion',
    twoHanded: 'character.weaponSkills.twoHanded',
    thrown: 'character.weaponSkills.thrown',
    missile: 'character.weaponSkills.missile',
    poleArms: 'character.weaponSkills.poleArms',
  },
  skills,
  languages,
  races,
  raceSelect,
  realmSelect,
  genderSelect,
  professionSelect,
}
