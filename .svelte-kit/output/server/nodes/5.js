export const index = 5;
let component_cache;
export const component = async () =>
  (component_cache ??= (
    await import(
      "../entries/pages/(blog-article)/steamdeck-modded-fallout4/_page.md.js"
    )
  ).default);
export const imports = [
  "_app/immutable/nodes/5.d0451025.js",
  "_app/immutable/chunks/index.c7992fe2.js",
];
export const stylesheets = [];
export const fonts = [];
