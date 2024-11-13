import { getAbilityBonuses } from '../lib'
import { Ability } from './abilities'
import { ProfessionDetails } from './professions'

interface Stat {
  type: Ability
  name: string
  value: number
}

export enum SkillType {
  noArmor = 'noArmor',
  softLeather = 'softLeather',
  rigidLeather = 'rigidLeather',
  chain = 'chain',
  plate = 'plate',
  oneHandedEdged = 'oneHandedEdged',
  oneHandedEdgedOffHand = 'oneHandedEdgedOffHand',
  oneHandedConcussion = 'oneHandedConcussion',
  oneHandedConcussionOffHand = 'oneHandedConcussionOffHand',
  twoHanded = 'twoHanded',
  thrown = 'thrown',
  missile = 'missile',
  poleArms = 'poleArms',
  noviceStrike = 'noviceStrike',
  standardStrike = 'standardStrike',
  expertStrike = 'expertStrike',
  noviceSweep = 'noviceSweep',
  standardSweep = 'standardSweep',
  expertSweep = 'expertSweep',
  adrenalDefense = 'adrenalDefense',
  climb = 'climb',
  ride = 'ride',
  swim = 'swim',
  track = 'track',
  ambush = 'ambush',
  stalkHide = 'stalkHide',
  pickLock = 'pickLock',
  disarmTrap = 'disarmTrap',
  readRune = 'readRune',
  useItem = 'useItem',
  directedSpells = 'directedSpells',
  shapeChange = 'shapeChange',
  perception = 'perception',
  bodyDevelopment = 'bodyDevelopment',
  baseSpellOB = 'baseSpellOB',
  leadershipAndInfluence = 'leadershipAndInfluence',
}

export enum SkillGroupType {
  movementAndManeuver = 'movementAndManeuver',
  weaponSkills = 'weaponSkills',
  martialArts = 'martialArts',
  generalSkills = 'generalSkills',
  subterfugeSkills = 'subterfugeSkills',
  magicalSkills = 'magicalSkills',
  shapeShifting = 'shapeShifting',
  miscellaneousSkills = 'miscellaneousSkills',
  secondarySkills = 'secondarySkills',
}

export interface Skill {
  type: SkillType
  name: string
  stat: Stat | null
  rank: number | null
  rankBonus: number | null
  maximumRank: number | null
  professionBonus: number | null
  itemBonus: number | null
  specialBonus1: number | null
  specialBonus2: number | null
  totalBonusTypes: string[]
  total: number
}

export function getRankBonus(rank: number) {
  if (rank <= 0) {
    return -25
  } else if (rank <= 10) {
    return rank * 5
  } else if (rank <= 15) {
    return 50 + (rank - 10) * 4
  } else {
    return 70 + (rank - 15)
  }
}

interface SheetSkillGroups {
  type: SkillGroupType
  name: string
  skills: Skill[]
}

