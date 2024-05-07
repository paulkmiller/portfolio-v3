import * as server from '../entries/pages/(waves)/blog/_page.server.ts.js';

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(waves)/blog/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(waves)/blog/+page.server.ts";
export const imports = ["_app/immutable/nodes/9.d42d6819.js","_app/immutable/chunks/index.f709382c.js","_app/immutable/chunks/ContentSection.293b997b.js","_app/immutable/chunks/regex.7dfa9b23.js","_app/immutable/chunks/Image.aea5a19a.js"];
export const stylesheets = ["_app/immutable/assets/9.bbabfa68.css","_app/immutable/assets/ContentSection.3fd00a97.css","_app/immutable/assets/Image.0954db74.css"];
export const fonts = [];
