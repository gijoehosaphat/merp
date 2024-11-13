export function calculateEncumbrancePenalty(
  statBonus: number,
  weightModifier: number
) {
  return Math.min(statBonus - weightModifier, 0)
}

export function calculateWeightModifier(
  characterWeight: number,
  totalItemWeight: number
) {
  //TODO: These are based on tables from the game, but if we want to support other measurements we'd need to do some real work.
  let penalty = 0
  if (characterWeight <= 60) {
    penalty = calculateWeightModifierSub(
      totalItemWeight,
      [30, 60, -100, -100, -100, -100, -100, -100, -100]
    )
  } else if (characterWeight >= 61 && characterWeight <= 80) {
    penalty = calculateWeightModifierSub(
      totalItemWeight,
      [20, 35, 60, 80, -100, -100, -100, -100, -100]
    )
  } else if (characterWeight >= 81 && characterWeight <= 100) {
    penalty = calculateWeightModifierSub(
      totalItemWeight,
      [15, 25, 40, 60, -100, -100, -100, -100, -100]
    )
  } else if (characterWeight >= 101 && characterWeight <= 120) {
    penalty = calculateWeightModifierSub(
      totalItemWeight,
      [15, 20, 30, 40, 60, -100, -100, -100, -100]
    )
  } else if (characterWeight >= 121 && characterWeight <= 140) {
    penalty = calculateWeightModifierSub(
      totalItemWeight,
      [10, 15, 25, 35, 40, 60, -100, -100, -100]
    )
  } else if (characterWeight >= 141 && characterWeight <= 160) {
    penalty = calculateWeightModifierSub(
      totalItemWeight,
      [10, 15, 20, 30, 35, 40, 60, -100, -100]
    )
  } else if (characterWeight >= 161 && characterWeight <= 180) {
    penalty = calculateWeightModifierSub(
      totalItemWeight,
      [5, 10, 15, 25, 30, 35, 45, 60, -100]
    )
  } else if (characterWeight >= 181 && characterWeight <= 200) {
    penalty = calculateWeightModifierSub(
      totalItemWeight,
      [5, 10, 15, 20, 25, 30, 35, 50, 60]
    )
  } else if (characterWeight >= 201 && characterWeight <= 220) {
    penalty = calculateWeightModifierSub(
      totalItemWeight,
      [5, 10, 15, 20, 25, 30, 35, 45, 55]
    )
  } else if (characterWeight >= 221 && characterWeight <= 240) {
    penalty = calculateWeightModifierSub(
      totalItemWeight,
      [0, 10, 10, 15, 20, 25, 30, 40, 50]
    )
  } else if (characterWeight >= 241 && characterWeight <= 260) {
    penalty = calculateWeightModifierSub(
      totalItemWeight,
      [0, 10, 10, 15, 20, 25, 30, 35, 45]
    )
  } else if (characterWeight >= 261 && characterWeight <= 280) {
    penalty = calculateWeightModifierSub(
      totalItemWeight,
      [0, 5, 10, 15, 15, 20, 25, 30, 40]
    )
  } else if (characterWeight >= 281 && characterWeight <= 300) {
    penalty = calculateWeightModifierSub(
      totalItemWeight,
      [0, 5, 5, 10, 15, 20, 25, 30, 35]
    )
  } else if (characterWeight >= 301 && characterWeight <= 350) {
    penalty = calculateWeightModifierSub(
      totalItemWeight,
      [0, 0, 5, 10, 10, 20, 25, 25, 35]
    )
  } else if (characterWeight >= 351 && characterWeight <= 400) {
    penalty = calculateWeightModifierSub(
      totalItemWeight,
      [0, 0, 0, 5, 10, 15, 20, 25, 30]
    )
  } else if (characterWeight >= 401) {
    penalty = -100
  }
  return penalty
}

function calculateWeightModifierSub(
  totalItemWeight: number,
  penalties: number[]
) {
  if (totalItemWeight <= 15) {
    return Math.max(0, penalties[0] - 10)
  } else if (totalItemWeight >= 16 && totalItemWeight <= 25) {
    return penalties[0]
  } else if (totalItemWeight >= 26 && totalItemWeight <= 35) {
    return penalties[1]
  } else if (totalItemWeight >= 36 && totalItemWeight <= 45) {
    return penalties[2]
  } else if (totalItemWeight >= 46 && totalItemWeight <= 60) {
    return penalties[3]
  } else if (totalItemWeight >= 61 && totalItemWeight <= 80) {
    return penalties[4]
  } else if (totalItemWeight >= 81 && totalItemWeight <= 100) {
    return penalties[5]
  } else if (totalItemWeight >= 101 && totalItemWeight <= 120) {
    return penalties[6]
  } else if (totalItemWeight >= 121 && totalItemWeight <= 140) {
    return penalties[7]
  } else if (totalItemWeight >= 141 && totalItemWeight <= 160) {
    return penalties[8]
  } else if (totalItemWeight >= 161) {
    return -100
  } else {
    return 0
  }
}
