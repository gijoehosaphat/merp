declare global {
  interface CONFIG {
    MERP: typeof MERP
  }
}

export const MERP = {
  criticalTypes: {
    heat: 'MERP.criticalTypes.heat',
    cold: 'MERP.criticalTypes.cold',
    electricity: 'MERP.criticalTypes.electricity',
    impact: 'MERP.criticalTypes.impact',
    crush: 'MERP.criticalTypes.crush',
    slash: 'MERP.criticalTypes.slash',
    puncture: 'MERP.criticalTypes.puncture',
    unbalancing: 'MERP.criticalTypes.unbalancing',
    grappling: 'MERP.criticalTypes.grappling',
    largeCreaturePhysical: 'MERP.criticalTypes.largeCreaturePhysical',
    largeCreatureSpell: 'MERP.criticalTypes.largeCreatureSpell',
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
    oneHandedEdged: 'MERP.weaponSkills.oneHandedEdged',
    oneHandedConcussion: 'MERP.weaponSkills.oneHandedConcussion',
    twoHanded: 'MERP.weaponSkills.twoHanded',
    thrown: 'MERP.weaponSkills.thrown',
    missile: 'MERP.weaponSkills.missile',
    poleArms: 'MERP.weaponSkills.poleArms',
  },
}