export const skills: SheetSkillGroups[] = [
  {
    type: SkillGroupType.movementAndManeuver,
    name: 'character.categoryNames.movementAndManeuver',
    skills: [
      {
        type: SkillType.noArmor,
        name: 'character.skills.noArmor',
        rank: 0,
        rankBonus: 0,
        maximumRank: 2,
        stat: {
          type: Ability.agility,
          name: 'character.ability.agility.abbr',
          value: 0,
        },
        professionBonus: 0,
        itemBonus: 0,
        specialBonus1: 0,
        specialBonus2: 0,
        totalBonusTypes: ['character.rollType.mm'],
        total: 0,
      },
      {
        type: SkillType.softLeather,
        name: 'character.skills.softLeather',
        rank: 0,
        rankBonus: 0,
        maximumRank: 3,
        stat: {
          type: Ability.agility,
          name: 'character.ability.agility.abbr',
          value: 0,
        },
        professionBonus: 0,
        itemBonus: 0,
        specialBonus1: 0,
        specialBonus2: -15,
        totalBonusTypes: ['character.rollType.mm'],
        total: 0,
      },
      {
        type: SkillType.rigidLeather,
        name: 'character.skills.rigidLeather',
        rank: 0,
        rankBonus: 0,
        maximumRank: 5,
        stat: {
          type: Ability.agility,
          name: 'character.ability.agility.abbr',
          value: 0,
        },
        professionBonus: 0,
        itemBonus: 0,
        specialBonus1: 0,
        specialBonus2: -30,
        totalBonusTypes: ['character.rollType.mm'],
        total: 0,
      },
      {
        type: SkillType.chain,
        name: 'character.skills.chain',
        rank: 0,
        rankBonus: 0,
        maximumRank: 7,
        stat: {
          type: Ability.strength,
          name: 'character.ability.strength.abbr',
          value: 0,
        },
        professionBonus: 0,
        itemBonus: 0,
        specialBonus1: 0,
        specialBonus2: -45,
        totalBonusTypes: ['character.rollType.mm'],
        total: 0,
      },
      {
        type: SkillType.plate,
        name: 'character.skills.plate',
        rank: 0,
        rankBonus: 0,
        maximumRank: 9,
        stat: {
          type: Ability.strength,
          name: 'character.ability.strength.abbr',
          value: 0,
        },
        professionBonus: 0,
        itemBonus: 0,
        specialBonus1: 0,
        specialBonus2: -60,
        totalBonusTypes: ['character.rollType.mm'],
        total: 0,
      },
    ],
  },
  {
    type: SkillGroupType.weaponSkills,
    name: 'character.categoryNames.weaponSkills',
    skills: [
      {
        type: SkillType.oneHandedEdged,
        name: 'character.skills.oneHandedEdged',
        rank: 0,
        rankBonus: 0,
        maximumRank: null,
        stat: {
          type: Ability.strength,
          name: 'character.ability.strength.abbr',
          value: 0,
        },
        professionBonus: 0,
        itemBonus: 0,
        specialBonus1: 0,
        specialBonus2: 0,
        totalBonusTypes: ['character.rollType.ob'],
        total: 0,
      },
      {
        type: SkillType.oneHandedEdgedOffHand,
        name: 'character.skills.oneHandedEdgedOffHand',
        rank: 0,
        rankBonus: 0,
        maximumRank: null,
        stat: {
          type: Ability.strength,
          name: 'character.ability.strength.abbr',
          value: 0,
        },
        professionBonus: 0,
        itemBonus: 0,
        specialBonus1: 0,
        specialBonus2: -20,
        totalBonusTypes: ['character.rollType.ob'],
        total: 0,
      },
      {
        type: SkillType.oneHandedConcussion,
        name: 'character.skills.oneHandedConcussion',
        rank: 0,
        rankBonus: 0,
        maximumRank: null,
        stat: {
          type: Ability.strength,
          name: 'character.ability.strength.abbr',
          value: 0,
        },
        professionBonus: 0,
        itemBonus: 0,
        specialBonus1: 0,
        specialBonus2: 0,
        totalBonusTypes: ['character.rollType.ob'],
        total: 0,
      },
      {
        type: SkillType.oneHandedConcussionOffHand,
        name: 'character.skills.oneHandedConcussionOffHand',
        rank: 0,
        rankBonus: 0,
        maximumRank: null,
        stat: {
          type: Ability.strength,
          name: 'character.ability.strength.abbr',
          value: 0,
        },
        professionBonus: 0,
        itemBonus: 0,
        specialBonus1: 0,
        specialBonus2: -20,
        totalBonusTypes: ['character.rollType.ob'],
        total: 0,
      },
      {
        type: SkillType.twoHanded,
        name: 'character.skills.twoHanded',
        rank: 0,
        rankBonus: 0,
        maximumRank: null,
        stat: {
          type: Ability.strength,
          name: 'character.ability.strength.abbr',
          value: 0,
        },
        professionBonus: 0,
        itemBonus: 0,
        specialBonus1: 0,
        specialBonus2: 0,
        totalBonusTypes: ['character.rollType.ob'],
        total: 0,
      },
      {
        type: SkillType.thrown,
        name: 'character.skills.thrown',
        rank: 0,
        rankBonus: 0,
        maximumRank: null,
        stat: {
          type: Ability.agility,
          name: 'character.ability.agility.abbr',
          value: 0,
        },
        professionBonus: 0,
        itemBonus: 0,
        specialBonus1: 0,
        specialBonus2: 0,
        totalBonusTypes: ['character.rollType.ob'],
        total: 0,
      },
      {
        type: SkillType.missile,
        name: 'character.skills.missile',
        rank: 0,
        rankBonus: 0,
        maximumRank: null,
        stat: {
          type: Ability.agility,
          name: 'character.ability.agility.abbr',
          value: 0,
        },
        professionBonus: 0,
        itemBonus: 0,
        specialBonus1: 0,
        specialBonus2: 0,
        totalBonusTypes: ['character.rollType.ob'],
        total: 0,
      },
      {
        type: SkillType.poleArms,
        name: 'character.skills.poleArms',
        rank: 0,
        rankBonus: 0,
        maximumRank: null,
        stat: {
          type: Ability.strength,
          name: 'character.ability.strength.abbr',
          value: 0,
        },
        professionBonus: 0,
        itemBonus: 0,
        specialBonus1: 0,
        specialBonus2: 0,
        totalBonusTypes: ['character.rollType.ob'],
        total: 0,
      },
    ],
  },
  {
    type: SkillGroupType.martialArts,
    name: 'character.categoryNames.martialArts',
    skills: [
      {
        type: SkillType.noviceStrike,
        name: 'character.skills.noviceStrike',
        rank: 0,
        rankBonus: 0,
        maximumRank: null,
        stat: {
          type: Ability.strength,
          name: 'character.ability.strength.abbr',
          value: 0,
        },
        professionBonus: 0,
        itemBonus: 0,
        specialBonus1: 0,
        specialBonus2: -20,
        totalBonusTypes: ['character.rollType.ob'],
        total: 0,
      },
      {
        type: SkillType.standardStrike,
        name: 'character.skills.standardStrike',
        rank: 0,
        rankBonus: 0,
        maximumRank: null,
        stat: {
          type: Ability.strength,
          name: 'character.ability.strength.abbr',
          value: 0,
        },
        professionBonus: 0,
        itemBonus: 0,
        specialBonus1: 0,
        specialBonus2: -20,
        totalBonusTypes: ['character.rollType.ob'],
        total: 0,
      },
      {
        type: SkillType.expertStrike,
        name: 'character.skills.expertStrike',
        rank: 0,
        rankBonus: 0,
        maximumRank: null,
        stat: {
          type: Ability.strength,
          name: 'character.ability.strength.abbr',
          value: 0,
        },
        professionBonus: 0,
        itemBonus: 0,
        specialBonus1: 0,
        specialBonus2: -20,
        totalBonusTypes: ['character.rollType.ob'],
        total: 0,
      },
      {
        type: SkillType.noviceSweep,
        name: 'character.skills.noviceSweep',
        rank: 0,
        rankBonus: 0,
        maximumRank: null,
        stat: {
          type: Ability.agility,
          name: 'character.ability.agility.abbr',
          value: 0,
        },
        professionBonus: 0,
        itemBonus: 0,
        specialBonus1: 0,
        specialBonus2: -20,
        totalBonusTypes: ['character.rollType.ob'],
        total: 0,
      },
      {
        type: SkillType.standardSweep,
        name: 'character.skills.standardSweep',
        rank: 0,
        rankBonus: 0,
        maximumRank: null,
        stat: {
          type: Ability.agility,
          name: 'character.ability.agility.abbr',
          value: 0,
        },
        professionBonus: 0,
        itemBonus: 0,
        specialBonus1: 0,
        specialBonus2: -20,
        totalBonusTypes: ['character.rollType.ob'],
        total: 0,
      },
      {
        type: SkillType.expertSweep,
        name: 'character.skills.expertSweep',
        rank: 0,
        rankBonus: 0,
        maximumRank: null,
        stat: {
          type: Ability.agility,
          name: 'character.ability.agility.abbr',
          value: 0,
        },
        professionBonus: 0,
        itemBonus: 0,
        specialBonus1: 0,
        specialBonus2: -20,
        totalBonusTypes: ['character.rollType.ob'],
        total: 0,
      },
      {
        type: SkillType.adrenalDefense,
        name: 'character.skills.adrenalDefense',
        rank: 0,
        rankBonus: 0,
        maximumRank: null,
        stat: null,
        professionBonus: null,
        itemBonus: null,
        specialBonus1: null,
        specialBonus2: null,
        totalBonusTypes: ['character.rollType.db'],
        total: 0,
      },
    ],
  },
  {
    type: SkillGroupType.generalSkills,
    name: 'character.categoryNames.generalSkills',
    skills: [
      {
        type: SkillType.climb,
        name: 'character.skills.climb',
        rank: 0,
        rankBonus: 0,
        maximumRank: null,
        stat: {
          type: Ability.agility,
          name: 'character.ability.agility.abbr',
          value: 0,
        },
        professionBonus: 0,
        itemBonus: 0,
        specialBonus1: 0,
        specialBonus2: 0,
        totalBonusTypes: ['character.rollType.mm'],
        total: 0,
      },
      {
        type: SkillType.ride,
        name: 'character.skills.ride',
        rank: 0,
        rankBonus: 0,
        maximumRank: null,
        stat: {
          type: Ability.intuition,
          name: 'character.ability.intuition.abbr',
          value: 0,
        },
        professionBonus: 0,
        itemBonus: 0,
        specialBonus1: 0,
        specialBonus2: 0,
        totalBonusTypes: ['character.rollType.mm'],
        total: 0,
      },
      {
        type: SkillType.swim,
        name: 'character.skills.swim',
        rank: 0,
        rankBonus: 0,
        maximumRank: null,
        stat: {
          type: Ability.agility,
          name: 'character.ability.agility.abbr',
          value: 0,
        },
        professionBonus: 0,
        itemBonus: 0,
        specialBonus1: 0,
        specialBonus2: 0,
        totalBonusTypes: ['character.rollType.mm'],
        total: 0,
      },
      {
        type: SkillType.track,
        name: 'character.skills.track',
        rank: 0,
        rankBonus: 0,
        maximumRank: null,
        stat: {
          type: Ability.intelligence,
          name: 'character.ability.intelligence.abbr',
          value: 0,
        },
        professionBonus: 0,
        itemBonus: 0,
        specialBonus1: 0,
        specialBonus2: 0,
        totalBonusTypes: ['character.rollType.sm'],
        total: 0,
      },
    ],
  },
  {
    type: SkillGroupType.subterfugeSkills,
    name: 'character.categoryNames.subterfugeSkills',
    skills: [
      {
        type: SkillType.ambush,
        name: 'character.skills.ambush',
        rank: 0,
        rankBonus: 0,
        maximumRank: null,
        stat: null,
        professionBonus: null,
        itemBonus: null,
        specialBonus1: 0,
        specialBonus2: 0,
        totalBonusTypes: ['character.rollType.sp'],
        total: 0,
      },
      {
        type: SkillType.stalkHide,
        name: 'character.skills.stalkHide',
        rank: 0,
        rankBonus: 0,
        maximumRank: null,
        stat: {
          type: Ability.agility,
          name: 'character.ability.agility.abbr',
          value: 0,
        },
        professionBonus: 0,
        itemBonus: 0,
        specialBonus1: 0,
        specialBonus2: 0,
        totalBonusTypes: ['character.rollType.mm', 'character.rollType.sm'],
        total: 0,
      },
      {
        type: SkillType.pickLock,
        name: 'character.skills.pickLock',
        rank: 0,
        rankBonus: 0,
        maximumRank: null,
        stat: {
          type: Ability.agility,
          name: 'character.ability.agility.abbr',
          value: 0,
        },
        professionBonus: 0,
        itemBonus: 0,
        specialBonus1: 0,
        specialBonus2: 0,
        totalBonusTypes: ['character.rollType.sm'],
        total: 0,
      },
      {
        type: SkillType.disarmTrap,
        name: 'character.skills.disarmTrap',
        rank: 0,
        rankBonus: 0,
        maximumRank: null,
        stat: {
          type: Ability.intuition,
          name: 'character.ability.intuition.abbr',
          value: 0,
        },
        professionBonus: 0,
        itemBonus: 0,
        specialBonus1: 0,
        specialBonus2: 0,
        totalBonusTypes: ['character.rollType.sm'],
        total: 0,
      },
    ],
  },
  {
    type: SkillGroupType.magicalSkills,
    name: 'character.categoryNames.magicalSkills',
    skills: [
      {
        type: SkillType.readRune,
        name: 'character.skills.readRune',
        rank: 0,
        rankBonus: 0,
        maximumRank: null,
        stat: {
          type: Ability.intuition,
          name: 'character.ability.intuition.abbr',
          value: 0,
        },
        professionBonus: 0,
        itemBonus: 0,
        specialBonus1: 0,
        specialBonus2: 0,
        totalBonusTypes: ['character.rollType.sm'],
        total: 0,
      },
      {
        type: SkillType.useItem,
        name: 'character.skills.useItem',
        rank: 0,
        rankBonus: 0,
        maximumRank: null,
        stat: {
          type: Ability.intuition,
          name: 'character.ability.intuition.abbr',
          value: 0,
        },
        professionBonus: 0,
        itemBonus: 0,
        specialBonus1: 0,
        specialBonus2: 0,
        totalBonusTypes: ['character.rollType.sm'],
        total: 0,
      },
      {
        type: SkillType.directedSpells,
        name: 'character.skills.directedSpells',
        rank: 0,
        rankBonus: 0,
        maximumRank: null,
        stat: {
          type: Ability.intuition,
          name: 'character.ability.intuition.abbr',
          value: 0,
        },
        professionBonus: 0,
        itemBonus: 0,
        specialBonus1: 0,
        specialBonus2: 0,
        totalBonusTypes: ['character.rollType.ob'],
        total: 0,
      },
    ],
  },
  {
    type: SkillGroupType.shapeShifting,
    name: 'character.categoryNames.shapeShifting',
    skills: [
      {
        type: SkillType.shapeChange,
        name: 'character.skills.shapeShifting',
        rank: 0,
        rankBonus: 0,
        maximumRank: null,
        stat: {
          type: Ability.presence,
          name: 'character.ability.presence.abbr',
          value: 0,
        },
        professionBonus: null,
        itemBonus: null,
        specialBonus1: null,
        specialBonus2: null,
        totalBonusTypes: ['character.rollType.db'],
        total: 0,
      },
    ],
  },
  {
    type: SkillGroupType.miscellaneousSkills,
    name: 'character.categoryNames.miscellaneousSkills',
    skills: [
      {
        type: SkillType.perception,
        name: 'character.skills.perception',
        rank: 0,
        rankBonus: 0,
        maximumRank: null,
        stat: {
          type: Ability.intuition,
          name: 'character.ability.intuition.abbr',
          value: 0,
        },
        professionBonus: 0,
        itemBonus: 0,
        specialBonus1: 0,
        specialBonus2: 0,
        totalBonusTypes: ['character.rollType.sm'],
        total: 0,
      },
      {
        type: SkillType.bodyDevelopment,
        name: 'character.skills.bodyDevelopment',
        rank: 0,
        rankBonus: 0,
        maximumRank: null,
        stat: {
          type: Ability.constitution,
          name: 'character.ability.constitution.abbr',
          value: 0,
        },
        professionBonus: 0,
        itemBonus: 0,
        specialBonus1: 0,
        specialBonus2: 5,
        totalBonusTypes: ['character.rollType.sp'],
        total: 0,
      },
      {
        type: SkillType.baseSpellOB,
        name: 'character.skills.baseSpellOB',
        rank: 0,
        rankBonus: null,
        maximumRank: null,
        stat: null,
        professionBonus: 0,
        itemBonus: 0,
        specialBonus1: 0,
        specialBonus2: 0,
        totalBonusTypes: ['character.rollType.ob'],
        total: 0,
      },
      {
        type: SkillType.leadershipAndInfluence,
        name: 'character.skills.leadershipAndInfluence',
        rank: 0,
        rankBonus: null,
        maximumRank: null,
        stat: {
          type: Ability.presence,
          name: 'character.ability.presence.abbr',
          value: 0,
        },
        professionBonus: null,
        itemBonus: 0,
        specialBonus1: 0,
        specialBonus2: 0,
        totalBonusTypes: ['character.rollType.sm'],
        total: 0,
      },
    ],
  },
]

