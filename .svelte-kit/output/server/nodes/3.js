export const index = 3;
let component_cache;
export const component = async () =>
  (component_cache ??= (
    await import("../entries/pages/(waves)/_layout.svelte.js")
  ).default);
export const imports = [
  "_app/immutable/nodes/3.6a427a6d.js",
  "_app/immutable/chunks/index.c7992fe2.js",
  "_app/immutable/chunks/Footer.da83f564.js",
  "_app/immutable/chunks/Socials.e586c758.js",
  "_app/immutable/chunks/index.12c3ab83.js",
  "_app/immutable/chunks/meta.b74a4754.js",
];
export const stylesheets = [
  "_app/immutable/assets/3.4c4b0438.css",
  "_app/immutable/assets/Footer.37da215a.css",
  "_app/immutable/assets/Socials.1c0e54d1.css",
];
export const fonts = [];
