import * as server from '../entries/pages/(blog-article)/_layout.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(blog-article)/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/(blog-article)/+layout.server.ts";
export const imports = ["_app/immutable/nodes/2.8d472635.js","_app/immutable/chunks/index.510f5478.js","_app/immutable/chunks/Footer.b78a9959.js","_app/immutable/chunks/Socials.b48b5353.js","_app/immutable/chunks/index.959a2904.js","_app/immutable/chunks/ContentSection.e520b206.js","_app/immutable/chunks/regex.7dfa9b23.js","_app/immutable/chunks/Image.8feae8c5.js","_app/immutable/chunks/meta.565e0350.js"];
export const stylesheets = ["_app/immutable/assets/2.a0c51d5a.css","_app/immutable/assets/Footer.d783561c.css","_app/immutable/assets/Socials.1c0e54d1.css","_app/immutable/assets/ContentSection.3fd00a97.css","_app/immutable/assets/Image.0954db74.css"];
export const fonts = [];
