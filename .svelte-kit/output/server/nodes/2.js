import * as server from '../entries/pages/(blog-article)/_layout.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(blog-article)/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/(blog-article)/+layout.server.ts";
export const imports = ["_app/immutable/nodes/2.d5fd6cef.js","_app/immutable/chunks/index.b223fad9.js","_app/immutable/chunks/Footer.0a734fda.js","_app/immutable/chunks/Socials.0d56e50f.js","_app/immutable/chunks/index.3f3d9422.js","_app/immutable/chunks/ContentSection.2f093d03.js","_app/immutable/chunks/regex.7dfa9b23.js","_app/immutable/chunks/Image.85b924aa.js","_app/immutable/chunks/meta.b74a4754.js"];
export const stylesheets = ["_app/immutable/assets/2.5095858c.css","_app/immutable/assets/Footer.37da215a.css","_app/immutable/assets/Socials.1c0e54d1.css","_app/immutable/assets/ContentSection.86f945e6.css","_app/immutable/assets/Image.c35dc37b.css"];
export const fonts = [];
