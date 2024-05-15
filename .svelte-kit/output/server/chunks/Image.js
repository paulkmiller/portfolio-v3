import { c as create_ssr_component, a as add_attribute, g as add_styles, b as escape } from "./index2.js";
const Image_svelte_svelte_type_style_lang = "";
const css = {
  code: "figure.svelte-62mrw6{width:100%;display:inline-block}img.svelte-62mrw6{width:100%;height:100%;object-fit:contain}figcaption.svelte-62mrw6{text-align:center;font-size:0.9rem;margin:0.5rem}",
  map: null
};
const Image = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let fileName;
  let { src } = $$props;
  let { alt } = $$props;
  let { fullBleed = void 0 } = $$props;
  let { width = void 0 } = $$props;
  let { height = void 0 } = $$props;
  let { formats = ["avif", "webp", "png"] } = $$props;
  let { widths = void 0 } = $$props;
  function buildSrcset() {
    let srcset = "";
    if (widths) {
      for (let i = 0; i < widths.length; i++) {
        srcset += `${fileName}-${widths[i]}.${formats[0]} ${widths[i]}w`;
        if (i < widths.length - 1) {
          srcset += ", ";
        }
      }
    } else {
      for (let i = 0; i < formats.length; i++) {
        srcset += `${fileName}.${formats[i]}`;
        if (i < formats.length - 1) {
          srcset += ", ";
        }
      }
    }
    return srcset;
  }
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  if ($$props.fullBleed === void 0 && $$bindings.fullBleed && fullBleed !== void 0)
    $$bindings.fullBleed(fullBleed);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.formats === void 0 && $$bindings.formats && formats !== void 0)
    $$bindings.formats(formats);
  if ($$props.widths === void 0 && $$bindings.widths && widths !== void 0)
    $$bindings.widths(widths);
  $$result.css.add(css);
  fileName = src.split(".")[0];
  return `<figure class="svelte-62mrw6"><img${add_attribute("srcset", buildSrcset(), 0)}${add_attribute("src", src, 0)}${add_attribute("alt", alt, 0)} loading="lazy" decoding="async" class="${["svelte-62mrw6", fullBleed ? "full-bleed" : ""].join(" ").trim()}"${add_styles({ width, height })}>
	<figcaption class="svelte-62mrw6">${escape(alt)}</figcaption></figure>`;
});
export {
  Image as I
};
