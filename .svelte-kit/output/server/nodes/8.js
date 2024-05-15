import * as server from '../entries/pages/(waves)/blog/_page.server.ts.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(waves)/blog/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(waves)/blog/+page.server.ts";
export const imports = ["_app/immutable/nodes/8.a228c96f.js","_app/immutable/chunks/index.c7992fe2.js","_app/immutable/chunks/ContentSection.a39b28a5.js","_app/immutable/chunks/regex.7dfa9b23.js","_app/immutable/chunks/Image.6cf4b65f.js"];
export const stylesheets = ["_app/immutable/assets/8.bbabfa68.css","_app/immutable/assets/ContentSection.86f945e6.css","_app/immutable/assets/Image.bb091967.css"];
export const fonts = [];
