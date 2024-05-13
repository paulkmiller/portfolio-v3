import { c as create_ssr_component, b as escape, v as validate_component } from "./index2.js";
/* empty css                                     */const Alert = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="100%" height="100%" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 7L12 13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 17.01L12.01 16.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>`;
});
const Check = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="100%" height="100%" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 12.5L10 15.5L17 8.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>`;
});
const Info = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="100%" height="100%" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 11.5V16.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 7.51L12.01 7.49889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>`;
});
const Callout_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".callout-block.svelte-sxx0n0.svelte-sxx0n0{--bg-color:var(--color--page-background);--accent-color:transparent;--text-color:var(--color--text);margin:40px 0 30px;padding:25px 25px;border-top-right-radius:10px;border-bottom-right-radius:10px;background:var(--bg-color);color:var(--text-color);border-left:4px solid var(--accent-color);position:relative}.callout-block.svelte-sxx0n0 .icon-wrapper.svelte-sxx0n0{position:absolute;width:50px;height:50px;top:0;left:0;transform:translate(calc(-50% - 1.5px), -50%);background:var(--color--post-page-background);padding:8px;border-radius:50%;fill:var(--accent-color);color:var(--accent-color)}.callout-block.info.svelte-sxx0n0.svelte-sxx0n0{--bg-color:var(--color--callout-background--info);--accent-color:var(--color--callout-accent--info)}.callout-block.warning.svelte-sxx0n0.svelte-sxx0n0{--bg-color:var(--color--callout-background--warning);--accent-color:var(--color--callout-accent--warning)}.callout-block.error.svelte-sxx0n0.svelte-sxx0n0{--bg-color:var(--color--callout-background--error);--accent-color:var(--color--callout-accent--error)}.callout-block.success.svelte-sxx0n0.svelte-sxx0n0{--bg-color:var(--color--callout-background--success);--accent-color:var(--color--callout-accent--success)}",
  map: null
};
const Callout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { type = void 0 } = $$props;
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  $$result.css.add(css$1);
  return `<div class="${"callout-block " + escape(type ?? "", true) + " svelte-sxx0n0"}">${type ? `<div class="icon-wrapper svelte-sxx0n0">${type == "info" ? `${validate_component(Info, "Info").$$render($$result, {}, {}, {})}` : `${type == "warning" || type == "error" ? `${validate_component(Alert, "Alert").$$render($$result, {}, {}, {})}` : `${type == "success" ? `${validate_component(Check, "Check").$$render($$result, {}, {}, {})}` : ``}`}`}</div>` : ``}
	${slots.default ? slots.default({}) : ``}
</div>`;
});
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
const metadata = {
  "title": "Moving To Colorado",
  "slug": "moving-to-colorado",
  "coverImage": "/images/posts/colorado.webp",
  "excerpt": "Turns out, moving across the country in the dead of night, is not the best plan.",
  "date": "2024-05-08T21:07:09.628Z",
  "updated": "2024-05-08T21:07:09.628Z",
  "tags": ["Colorado", "Virginia", "Moving", "Deliverance"],
  "type": "default"
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<p>In 2022, my then girlfriend (now fiancé), and I decided to make the leap from living in Alexandria, Virginia to Denver, Colorado. For years, I had been colloquially dubbing Virginia, specifically NOVA, “the black hole of the East Coast”. I imagine many of my contemporaries living in expensive areas across the United States have similar names for their current homes as <a href="https://abcnews.go.com/Business/home-prices-soaring-bubble/story?id=110101842" rel="nofollow">housing prices continue to rise</a>, year over year, with seemingly no cap in sight and no action from Congress to curtail continued explosive growth in living costs. Full of hope and bravado from cursory glances at Redfin and Apartments.com, I convinced my fiancé, a life-long Coloradoan, to return to her home state so I could escape the muck and insane 90%+ humdity of Virginia and Washington D.C.</p>
<p>“Have you ever moved across the country like this?” I recall her asking. She was right to ask, of course, because I had only ever made these sorts of drastic location changes with very little to move. And even then, I’d wager most people would agree that moving a few hours away from home is hardly what qualifies as “drastic”. So, I poured myself into all the details, finding a moving company or hiring a Uhaul, how much to set aside for cleaning costs of our current apartment, what special considerations did I need for the cats we adopted, finding a place to live in Denver, and so on. With time, I checked each item off the list, and I was suddenly $10,000 poorer for it between deposits, moving costs, cleaning costs, hotel reservations, vet visits, cat stuff, and getting our aging cars much-needed maintenance. The last thing you want is to be caught with a dead vehicle in the black of night in some forgotten part of a state you’re passing through. </p>
${validate_component(Callout, "Callout").$$render($$result, { type: "info" }, {}, {
    default: () => {
      return `Sometimes, foreshadowing is relatively obvious...
