(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{458:function(t,a,s){"use strict";s.r(a);var e=s(24),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"xss-攻击"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#xss-攻击"}},[t._v("#")]),t._v(" XSS 攻击")]),t._v(" "),s("h2",{attrs:{id:"什么是-xss-攻击"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是-xss-攻击"}},[t._v("#")]),t._v(" 什么是 XSS 攻击？")]),t._v(" "),s("p",[t._v("XSS 全称是 Cross Site Scripting(即跨站脚本)，为了和 CSS 区分，故叫它XSS。XSS 攻击是指浏览器中执行恶意脚本(无论是跨域还是同域)，从而拿到用户的信息并进行操作。")]),t._v(" "),s("p",[t._v("这些操作一般可以完成下面这些事情:")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("窃取Cookie。")])]),t._v(" "),s("li",[s("p",[t._v("监听用户行为，比如输入账号密码后直接发送到黑客服务器。")])]),t._v(" "),s("li",[s("p",[t._v("修改 DOM 伪造登录表单。")])]),t._v(" "),s("li",[s("p",[t._v("在页面中生成浮窗广告。")])])]),t._v(" "),s("p",[t._v("通常情况，XSS 攻击的实现有三种方式——存储型、反射型和文档型。原理都比较简单，先来一一介绍一下。")]),t._v(" "),s("h3",{attrs:{id:"存储型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#存储型"}},[t._v("#")]),t._v(" 存储型")]),t._v(" "),s("p",[t._v("存储型，顾名思义就是将恶意脚本存储了起来，确实，存储型的 XSS 将脚本存储到了服务端的数据库，然后在客户端执行这些脚本，从而达到攻击的效果。")]),t._v(" "),s("p",[t._v("常见的场景是留言评论区提交一段脚本代码，如果前后端没有做好转义的工作，那评论内容存到了数据库，在页面渲染过程中直接执行, 相当于执行一段未知逻辑的 JS 代码，是非常恐怖的。这就是存储型的 XSS 攻击。")]),t._v(" "),s("h3",{attrs:{id:"反射型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#反射型"}},[t._v("#")]),t._v(" 反射型")]),t._v(" "),s("p",[t._v("反射型XSS指的是恶意脚本作为网络请求的一部分。")]),t._v(" "),s("p",[t._v("比如我输入:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('http://sanyuan.com?q=<script>alert("你完蛋了")<\/script>\n')])])]),s("p",[t._v("这样，在服务器端会拿到q参数,然后将内容返回给浏览器端，浏览器将这些内容作为HTML的一部分解析，发现是一个脚本，直接执行，这样就被攻击了。")]),t._v(" "),s("p",[t._v("之所以叫它反射型, 是因为恶意脚本是通过作为网络请求的参数，经过服务器，然后再反射到HTML文档中，执行解析。和存储型不一样的是，服务器并不会存储这些恶意脚本。")]),t._v(" "),s("h3",{attrs:{id:"文档型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文档型"}},[t._v("#")]),t._v(" 文档型")]),t._v(" "),s("p",[t._v("文档型的 XSS 攻击并不会经过服务端，而是作为中间人的角色，在数据传输过程劫持到网络数据包，然后修改里面的 html 文档！")]),t._v(" "),s("p",[t._v("这样的劫持方式包括WIFI路由器劫持或者本地恶意软件等。")]),t._v(" "),s("h2",{attrs:{id:"防范措施"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#防范措施"}},[t._v("#")]),t._v(" 防范措施")]),t._v(" "),s("p",[t._v("明白了三种XSS攻击的原理，我们能发现一个共同点: 都是让恶意脚本直接能在浏览器中执行。")]),t._v(" "),s("p",[t._v("那么要防范它，就是要避免这些脚本代码的执行。")]),t._v(" "),s("p",[t._v("为了完成这一点，必须做到一个信念，两个利用。")]),t._v(" "),s("h3",{attrs:{id:"一个信念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一个信念"}},[t._v("#")]),t._v(" 一个信念")]),t._v(" "),s("p",[t._v("千万不要相信任何用户的输入！")]),t._v(" "),s("p",[t._v("无论是在前端和服务端，都要对用户的输入进行转码或者过滤。")]),t._v(" "),s("p",[t._v("如:")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'你完蛋了'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("最普遍的做法就是转义输入输出的内容，对于引号、尖括号、斜杠进行转义")]),t._v(" "),s("p",[t._v("转码后变为:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("&lt;script&gt;alert(&#39;你完蛋了&#39;)&lt;/script&gt;\n")])])]),s("p",[t._v("这样的代码在 html 解析的过程中是无法执行的。")]),t._v(" "),s("p",[t._v("当然也可以利用关键词过滤的方式，将 script 标签给删除。过滤后的内容只剩下空文本。")]),t._v(" "),s("h3",{attrs:{id:"利用-csp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#利用-csp"}},[t._v("#")]),t._v(" 利用 CSP")]),t._v(" "),s("p",[t._v("CSP，即浏览器中的内容安全策略，它的核心思想就是服务器决定浏览器加载哪些资源，具体来说可以完成以下功能:")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("限制其他域下的资源加载。")])]),t._v(" "),s("li",[s("p",[t._v("禁止向其它域提交数据。")])]),t._v(" "),s("li",[s("p",[t._v("提供上报机制，能帮助我们及时发现 XSS 攻击。")])])]),t._v(" "),s("h3",{attrs:{id:"开启-csp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开启-csp"}},[t._v("#")]),t._v(" 开启 CSP")]),t._v(" "),s("p",[t._v("CSP 本质上就是建立白名单，开发者明确告诉浏览器哪些外部资源可以加载和执行。我们只需要配置规则，如何拦截是由浏览器自己实现的。我们可以通过这种方式来尽量减少 XSS 攻击。")]),t._v(" "),s("p",[t._v("通常可以通过两种方式来开启 CSP：")]),t._v(" "),s("ul",[s("li",[t._v("设置 HTTP Header 中的 Content-Security-Policy")]),t._v(" "),s("li",[t._v("设置 meta 标签的方式")])]),t._v(" "),s("p",[t._v("这里以设置 HTTP Header 来举例：")]),t._v(" "),s("ul",[s("li",[t._v("只允许加载本站资源")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Content-Security-Policy: default-src 'self'\n")])])]),s("ul",[s("li",[t._v("只允许加载 HTTPS 协议图片")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Content-Security-Policy: img-src https://*\n")])])]),s("ul",[s("li",[t._v("允许加载任何来源框架")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Content-Security-Policy: child-src 'none'\n")])])]),s("p",[t._v("对于这种方式来说，只要开发者配置了正确的规则，那么即使网站存在漏洞，攻击者也不能执行它的攻击代码，并且 CSP 的兼容性也不错。")]),t._v(" "),s("p",[t._v("更多属性，请"),s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy",target:"_blank",rel:"noopener noreferrer"}},[t._v("查看Content-Security-Policy文档"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"利用-httponly"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#利用-httponly"}},[t._v("#")]),t._v(" 利用 httponly")]),t._v(" "),s("p",[t._v("很多 XSS 攻击脚本都是用来窃取Cookie, 而设置 Cookie 的 HttpOnly 属性后，JavaScript 便无法读取 Cookie 的值。这样也能很好的防范 XSS 攻击。")]),t._v(" "),s("h2",{attrs:{id:"框架对-xss-攻击做了哪些防御"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#框架对-xss-攻击做了哪些防御"}},[t._v("#")]),t._v(" 框架对 XSS 攻击做了哪些防御")]),t._v(" "),s("ol",[s("li",[t._v("利用 textContent 来代替 innerHTML")]),t._v(" "),s("li",[t._v("渲染前转义特殊字符（escape，encode）")]),t._v(" "),s("li",[t._v("vue 中 {{}} 的内容都会进行字符串化，少用 v-html")])]),t._v(" "),s("h2",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),s("p",[t._v("XSS 攻击是指浏览器中执行恶意脚本, 然后拿到用户的信息进行操作。主要分为存储型、反射型和文档型。防范的措施包括:")]),t._v(" "),s("ul",[s("li",[t._v("一个信念: 不要相信用户的输入，对输入内容转码或者过滤，让其不可执行。")]),t._v(" "),s("li",[t._v("两个利用: 利用 CSP，利用 Cookie 的 HttpOnly 属性。")])])])}),[],!1,null,null,null);a.default=r.exports}}]);