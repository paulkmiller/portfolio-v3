import { c as create_ssr_component, b as escape, a as add_attribute, o as onDestroy, e as each, v as validate_component, g as add_styles, h as null_to_empty } from "../../../chunks/index2.js";
import { B as Button } from "../../../chunks/Button.js";
import { S as Socials, E as Email } from "../../../chunks/Socials.js";
import { I as Image } from "../../../chunks/Image.js";
import { C as ContentSection, B as BlogPostCard, a as Card, T as Tag } from "../../../chunks/ContentSection.js";
const Features = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="100%" height="100%" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 15v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4a2 2 0 012-2h4a2 2 0 012 2zM16 5v4a2 2 0 01-2 2h-4a2 2 0 01-2-2V5a2 2 0 012-2h4a2 2 0 012 2zM22 15v4a2 2 0 01-2 2h-4a2 2 0 01-2-2v-4a2 2 0 012-2h4a2 2 0 012 2zM6 16v-3M12 6V3M18 16v-3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>`;
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
const HeroImage_svelte_svelte_type_style_lang = "";
const css$7 = {
  code: "@keyframes svelte-wu8m8g-float{0%{transform:translateY(7px)}50%{transform:translateY(-7px)}100%{transform:translateY(7px)}}.img.svelte-wu8m8g{border-radius:349px;width:425px;height:425px;z-index:1;display:block;transition:width 0.4s var(--bezier-one), transform 0.4s var(--bezier-one);align-self:start;background-color:var(--neutral-one);background-size:cover;background-position:center;background-repeat:no-repeat}@media(max-width: 768px){.img.svelte-wu8m8g{display:none}}@media(max-width: 1240px){.img.svelte-wu8m8g{width:clamp(340px, 40vw, 425px);height:clamp(300px, 40vw, 400px)}}.img-container.svelte-wu8m8g{height:100%;z-index:1;animation:svelte-wu8m8g-float 6s ease-in-out infinite;animation-play-state:running;background-color:rgba(255, 255, 255, 0);padding:0%;border:0;place-self:center}@media(max-width: 1240px){.img-container.svelte-wu8m8g{display:flex;justify-content:center}}",
  map: null
};
const HeroImage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let xRotation;
  let yRotation;
  $$result.css.add(css$7);
  return `<div class="img-container svelte-wu8m8g"><img alt="" class="img svelte-wu8m8g"${add_styles({
    "background-image": `url(/images/pic1.gif)`,
    "transform": `perspective(500px) ${""} rotateX(${xRotation}deg) rotateY(${yRotation}deg)`,
    "align-self": `center`
  })}></div>`;
});
const SparklingHighlight_svelte_svelte_type_style_lang = "";
const css$6 = {
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
  $$result.css.add(css$6);
  return `${validate_component(Sparkles, "Sparkles").$$render($$result, { color: sparkleColor }, {}, {
    default: () => {
      return `<strong class="${escape(null_to_empty(color), true) + " svelte-8f8x6d"}">${slots.default ? slots.default({}) : ``}</strong>`;
    }
  })}`;
});
const DiscoverButton_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: 'button.svelte-deyrn6{font-size:100%;border-radius:16px;border:none;display:flex;position:relative;flex-direction:row;width:max-content;cursor:pointer;background-color:var(--neutral-one);transition:filter 0.2s var(--bezier-one), transform 0.5s var(--bezier-one);user-select:none;margin:0;padding:1rem 2rem;color:var(--yellow);font-weight:300;font-size:1.6rem;font-family:var(--font-two);letter-spacing:-0.075em;border:1px solid var(--neutral-four)}button.svelte-deyrn6:active{transform:scale(95%)}button.svelte-deyrn6:hover{filter:brightness(110%)}@media screen and (max-width: 868px){button.svelte-deyrn6{text-align:center;justify-content:center;padding:1rem 2rem;width:100%;font-size:clamp(1.1rem, 2vw, 1.9rem)}}.button-with-side.svelte-deyrn6{padding:1rem 2rem 1rem 3rem}.side.svelte-deyrn6{position:absolute;border-radius:16px 0 0 16px;top:0;left:0;content:"";height:100%;width:1.6rem;background-color:var(--yellow)}@media screen and (max-width: 868px){.side.svelte-deyrn6{display:none}}',
  map: null
};
const DiscoverButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { side = false } = $$props;
  if ($$props.side === void 0 && $$bindings.side && side !== void 0)
    $$bindings.side(side);
  $$result.css.add(css$5);
  return `<button class="${["svelte-deyrn6", side ? "button-with-side" : ""].join(" ").trim()}"><div class="${["svelte-deyrn6", side ? "side" : ""].join(" ").trim()}"></div>
	${slots.default ? slots.default({}) : ``}</button>`;
});
const Hero_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: "#hero.svelte-1943938.svelte-1943938{position:relative;display:grid;grid-template-columns:1fr 1fr;align-items:center;justify-content:space-between;padding-bottom:50px}@media(max-width: 767px){#hero.svelte-1943938 h1.svelte-1943938{text-align:center}}@media(max-width: 767px){}@media(max-width: 767px){#hero.svelte-1943938.svelte-1943938{grid-template-columns:1fr;justify-items:center;gap:20px;padding:40px 0 50px}}#hero.svelte-1943938 .info.svelte-1943938{display:flex;flex-direction:column;gap:20px}@media(max-width: 767px){#hero.svelte-1943938 .info h2.svelte-1943938{text-align:center}}@media(max-width: 767px){#hero.svelte-1943938 .info p.svelte-1943938{text-align:justify}}@media(max-width: 767px){#hero.svelte-1943938 .info.svelte-1943938{gap:20px}}#hero.svelte-1943938 .socials.svelte-1943938{display:flex;align-items:center;gap:15px}@media(max-width: 767px){#hero.svelte-1943938 .socials.svelte-1943938{justify-content:center;margin-bottom:10px}#hero.svelte-1943938 .socials span.svelte-1943938{display:none}}@media screen and (max-width: 1240px){h1.svelte-1943938.svelte-1943938{min-height:0vw;font-size:clamp(4rem, 10vw, 6.25rem)}}",
  map: null
};
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `<section id="hero" class="svelte-1943938"><div class="info svelte-1943938"><h1 class="svelte-1943938">Paul Miller</h1>
		<h2 class="svelte-1943938">I am a cat dad, gamer, and... 
			${validate_component(SparklingHighlight, "SparklingHighlight").$$render($$result, { color: "secondary" }, {}, {
    default: () => {
      return `Front End Developer!`;
    }
  })}</h2>
		<p class="svelte-1943938">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum velit voluptatibus commodi
			autem provident quam labore, libero beatae praesentium voluptate?
		</p>
		<div class="socials svelte-1943938"><span class="svelte-1943938">Socials:</span>
			${validate_component(Socials, "Socials").$$render($$result, {}, {}, {})}</div>
		${validate_component(DiscoverButton, "DiscoverButton").$$render($$result, { side: true }, {}, {
    default: () => {
      return `Discover my work ↓`;
    }
  })}</div>
	${validate_component(HeroImage, "HeroImage").$$render($$result, {}, {}, {})}
