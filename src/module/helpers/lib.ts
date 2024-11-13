import { type Ability, getStatBonus } from './character/abilities'
import { races, type RaceType } from './character/races'

export function getAbilityBonuses(actorData: any, ability: Ability) {
  const normalBonus = getStatBonus(actorData?.system?.abilities?.[ability] || 0)
  const race = actorData?.system?.details?.race as RaceType
  const raceBonus = race ? races[race][ability] : 0
  return {
    name: `character.ability.${ability}.long`,
    abbr: `character.ability.${ability}.abbr`,
    normal: normalBonus,
    race: raceBonus,
    total: normalBonus + raceBonus,
  }
}
