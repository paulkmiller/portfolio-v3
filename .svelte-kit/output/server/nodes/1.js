

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.3f09bd13.js","_app/immutable/chunks/index.c7992fe2.js","_app/immutable/chunks/Footer.c731f4fb.js","_app/immutable/chunks/Socials.e586c758.js","_app/immutable/chunks/index.12c3ab83.js","_app/immutable/chunks/Button.6162fbd1.js","_app/immutable/chunks/regex.7dfa9b23.js","_app/immutable/chunks/error.1a1eb2ed.js"];
export const stylesheets = ["_app/immutable/assets/1.e3eb7d9c.css","_app/immutable/assets/Footer.56088e07.css","_app/immutable/assets/Socials.1c0e54d1.css","_app/immutable/assets/Button.b2541fdf.css"];
export const fonts = [];
