import { Ability, getStatPowerPoints } from '../character/abilities'
import {
  calculateEncumbrancePenalty,
  calculateWeightModifier,
} from '../character/encumbrance'
import { Profession, professions } from '../character/professions'
import { races, RaceType } from '../character/races'
import { getSkills } from '../character/skills'
import { getAbilityBonuses } from '../lib'

export function getSheet(actorData: any) {
  const race = actorData.system.details.race as RaceType
  const profession = actorData.system.details.profession as Profession
  const professionDetails = professions[profession]
  const raceBonus = race
    ? races[race]
    : {
        strength: 0,
        agility: 0,
        constitution: 0,
        intelligence: 0,
        intuition: 0,
        presence: 0,
        essence: 0,
        channeling: 0,
        mentalism: 0,
        poison: 0,
        disease: 0,
      }

  const strength = getAbilityBonuses(actorData, Ability.strength)
  const agility = getAbilityBonuses(actorData, Ability.agility)
  const constitution = getAbilityBonuses(actorData, Ability.constitution)
  const intelligence = getAbilityBonuses(actorData, Ability.intelligence)
  const intuition = getAbilityBonuses(actorData, Ability.intuition)
  const presence = getAbilityBonuses(actorData, Ability.presence)

  return {
    abilities: {
      strength,
      agility,
      constitution,
      intelligence,
      intuition,
      presence,
      appearence: {
        name: `character.ability.appearence.long`,
        abbr: `character.ability.appearence.abbr`,
        total:
          getAbilityBonuses(actorData, Ability.presence).total +
          actorData.system.abilities.appearence,
      },
    },
    special: {
      powerPoints: getStatPowerPoints(professionDetails, actorData),
      defensiveBonus: {
        statBonus: agility.total,
        itemBonus: actorData.system.special.shield ? 25 : 0,
        specialBonus: 0,
        totalBonus: agility.total + (actorData.system.special.shield ? 25 : 0),
      },
      channelingRR: {
        statBonus: intuition.total,
        itemBonus: 0,
        specialBonus: raceBonus.channeling,
        totalBonus: intuition.total + raceBonus.channeling,
      },
      essenceRR: {
        statBonus: intelligence.total,
        itemBonus: 0,
        specialBonus: raceBonus.essence,
        totalBonus: intelligence.total + raceBonus.essence,
      },
      mentalismRR: {
        statBonus: presence.total,
        itemBonus: 0,
        specialBonus: raceBonus.mentalism,
        totalBonus: presence.total + raceBonus.mentalism,
      },
      poisonRR: {
        statBonus: constitution.total,
        itemBonus: 0,
        specialBonus: raceBonus.poison,
        totalBonus: constitution.total + raceBonus.poison,
      },
      diseaseRR: {
        statBonus: constitution.total,
        itemBonus: 0,
        specialBonus: raceBonus.disease,
        totalBonus: constitution.total + raceBonus.disease,
      },
    },
    encumbrance: getEncumbrance(actorData, strength.total),
    itemsArmor: getArmor(actorData),
    itemsWeapons: getWeapon(actorData),
    skills: getSkills(actorData, professionDetails),
  }
}

function getArmor(actorData: any) {
  let itemSelect: { [key: string]: string } = {}
  const items = actorData.items.filter((item: any) => item.type === 'armor')

  items.forEach((item: any) => {
    itemSelect[item._id] = item.name
  })

  return itemSelect
}

function getWeapon(actorData: any) {
  let itemSelect: { [key: string]: string } = {}
  const items = actorData.items.filter((item: any) => item.type === 'weapon')

  items.forEach((item: any) => {
    itemSelect[item._id] = item.name
  })

  return itemSelect
}

function getEncumbrance(actorData: any, statBonus: number) {
  const weight = actorData.system.details.weight
  const totalItemWeight = actorData.items.reduce(
    (total: number, item: any) => total + item.system.weight,
    0
  )

  const weightModifier = calculateWeightModifier(weight, totalItemWeight)
  const encumbrancePenalty = calculateEncumbrancePenalty(
    statBonus,
    weightModifier
  )

  return {
    encumbrancePenalty,
    statBonus,
    weightModifier,
  }
}
