import 'cookie';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_BGg1yFaf.mjs';
import 'es-module-lexer';
import { h as decodeKey } from './chunks/astro/server_L1tqV2RT.mjs';
import 'clsx';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/yazidtalbi/yazid-portfolio/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"blog/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog","isIndex":true,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/index.astro","pathname":"/blog","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"index2/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/index2","isIndex":false,"type":"page","pattern":"^\\/index2\\/?$","segments":[[{"content":"index2","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/index2.astro","pathname":"/index2","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"rss.xml","links":[],"scripts":[],"styles":[],"routeData":{"route":"/rss.xml","isIndex":false,"type":"endpoint","pattern":"^\\/rss\\.xml\\/?$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.js","pathname":"/rss.xml","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://yazidtalbi.com","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/yazidtalbi/yazid-portfolio/src/pages/blog/index.astro",{"propagation":"in-tree","containsHead":true}],["/Users/yazidtalbi/yazid-portfolio/src/pages/index2.astro",{"propagation":"none","containsHead":true}],["/Users/yazidtalbi/yazid-portfolio/src/pages/blog/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["/Users/yazidtalbi/yazid-portfolio/src/pages/index.astro",{"propagation":"none","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/yazidtalbi/yazid-portfolio/src/pages/rss.xml.js",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/rss.xml@_@js",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/blog/index@_@astro":"pages/blog.astro.mjs","\u0000@astro-page:src/pages/index2@_@astro":"pages/index2.astro.mjs","\u0000@astro-page:src/pages/rss.xml@_@js":"pages/rss.xml.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/blog/[...slug]@_@astro":"pages/blog/_---slug_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-renderers":"renderers.mjs","/Users/yazidtalbi/yazid-portfolio/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","/Users/yazidtalbi/yazid-portfolio/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","/Users/yazidtalbi/yazid-portfolio/src/content/blog/first-post.md?astroContentCollectionEntry=true":"chunks/first-post_-PQSJbTy.mjs","/Users/yazidtalbi/yazid-portfolio/src/content/blog/markdown-style-guide.md?astroContentCollectionEntry=true":"chunks/markdown-style-guide_C1HSGoI3.mjs","/Users/yazidtalbi/yazid-portfolio/src/content/blog/second-post.md?astroContentCollectionEntry=true":"chunks/second-post_DzTdJXfR.mjs","/Users/yazidtalbi/yazid-portfolio/src/content/blog/third-post.md?astroContentCollectionEntry=true":"chunks/third-post_C1C0hGlJ.mjs","/Users/yazidtalbi/yazid-portfolio/src/content/blog/using-mdx.mdx?astroContentCollectionEntry=true":"chunks/using-mdx_CRG5mvFN.mjs","/Users/yazidtalbi/yazid-portfolio/src/content/blog/first-post.md?astroPropagatedAssets":"chunks/first-post_DpkBmGGs.mjs","/Users/yazidtalbi/yazid-portfolio/src/content/blog/markdown-style-guide.md?astroPropagatedAssets":"chunks/markdown-style-guide_CrM6soY9.mjs","/Users/yazidtalbi/yazid-portfolio/src/content/blog/second-post.md?astroPropagatedAssets":"chunks/second-post_Bj6pNh7k.mjs","/Users/yazidtalbi/yazid-portfolio/src/content/blog/third-post.md?astroPropagatedAssets":"chunks/third-post_BXxWTEsN.mjs","/Users/yazidtalbi/yazid-portfolio/src/content/blog/using-mdx.mdx?astroPropagatedAssets":"chunks/using-mdx_D3zFk5IU.mjs","\u0000astro:asset-imports":"chunks/_astro_asset-imports_D9aVaOQr.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_BcEe_9wP.mjs","/Users/yazidtalbi/yazid-portfolio/src/content/blog/first-post.md":"chunks/first-post_CMVx0MGi.mjs","/Users/yazidtalbi/yazid-portfolio/src/content/blog/markdown-style-guide.md":"chunks/markdown-style-guide_pXXd1xr4.mjs","/Users/yazidtalbi/yazid-portfolio/src/content/blog/second-post.md":"chunks/second-post_DrlTtoRe.mjs","/Users/yazidtalbi/yazid-portfolio/src/content/blog/third-post.md":"chunks/third-post_DNiznwx0.mjs","/Users/yazidtalbi/yazid-portfolio/src/content/blog/using-mdx.mdx":"chunks/using-mdx_D3inukWv.mjs","\u0000@astrojs-manifest":"manifest_DG45M4aF.mjs","/Users/yazidtalbi/yazid-portfolio/src/components/Hero.jsx":"_astro/Hero.BVRbTGSP.js","/Users/yazidtalbi/yazid-portfolio/src/components/ProjectCarousel.jsx":"_astro/ProjectCarousel.OsJRG5iw.js","@astrojs/react/client.js":"_astro/client.BIGLHmRd.js","/astro/hoisted.js?q=0":"_astro/hoisted.wqPyyImV.js","/astro/hoisted.js?q=1":"_astro/hoisted.Bc0Qc_hh.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/_slug_.CkASDwME.css","/_astro/about.BuSLiqJ_.css","/blog-placeholder-1.jpg","/blog-placeholder-2.jpg","/blog-placeholder-3.jpg","/blog-placeholder-4.jpg","/blog-placeholder-5.jpg","/blog-placeholder-about.jpg","/enhanced.png","/facivon.svg","/favicon.svg","/frame.png","/gradient.png","/sign.svg","/sparkle-y.svg","/sparkle.svg","/star.svg","/yzd.png","/yzd.svg","/_astro/Hero.BVRbTGSP.js","/_astro/ProjectCarousel.OsJRG5iw.js","/_astro/client.BIGLHmRd.js","/_astro/hoisted.Bc0Qc_hh.js","/_astro/hoisted.wqPyyImV.js","/_astro/index.DhYZZe0J.js","/_astro/jsx-runtime.7faW4zRM.js","/fonts/HelveticaNeue-Heavy.woff","/fonts/HelveticaNeue-Light.woff","/fonts/HelveticaNeue-Medium.woff","/fonts/atkinson-bold.woff","/fonts/atkinson-regular.woff","/projects/zeze.jpg","/projects/zeze.svg","/projects/folklore/1.png","/projects/folklore/2.png","/projects/folklore/3.png","/projects/knockout/knockout-social.jpg","/projects/onseek/1.pdf","/projects/onseek/1.webp","/projects/onseek/2.pdf","/projects/onseek/2.webp","/projects/onseek/3.jpg","/projects/pvenergy/1.png","/projects/pvenergy/2.png","/projects/pvenergy/3.png","/projects/selenitis/1.jpg","/projects/selenitis/2.jpg","/projects/selenitis/3.jpg","/projects/vf/2.png","/projects/vf/22.png","/projects/vf/3.png","/projects/vf/4.png","/projects/vf/4.webp","/projects/vf/dashboard1.jpg","/projects/vf/dashboard1.webp","/projects/vf/dashboard2.jpg","/projects/vf/dashboard2.webp","/projects/vf/main.png","/projects/vf/overview.jpg","/projects/vf/request a quote.pdf","/projects/vf/request.jpg","/projects/vf/request.png","/projects/zemium/1.jpg","/projects/zemium/1.pdf","/projects/zemium/1.svg","/projects/zemium/1.webp","/projects/zemium/2.jpg","/projects/zemium/3.jpg","/projects/zemium/3.pdf","/projects/zemium/3.png","/projects/zemium/4.pdf","/projects/zemium/5.webp","/about/index.html","/blog/index.html","/index2/index.html","/rss.xml","/index.html"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"Qc0FKX+cZWuvt9syX2WbqXx87d/Th6uh5/jjHOtysAA=","experimentalEnvGetSecretEnabled":false});

export { manifest };
