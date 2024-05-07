import { c as create_ssr_component } from "./index2.js";
const metadata = {
  "slug": "customization",
  "title": "How to Customize this Template",
  "date": "2023-04-22T21:55:27.154Z",
  "excerpt": "How to customize what you're seeing here and make it your own.",
  "coverImage": "/images/posts/customization.jpg",
  "tags": ["Documentation"]
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<p>In general, content can be modified by editing the <strong>organisms</strong> and the pages themselves. Below is a list of the most common changes that you may want to make.</p>
<h2 id="domainsite-url"><a class="heading-link" title="Permalink" aria-hidden="true" href="#domainsite-url"><span>#</span></a>Domain/site URL</h2>
<p>The first thing you might want to do is replace the domain of of the site with your own. There are two places where you need to do that:</p>
<ul><li>In the <code>package.json</code> file, check the <code>postbuild</code> script. Change the domain there to your own, so it ends up like this: <code>svelte-sitemap --domain https://your-domain.com</code>. This is used to generate the sitemap of your website, which is used by search engines to index your site.</li>
<li>In the <code>src/lib/data/meta.ts</code> file, change the <code>siteBaseUrl</code> property to your own domain. This is used in multiple parts of the app wherever the site needs to link to itself.</li></ul>
<h2 id="headersite-logo"><a class="heading-link" title="Permalink" aria-hidden="true" href="#headersite-logo"><span>#</span></a>Header/site logo</h2>
<p>To replace the logo that appears in the header, modify or replace the contents of the <code>Logo.svelte</code> atom.</p>
<p>The links that appear on the header can be modified directly in the <code>Header.svelte</code> organism.</p>
<h2 id="hero-section"><a class="heading-link" title="Permalink" aria-hidden="true" href="#hero-section"><span>#</span></a>Hero section</h2>
<p>The hero section is the first section of the site’s home page. It is composed of a Heading, the <em>intro</em> text, and a list of buttons/CTAs. The contents of this section can be modified directly in the <code>Hero.svelte</code> organism.</p>
<h2 id="about-section"><a class="heading-link" title="Permalink" aria-hidden="true" href="#about-section"><span>#</span></a>About section</h2>
<p>The about section contains another headline, a paragraph of text, some social media links, and optionally an image. The contents of this section can be modified directly in the <code>About.svelte</code> organism.</p>
<h2 id="social-links"><a class="heading-link" title="Permalink" aria-hidden="true" href="#social-links"><span>#</span></a>Social Links</h2>
<p>The social links are contained in the <code>Socials.svelte</code> molecule and can be used in any page. This template shows them on the About section and in the Footer.</p>
<h2 id="footer"><a class="heading-link" title="Permalink" aria-hidden="true" href="#footer"><span>#</span></a>Footer</h2>
<p>The footer contains some credits, a list of social links, and the RSS/Theme toggle. The contents of this section can be modified directly in the <code>Footer.svelte</code> organism.</p>
<h2 id="colors"><a class="heading-link" title="Permalink" aria-hidden="true" href="#colors"><span>#</span></a>Colors</h2>
<p>You can change the color palette of the website just by tweaking the <code>_themes.scss</code> file. The file uses the <code>define-color</code> scss function to automatically set the color variables in Hex, RGB and HSL formats, so you can choose whichever format you need.</p>
<p>The main theme colors (primary and secondary) have two variants: shade and tint. The shade is a lighter version of the color (darker in dark mode), and the tint should almost match the page’s background, so that in light mode, it’s really bright, and in dark mode, it’s really dark.</p>
<h2 id="fonts"><a class="heading-link" title="Permalink" aria-hidden="true" href="#fonts"><span>#</span></a>Fonts</h2>
<p>This template uses the Inter, Merriweather and Ubuntu Mono font families. You can change the font family by editing the <code>_variables.scss</code> file, and the code is already set up to accept a default font, a heading font, and a monospace font.</p>
<p>I recommend using <a href="https://fontsource.org/" rel="nofollow">Fontsource</a> to import the fonts you need, or self-hosting them. In case you’re using Fontsource, you can import the fonts in <code>global.scss</code> file to make sure they’re available in the entire site.</p>
<h2 id="favicon"><a class="heading-link" title="Permalink" aria-hidden="true" href="#favicon"><span>#</span></a>Favicon</h2>
<p>Favicons are located in the <code>static/favicons</code> folder. I like to use <a href="https://realfavicongenerator.net" rel="nofollow">Real Favicon Generator</a> to generate mine, but you can use any other tool you like. I wrote <a href="https://fantinel.dev/fixing-favicons" rel="nofollow">a blog post about Favicons</a> in case you want to learn more about them.</p>
<h2 id="social-media-link-preview"><a class="heading-link" title="Permalink" aria-hidden="true" href="#social-media-link-preview"><span>#</span></a>Social Media Link Preview</h2>
<p>You probably want to customize how links to your website look when posted on social media/messaging apps. To do that, you can edit the info in <code>src/lib/data/meta.ts</code>. There, you can edit the site’s title, description, tags (used by search engines) and the image that appears when sharing a link.</p>`;
});
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Page,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  Page as P,
  __vite_glob_0_1 as _,
  metadata as m
};
