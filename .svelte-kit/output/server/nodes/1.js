

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.1abd7a8a.js","_app/immutable/chunks/index.b3dbe48f.js","_app/immutable/chunks/Footer.38ba7bf2.js","_app/immutable/chunks/Socials.6ae537c1.js","_app/immutable/chunks/index.1bd5ef1d.js","_app/immutable/chunks/Button.0a1fd099.js","_app/immutable/chunks/regex.7dfa9b23.js","_app/immutable/chunks/error.6df42ae1.js"];
export const stylesheets = ["_app/immutable/assets/1.a9d4fba1.css","_app/immutable/assets/Footer.6e07459f.css","_app/immutable/assets/Socials.1c0e54d1.css","_app/immutable/assets/Button.b2541fdf.css"];
export const fonts = [];
