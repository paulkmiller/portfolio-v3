import * as server from '../entries/pages/(waves)/_page.server.ts.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(waves)/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(waves)/+page.server.ts";
export const imports = ["_app/immutable/nodes/6.d504e852.js","_app/immutable/chunks/index.b223fad9.js","_app/immutable/chunks/Socials.0d56e50f.js","_app/immutable/chunks/Button.e6163b12.js","_app/immutable/chunks/regex.7dfa9b23.js","_app/immutable/chunks/ContentSection.2f093d03.js","_app/immutable/chunks/Image.85b924aa.js"];
export const stylesheets = ["_app/immutable/assets/6.7eabd38e.css","_app/immutable/assets/Socials.1c0e54d1.css","_app/immutable/assets/Button.b2541fdf.css","_app/immutable/assets/ContentSection.86f945e6.css","_app/immutable/assets/Image.c35dc37b.css"];
export const fonts = [];
