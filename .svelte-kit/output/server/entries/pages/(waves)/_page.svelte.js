import { c as create_ssr_component, b as escape, a as add_attribute, o as onDestroy, e as each, v as validate_component, g as add_styles, h as null_to_empty } from "../../../chunks/index2.js";
import { G as Github, S as Socials } from "../../../chunks/Socials.js";
import { B as Button } from "../../../chunks/Button.js";
import { I as Image } from "../../../chunks/Image.js";
import { C as ContentSection, B as BlogPostCard, a as Card, T as Tag } from "../../../chunks/ContentSection.js";
const Features$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="100%" height="100%" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 15v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4a2 2 0 012-2h4a2 2 0 012 2zM16 5v4a2 2 0 01-2 2h-4a2 2 0 01-2-2V5a2 2 0 012-2h4a2 2 0 012 2zM22 15v4a2 2 0 01-2 2h-4a2 2 0 01-2-2v-4a2 2 0 012-2h4a2 2 0 012 2zM6 16v-3M12 6V3M18 16v-3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>`;
});
const SingleSparkle_svelte_svelte_type_style_lang = "";
const css$8 = {
  code: ".wrapper.svelte-sixv8c.svelte-sixv8c{position:absolute;pointer-events:none;display:flex;z-index:2;animation:svelte-sixv8c-grow-and-shrink 900ms ease-in-out forwards}.wrapper.svelte-sixv8c svg.svelte-sixv8c{animation:svelte-sixv8c-spin 900ms linear forwards}@keyframes svelte-sixv8c-grow-and-shrink{0%{transform:scale(0)}50%{transform:scale(1)}100%{transform:scale(0)}}@keyframes svelte-sixv8c-spin{from{transform:rotate(0deg)}to{transform:rotate(180deg)}}",
  map: null
};
const SingleSparkle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { color } = $$props;
  let { size } = $$props;
  let { style } = $$props;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  $$result.css.add(css$8);
  return `<div class="wrapper svelte-sixv8c" style="${"top: " + escape(style.top, true) + "; left: " + escape(style.left, true) + ";"}"><svg${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-sixv8c"><path d="M80 0C80 0 84.2846 41.2925 101.496 58.504C118.707 75.7154 160 80 160 80C160 80 118.707 84.2846 101.496 101.496C84.2846 118.707 80 160 80 160C80 160 75.7154 118.707 58.504 101.496C41.2925 84.2846 0 80 0 80C0 80 41.2925 75.7154 58.504 58.504C75.7154 41.2925 80 0 80 0Z"${add_attribute("fill", color, 0)}></path></svg>
</div>`;
});
const Sparkles_svelte_svelte_type_style_lang = "";
const css$7 = {
  code: ".sparkle-wrapper.svelte-exdx8u.svelte-exdx8u{position:relative;display:inline-block}.sparkle-wrapper.svelte-exdx8u .slot-wrapper.svelte-exdx8u{position:relative;z-index:1}",
  map: null
};
const Sparkles = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { color = "default" } = $$props;
  let sparkles = [];
  let sparklesInterval;
  onDestroy(() => {
    clearInterval(sparklesInterval);
  });
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  $$result.css.add(css$7);
  return `<div class="sparkle-wrapper svelte-exdx8u">${each(sparkles, (sparkle) => {
    return `${validate_component(SingleSparkle, "Sparkle").$$render(
      $$result,
      {
        color: sparkle.color,
        size: sparkle.size,
        style: sparkle.style
      },
      {},
      {}
    )}`;
  })}
	<span class="slot-wrapper svelte-exdx8u">${slots.default ? slots.default({}) : ``}</span>
</div>`;
});
const HeroImage_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: "@keyframes svelte-yljakk-float{0%{transform:translateY(7px)}50%{transform:translateY(-7px)}100%{transform:translateY(7px)}}.img.svelte-yljakk{border-radius:349px;width:425px;height:425px;z-index:1;display:block;transition:width 0.4s var(--bezier-one), transform 0.4s var(--bezier-one);align-self:start;background-color:var(--neutral-one);background-size:cover;background-position:center;background-repeat:no-repeat}@media(max-width: 768px){.img.svelte-yljakk{display:none}}@media(max-width: 1240px){.img.svelte-yljakk{width:clamp(340px, 40vw, 425px);height:clamp(300px, 40vw, 400px)}}.img-container.svelte-yljakk{z-index:1;animation:svelte-yljakk-float 6s ease-in-out infinite;animation-play-state:running;background-color:rgba(255, 255, 255, 0);padding:0%;border:0}@media(max-width: 1240px){.img-container.svelte-yljakk{display:flex;justify-content:center}}",
  map: null
};
const HeroImage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let xRotation;
  let yRotation;
  $$result.css.add(css$6);
  return `<div class="img-container svelte-yljakk"><img alt="" class="img svelte-yljakk"${add_styles({
    "background-image": `url(/images/pic1.gif)`,
    "transform": `perspective(500px) ${""} rotateX(${xRotation}deg) rotateY(${yRotation}deg)`
  })}></div>`;
});
const Hero_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: '@charset "UTF-8";#hero.svelte-j2k8p0.svelte-j2k8p0{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:15px;position:relative;padding:80px 0}@media(max-width: 767px){#hero.svelte-j2k8p0.svelte-j2k8p0{padding:40px 0 50px}}@media(max-width: 767px){}#hero.svelte-j2k8p0 .ctas.svelte-j2k8p0{display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:10px;width:100%}h1.svelte-j2k8p0.svelte-j2k8p0::before{height:300px;font-size:100px;content:"⌥";font-weight:700;z-index:-1;user-select:none;transform:translateX(-125%) translateY(-50%);-webkit-text-stroke:2px var(--white);color:transparent;opacity:0.25;letter-spacing:-0.1em;position:absolute}@media screen and (max-width: 1240px){h1.svelte-j2k8p0.svelte-j2k8p0{min-height:0vw;font-size:clamp(4rem, 10vw, 6.25rem)}}',
  map: null
};
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$5);
  return `<section id="hero" class="svelte-j2k8p0"><div><h1 class="svelte-j2k8p0">Paul</h1>
		<h2>Miller</h2>
		<h5>&quot;Front End Developer | Bringing Designs to Life!&quot;<br>Attempting to
			program.
		</h5>
		
		</div>
	${validate_component(HeroImage, "HeroImage").$$render($$result, {}, {}, {})}
	<div class="ctas svelte-j2k8p0">${validate_component(Sparkles, "Sparkles").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Button, "Button").$$render(
        $$result,
        {
          href: "https://github.com/matfantinel/sveltekit-static-blog-template"
        },
        {},
        {
          icon: () => {
            return `${validate_component(Github, "GitHubIcon").$$render($$result, { slot: "icon" }, {}, {})}`;
          },
          default: () => {
            return `Source Code
			`;
          }
        }
      )}`;
    }
  })}
		${validate_component(Button, "Button").$$render(
    $$result,
    {
      color: "primary",
      href: "https://histoire-sveltekit-static-blog-template.vercel.app/"
    },
    {},
    {
      icon: () => {
        return `${validate_component(Features$1, "FeaturesIcon").$$render($$result, { slot: "icon" }, {}, {})}`;
      },
      default: () => {
        return `Components
		`;
      }
    }
  )}</div>
</section>`;
});
const SparklingHighlight_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: "strong.primary.svelte-8f8x6d{color:var(--color--primary)}strong.secondary.svelte-8f8x6d{color:var(--color--secondary)}",
  map: null
};
const SparklingHighlight = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { color = "default" } = $$props;
  let { sparkleColor = "default" } = $$props;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.sparkleColor === void 0 && $$bindings.sparkleColor && sparkleColor !== void 0)
    $$bindings.sparkleColor(sparkleColor);
  $$result.css.add(css$4);
  return `${validate_component(Sparkles, "Sparkles").$$render($$result, { color: sparkleColor }, {}, {
    default: () => {
      return `<strong class="${escape(null_to_empty(color), true) + " svelte-8f8x6d"}">${slots.default ? slots.default({}) : ``}</strong>`;
    }
  })}`;
});
const About_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "#about.svelte-1qp99xm.svelte-1qp99xm{position:relative;display:grid;grid-template-columns:500px 250px;align-items:center;justify-content:space-between;padding-bottom:50px}@media(max-width: 767px){#about.svelte-1qp99xm.svelte-1qp99xm{grid-template-columns:1fr;justify-items:center;gap:20px}}#about.svelte-1qp99xm .info.svelte-1qp99xm{display:flex;flex-direction:column;gap:10px}@media(max-width: 767px){#about.svelte-1qp99xm .info h2.svelte-1qp99xm{text-align:center}}@media(max-width: 767px){#about.svelte-1qp99xm .info p.svelte-1qp99xm{text-align:justify}}@media(max-width: 767px){#about.svelte-1qp99xm .info.svelte-1qp99xm{gap:20px}}#about.svelte-1qp99xm .socials.svelte-1qp99xm{display:flex;align-items:center;gap:15px}@media(max-width: 767px){#about.svelte-1qp99xm .socials.svelte-1qp99xm{justify-content:center;margin-bottom:10px}#about.svelte-1qp99xm .socials span.svelte-1qp99xm{display:none}}#about.svelte-1qp99xm .image.svelte-1qp99xm{width:220px;height:220px}",
  map: null
};
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<section id="about" class="svelte-1qp99xm"><div class="info svelte-1qp99xm"><h2 class="svelte-1qp99xm">I am a cat dad, gamer, and... 
			${validate_component(SparklingHighlight, "SparklingHighlight").$$render($$result, { color: "secondary" }, {}, {
    default: () => {
      return `Front End Developer!`;
    }
  })}</h2>
		<p class="svelte-1qp99xm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum velit voluptatibus commodi
			autem provident quam labore, libero beatae praesentium voluptate?
		</p>
		<div class="socials svelte-1qp99xm"><span class="svelte-1qp99xm">Socials:</span>
			${validate_component(Socials, "Socials").$$render($$result, {}, {}, {})}</div></div>
	<div class="image svelte-1qp99xm">${validate_component(Image, "Image").$$render(
    $$result,
    {
      src: "/images/sample-image.png",
      alt: "Sample for the static template"
    },
    {},
    {}
  )}</div>
