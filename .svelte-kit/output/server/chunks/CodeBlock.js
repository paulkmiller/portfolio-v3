import { c as create_ssr_component, b as escape } from "./index2.js";
const CodeBlock_svelte_svelte_type_style_lang = "";
const css = {
  code: ".code-block.svelte-1pkpsrg.svelte-1pkpsrg{display:block;position:relative;background-color:var(--color--code-background);color:var(--color--code-text);font-family:var(--font--mono);font-size:1rem;line-height:1.33em;border-radius:8px;box-shadow:var(--card-shadow);padding:30px 15px;margin:30px 0}.code-block.svelte-1pkpsrg pre{overflow-x:auto;scrollbar-color:var(--color--primary) var(--color--primary-tint);scrollbar-width:thin;padding-bottom:5px}.code-block.svelte-1pkpsrg pre::-webkit-scrollbar{height:8px}.code-block.svelte-1pkpsrg pre::-webkit-scrollbar-thumb{background:var(--color--primary)}.code-block.svelte-1pkpsrg pre::-webkit-scrollbar-thumb:hover{background:var(--color--primary-shade)}.code-block.svelte-1pkpsrg .lang.svelte-1pkpsrg{position:absolute;right:0;top:-15px;background:inherit;border-radius:8px;padding:5px 10px;z-index:2;font-size:0.85em}.code-block.svelte-1pkpsrg .filename.svelte-1pkpsrg{background:inherit;border-top-left-radius:8px;border-top-right-radius:8px;margin-bottom:-2px;padding:5px 10px;position:absolute;left:0px;top:-15px;z-index:1}",
  map: null
};
const CodeBlock = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { filename } = $$props;
  let { lang } = $$props;
  let { fullBleed = void 0 } = $$props;
  if ($$props.filename === void 0 && $$bindings.filename && filename !== void 0)
    $$bindings.filename(filename);
  if ($$props.lang === void 0 && $$bindings.lang && lang !== void 0)
    $$bindings.lang(lang);
  if ($$props.fullBleed === void 0 && $$bindings.fullBleed && fullBleed !== void 0)
    $$bindings.fullBleed(fullBleed);
  $$result.css.add(css);
  return `<div class="${["code-block svelte-1pkpsrg", fullBleed ? "full-bleed" : ""].join(" ").trim()}">${filename ? `<div class="filename svelte-1pkpsrg">${escape(filename)}</div>` : ``}
	${lang ? `<div class="lang svelte-1pkpsrg">${escape(lang)}</div>` : ``}
	${slots.default ? slots.default({}) : ``}
</div>`;
});
export {
  CodeBlock as C
};
