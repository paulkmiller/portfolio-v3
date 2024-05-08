import * as server from '../entries/pages/(waves)/_page.server.ts.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(waves)/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(waves)/+page.server.ts";
export const imports = ["_app/immutable/nodes/8.e2fcc24a.js","_app/immutable/chunks/index.b3dbe48f.js","_app/immutable/chunks/Socials.6ae537c1.js","_app/immutable/chunks/Image.42d1d7c4.js","_app/immutable/chunks/Button.0a1fd099.js","_app/immutable/chunks/regex.7dfa9b23.js","_app/immutable/chunks/ContentSection.23e76e28.js"];
export const stylesheets = ["_app/immutable/assets/8.c03e9a2e.css","_app/immutable/assets/Socials.1c0e54d1.css","_app/immutable/assets/Image.0954db74.css","_app/immutable/assets/Button.b2541fdf.css","_app/immutable/assets/ContentSection.3ab66a19.css"];
export const fonts = [];
