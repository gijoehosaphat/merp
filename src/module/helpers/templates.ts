export const preloadHandlebarsTemplates = async function (): Promise<
  Handlebars.TemplateDelegate[]
> {
  return loadTemplates([
    // Actor partials.
    'systems/merp/templates/actors/partials/actor-details.hbs',
    'systems/merp/templates/actors/partials/actor-abilities.hbs',
    'systems/merp/templates/actors/partials/actor-special.hbs',
    'systems/merp/templates/actors/partials/actor-spell-lists.hbs',
    'systems/merp/templates/actors/partials/actor-languages.hbs',
    'systems/merp/templates/actors/partials/actor-skills.hbs',
    'systems/merp/templates/actors/partials/actor-skills-row.hbs',
    'systems/merp/templates/actors/partials/actor-items.hbs',
    // // Item partials
    // 'systems/merp/templates/item/parts/item-effects.hbs',
  ])
}