export function getSkills(
  actorData: any,
  professionDetails: ProfessionDetails
) {
  const level = actorData.system.special.currentLevel || 1
  skills.forEach((group) => {
    const groupType = group.type
    group.skills.forEach((skill) => {
      const skillType = skill.type
      const max = skill.maximumRank ? skill.maximumRank : 20

      skill.rank = Math.max(
        0,
        Math.min(max, actorData.system.skills[groupType][skillType])
      )

      if (skill.rankBonus !== null) {
        skill.rankBonus = getRankBonus(
          actorData.system.skills[groupType][skillType]
        )
      }

      if (skill.stat) {
        skill.stat.value = getAbilityBonuses(actorData, skill.stat.type).total
      }

      if (skill.professionBonus !== null) {
        const groupBonus =
          professionDetails?.professionBonuses?.[groupType] || 0
        const skillBonus =
          professionDetails?.professionBonuses?.[skillType] || 0
        skill.professionBonus = Math.max(groupBonus, skillBonus) * level
      }

      skill.total =
        (skill?.rankBonus || 0) +
        (skill?.stat?.value || 0) +
        (skill?.professionBonus || 0) +
        (skill?.itemBonus || 0) +
        (skill?.specialBonus1 || 0) +
        (skill?.specialBonus2 || 0)
    })
  })

  return skills
}
