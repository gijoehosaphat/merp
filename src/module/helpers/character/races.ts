export enum RaceType {
  hobbit = 'hobbit',
  umli = 'umli',
  dwarf = 'dwarf',
  wose = 'wose',
  man = 'man',
  dunadan = 'dunadan',
  halfElf = 'halfElf',
  silvanElf = 'silvanElf',
  sindaElf = 'sindaElf',
  noldoElf = 'noldoElf',
  halfOrc = 'halfOrc',
  orc = 'orc',
  urukHai = 'urukHai',
  halfTroll = 'halfTroll',
  troll = 'troll',
  ologHai = 'ologHai',
}

export interface Race {
  strength: number
  agility: number
  constitution: number
  intelligence: number
  intuition: number
  presence: number
  essence: number
  channeling: number
  mentalism: number
  poison: number
  disease: number
}

export const raceSelect = {
  hobbit: 'races.hobbit',
  umli: 'races.umli',
  dwarf: 'races.dwarf',
  wose: 'races.wose',
  man: 'races.man',
  dunadan: 'races.dunadan',
  halfElf: 'races.halfElf',
  silvanElf: 'races.silvanElf',
  sindaElf: 'races.sindaElf',
  noldoElf: 'races.noldoElf',
  halfOrc: 'races.halfOrc',
  orc: 'races.orc',
  urukHai: 'races.urukHai',
  halfTroll: 'races.halfTroll',
  troll: 'races.troll',
  ologHai: 'races.ologHai',
}

export const races: { [key in RaceType]: Race } = {
  hobbit: {
    strength: -20,
    agility: 15,
    constitution: 15,
    intelligence: 0,
    intuition: -5,
    presence: -5,
    essence: 50,
    channeling: 20,
    mentalism: 0,
    poison: 30,
    disease: 15,
  },
  umli: {
    strength: 5,
    agility: 0,
    constitution: 10,
    intelligence: 0,
    intuition: -5,
    presence: -5,
    essence: 20,
    channeling: 0,
    mentalism: 0,
    poison: 5,
    disease: 5,
  },
  dwarf: {
    strength: 5,
    agility: -5,
    constitution: 15,
    intelligence: 0,
    intuition: -5,
    presence: -5,
    essence: 40,
    channeling: 0,
    mentalism: 0,
    poison: 10,
    disease: 10,
  },
  wose: {
    strength: 0,
    agility: 0,
    constitution: 5,
    intelligence: 0,
    intuition: 0,
    presence: -5,
    essence: 20,
    channeling: 0,
    mentalism: 0,
    poison: 0,
    disease: 0,
  },
  man: {
    strength: 5,
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
  },
  dunadan: {
    strength: 5,
    agility: 0,
    constitution: 10,
    intelligence: 0,
    intuition: 0,
    presence: 5,
    essence: 0,
    channeling: 0,
    mentalism: 0,
    poison: 5,
    disease: 5,
  },
  halfElf: {
    strength: 5,
    agility: 5,
    constitution: 5,
    intelligence: 0,
    intuition: 0,
    presence: 5,
    essence: 0,
    channeling: 0,
    mentalism: 0,
    poison: 5,
    disease: 50,
  },
  silvanElf: {
    strength: 0,
    agility: 10,
    constitution: 0,
    intelligence: 0,
    intuition: 5,
    presence: 5,
    essence: 0,
    channeling: 0,
    mentalism: 0,
    poison: 10,
    disease: 100,
  },
  sindaElf: {
    strength: 0,
    agility: 10,
    constitution: 5,
    intelligence: 0,
    intuition: 5,
    presence: 10,
    essence: 0,
    channeling: 0,
    mentalism: 0,
    poison: 10,
    disease: 100,
  },
  noldoElf: {
    strength: 0,
    agility: 15,
    constitution: 10,
    intelligence: 5,
    intuition: 5,
    presence: 15,
    essence: 0,
    channeling: 0,
    mentalism: 0,
    poison: 10,
    disease: 100,
  },
  halfOrc: {
    strength: 5,
    agility: 0,
    constitution: 5,
    intelligence: 0,
    intuition: -5,
    presence: -5,
    essence: 0,
    channeling: 0,
    mentalism: 0,
    poison: 10,
    disease: 0,
  },
  orc: {
    strength: 5,
    agility: -5,
    constitution: 15,
    intelligence: -10,
    intuition: -10,
    presence: -10,
    essence: 0,
    channeling: 0,
    mentalism: 0,
    poison: 20,
    disease: 5,
  },
  urukHai: {
    strength: 10,
    agility: 0,
    constitution: 20,
    intelligence: 0,
    intuition: -10,
    presence: -10,
    essence: 0,
    channeling: 0,
    mentalism: 0,
    poison: 20,
    disease: 5,
  },
  halfTroll: {
    strength: 10,
    agility: -5,
    constitution: 10,
    intelligence: -5,
    intuition: -5,
    presence: -5,
    essence: 0,
    channeling: 0,
    mentalism: 0,
    poison: 15,
    disease: 5,
  },
  troll: {
    strength: 15,
    agility: -10,
    constitution: 15,
    intelligence: -15,
    intuition: -10,
    presence: -10,
    essence: 0,
    channeling: 0,
    mentalism: 0,
    poison: 30,
    disease: 10,
  },
  ologHai: {
    strength: 20,
    agility: -5,
    constitution: 15,
    intelligence: -5,
    intuition: -10,
    presence: -10,
    essence: 0,
    channeling: 0,
    mentalism: 0,
    poison: 20,
    disease: 10,
  },
}
