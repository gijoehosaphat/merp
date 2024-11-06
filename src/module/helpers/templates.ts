export const preloadHandlebarsTemplates = async function (): Promise<
  Handlebars.TemplateDelegate[]
> {
  return loadTemplates([
    // Actor partials.
    'systems/merp/templates/actors/partials/actor-skills.hbs',
    // // Item partials
    // 'systems/merp/templates/item/parts/item-effects.hbs',
  ])
}
