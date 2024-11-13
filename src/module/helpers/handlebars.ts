Handlebars.registerHelper(
  'renderRanks',
  function (rank: number, maximumRank: number, rankValue: 5 | 2 | 1) {
    maximumRank = maximumRank || 20
    rank = Math.max(rank, 0)
    let totalboxes = Math.min(maximumRank, 5)
    if (rankValue === 5) {
      rank = Math.min(rank, 10)
      totalboxes = Math.min(maximumRank, 10)
    } else if (rankValue === 2) {
      rank = Math.max(Math.min(rank - 10, 5), 0)
      totalboxes = Math.min(maximumRank - 10, 5)
    } else {
      rank = Math.max(Math.min(rank - 15, 5), 0)
      totalboxes = Math.min(maximumRank - 15, 5)
    }

    const boxes = []
    for (let i = 0; i < totalboxes; i++) {
      if (i < rank) {
        boxes.push('<li class="filled" />')
      } else {
        boxes.push('<li />')
      }
    }
    return new Handlebars.SafeString(`
      <ul class="ranks">
        ${boxes.join('')}
      </ul>
    `)
  }
)

Handlebars.registerHelper('check', function (value, comparator) {
  return value === comparator ? 'No content' : value
})

Handlebars.registerHelper('rollType', function (rollTypes: string[]) {
  if (rollTypes.length === 1) {
    return new Handlebars.SafeString(
      `<span class="sheetStat">${game.i18n?.localize(rollTypes[0])}</span>`
    )
  } else {
    return new Handlebars.SafeString(
      `<span class="sheetStat sheetStatDouble">${game.i18n?.localize(
        rollTypes[0]
      )} ${game.i18n?.localize(rollTypes[1])}</span>`
    )
  }
})

Handlebars.registerHelper(
  'skillEditor',
  function (groupType: string, skillType: string, rank: number) {
    return new Handlebars.SafeString(`
      <div class="skillEditor">
        <button class="skillEditorIncrement" data-dtype="Number" data-field="system.skills.${groupType}.${skillType}" data-rank="${rank}" data-change="1">+</button>
        <button class="skillEditorIncrement" data-dtype="Number" data-field="system.skills.${groupType}.${skillType}" data-rank="${rank}" data-change="-1">-</button>
      </div>
      
    `)
  }
)

// <input
//         type="hidden"
//         name="system.skills.${groupType}.${skillType}"
//         min="0"
//         max="20"
//         value="${rank}"
//         data-dtype="Number"
//       />
