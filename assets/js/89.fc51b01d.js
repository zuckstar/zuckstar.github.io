(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{520:function(t,a,s){"use strict";s.r(a);var n=s(24),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"服务端渲染的探索与实践"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#服务端渲染的探索与实践"}},[t._v("#")]),t._v(" 服务端渲染的探索与实践")]),t._v(" "),s("p",[t._v("服务端渲染，也称为 (SSR)")]),t._v(" "),s("p",[t._v("本节我们将围绕“是什么”（服务端渲染的运行机制）、“为什么”（服务端渲染解决了什么性能问题 ）、“怎么做”（服务端渲染的应用实例与使用场景）这三个点，对服务端渲染进行探索。")]),t._v(" "),s("h2",{attrs:{id:"服务端渲染的运行机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#服务端渲染的运行机制"}},[t._v("#")]),t._v(" 服务端渲染的运行机制")]),t._v(" "),s("p",[t._v("相对于服务端渲染，同学们普遍对客户端渲染接受度更高一些，所以我们先从大家喜闻乐见的客户端渲染说起。")]),t._v(" "),s("h3",{attrs:{id:"客户端渲染"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#客户端渲染"}},[t._v("#")]),t._v(" 客户端渲染")]),t._v(" "),s("p",[t._v("客户端渲染模式下，服务端会把渲染需要的静态文件发送给客户端，客户端加载过来之后，自己在浏览器里跑一遍 JS，根据 JS 的运行结果，生成相应的 DOM。这种特性使得客户端渲染的源代码总是特别简洁，往往是这个德行：")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token doctype"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<!")]),s("span",{pre:!0,attrs:{class:"token name"}},[t._v("doctype")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token name"}},[t._v("html")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("html")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("head")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("title")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("我是客户端渲染的页面"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("title")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("head")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("index.js"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}}),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("根节点下到底是什么内容呢？你不知道，我不知道，只有浏览器把 index.js 跑过一遍后才知道，这就是典型的客户端渲染。")]),t._v(" "),s("p",[t._v("页面上呈现的内容，你在 html 源文件里里找不到——这正是它的特点。")]),t._v(" "),s("h3",{attrs:{id:"服务端渲染"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#服务端渲染"}},[t._v("#")]),t._v(" 服务端渲染")]),t._v(" "),s("p",[t._v("服务端渲染的模式下，当用户第一次请求页面时，由服务器把需要的组件或页面渲染成 HTML 字符串，然后把它返回给客户端。客户端拿到手的，是可以直接渲染然后呈现给用户的 HTML 内容，不需要为了生成 DOM 内容自己再去跑一遍 JS 代码。")]),t._v(" "),s("p",[t._v("使用服务端渲染的网站，可以说是“所见即所得”，页面上呈现的内容，我们在 html 源文件里也能找到。")]),t._v(" "),s("h2",{attrs:{id:"服务端渲染解决了什么性能问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#服务端渲染解决了什么性能问题"}},[t._v("#")]),t._v(" 服务端渲染解决了什么性能问题")]),t._v(" "),s("p",[t._v("事实上，很多网站是出于效益的考虑才启用服务端渲染，性能倒是在其次。")]),t._v(" "),s("p",[t._v("假设 A 网站页面中有一个关键字叫“前端性能优化”，这个关键字是 JS 代码跑过一遍后添加到 HTML 页面中的。那么客户端渲染模式下，我们在搜索引擎搜索这个关键字，是找不到 A 网站的——搜索引擎只会查找现成的内容，不会帮你跑 JS 代码。A 网站的运营方见此情形，感到很头大：搜索引擎搜不出来，用户找不到我们，谁还会用我的网站呢？为了把“现成的内容”拿给搜索引擎看，A 网站不得不启用服务端渲染。")]),t._v(" "),s("p",[t._v("但性能在其次，不代表性能不重要。服务端渲染解决了一个非常关键的性能问题——首屏加载速度过慢。在客户端渲染模式下，我们除了加载 HTML，还要等渲染所需的这部分 JS 加载完，之后还得把这部分 JS 在浏览器上再跑一遍。这一切都是发生在用户点击了我们的链接之后的事情，在这个过程结束之前，用户始终见不到我们网页的庐山真面目，也就是说用户一直在等！相比之下，服务端渲染模式下，服务器给到客户端的已经是一个直接可以拿来呈现给用户的网页，中间环节早在服务端就帮我们做掉了，用户岂不“美滋滋”？")]),t._v(" "),s("h2",{attrs:{id:"服务端渲染的应用实例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#服务端渲染的应用实例"}},[t._v("#")]),t._v(" 服务端渲染的应用实例")]),t._v(" "),s("h3",{attrs:{id:"react-ssr"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#react-ssr"}},[t._v("#")]),t._v(" React SSR")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://blog.csdn.net/sinat_24070543/article/details/102587640",target:"_blank",rel:"noopener noreferrer"}},[t._v("react服务端渲染ssr实践"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"vue-ssr"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-ssr"}},[t._v("#")]),t._v(" Vue SSR")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://ssr.vuejs.org/zh/#%E4%BB%80%E4%B9%88%E6%98%AF%E6%9C%8D%E5%8A%A1%E5%99%A8%E7%AB%AF%E6%B8%B2%E6%9F%93-ssr-%EF%BC%9F",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue SSR指南"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"服务端渲染的应用场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#服务端渲染的应用场景"}},[t._v("#")]),t._v(" 服务端渲染的应用场景")]),t._v(" "),s("p",[t._v("打眼一看，这个服务端渲染给浏览器省了这么多事儿，性能肯定是质的飞跃啊！喜闻乐见！但是大家打开自己经常访问的那些网页看一看，会发现仍然有许多网站压根儿不用服务端渲染——看来这个东西也不是万能的。")]),t._v(" "),s("p",[t._v("根据我们前面的描述，不难看出，服务端渲染本质上是本该浏览器做的事情，分担给服务器去做。这样当资源抵达浏览器时，它呈现的速度就快了。乍一看好像很合理：浏览器性能毕竟有限，服务器多牛逼！能者多劳，就该让服务器多干点活！")]),t._v(" "),s("p",[t._v("但仔细想想，在这个网民遍地的时代，几乎有多少个用户就有多少台浏览器。用户拥有的浏览器总量多到数不清，那么一个公司的服务器又有多少台呢？我们把这么多台浏览器的渲染压力集中起来，分散给相比之下数量并不多的服务器，服务器肯定是承受不住的。")]),t._v(" "),s("p",[t._v("这样分析下来，服务端渲染也并非万全之策。在实践中，我一般会建议大家先忘记服务端渲染这个事情——服务器稀少而宝贵，但首屏渲染体验和 SEO 的优化方案却很多——我们最好先把能用的低成本“大招”都用完。除非网页对性能要求太高了，以至于所有的招式都用完了，性能表现还是不尽人意，这时候我们就可以考虑向老板多申请几台服务器，把服务端渲染搞起来了~")])])}),[],!1,null,null,null);a.default=r.exports}}]);