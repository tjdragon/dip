(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{168:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(180),c=t(202),i=t(175);var o=function(e){var a=e.nextItem,t=e.prevItem;return r.a.createElement("nav",{className:"pagination-nav"},r.a.createElement("div",{className:"pagination-nav__item"},t&&r.a.createElement(i.a,{className:"pagination-nav__link",to:t.permalink},r.a.createElement("div",{className:"pagination-nav__link--sublabel"},"Previous Post"),r.a.createElement("div",{className:"pagination-nav__link--label"},"\xab ",t.title))),r.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},a&&r.a.createElement(i.a,{className:"pagination-nav__link",to:a.permalink},r.a.createElement("div",{className:"pagination-nav__link--sublabel"},"Next Post"),r.a.createElement("div",{className:"pagination-nav__link--label"},a.title," \xbb"))))};a.default=function(e){var a=e.content,t=a.frontMatter,n=a.metadata;return r.a.createElement(l.a,{title:n.title,description:n.description},a&&r.a.createElement("div",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--8 col--offset-2"},r.a.createElement(c.a,{frontMatter:t,metadata:n,isBlogPostPage:!0},r.a.createElement(a,null)),(n.nextItem||n.prevItem)&&r.a.createElement("div",{className:"margin-vert--xl"},r.a.createElement(o,{nextItem:n.nextItem,prevItem:n.prevItem}))))))}},180:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(184),c=t(174),i=t(169),o=t(170),s=t(189),m=t(188),u=t(185),p=t(171),E=t(12),v=t.n(E),d=(t(23),t(18),t(19),t(79),t(172)),f=t.n(d),g=t(132),b=t.n(g),k={DEFAULT:"default",CTA:"cta"},N=function(e){var a,t=e.isExternal,n=e.label,l=e.to,i=e.type,s=Object(c.a)(l)?Object(o.a)(l):l;return r.a.createElement("li",{className:f()(b.a.root,b.a[i],(a={},a[b.a.active]=Object(c.a)(s),a))},r.a.createElement("a",{href:s,target:t?"_blank":"_self"},n))};N.propTypes={isExternal:v.a.bool,label:v.a.string.isRequired,type:v.a.oneOf(Object.values(k)),to:v.a.string.isRequired},N.defaultProps={isExternal:!1,type:k.DEFAULT};var h=N,y=t(133),_=t.n(y),O=t(131),P=t.n(O),j=function(){var e=Object(i.a)().siteConfig.themeConfig.navbar,a=e.cornerLink,t=e.primaryLinks,n=e.logo;return r.a.createElement("div",{className:_.a.root},r.a.createElement("a",{className:P.a.logo,href:n.href},r.a.createElement("img",{alt:n.alt,src:Object(o.a)(n.src)})),r.a.createElement("ul",{className:_.a.right},t.map((function(e){var a=e.isExternal,t=e.label,n=e.to;return r.a.createElement(h,{key:t,isExternal:a,label:t,to:n})})),r.a.createElement(h,{className:_.a["corner-link"],label:a.label,to:a.href,type:k.CTA})))},M=t(134),w=t.n(M),x=function(e){var a,t=e.children,l=e.links;e.onClick;return Object(n.useEffect)((function(){a.addEventListener("click",(function(e){e.stopPropagation()}))})),r.a.createElement("div",{className:w.a.root,ref:function(e){return a=e}},r.a.createElement("div",{className:w.a.menu},l.map((function(e){var a=e.isExternal,t=e.label,n=e.to;return r.a.createElement(h,{key:t,isExternal:a,label:t,to:n})})),t))};x.propTypes={links:v.a.array.isRequired};var C=x,I=t(135),L=t.n(I),T=function(e){var a,t=e.cb,l=e.closeIcon,c=e.isOpen,i=e.openIcon,o=Object(n.useRef)(null);return o.current=c,Object(n.useEffect)((function(){a.addEventListener("click",(function(e){o.current||(e.stopPropagation(),t())}))}),[]),r.a.createElement("img",{className:L.a.root,ref:function(e){return a=e},src:c?l:i})},S=t(136),B=t.n(S),R=function(e){var a=e.activePopupMenu,t=e.setPopupMenu,n=Object(i.a)().siteConfig.themeConfig.navbar,l=n.cornerLink,c=n.primaryLinks,s=n.logo;return r.a.createElement("div",{className:B.a.root},r.a.createElement("div",{className:B.a.mainContainer},r.a.createElement(T,{cb:function(){t("primary")},closeIcon:Object(o.a)("img/close.svg"),isOpen:"primary"===a,openIcon:Object(o.a)("img/vertical-ellipse.svg")}),r.a.createElement("a",{href:s.href},r.a.createElement("img",{alt:s.alt,className:P.a.logo,src:Object(o.a)(s.src)})),r.a.createElement("a",{href:l.href},r.a.createElement("img",{src:Object(o.a)(l.image.src)}))),"primary"===a&&r.a.createElement(C,{links:c}))};R.propTypes={activePopupMenu:v.a.string,setPopupMenu:v.a.func.isRequired};var q=R,z=t(137),A=t.n(z),D=function(e){var a=e.activePopupMenu,t=e.setPopupMenu;return r.a.createElement("div",{className:A.a.root},r.a.createElement("div",{className:"width-wrapper"},r.a.createElement(p.Breakpoint,{medium:!0,down:!0},r.a.createElement(q,{activePopupMenu:a,setPopupMenu:t})),r.a.createElement(p.Breakpoint,{large:!0,up:!0},r.a.createElement(j,null))))};D.propTypes={activePopupMenu:v.a.string,setPopupMenu:v.a.func.isRequired};var H=D,F=(t(176),t(177)),G=t(138),J=t.n(G),U=function(){return r.a.createElement("div",{className:J.a.root},r.a.createElement("span",{className:J.a.primary},r.a.createElement("b",null,"Developers")),r.a.createElement("span",{className:J.a.divider}," / "),r.a.createElement("span",{className:J.a.secondary},"Governance"))},K=t(139),Q=t.n(K),V=function(){var e=Object(i.a)().siteConfig.themeConfig,a=Object(n.useState)(!1),t=a[0],l=a[1],c=e.navbar.secondaryLinks;return r.a.createElement("div",{className:Q.a.root},r.a.createElement(U,null),r.a.createElement("div",{className:Q.a.right},c.map((function(e){var a=e.isExternal,t=e.label,n=e.to;return r.a.createElement(h,{key:t,isExternal:a,label:t,to:n})})),r.a.createElement("div",{className:Q.a.search},r.a.createElement(F.a,{handleSearchBarToggle:l,isSearchBarExpanded:t}))))},W=t(140),X=t.n(W),Y=function(e){var a=e.activePopupMenu,t=e.setPopupMenu,l=Object(i.a)().siteConfig.themeConfig,c=Object(n.useState)(!1),s=c[0],m=c[1],u=l.navbar,p=(u.cornerLink,u.secondaryLinks);u.logo;return r.a.createElement("div",null,r.a.createElement("div",{className:X.a.mainContainer},r.a.createElement(U,null),r.a.createElement(T,{cb:function(){t("secondary")},closeIcon:Object(o.a)("img/chevron-pressed.svg"),isOpen:"secondary"===a,openIcon:Object(o.a)("img/chevron-down.svg")})),"secondary"===a&&r.a.createElement(C,{links:p,onClick:function(e){return e.stopPropagation()}},r.a.createElement("div",{className:X.a.search},r.a.createElement(F.a,{handleSearchBarToggle:m,isSearchBarExpanded:s}))))};Y.propTypes={activePopupMenu:v.a.string,setPopupMenu:v.a.func.isRequired};var Z=Y,$=t(141),ee=t.n($),ae=function(e){var a=e.activePopupMenu,t=e.setPopupMenu;return r.a.createElement("div",{className:ee.a.root},r.a.createElement("div",{className:"width-wrapper"},r.a.createElement(p.Breakpoint,{medium:!0,down:!0},r.a.createElement(Z,{activePopupMenu:a,setPopupMenu:t})),r.a.createElement(p.Breakpoint,{large:!0,up:!0},r.a.createElement(V,null))))};ae.propTypes={activePopupMenu:v.a.string,setPopupMenu:v.a.func.isRequired};var te=ae,ne=t(142),re=t.n(ne);Object(p.setDefaultBreakpoints)([{small:parseInt(re.a["small-mobile-breakpoint-size"])},{medium:parseInt(re.a["medium-tablet-breakpoint-size"])},{large:parseInt(re.a["large-tablet-breakpoint-size"])},{xlarge:parseInt(re.a["larget-desktop-breakpoint-size"])}]);var le=function(){var e=Object(n.useState)(null),a=e[0],t=e[1],l=function(e){t(e),null!==e&&document.querySelector("body").addEventListener("click",(function(){t(null)}),{once:!0})};return r.a.createElement(p.BreakpointProvider,null,r.a.createElement("nav",{className:P.a.root},r.a.createElement(H,{activePopupMenu:a,setPopupMenu:l}),r.a.createElement(te,{activePopupMenu:a,setPopupMenu:l})))},ce=t(1),ie=t(9),oe=t(175),se=t(143),me=t.n(se),ue=t(186),pe=t(187);function Ee(e){var a=e.to,t=e.href,n=e.label,l=Object(ie.a)(e,["to","href","label"]),c=Object(o.a)(a);return r.a.createElement(oe.a,Object(ce.a)({className:"footer__link-item"},t?{target:"_blank",rel:"noopener noreferrer",href:t}:{to:c},l),n)}var ve=function(e){var a=e.url,t=e.alt;return r.a.createElement("img",{alt:t,className:f()("footer__logo",me.a.logo),src:a})},de=function(e){var a=e.children,t=e.title;return r.a.createElement("div",{className:f()("col footer__col",me.a.linkSection)},r.a.createElement("h4",{className:f()("footer__title",me.a.title)},t),r.a.createElement("ul",{className:"footer__items"},a))},fe=function(e){var a=e.items,t=e.title;return r.a.createElement(de,{title:t},a.map((function(e,a){return e.html?r.a.createElement("li",{key:a,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):r.a.createElement("li",{key:e.href||e.to,className:"footer__item"},r.a.createElement(Ee,e))})))};var ge=function(){var e=Object(i.a)().siteConfig,a=void 0===e?{}:e,t=a.themeConfig,n=void 0===t?{}:t,l=a.projectName,c=n.footer,s=c||{},m=s.copyright,u=s.links,p=void 0===u?[]:u,E=s.logo,v=void 0===E?{}:E,d=s.social,g=void 0===d?{}:d,b=g.twitterHandle,k=g.githubRepo,N=Object(o.a)(v.src);if(!c)return null;for(var h=[],y=0;y<p.length;y+=2)h.push(r.a.createElement("div",{key:y,className:me.a.linkColumn},r.a.createElement(fe,{items:p[y].items,title:p[y].title}),p[y+1]&&r.a.createElement(fe,{items:p[y+1].items,title:p[y+1].title})));return r.a.createElement("footer",{className:f()("footer",{"footer--dark":"dark"===c.style})},r.a.createElement("div",{className:"container"},p&&p.length>0&&r.a.createElement("div",{className:"row footer__links"},v.href?r.a.createElement("a",{href:v.href,target:"_blank",rel:"noopener noreferrer",className:me.a.footerLogoLink},r.a.createElement(ve,{alt:v.alt,url:N})):r.a.createElement(ve,{alt:v.alt,url:N}),h,r.a.createElement("div",{className:me.a.linkColumn},r.a.createElement(de,{title:"Social"},b&&r.a.createElement("li",{className:me.a.socialLink},r.a.createElement(ue.a,{"aria-label":"Star "+l+" on GitHub",className:me.a.github,"data-show-count":"true",href:k},l)),k&&r.a.createElement("li",{className:me.a.socialLink},r.a.createElement(pe.a,{className:me.a.twitter,options:{showCount:!1},screenName:b}))))),(v||m)&&r.a.createElement("div",{className:f()("text--center",me.a.copyright)},r.a.createElement("div",{dangerouslySetInnerHTML:{__html:m}}))))};t(144);a.a=function(e){var a=Object(i.a)().siteConfig,t=void 0===a?{}:a,n=t.favicon,p=t.title,E=t.themeConfig.image,v=t.url,d=e.children,f=e.title,g=e.noFooter,b=e.description,k=e.image,N=e.keywords,h=e.permalink,y=e.version,_=f?f+" | "+p:p,O=k||E,P=v+Object(o.a)(O);Object(c.a)(O)||(P=O);var j=Object(o.a)(n);return r.a.createElement(s.a,null,r.a.createElement(m.a,null,r.a.createElement(l.a,null,r.a.createElement("html",{lang:"en"}),_&&r.a.createElement("title",null,_),_&&r.a.createElement("meta",{property:"og:title",content:_}),n&&r.a.createElement("link",{rel:"shortcut icon",href:j}),b&&r.a.createElement("meta",{name:"description",content:b}),b&&r.a.createElement("meta",{property:"og:description",content:b}),y&&r.a.createElement("meta",{name:"docsearch:version",content:y}),N&&N.length&&r.a.createElement("meta",{name:"keywords",content:N.join(",")}),O&&r.a.createElement("meta",{property:"og:image",content:P}),O&&r.a.createElement("meta",{property:"twitter:image",content:P}),O&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+_}),h&&r.a.createElement("meta",{property:"og:url",content:v+h}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),r.a.createElement(u.a,null),r.a.createElement("div",null,r.a.createElement(le,null),r.a.createElement("div",{className:"nav-spacer"})),r.a.createElement("div",{className:"nav-pusher"},r.a.createElement("div",{className:"main-wrapper width-wrapper"},d),!g&&r.a.createElement(ge,null))))}}}]);