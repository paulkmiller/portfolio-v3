import * as server from '../entries/pages/(waves)/_page.server.ts.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(waves)/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(waves)/+page.server.ts";
export const imports = ["_app/immutable/nodes/7.f006e982.js","_app/immutable/chunks/index.510f5478.js","_app/immutable/chunks/Button.8e537d10.js","_app/immutable/chunks/regex.7dfa9b23.js","_app/immutable/chunks/Socials.b48b5353.js","_app/immutable/chunks/Image.8feae8c5.js","_app/immutable/chunks/ContentSection.e520b206.js"];
export const stylesheets = ["_app/immutable/assets/7.203044ad.css","_app/immutable/assets/Button.b2541fdf.css","_app/immutable/assets/Socials.1c0e54d1.css","_app/immutable/assets/Image.0954db74.css","_app/immutable/assets/ContentSection.3fd00a97.css"];
export const fonts = [];
