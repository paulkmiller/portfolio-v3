import * as server from '../entries/pages/(waves)/_page.server.ts.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(waves)/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(waves)/+page.server.ts";
export const imports = ["_app/immutable/nodes/6.b5be157c.js","_app/immutable/chunks/index.c7992fe2.js","_app/immutable/chunks/Socials.e586c758.js","_app/immutable/chunks/Button.6162fbd1.js","_app/immutable/chunks/regex.7dfa9b23.js","_app/immutable/chunks/ContentSection.a39b28a5.js","_app/immutable/chunks/Image.6cf4b65f.js"];
export const stylesheets = ["_app/immutable/assets/6.06830b41.css","_app/immutable/assets/Socials.1c0e54d1.css","_app/immutable/assets/Button.b2541fdf.css","_app/immutable/assets/ContentSection.86f945e6.css","_app/immutable/assets/Image.bb091967.css"];
export const fonts = [];
