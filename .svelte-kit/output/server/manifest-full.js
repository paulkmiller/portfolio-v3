export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicons/.DS_Store","favicons/android-chrome-192x192.png","favicons/android-chrome-512x512.png","favicons/apple-touch-icon.png","favicons/browserconfig.xml","favicons/favicon-16x16.png","favicons/favicon-32x32.png","favicons/favicon.ico","favicons/favicon.png","favicons/manifest.json","favicons/safari-pinned-tab.svg","favicons/site.webmanifest","fonts/jetbrains-mono-v18-latin-300.woff","fonts/jetbrains-mono-v18-latin-300.woff2","fonts/jetbrains-mono-v18-latin-500.woff","fonts/jetbrains-mono-v18-latin-500.woff2","fonts/jetbrains-mono-v18-latin-600.woff","fonts/jetbrains-mono-v18-latin-600.woff2","fonts/jetbrains-mono-v18-latin-700.woff","fonts/jetbrains-mono-v18-latin-700.woff2","fonts/jetbrains-mono-v18-latin-regular.woff","fonts/jetbrains-mono-v18-latin-regular.woff2","fonts/space-grotesk-v15-latin-300.woff","fonts/space-grotesk-v15-latin-300.woff2","fonts/space-grotesk-v15-latin-500.woff","fonts/space-grotesk-v15-latin-500.woff2","fonts/space-grotesk-v15-latin-600.woff","fonts/space-grotesk-v15-latin-600.woff2","fonts/space-grotesk-v15-latin-700.woff","fonts/space-grotesk-v15-latin-700.woff2","fonts/space-grotesk-v15-latin-regular.woff","fonts/space-grotesk-v15-latin-regular.woff2","images/.DS_Store","images/pic1.gif","images/posts/.DS_Store","images/posts/bigcat_and_littlecat.avif","images/posts/bigcat_and_littlecat.jpeg","images/posts/bigcat_and_littlecat.png","images/posts/bigcat_and_littlecat.webp","images/posts/colorado.avif","images/posts/colorado.jpg","images/posts/colorado.png","images/posts/colorado.webp","images/posts/kristen_and_bigcat.avif","images/posts/kristen_and_bigcat.jpeg","images/posts/kristen_and_bigcat.png","images/posts/kristen_and_bigcat.webp","images/posts/kristen_and_littlecat.avif","images/posts/kristen_and_littlecat.jpeg","images/posts/kristen_and_littlecat.png","images/posts/kristen_and_littlecat.webp","images/posts/mt-sherman.avif","images/posts/mt-sherman.jpeg","images/posts/mt-sherman.png","images/posts/mt-sherman.webp","images/posts/steamdeckfallout4.avif","images/posts/steamdeckfallout4.png","images/posts/steamdeckfallout4.webp","images/projects/.DS_Store","images/projects/Grafik.avif","images/projects/Grafik.png","images/projects/Grafik.webp","images/projects/Jumpcloud.avif","images/projects/Jumpcloud.png","images/projects/Jumpcloud.webp","images/projects/MultiplyingGood.avif","images/projects/MultiplyingGood.png","images/projects/MultiplyingGood.webp","images/projects/PoliticoPro.avif","images/projects/PoliticoPro.png","images/projects/PoliticoPro.webp","images/projects/customer.png","images/projects/paulHealth.avif","images/projects/paulHealth.png","images/projects/paulHealth.webp","images/site-preview.avif","images/site-preview.png","images/site-preview.webp","sounds/click.ogg"]),
	mimeTypes: {".png":"image/png",".xml":"application/xml",".json":"application/json",".svg":"image/svg+xml",".webmanifest":"application/manifest+json",".woff":"font/woff",".woff2":"font/woff2",".gif":"image/gif",".avif":"image/avif",".jpeg":"image/jpeg",".webp":"image/webp",".jpg":"image/jpeg",".ogg":"audio/ogg"},
	_: {
		client: {"start":"_app/immutable/entry/start.699bcf32.js","app":"_app/immutable/entry/app.805f5df8.js","imports":["_app/immutable/entry/start.699bcf32.js","_app/immutable/chunks/index.b223fad9.js","_app/immutable/chunks/index.3f3d9422.js","_app/immutable/entry/app.805f5df8.js","_app/immutable/chunks/index.b223fad9.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js'))
		],
		routes: [
			{
				id: "/(waves)",
				pattern: /^\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/(waves)/404",
				pattern: /^\/404\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/(waves)/blog",
				pattern: /^\/blog\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/(blog-article)/moving-to-colorado",
				pattern: /^\/moving-to-colorado\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/rss.xml",
				pattern: /^\/rss\.xml\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/rss.xml/_server.ts.js'))
			},
			{
				id: "/(blog-article)/steamdeck-modded-fallout4",
				pattern: /^\/steamdeck-modded-fallout4\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
