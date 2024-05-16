import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index2.js";
import { B as Button } from "../../../../chunks/Button.js";
import { E as Error } from "../../../../chunks/error.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".error-page.svelte-gnq28x.svelte-gnq28x{background:var(--bg-color);position:relative}.container.svelte-gnq28x.svelte-gnq28x{display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:60vh;text-align:center}.container.svelte-gnq28x .svg-wrapper.svelte-gnq28x{width:300px;margin-top:-60px;margin-bottom:-30px}.container.svelte-gnq28x .svg-wrapper.svelte-gnq28x svg{filter:drop-shadow(2px 6px 0px rgba(0, 0, 0, 0.1))}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="error-page svelte-gnq28x"><div class="container svelte-gnq28x"><h1>Oh no! 404!</h1>
    <div class="svg-wrapper svelte-gnq28x">${validate_component(Error, "Error").$$render($$result, {}, {}, {})}</div>
    <p>It seems like coffee was spilled all over this page, and now it can&#39;t be
      displayed.
    </p>
    <br>
    ${validate_component(Button, "Button").$$render($$result, { href: "/" }, {}, {
    default: () => {
      return `Start over`;
    }
  })}</div>
</div>`;
});
export {
  Page as default
};
