import { c as create_ssr_component, b as escape, v as validate_component } from "./index2.js";
const Alert = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="100%" height="100%" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 7L12 13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 17.01L12.01 16.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>`;
});
const Check = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="100%" height="100%" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 12.5L10 15.5L17 8.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>`;
});
const Info = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="100%" height="100%" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 11.5V16.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 7.51L12.01 7.49889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>`;
});
const Callout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".callout-block.svelte-sxx0n0.svelte-sxx0n0{--bg-color:var(--color--page-background);--accent-color:transparent;--text-color:var(--color--text);margin:40px 0 30px;padding:25px 25px;border-top-right-radius:10px;border-bottom-right-radius:10px;background:var(--bg-color);color:var(--text-color);border-left:4px solid var(--accent-color);position:relative}.callout-block.svelte-sxx0n0 .icon-wrapper.svelte-sxx0n0{position:absolute;width:50px;height:50px;top:0;left:0;transform:translate(calc(-50% - 1.5px), -50%);background:var(--color--post-page-background);padding:8px;border-radius:50%;fill:var(--accent-color);color:var(--accent-color)}.callout-block.info.svelte-sxx0n0.svelte-sxx0n0{--bg-color:var(--color--callout-background--info);--accent-color:var(--color--callout-accent--info)}.callout-block.warning.svelte-sxx0n0.svelte-sxx0n0{--bg-color:var(--color--callout-background--warning);--accent-color:var(--color--callout-accent--warning)}.callout-block.error.svelte-sxx0n0.svelte-sxx0n0{--bg-color:var(--color--callout-background--error);--accent-color:var(--color--callout-accent--error)}.callout-block.success.svelte-sxx0n0.svelte-sxx0n0{--bg-color:var(--color--callout-background--success);--accent-color:var(--color--callout-accent--success)}",
  map: null
};
const Callout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { type = void 0 } = $$props;
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  $$result.css.add(css);
  return `<div class="${"callout-block " + escape(type ?? "", true) + " svelte-sxx0n0"}">${type ? `<div class="icon-wrapper svelte-sxx0n0">${type == "info" ? `${validate_component(Info, "Info").$$render($$result, {}, {}, {})}` : `${type == "warning" || type == "error" ? `${validate_component(Alert, "Alert").$$render($$result, {}, {}, {})}` : `${type == "success" ? `${validate_component(Check, "Check").$$render($$result, {}, {}, {})}` : ``}`}`}</div>` : ``}
	${slots.default ? slots.default({}) : ``}
</div>`;
});
export {
  Callout as C
};
