import { c as create_ssr_component } from "./index2.js";
const metadata = {
  "slug": "steamdeck-modded-fallout4",
  "title": "Installing Fallout 4 A StoryWealth Collection on Steam Deck",
  "date": "2023-04-22T21:55:27.154Z",
  "excerpt": "How to add the most popular collection on Nexusmods for Fallout 4 to your Steamdeck",
  "coverImage": "/images/posts/steamdeckfallout4.webp",
  "tags": [
    "Documentation",
    "Steam Deck",
    "Fallout 4",
    "A StoryWealth Collection",
    "NexusMods"
  ],
  "hidden": false
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<p>Welcome, fellow Wasteland Hombres! This guide will walk you through the process of installing the most endorsed Collection for Fallout 4 on Nexusmods: <a href="https://www.nexusmods.com/fallout4/articles/3375/" rel="nofollow">Fallout 4: A StoryWealth</a>. Let’s get started!</p>
<h2 id="prerequisites"><a class="heading-link" title="Permalink" aria-hidden="true" href="#prerequisites"><span>#</span></a>Prerequisites</h2>
<p>Before we begin, please note that on April 25th, a big next-gen Fallout 4 Update will be released. To avoid updates ruining your mod collections, please refer to <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" rel="nofollow">this video</a> on how to disable Steam updates for specific titles.</p>
<ol><li><p>Install a clean copy of Fallout 4 without the HD pack DLC, and run it once to configure all folders and ini files. You don’t need to start a new game at this point.</p></li>
<li><p>Switch to desktop mode on your Steam Deck.</p></li>
<li><p>Open a browser and navigate to <a href="https://github.com/pikdum/steam-deck" rel="nofollow">https://github.com/pikdum/steam-deck</a>.</p></li>
<li><p>Follow the instructions to install Pikdum’s Steamdeck tools. Finish by installing, running, and configuring Vortex as explained on the web page. Use the desktop shortcuts instead of the command line for easier setup.</p></li></ol>
<h2 id="installing-the-collection"><a class="heading-link" title="Permalink" aria-hidden="true" href="#installing-the-collection"><span>#</span></a>Installing the Collection</h2>
<ol><li><p>Launch Vortex and follow the guide from the Nexusmods page.</p></li>
<li><p>After completing step 7 of the mod installation, go to the mods tab and disable “Interior NavCut Fix” (which breaks loading saved games) and “MCM Booster”. Additionally, download and install the “no multi-threaded” version of “Interior NavCut Fix” for optimal performance on the Steam Deck.</p></li>
<li><p>Continue following the guide until Step 11.</p></li></ol>
<h2 id="configuring-bethini"><a class="heading-link" title="Permalink" aria-hidden="true" href="#configuring-bethini"><span>#</span></a>Configuring BethINI</h2>
<ol><li><p>At Step 11, you’ll need to install Protontricks from the Discover store to apply BethINI edits.</p></li>
<li><p>Once Protontricks is installed, launch BethINI.exe directly. A Protontricks prompt will appear, asking which prefix you want to run BethINI with. Choose Fallout4.</p></li>
<li><p>Use BethINI as directed in the Collection install guide.</p></li></ol>
<h2 id="finalizing-the-setup"><a class="heading-link" title="Permalink" aria-hidden="true" href="#finalizing-the-setup"><span>#</span></a>Finalizing the Setup</h2>
<ol><li><p>Close Vortex and run the “Fallout 4 Post-Deploy” shortcut installed by Pikdum’s tools on your desktop. This will ensure that Steam launches F4SE correctly.</p></li>
<li><p>If everything went smoothly, run Fallout 4 from Steam, either through the app or by running the “Return to Gaming Mode” shortcut and launching Fallout 4 from the normal Steam Deck interface.</p></li></ol>
<p>Congratulations! You’re now ready to embark on your Fallout 4: A StoryWealth adventure on your Steam Deck. Have fun, fellow Steamdeck users!</p>`;
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
