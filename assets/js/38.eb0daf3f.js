(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{417:function(t,a,s){t.exports=s.p+"assets/img/1.c0c19287.jpg"},535:function(t,a,s){"use strict";s.r(a);var r=s(24),e=Object(r.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"前端性能优化知识体系导读"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#前端性能优化知识体系导读"}},[t._v("#")]),t._v(" 前端性能优化知识体系导读")]),t._v(" "),r("p",[t._v("从一道面试题说起")]),t._v(" "),r("h2",{attrs:{id:"从输入-url-到页面加载完成-发生了什么"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#从输入-url-到页面加载完成-发生了什么"}},[t._v("#")]),t._v(" 从输入 URL 到页面加载完成，发生了什么？")]),t._v(" "),r("ol",[r("li",[t._v("DNS (域名解析系统) 将 URL 解析为对应的 IP 地址")]),t._v(" "),r("li",[t._v("利用该 IP 地址和服务器建立 TCP 网络连接")]),t._v(" "),r("li",[t._v("客户端向服务端发起 HTTP 请求")]),t._v(" "),r("li",[t._v("服务端处理完请求后把目标数据放在 HTTP 响应中返回给客户端")]),t._v(" "),r("li",[t._v("拿到响应数据的浏览器开始渲染页面，渲染完毕，页面呈现给用户，并时刻等待用户操作")])]),t._v(" "),r("p",[t._v("性能优化的方案也就是从上述这 5 个过程进行考虑。")]),t._v(" "),r("h2",{attrs:{id:"网络层面的性能优化"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#网络层面的性能优化"}},[t._v("#")]),t._v(" 网络层面的性能优化")]),t._v(" "),r("h3",{attrs:{id:"优化-dns-解析时间"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#优化-dns-解析时间"}},[t._v("#")]),t._v(" 优化 DNS 解析时间")]),t._v(" "),r("ul",[r("li",[t._v("浏览器 DNS 缓存")])]),t._v(" "),r("p",[t._v("查看 Chrome 的 DNS 缓存: chrome://net-internals/#dns 这里可以看各域名的 DNS 缓存时间。chrome 对每个域名会默认缓存 60s。")]),t._v(" "),r("ul",[r("li",[t._v("DNS prefetch(DNS 预解析)")])]),t._v(" "),r("p",[t._v("DNS Prefetch 应该尽量的放在网页的前面，推荐放在 "),r("code",[t._v('<meta charset="UTF-8">')]),t._v("后面。具体使用方法如下：")]),t._v(" "),r("div",{staticClass:"language-html extra-class"},[r("pre",{pre:!0,attrs:{class:"language-html"}},[r("code",[r("span",{pre:!0,attrs:{class:"token tag"}},[r("span",{pre:!0,attrs:{class:"token tag"}},[r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),r("span",{pre:!0,attrs:{class:"token attr-value"}},[r("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("dns-prefetch"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),r("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),r("span",{pre:!0,attrs:{class:"token attr-value"}},[r("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("//www.xxxxx.net"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),r("h3",{attrs:{id:"优化-tcp-请求的时间"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#优化-tcp-请求的时间"}},[t._v("#")]),t._v(" 优化 TCP 请求的时间")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("长连接")])]),t._v(" "),r("li",[r("p",[t._v("预连接")])]),t._v(" "),r("li",[r("p",[t._v("SPDY")])])]),t._v(" "),r("h3",{attrs:{id:"优化-http-请求"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#优化-http-请求"}},[t._v("#")]),t._v(" 优化 HTTP 请求")]),t._v(" "),r("p",[t._v("减少 HTTP 请求次数，减少请求体积")]),t._v(" "),r("p",[t._v("部署静态资源的时候利用 CDN 服务器")]),t._v(" "),r("h2",{attrs:{id:"浏览器层面的性能优化"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#浏览器层面的性能优化"}},[t._v("#")]),t._v(" 浏览器层面的性能优化")]),t._v(" "),r("h3",{attrs:{id:"资源加载优化"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#资源加载优化"}},[t._v("#")]),t._v(" 资源加载优化")]),t._v(" "),r("h3",{attrs:{id:"服务端渲染"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#服务端渲染"}},[t._v("#")]),t._v(" 服务端渲染")]),t._v(" "),r("h3",{attrs:{id:"浏览器缓存机制"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#浏览器缓存机制"}},[t._v("#")]),t._v(" 浏览器缓存机制")]),t._v(" "),r("h3",{attrs:{id:"dom-树构建"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#dom-树构建"}},[t._v("#")]),t._v(" DOM 树构建")]),t._v(" "),r("h3",{attrs:{id:"网页排版和渲染过程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#网页排版和渲染过程"}},[t._v("#")]),t._v(" 网页排版和渲染过程")]),t._v(" "),r("h3",{attrs:{id:"回流和重绘"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#回流和重绘"}},[t._v("#")]),t._v(" 回流和重绘")]),t._v(" "),r("h3",{attrs:{id:"dom-操作的合理规避"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#dom-操作的合理规避"}},[t._v("#")]),t._v(" DOM 操作的合理规避")]),t._v(" "),r("h2",{attrs:{id:"思维导图"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#思维导图"}},[t._v("#")]),t._v(" 思维导图")]),t._v(" "),r("p",[r("img",{attrs:{src:s(417),alt:"思维导图"}})])])}),[],!1,null,null,null);a.default=e.exports}}]);