</section>`;
});
const RecentPosts_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".grid.svelte-1hdv5ie{width:100%;display:grid;grid-template-columns:1fr 1fr;grid-gap:20px}@media(max-width: 767px){.grid.svelte-1hdv5ie{grid-template-columns:1fr}}",
  map: null
};
const RecentPosts = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { posts } = $$props;
  if ($$props.posts === void 0 && $$bindings.posts && posts !== void 0)
    $$bindings.posts(posts);
  $$result.css.add(css$2);
  return `${validate_component(ContentSection, "ContentSection").$$render(
    $$result,
    {
      id: "recent-posts",
      title: "Blog posts",
      description: "This section shows the 4 most recent blog posts. Check them out for tips on how to get started!",
      align: "left"
    },
    {},
    {
      button: () => {
        return `<div slot="button">${validate_component(Button, "Button").$$render($$result, { href: "/blog" }, {}, {
          default: () => {
            return `View More`;
          }
        })}</div>`;
      },
      default: () => {
        return `<div class="grid svelte-1hdv5ie">${each(posts, (post) => {
          return `${validate_component(BlogPostCard, "BlogPostCard").$$render(
            $$result,
            {
              slug: post.slug,
              title: post.title,
              excerpt: post.excerpt,
              tags: post.tags,
              readingTime: post.readingTime,
              showImage: false
            },
            {},
            {}
          )}`;
        })}</div>`;
      }
    }
  )}`;
});
const FeatureCard_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".content.svelte-x9191d{display:flex;flex-direction:column;gap:10px;align-items:flex-start}.title.svelte-x9191d{display:flex;align-items:center;justify-content:space-between;width:100%;font-size:1.2rem;font-family:var(--font--title);font-weight:700}.tags.svelte-x9191d{display:flex;align-items:center;gap:5px;flex-wrap:wrap}.footer.svelte-x9191d{margin-top:20px}.feature-card .image img{object-fit:cover}",
  map: null
};
const FeatureCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name } = $$props;
  let { description } = $$props;
  let { image } = $$props;
  let { tags } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  if ($$props.tags === void 0 && $$bindings.tags && tags !== void 0)
    $$bindings.tags(tags);
  $$result.css.add(css$1);
  return `${validate_component(Card, "Card").$$render($$result, { additionalClass: "feature-card" }, {}, {
    footer: () => {
      return `<div class="footer svelte-x9191d" slot="footer">${tags && tags.length > 0 ? `<div class="tags svelte-x9191d">${each(tags, (tag) => {
        return `${validate_component(Tag, "Tag").$$render($$result, { color: tag.color }, {}, {
          default: () => {
            return `${escape(tag.label)}`;
          }
        })}`;
      })}</div>` : ``}</div>`;
    },
    content: () => {
      return `<div class="content svelte-x9191d" slot="content"><div class="title svelte-x9191d"><span>${escape(name)}</span></div>
		<p>${escape(description)}</p></div>`;
    },
    image: () => {
      return `<div class="image" slot="image">${validate_component(Image, "Image").$$render(
        $$result,
        {
          src: image,
          alt: "Picture describing the " + name + " feature"
        },
        {},
        {}
      )}</div>`;
    }
  })}`;
});
const Features_svelte_svelte_type_style_lang = "";
const css = {
  code: ".features-container.svelte-9ei89p{width:100%;display:grid;grid-template-columns:1fr;grid-gap:20px}.three-group-grid.svelte-9ei89p{width:100%;display:grid;grid-template-columns:2fr 1fr;grid-gap:20px}@media(max-width: 1085px){.three-group-grid.svelte-9ei89p{grid-template-columns:1fr 1fr}}@media(max-width: 767px){.three-group-grid.svelte-9ei89p{grid-template-columns:1fr}}@media(min-width: 1086px){.three-group-grid.svelte-9ei89p>:nth-child(3n + 2){grid-row:span 2}}@media(max-width: 1085px){.three-group-grid.svelte-9ei89p>:nth-child(3n + 1){grid-column:span 2}}@media(max-width: 900px){.three-group-grid.svelte-9ei89p>:nth-child(3n + 1){grid-template-columns:1fr;grid-column:unset}}",
  map: null
};
const Features = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { features } = $$props;
  if ($$props.features === void 0 && $$bindings.features && features !== void 0)
    $$bindings.features(features);
  $$result.css.add(css);
  return `${validate_component(ContentSection, "ContentSection").$$render(
    $$result,
    {
      id: "features",
      title: "Features",
      description: "Here are some of the features of this template"
    },
    {},
    {
      default: () => {
        return `<div class="features-container svelte-9ei89p"><div class="three-group-grid svelte-9ei89p">${each(features, (feature) => {
          return `${validate_component(FeatureCard, "FeatureCard").$$render(
            $$result,
            {
              name: feature.name,
              description: feature.description,
              image: feature.image,
              tags: feature.tags
            },
            {},
            {}
          )}`;
        })}</div></div>`;
      }
    }
  )}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { features, posts } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="container">${validate_component(Hero, "Hero").$$render($$result, {}, {}, {})}
	${validate_component(About, "About").$$render($$result, {}, {}, {})}
	${posts && posts.length > 0 ? `${validate_component(RecentPosts, "RecentPosts").$$render($$result, { posts }, {}, {})}` : ``}
	${validate_component(Features, "Features").$$render($$result, { features }, {}, {})}</div>`;
});
export {
  Page as default
};
