export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicons/.DS_Store","favicons/android-chrome-192x192.png","favicons/android-chrome-512x512.png","favicons/apple-touch-icon.png","favicons/browserconfig.xml","favicons/favicon-16x16.png","favicons/favicon-32x32.png","favicons/favicon.ico","favicons/favicon.png","favicons/manifest.json","favicons/safari-pinned-tab.svg","favicons/site.webmanifest","fonts/jetbrains-mono-v18-latin-300.woff","fonts/jetbrains-mono-v18-latin-300.woff2","fonts/jetbrains-mono-v18-latin-500.woff","fonts/jetbrains-mono-v18-latin-500.woff2","fonts/jetbrains-mono-v18-latin-600.woff","fonts/jetbrains-mono-v18-latin-600.woff2","fonts/jetbrains-mono-v18-latin-700.woff","fonts/jetbrains-mono-v18-latin-700.woff2","fonts/jetbrains-mono-v18-latin-regular.woff","fonts/jetbrains-mono-v18-latin-regular.woff2","fonts/space-grotesk-v15-latin-300.woff","fonts/space-grotesk-v15-latin-300.woff2","fonts/space-grotesk-v15-latin-500.woff","fonts/space-grotesk-v15-latin-500.woff2","fonts/space-grotesk-v15-latin-600.woff","fonts/space-grotesk-v15-latin-600.woff2","fonts/space-grotesk-v15-latin-700.woff","fonts/space-grotesk-v15-latin-700.woff2","fonts/space-grotesk-v15-latin-regular.woff","fonts/space-grotesk-v15-latin-regular.woff2","images/.DS_Store","images/pic1.gif","images/pic3.gif","images/posts/blog-posts.jpg","images/posts/colorado.jpg","images/posts/customization.jpg","images/posts/frontmatter-preview-dashboard.png","images/posts/frontmatter-preview-edit.png","images/posts/project-structure.jpg","images/projects/.DS_Store","images/projects/Grafik.png","images/projects/Jumpcloud.png","images/projects/MultiplyingGood.png","images/projects/PoliticoPro.png","images/projects/paulHealth.png","images/site-preview.png","sounds/click.ogg"]),
	mimeTypes: {".png":"image/png",".xml":"application/xml",".json":"application/json",".svg":"image/svg+xml",".webmanifest":"application/manifest+json",".woff":"font/woff",".woff2":"font/woff2",".gif":"image/gif",".jpg":"image/jpeg",".ogg":"audio/ogg"},
	_: {
		client: {"start":"_app/immutable/entry/start.b5f9b20b.js","app":"_app/immutable/entry/app.fb5ad49d.js","imports":["_app/immutable/entry/start.b5f9b20b.js","_app/immutable/chunks/index.b3dbe48f.js","_app/immutable/chunks/index.1bd5ef1d.js","_app/immutable/entry/app.fb5ad49d.js","_app/immutable/chunks/index.b3dbe48f.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
