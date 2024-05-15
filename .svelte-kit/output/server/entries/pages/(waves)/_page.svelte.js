import { c as create_ssr_component, g as add_styles, b as escape, a as add_attribute, o as onDestroy, e as each, v as validate_component, h as null_to_empty } from "../../../chunks/index2.js";
import { S as Socials, E as Email } from "../../../chunks/Socials.js";
import { B as Button } from "../../../chunks/Button.js";
import { C as ContentSection, B as BlogPostCard, a as Card, T as Tag } from "../../../chunks/ContentSection.js";
import { I as Image } from "../../../chunks/Image.js";
const Tooltip_svelte_svelte_type_style_lang = "";
const css$b = {
  code: '.tooltip-wrapper.svelte-ocg0nr.svelte-ocg0nr{position:relative;display:inline-block}.tooltip-wrapper.svelte-ocg0nr:hover .tooltip.svelte-ocg0nr{opacity:1;visibility:initial;margin-top:-8px}.tooltip.svelte-ocg0nr.svelte-ocg0nr{position:absolute;display:inline-block;white-space:nowrap;opacity:0;visibility:hidden;transition:opacity 0.2s ease-in-out, visibility 0.2s ease-in-out, margin-top 0.2s ease-in-out;left:50%;top:0%;line-height:normal;transform:translate(-50%, -120%);padding:0.15rem 0.5rem;border-radius:6px;background-color:var(--color--yellow);color:var(--neutral-one);font-size:0.9rem;font-family:var(--font-two);font-weight:300;letter-spacing:-0.075em}.tooltip.svelte-ocg0nr.svelte-ocg0nr::after{border-left:solid transparent 10px;border-right:solid transparent 10px;border-top:solid var(--color--yellow) 10px;bottom:-8px;content:" ";height:0;width:0;left:50%;margin-left:-10px;position:absolute}.tooltip.active.svelte-ocg0nr.svelte-ocg0nr{opacity:1;visibility:initial;margin-top:-8px}',
  map: null
};
const Tooltip = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { tip = "" } = $$props;
  let { active = false } = $$props;
  if ($$props.tip === void 0 && $$bindings.tip && tip !== void 0)
    $$bindings.tip(tip);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  $$result.css.add(css$b);
  return `
${`${slots.default ? slots.default({}) : ``}`}`;
});
const HeroImage_svelte_svelte_type_style_lang = "";
const css$a = {
  code: "@keyframes svelte-wu8m8g-float{0%{transform:translateY(7px)}50%{transform:translateY(-7px)}100%{transform:translateY(7px)}}.img.svelte-wu8m8g{border-radius:349px;width:425px;height:425px;z-index:1;display:block;transition:width 0.4s var(--bezier-one), transform 0.4s var(--bezier-one);align-self:start;background-color:var(--neutral-one);background-size:cover;background-position:center;background-repeat:no-repeat}@media(max-width: 768px){.img.svelte-wu8m8g{display:none}}@media(max-width: 1240px){.img.svelte-wu8m8g{width:clamp(340px, 40vw, 425px);height:clamp(300px, 40vw, 400px)}}.img-container.svelte-wu8m8g{height:100%;z-index:1;animation:svelte-wu8m8g-float 6s ease-in-out infinite;animation-play-state:running;background-color:rgba(255, 255, 255, 0);padding:0%;border:0;place-self:center}@media(max-width: 1240px){.img-container.svelte-wu8m8g{display:flex;justify-content:center}}",
  map: null
};
const HeroImage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let xRotation;
  let yRotation;
  $$result.css.add(css$a);
  return `<div class="img-container svelte-wu8m8g"><img alt="" class="img svelte-wu8m8g"${add_styles({
    "background-image": `url(/images/pic1.gif)`,
    "transform": `perspective(500px) ${""} rotateX(${xRotation}deg) rotateY(${yRotation}deg)`,
    "align-self": `center`
  })}></div>`;
});
const SingleSparkle_svelte_svelte_type_style_lang = "";
const css$9 = {
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
  $$result.css.add(css$9);
  return `<div class="wrapper svelte-sixv8c" style="${"top: " + escape(style.top, true) + "; left: " + escape(style.left, true) + ";"}"><svg${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-sixv8c"><path d="M80 0C80 0 84.2846 41.2925 101.496 58.504C118.707 75.7154 160 80 160 80C160 80 118.707 84.2846 101.496 101.496C84.2846 118.707 80 160 80 160C80 160 75.7154 118.707 58.504 101.496C41.2925 84.2846 0 80 0 80C0 80 41.2925 75.7154 58.504 58.504C75.7154 41.2925 80 0 80 0Z"${add_attribute("fill", color, 0)}></path></svg>
</div>`;
});
const Sparkles_svelte_svelte_type_style_lang = "";
const css$8 = {
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
  $$result.css.add(css$8);
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
const SparklingHighlight_svelte_svelte_type_style_lang = "";
const css$7 = {
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
  $$result.css.add(css$7);
  return `${validate_component(Sparkles, "Sparkles").$$render($$result, { color: sparkleColor }, {}, {
    default: () => {
      return `<strong class="${escape(null_to_empty(color), true) + " svelte-8f8x6d"}">${slots.default ? slots.default({}) : ``}</strong>`;
    }
  })}`;
});
const DiscoverButton_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: 'button.svelte-160e42u{font-size:100%;border-radius:16px;border:none;display:flex;position:relative;flex-direction:row;width:max-content;cursor:pointer;background-color:var(--color--discover-neutral-one);transition:filter 0.2s var(--bezier-one), transform 0.5s var(--bezier-one);user-select:none;margin:20px 0 0;padding:1rem 2rem;color:var(--color--discover-neutral-four);font-weight:300;font-size:1.6rem;font-family:var(--font-two);letter-spacing:-0.075em;border:1px solid var(--color--discover-neutral-four)}button.svelte-160e42u:active{transform:scale(95%)}button.svelte-160e42u:hover{filter:brightness(110%)}@media screen and (max-width: 868px){button.svelte-160e42u{text-align:center;justify-content:center;padding:1rem 2rem;width:100%;font-size:clamp(1.1rem, 2vw, 1.9rem)}}.button-with-side.svelte-160e42u{padding:1rem 2rem 1rem 3rem}.side.svelte-160e42u{position:absolute;border-radius:16px 0 0 16px;top:0;left:0;content:"";height:100%;width:1.6rem;background-color:var(--color--discover-neutral-four)}@media screen and (max-width: 868px){.side.svelte-160e42u{display:none}}',
  map: null
};
const DiscoverButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { side = false } = $$props;
  if ($$props.side === void 0 && $$bindings.side && side !== void 0)
    $$bindings.side(side);
  $$result.css.add(css$6);
  return `<button class="${["svelte-160e42u", side ? "button-with-side" : ""].join(" ").trim()}"><div class="${["svelte-160e42u", side ? "side" : ""].join(" ").trim()}"></div>
	${slots.default ? slots.default({}) : ``}</button>`;
});
const Hero_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: "#hero.svelte-14zg98j.svelte-14zg98j{position:relative;display:grid;grid-template-columns:1fr 1fr;align-items:center;justify-content:space-between;padding-bottom:30px}@media(max-width: 767px){#hero.svelte-14zg98j.svelte-14zg98j{grid-template-columns:1fr;justify-items:center;gap:20px;padding:40px 0 50px}}#hero.svelte-14zg98j .info.svelte-14zg98j{display:flex;flex-direction:column;gap:15px}@media(max-width: 767px){#hero.svelte-14zg98j .info h1.svelte-14zg98j{text-align:left}}@media(max-width: 767px){#hero.svelte-14zg98j .info h2.svelte-14zg98j{text-align:center}}#hero.svelte-14zg98j .info p.svelte-14zg98j{color:var(--color--text)}@media(max-width: 767px){#hero.svelte-14zg98j .info p.svelte-14zg98j{text-align:justify}}#hero.svelte-14zg98j .info .secondary.svelte-14zg98j{font-weight:900;color:var(--color--secondary)}@media(max-width: 767px){#hero.svelte-14zg98j .info.svelte-14zg98j{gap:20px}}#hero.svelte-14zg98j .socials.svelte-14zg98j{display:flex;align-items:center;gap:15px}@media(max-width: 767px){#hero.svelte-14zg98j .socials.svelte-14zg98j{justify-content:center;margin-bottom:10px}#hero.svelte-14zg98j .socials span.svelte-14zg98j{display:none}}@media screen and (max-width: 1240px){h1.svelte-14zg98j.svelte-14zg98j{min-height:0vw;font-size:clamp(4rem, 10vw, 6.25rem)}}",
  map: null
};
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let tip;
  $$result.css.add(css$5);
  tip = "Probably getting my butt kicked 🙃";
  return `<section id="hero" class="svelte-14zg98j"><div class="info svelte-14zg98j"><h1 class="svelte-14zg98j">Paul Miller</h1>
		<h2 class="svelte-14zg98j">I am a cat dad, gamer, and... 
			${validate_component(SparklingHighlight, "SparklingHighlight").$$render($$result, { color: "secondary" }, {}, {
    default: () => {
      return `Front End Developer!`;
    }
  })}</h2>
		<p class="svelte-14zg98j">Bringing Designs to Life <span class="secondary svelte-14zg98j">&amp;</span><br>
			Probably playing ${validate_component(Tooltip, "Tooltip").$$render($$result, { tip }, {}, {
    default: () => {
      return `<a href="https://steamcommunity.com/id/Kahram/" target="_blank">games</a>`;
    }
  })} or petting my cats.
		</p>
		<div class="socials svelte-14zg98j"><span class="svelte-14zg98j">Socials:</span>
			${validate_component(Socials, "Socials").$$render($$result, {}, {}, {})}</div>
		${validate_component(DiscoverButton, "DiscoverButton").$$render($$result, { side: true }, {}, {
    default: () => {
      return `Discover my work ↓`;
    }
  })}</div>
	${validate_component(HeroImage, "HeroImage").$$render($$result, {}, {}, {})}
</section>`;
});
const About_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: "#about.svelte-jsmmw5.svelte-jsmmw5{position:relative;display:grid;grid-template-columns:1fr;align-items:center;justify-content:space-between;padding-bottom:50px;gap:20px}@media(max-width: 767px){#about.svelte-jsmmw5.svelte-jsmmw5{grid-template-columns:1fr;justify-items:center;gap:20px}}#about.svelte-jsmmw5 .text.svelte-jsmmw5{display:flex;flex-direction:column;gap:20px}#about.svelte-jsmmw5 .ctas.svelte-jsmmw5{display:flex;flex-wrap:wrap;align-items:center;gap:10px;width:100%}",
  map: null
};
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `<section id="about" class="wrapper svelte-jsmmw5"><div class="text svelte-jsmmw5">
		<p>Hey there! I&#39;m Paul, a frontend developer who loves bringing designs to life through code. There&#39;s nothing quite like the thrill of transforming a static mockup into an interactive, engaging experience that users can enjoy.
		</p>
		<p>Over the years, I&#39;ve had the opportunity to work with a wide range of technologies, from JavaScript frameworks like React and Vue to backend systems like Ruby on Rails and PHP. More recently, I&#39;ve been diving into Sveltekit and Go, along with headless CMS solutions like Strapi and Contentful. 
		</p>
		<p>If you&#39;re looking for a frontend developer who&#39;s equal parts creative and technical, I&#39;d love to chat. Feel free to check out my blog if you want to see what I&#39;m up too! And if you&#39;ve got a design that you&#39;re dying to see brought to life, let&#39;s definitely talk!
		</p></div>
		<div class="ctas svelte-jsmmw5">${validate_component(Sparkles, "Sparkles").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Button, "Button").$$render($$result, { href: "mailto:paulkerrymiller@gmail.com" }, {}, {
        icon: () => {
          return `${validate_component(Email, "EmailIcon").$$render($$result, { slot: "icon" }, {}, {})}`;
        },
        default: () => {
          return `Contact Me
				`;
        }
      })}`;
    }
  })}</div>
