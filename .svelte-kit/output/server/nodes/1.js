

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.73eac238.js","_app/immutable/chunks/index.b223fad9.js","_app/immutable/chunks/Footer.0a734fda.js","_app/immutable/chunks/Socials.0d56e50f.js","_app/immutable/chunks/index.3f3d9422.js","_app/immutable/chunks/Button.e6163b12.js","_app/immutable/chunks/regex.7dfa9b23.js","_app/immutable/chunks/error.4c0fbd35.js"];
export const stylesheets = ["_app/immutable/assets/1.e3eb7d9c.css","_app/immutable/assets/Footer.37da215a.css","_app/immutable/assets/Socials.1c0e54d1.css","_app/immutable/assets/Button.b2541fdf.css"];
export const fonts = [];