`;
    }
  })}
<h2 id="the-move"><a class="heading-link" title="Permalink" aria-hidden="true" href="#the-move"><span>#</span></a>The Move</h2>
<p>If no one in your life loves you enough to warn you about how much of a nightmare moving can be towards the tail-end of packing up your stuff, let me be the one to say: The last 5% of your packing tasks takes just as long as the first 95%. It’s insane how much stuff you can accumulate over time! But after a same-day apartment cleaning service had finished with our apartment, we said goodbye to neighbors, packed up our cats with the bare essentials we thought we’d need for the first day or two at our new place before the moving company arrived, and set our sights westward. My fiancé and I have two cats, so we each took one, and hit the highway. We were admittedly not hustling as much as I had hoped, so we didn’t get going until ~ 2pm, so after a measily 6 hours of driving, we found ourselves going through West Virginia proper in the black of night. It was just around now that we both started to realize we hadn’t gassed up once and were both starting to get uncomfortably close to passing E. </p>
<p>And then my rear driver-side tire exploded. </p>
<p>I’m still not sure what kind of piece of metal or aluminum beast ran into my tire to leave it in a shattered mess, but I quickly radio’d to Kristen (walkie-talkies are more reliable than cellphones when driving through areas with spotty cell coverage) that I was dead in the water and needed to change out for my spare. I will always be grateful to my father for really locking in the need to have road flares with your spare in situations like this because the woods of West Virginia are vast and dense, which only helped add to the ambiance of a moonless night. My heart raced with a mixture of fear and determination. The dense woods seemed to close in around me, and the eerie sounds of unseen creatures filled the air. Kristen and I exchanged worried glances, both of us silently questioning whether we had made the right decision to embark on this cross-country journey.  I swear, the entire time I was working to change my tire out for the spare, all I could hear were banjo’s amongst the dense soundscape of chittering coyotoes or the <a href="https://en.wikipedia.org/wiki/Mothman#:~:text=Mothman%2C%20in%20West%20Virginian%20folklore,Creature%20..." rel="nofollow">Mothman</a> himself. Having been white-water rafting on the Chattooga River (where <a href="https://www.youtube.com/watch?v=pDlZLsJJkVA" rel="nofollow">Deliverance</a> was filmed), I couldn’t shake the image of a sign on the river that said <em>“If you hear banjos, paddle faster”</em> out of my minds eye. After slapping on the tire, kicking tight the lug nuts with my tire iron, tossing my destroyed tire where the spare used to live, we made for the nearest gas station where things started to calm down. </p>
<p>We decided to post up for the night once we made it to Lexington, Kentucky. The rest of the trip was honestly, thankfully, uneventful. During this trip, I was awe-struck at the incomprehensible vastness of the United States. I often rescinded into my mind as I imagined the fears and troubles colonial settlers must have experienced going Westward, and how wantonly they discarded and destroyed Native American wisdom and culture along the way in their self-appointed “manifest destiny”. But eventually, we made it— we were finally in Denver. </p>
<h2 id="denver-and-co"><a class="heading-link" title="Permalink" aria-hidden="true" href="#denver-and-co"><span>#</span></a>Denver and CO</h2>
<p>I am still awe-struck at the natural beauty of Colorado and its incredible biodiversity. Denver itself is surrounded on all sides by gorgeous mountains, which of course prompts many outdoors-loving individuals to experience nature through “14ers”. A “14er” is a mountain that ascenders to 14,000’ or higher in elevation and let me tell ya— there is no shortage of mountains to choose from in Colorado. One of the most memorable experiences during our time in Denver was conquering my first 14er, <a href="https://www.outdoortrailmaps.com/mount-sherman-14036-ft/" rel="nofollow">Mount Sherman</a>. The bottom of the trail is home to several abandoned mining stations, all rusted and decayed from decades of disuse, until the easily walkable dirt trails give way to a sea of stacked flat stones that make each step a calculated effort. I had forgotten what it was like to truly push myself to my physical limit since I stopped playing Rugby, but near the summit, my body began to give up as fatigue and colorie deficiency set in. A peanut-butter bar and a gatorade later, I joined Kristen for the last leg of the trek until we had finally made it to the top. As I stood at the summit, gasping for air in the thin mountain atmosphere, I felt a sense of accomplishment unlike anything I had ever experienced before. The view from the top was breathtaking, with endless peaks stretching out before me in every direction. I could feel the sun on my face and the wind in my hair, and for the half-hour we spent resting at the summit, all the challenges of the move seemed a distant afterthought.</p>
<p>Colorado itself is home to no “official” number of ecosystems. As stated on the <a href="https://www.coloradovirtuallibrary.org/resource-sharing/state-pubs-blog/colorados-ecosystems/" rel="nofollow">Colorado Virtual Library</a>, </p>
${validate_component(CodeBlock, "CodeBlock").$$render($$result, { lang: "markdown" }, {}, {
    default: () => {
      return `Colorado is the eighth largest state in the U.S. in terms of land area. It’s also one of the country’s most ecologically diverse states. Many people think of Colorado’s lands in three categories – mountain, plain, and plateau. But this is oversimplified – in fact, each of those can be further broken down into distinct ecological zones, each with their own unique topography, climate, vegetation, and wildlife habitat.
