import * as server from '../entries/pages/(blog-article)/_layout.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(blog-article)/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/(blog-article)/+layout.server.ts";
export const imports = ["_app/immutable/nodes/2.74f4dfaf.js","_app/immutable/chunks/index.c7992fe2.js","_app/immutable/chunks/Footer.63d7edcd.js","_app/immutable/chunks/Socials.e586c758.js","_app/immutable/chunks/index.12c3ab83.js","_app/immutable/chunks/ContentSection.c04f0a49.js","_app/immutable/chunks/regex.7dfa9b23.js","_app/immutable/chunks/meta.b74a4754.js"];
export const stylesheets = ["_app/immutable/assets/2.c37c829b.css","_app/immutable/assets/Footer.6a57eeac.css","_app/immutable/assets/Socials.1c0e54d1.css","_app/immutable/assets/ContentSection.86f945e6.css","_app/immutable/assets/Image.0954db74.css"];
export const fonts = [];
