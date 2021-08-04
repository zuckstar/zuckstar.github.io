(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{509:function(t,_,v){"use strict";v.r(_);var a=v(24),e=Object(a.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"http-状态码"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http-状态码"}},[t._v("#")]),t._v(" HTTP 状态码")]),t._v(" "),v("p",[t._v("RFC 规定 HTTP 的状态码为三位数，被分为五类:")]),t._v(" "),v("ul",[v("li",[t._v("1xx: 表示目前是协议处理的中间状态，还需要后续操作。")]),t._v(" "),v("li",[t._v("2xx: 表示成功状态。")]),t._v(" "),v("li",[t._v("3xx: 重定向状态，资源位置发生变动，需要重新请求。")]),t._v(" "),v("li",[t._v("4xx: 客户端错误、请求报文有误。")]),t._v(" "),v("li",[t._v("5xx: 服务器端发生错误。")])]),t._v(" "),v("p",[t._v("接下来就一一分析这里面具体的状态码。")]),t._v(" "),v("h2",{attrs:{id:"_1xx"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1xx"}},[t._v("#")]),t._v(" 1XX")]),t._v(" "),v("p",[t._v("101 Switching Protocols。在HTTP升级为WebSocket的时候，如果服务器同意变更，就会发送状态码 101。")]),t._v(" "),v("h2",{attrs:{id:"_2xx"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2xx"}},[t._v("#")]),t._v(" 2XX")]),t._v(" "),v("p",[t._v("200 OK是见得最多的成功状态码。通常在响应体中放有数据。")]),t._v(" "),v("p",[t._v("204 No Content含义与 200 相同，但响应头后没有 body 数据。")]),t._v(" "),v("p",[t._v("206 Partial Content顾名思义，表示部分内容，它的使用场景为 HTTP 分块下载和断电续传，当然也会带上相应的响应头字段Content-Range。")]),t._v(" "),v("h2",{attrs:{id:"_3xx"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3xx"}},[t._v("#")]),t._v(" 3XX")]),t._v(" "),v("p",[t._v("301 Moved Permanently即永久重定向，对应着302 Found，即临时重定向。")]),t._v(" "),v("p",[t._v("比如你的网站从 HTTP 升级到了 HTTPS 了，以前的站点再也不用了，应当返回301，这个时候浏览器默认会做缓存优化，在第二次访问的时候自动访问重定向的那个地址。")]),t._v(" "),v("p",[t._v("而如果只是暂时不可用，那么直接返回302即可，和301不同的是，浏览器并不会做缓存优化。")]),t._v(" "),v("p",[t._v("304 Not Modified: 当协商缓存命中时会返回这个状态码。详见浏览器缓存")]),t._v(" "),v("h2",{attrs:{id:"_4xx"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4xx"}},[t._v("#")]),t._v(" 4XX")]),t._v(" "),v("p",[t._v("400 Bad Request: 请求参数有误，请求体内容传输有误")]),t._v(" "),v("p",[t._v("401 UNAUTHRITE：未授权")]),t._v(" "),v("p",[t._v("403 Forbidden: 这实际上并不是请求报文出错，而是服务器禁止访问，原因有很多，比如法律禁止、信息敏感。")]),t._v(" "),v("p",[t._v("404 Not Found: 资源未找到，表示没在服务器上找到相应的资源。")]),t._v(" "),v("h2",{attrs:{id:"_5xx"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5xx"}},[t._v("#")]),t._v(" 5XX")]),t._v(" "),v("p",[t._v("500 Internal Server Error: 仅仅告诉你服务器出错了，出了啥错咱也不知道。")]),t._v(" "),v("p",[t._v("501 Not Implemented: 表示客户端请求的功能还不支持。")]),t._v(" "),v("p",[t._v("502 Bad Gateway: 服务器自身是正常的，但访问的时候出错了。网关错误，需要刷新缓存。")]),t._v(" "),v("p",[v("a",{attrs:{href:"https://blog.csdn.net/qappleh/article/details/89704387",target:"_blank",rel:"noopener noreferrer"}},[t._v("502报错的原因"),v("OutboundLink")],1)]),t._v(" "),v("p",[t._v("503 Service Unavailable: 表示服务器当前很忙，暂时无法响应服务。")])])}),[],!1,null,null,null);_.default=e.exports}}]);