import * as server from '../entries/pages/(blog-article)/_layout.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(blog-article)/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/(blog-article)/+layout.server.ts";
export const imports = ["_app/immutable/nodes/2.4e5e948f.js","_app/immutable/chunks/index.b3dbe48f.js","_app/immutable/chunks/Footer.38ba7bf2.js","_app/immutable/chunks/Socials.6ae537c1.js","_app/immutable/chunks/index.1bd5ef1d.js","_app/immutable/chunks/ContentSection.23e76e28.js","_app/immutable/chunks/regex.7dfa9b23.js","_app/immutable/chunks/Image.42d1d7c4.js","_app/immutable/chunks/meta.b74a4754.js"];
export const stylesheets = ["_app/immutable/assets/2.a0c51d5a.css","_app/immutable/assets/Footer.6e07459f.css","_app/immutable/assets/Socials.1c0e54d1.css","_app/immutable/assets/ContentSection.3ab66a19.css","_app/immutable/assets/Image.0954db74.css"];
export const fonts = [];
