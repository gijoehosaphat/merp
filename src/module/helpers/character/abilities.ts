import { ProfessionDetails } from './professions'

export enum Ability {
  strength = 'strength',
  agility = 'agility',
  constitution = 'constitution',
  intelligence = 'intelligence',
  intuition = 'intuition',
  presence = 'presence',
}

export function getStatBonus(stat: number): number {
  return getStatBonuses(stat)?.bonus || 0
}

export function getStatPowerPoints(
  professionDetails: ProfessionDetails,
  actorData: any
): number {
  let total = 0
  professionDetails?.primaryStats?.forEach((stat) => {
    total += getStatBonuses(actorData.system.abilities[stat])?.powerPoints || 0
  })

  if (total) {
    return (
      Math.round(total / professionDetails?.primaryStats.length) *
      actorData.system.special.currentLevel
    )
  } else {
    return total
  }
}

function getStatBonuses(stat: number = 0) {
  if (stat >= 102) {
    return {
      bonus: 35,
      powerPoints: 4,
    }
  } else if (stat === 101) {
    return {
      bonus: 30,
      powerPoints: 3,
    }
  } else if (stat === 100) {
    return {
      bonus: 25,
      powerPoints: 3,
    }
  } else if (stat >= 98 && stat <= 99) {
    return {
      bonus: 20,
      powerPoints: 2,
    }
  } else if (stat >= 95 && stat <= 97) {
    return {
      bonus: 15,
      powerPoints: 2,
    }
  } else if (stat >= 90 && stat <= 94) {
    return {
      bonus: 10,
      powerPoints: 1,
    }
  } else if (stat >= 75 && stat <= 89) {
    return {
      bonus: 5,
      powerPoints: 1,
    }
  } else if (stat >= 25 && stat <= 74) {
    return {
      bonus: 0,
      powerPoints: 0,
    }
  } else if (stat >= 10 && stat <= 24) {
    return {
      bonus: -5,
      powerPoints: 0,
    }
  } else if (stat >= 5 && stat <= 9) {
    return {
      bonus: -10,
      powerPoints: 0,
    }
  } else if (stat >= 3 && stat <= 4) {
    return {
      bonus: -15,
      powerPoints: 0,
    }
  } else if (stat === 2) {
    return {
      bonus: -20,
      powerPoints: 0,
    }
  } else {
    return {
      bonus: -25,
      powerPoints: 0,
    }
  }
}