`;
    }
  })}
<p>Despite this, and despite our accomplishments, we found ourselves missing Virginia and the DMV area. We especially felt bad for our cats, who went from living as indoor/outdoor cats in a part of VA where they had no natural predators and could roam safely outside, with my trust that they’d come home when called, something that I trained them to do over the first 6 months of their lives with us. They were now confined to an apartment, less than 1000 square feet in size, with just me to keep them company as a remote worker. I also began to quickly miss the cultural diversity afforded to us by being so close to Washington D.C. and having immediate access to the truly world-class Metro in the DMV. But it was done and we had sunk too much money to have regrets, so we settled in, and spent 2 wonderful years in Colorado before it was off to the next adventure as Kristen transitioned into being a travelling Nurse. Now we’re in Arizona and soon after, we’ll be in Oregon. Who knows what’s next, but one thing is certain: I’m so glad we moved. If we hadn’t, we’d still likely be stuck in that black hole of a state, and I wouldn’t have conquered my first 14er, or learned how to fall on my ass 23 different ways while learning to ski. </p>
<p>Looking back on our decision to move to Denver, I realize now that it was about more than just escaping the b”lack hole of the East Coast”. It was about pushing ourselves out of our comfort zones, embracing new experiences, and discovering what we were truly capable of. The move tested our relationship, our resilience, and our sense of adventure, but in the end, it brought us closer together and taught us valuable lessons about ourselves and each other. To anyone considering a similar life change, I would say this: Don’t let fear hold you back. Embrace the unknown, take risks, and trust in your ability to adapt and grow. You never know what incredible experiences and opportunities await you on the other side.</p>`;
});
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Page,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  Page as P,
  __vite_glob_0_0 as _,
  metadata as m
};