</section>`;
});
const RecentPosts_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".grid.svelte-1hdv5ie{width:100%;display:grid;grid-template-columns:1fr 1fr;grid-gap:20px}@media(max-width: 767px){.grid.svelte-1hdv5ie{grid-template-columns:1fr}}",
  map: null
};
const RecentPosts = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { posts } = $$props;
  if ($$props.posts === void 0 && $$bindings.posts && posts !== void 0)
    $$bindings.posts(posts);
  $$result.css.add(css$3);
  return `${validate_component(ContentSection, "ContentSection").$$render(
    $$result,
    {
      id: "recent-posts",
      title: "Blog posts",
      description: "I write about things that intrigue me, life events, and personal thoughts. Want to learn more about me? This is the spot!",
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
const Open = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke-width="1.5" color="#f6d4d3"><path stroke="#f6d4d3" stroke-linecap="round" stroke-linejoin="round" d="M21 3h-6m6 0-9 9m9-9v6"></path><path stroke="#f6d4d3" stroke-linecap="round" d="M21 13v6l-2 2H5l-2-2V5l2-2h6"></path></svg>`;
});
const ProjectCard_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".content.svelte-1w50j5m{display:flex;flex-direction:column;gap:10px;align-items:flex-start}.title.svelte-1w50j5m{display:flex;align-items:center;justify-content:space-between;width:100%;font-size:1.2rem;font-family:var(--font--title);font-weight:700}.title.svelte-1w50j5m svg{height:25px;width:25px}.tags.svelte-1w50j5m{display:flex;align-items:center;gap:5px;flex-wrap:wrap}.footer.svelte-1w50j5m{margin-top:20px}@media(max-width: 767px){.project-card .image{display:none}}.project-card figcaption{display:none}.project-card .image img{object-fit:cover}",
  map: null
};
const ProjectCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name } = $$props;
  let { description } = $$props;
  let { link } = $$props;
  let { image } = $$props;
  let { tags } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.link === void 0 && $$bindings.link && link !== void 0)
    $$bindings.link(link);
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  if ($$props.tags === void 0 && $$bindings.tags && tags !== void 0)
    $$bindings.tags(tags);
  $$result.css.add(css$2);
  return `${validate_component(Card, "Card").$$render(
    $$result,
    {
      additionalClass: "project-card",
      href: link
    },
    {},
    {
      footer: () => {
        return `<div class="footer svelte-1w50j5m" slot="footer">${tags && tags.length > 0 ? `<div class="tags svelte-1w50j5m">${each(tags, (tag) => {
          return `${validate_component(Tag, "Tag").$$render($$result, { color: tag.color }, {}, {
            default: () => {
              return `${escape(tag.label)}`;
            }
          })}`;
        })}</div>` : ``}</div>`;
      },
      content: () => {
        return `<div class="content svelte-1w50j5m" slot="content"><div class="title svelte-1w50j5m"><span>${escape(name)}</span>
			${validate_component(Open, "Open").$$render($$result, {}, {}, {})}</div>
		<h6>${escape(description)}</h6></div>`;
      },
      image: () => {
        return `<div class="image" slot="image">${validate_component(Image, "Image").$$render(
          $$result,
          {
            src: image,
            alt: "Picture describing the " + name + " project"
          },
          {},
          {}
        )}</div>`;
      }
    }
  )}`;
});
const ParticlesBackground_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "#particles-js.svelte-257e0z{position:absolute;width:100%;height:100%;transform:translateY(-100px)}@media(max-width: 767px){#particles-js.svelte-257e0z{transform:translateY(0px)}}",
  map: null
};
const ParticlesBackground = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div id="particles-js" class="svelte-257e0z"></div>`;
});
const Projects_svelte_svelte_type_style_lang = "";
const css = {
  code: ".projects-container.svelte-1ixyf5e{width:100%;display:grid;grid-template-columns:1fr;grid-gap:20px;position:relative}.two-group-grid.svelte-1ixyf5e{width:100%;display:grid;grid-template-columns:repeat(2, 1fr);grid-gap:20px}@media(max-width: 767px){.two-group-grid.svelte-1ixyf5e{grid-template-columns:1fr}}",
  map: null
};
const Projects = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { projects } = $$props;
  if ($$props.projects === void 0 && $$bindings.projects && projects !== void 0)
    $$bindings.projects(projects);
  $$result.css.add(css);
  return `${validate_component(ContentSection, "ContentSection").$$render(
    $$result,
    {
      id: "projects",
      title: "<span style='color: #ff723f'>code</span>://work",
      description: "Here is some of my past work"
    },
    {},
    {
      default: () => {
        return `${validate_component(ParticlesBackground, "ParticlesBackground").$$render($$result, {}, {}, {})}
	<div class="projects-container svelte-1ixyf5e"><div class="two-group-grid svelte-1ixyf5e">${each(projects, (project) => {
          return `${validate_component(ProjectCard, "ProjectCard").$$render(
            $$result,
            {
              name: project.name,
              description: project.description,
              link: project.link,
              image: project.image,
              tags: project.tags
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
  let { projects, posts } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="container">${validate_component(Hero, "Hero").$$render($$result, {}, {}, {})}
	${validate_component(About, "About").$$render($$result, {}, {}, {})}
	${validate_component(Projects, "Projects").$$render($$result, { projects }, {}, {})}
	${posts && posts.length > 0 ? `${validate_component(RecentPosts, "RecentPosts").$$render($$result, { posts }, {}, {})}` : ``}</div>`;
});
export {
  Page as default
};