</section>`;
});
const Tooltip_svelte_svelte_type_style_lang = "";
const About_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "#about.svelte-42re4s.svelte-42re4s{position:relative;display:grid;grid-template-columns:1fr;align-items:center;justify-content:space-between;padding-bottom:50px;gap:50px}@media(max-width: 767px){#about.svelte-42re4s.svelte-42re4s{grid-template-columns:1fr;justify-items:center;gap:20px}}#about.svelte-42re4s .ctas.svelte-42re4s{display:flex;flex-wrap:wrap;align-items:center;gap:10px;width:100%}@media(max-width: 767px){}@media(max-width: 767px){#about.svelte-42re4s .info p.svelte-42re4s{text-align:justify}}@media(max-width: 767px){}@media(max-width: 767px){}",
  map: null
};
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<section id="about" class="wrapper svelte-42re4s"><div class="text">
		<p class="svelte-42re4s">For years, I have worked as a web developer primarily focused on the Frontend with JavaScript and its many frameworks, with pivots to Ruby on Rails, PHP / Wordpress / Pimcore, along with Vue &amp; Node. My experience ranges from small early stage startups to large enterprise level companies. Over time, I have been responsible for developing a range of different products including custom content management / live-service applications, brochure and multi-site applications, WCAG compliant frontend frameworks, spikes and subsequent epics, and been the frontrunner in various efforts towards making projects I am involved with as WCAG compliant as possible given time constraints.
		</p></div>
		<div class="ctas svelte-42re4s">${validate_component(Sparkles, "Sparkles").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Button, "Button").$$render($$result, { href: "#" }, {}, {
        icon: () => {
          return `${validate_component(Email, "EmailIcon").$$render($$result, { slot: "icon" }, {}, {})}`;
        },
        default: () => {
          return `Contact
				`;
        }
      })}`;
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
        return `${validate_component(Features, "FeaturesIcon").$$render($$result, { slot: "icon" }, {}, {})}`;
      },
      default: () => {
        return `Site Component Library
			`;
      }
    }
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
const ProjectCard_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".content.svelte-eilkw8{display:flex;flex-direction:column;gap:10px;align-items:flex-start}.title.svelte-eilkw8{display:flex;align-items:center;justify-content:space-between;width:100%;font-size:1.2rem;font-family:var(--font--title);font-weight:700}.tags.svelte-eilkw8{display:flex;align-items:center;gap:5px;flex-wrap:wrap}.footer.svelte-eilkw8{margin-top:20px}.project-card .image img{object-fit:cover}",
  map: null
};
const ProjectCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  return `${validate_component(Card, "Card").$$render($$result, { additionalClass: "project-card" }, {}, {
    footer: () => {
      return `<div class="footer svelte-eilkw8" slot="footer">${tags && tags.length > 0 ? `<div class="tags svelte-eilkw8">${each(tags, (tag) => {
        return `${validate_component(Tag, "Tag").$$render($$result, { color: tag.color }, {}, {
          default: () => {
            return `${escape(tag.label)}`;
          }
        })}`;
      })}</div>` : ``}</div>`;
    },
    content: () => {
      return `<div class="content svelte-eilkw8" slot="content"><div class="title svelte-eilkw8"><span>${escape(name)}</span></div>
		<p>${escape(description)}</p></div>`;
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
  })}`;
});
const Projects_svelte_svelte_type_style_lang = "";
const css = {
  code: ".projects-container.svelte-16zcv1a{width:100%;display:grid;grid-template-columns:1fr;grid-gap:20px}.three-group-grid.svelte-16zcv1a{width:100%;display:grid;grid-template-columns:2fr 1fr;grid-gap:20px}@media(max-width: 1085px){.three-group-grid.svelte-16zcv1a{grid-template-columns:1fr 1fr}}@media(max-width: 767px){.three-group-grid.svelte-16zcv1a{grid-template-columns:1fr}}@media(min-width: 1086px){.three-group-grid.svelte-16zcv1a>:nth-child(3n + 2){grid-row:span 2}}@media(max-width: 1085px){.three-group-grid.svelte-16zcv1a>:nth-child(3n + 1){grid-column:span 2}}@media(max-width: 900px){.three-group-grid.svelte-16zcv1a>:nth-child(3n + 1){grid-template-columns:1fr;grid-column:unset}}",
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
      title: "Projects",
      description: "Here are some of my projects."
    },
    {},
    {
      default: () => {
        return `<div class="projects-container svelte-16zcv1a"><div class="three-group-grid svelte-16zcv1a">${each(projects, (project) => {
          return `${validate_component(ProjectCard, "ProjectCard").$$render(
            $$result,
            {
              name: project.name,
              description: project.description,
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
