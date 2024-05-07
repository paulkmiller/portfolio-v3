

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.5a8846fc.js","_app/immutable/chunks/index.510f5478.js","_app/immutable/chunks/Footer.b78a9959.js","_app/immutable/chunks/Socials.b48b5353.js","_app/immutable/chunks/index.959a2904.js","_app/immutable/chunks/Button.8e537d10.js","_app/immutable/chunks/regex.7dfa9b23.js","_app/immutable/chunks/error.d8791ae7.js"];
export const stylesheets = ["_app/immutable/assets/1.a9d4fba1.css","_app/immutable/assets/Footer.d783561c.css","_app/immutable/assets/Socials.1c0e54d1.css","_app/immutable/assets/Button.b2541fdf.css"];
export const fonts = [];
