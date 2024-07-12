(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{349:function(t,a,o){t.exports=o.p+"assets/img/1.1deec214.jpg"},474:function(t,a,o){"use strict";o.r(a);var s=o(10),e=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"谈谈-tcp-快速打开的原理-tfo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#谈谈-tcp-快速打开的原理-tfo"}},[t._v("#")]),t._v(" 谈谈 TCP 快速打开的原理(TFO)")]),t._v(" "),a("p",[t._v("之前介绍了 TCP 三次握手，可能有人会说，每次都三次握手好麻烦呀！能不能优化一点？")]),t._v(" "),a("p",[t._v("可以啊。今天来说说这个优化后的 TCP 握手流程，也就是 TCP 快速打开(TCP Fast Open, 即TFO)的原理。")]),t._v(" "),a("p",[t._v("优化的过程是这样的，还记得我们说 SYN Flood 攻击时提到的 SYN Cookie 吗？这个 Cookie 可不是浏览器的Cookie, 用它同样可以实现 TFO。")]),t._v(" "),a("h2",{attrs:{id:"tfo-流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tfo-流程"}},[t._v("#")]),t._v(" TFO 流程")]),t._v(" "),a("h3",{attrs:{id:"首轮三次握手"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#首轮三次握手"}},[t._v("#")]),t._v(" 首轮三次握手")]),t._v(" "),a("p",[t._v("首先客户端发送SYN给服务端，服务端接收到。")]),t._v(" "),a("p",[t._v("注意哦！现在服务端不是立刻回复 SYN + ACK，而是通过计算得到一个SYN Cookie, 将这个Cookie放到 TCP 报文的 Fast Open选项中，然后才给客户端返回。")]),t._v(" "),a("p",[t._v("客户端拿到这个 Cookie 的值缓存下来。后面正常完成三次握手。")]),t._v(" "),a("p",[t._v("首轮三次握手就是这样的流程。而后面的三次握手就不一样啦！")]),t._v(" "),a("h3",{attrs:{id:"后面的三次握手"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#后面的三次握手"}},[t._v("#")]),t._v(" 后面的三次握手")]),t._v(" "),a("p",[t._v("在后面的三次握手中，客户端会将之前缓存的 Cookie、SYN 和HTTP请求(是的，你没看错)发送给服务端，服务端验证了 Cookie 的合法性，如果不合法直接丢弃；如果是合法的，那么就正常返回SYN + ACK。")]),t._v(" "),a("p",[t._v("重点来了，现在服务端能向客户端发 HTTP 响应了！这是最显著的改变，三次握手还没建立，仅仅验证了 Cookie 的合法性，就可以返回 HTTP 响应了。")]),t._v(" "),a("p",[t._v("当然，客户端的ACK还得正常传过来，不然怎么叫三次握手嘛。")]),t._v(" "),a("p",[t._v("流程如下:")]),t._v(" "),a("p",[a("img",{attrs:{src:o(349),alt:""}})]),t._v(" "),a("p",[t._v("注意: 客户端最后握手的 ACK 不一定要等到服务端的 HTTP 响应到达才发送，两个过程没有任何关系。")]),t._v(" "),a("h3",{attrs:{id:"tfo-的优势"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tfo-的优势"}},[t._v("#")]),t._v(" TFO 的优势")]),t._v(" "),a("p",[t._v("TFO 的优势并不在与首轮三次握手，而在于后面的握手，在拿到客户端的 Cookie 并验证通过以后，可以直接返回 HTTP 响应，充分利用了1 个RTT(Round-Trip Time，往返时延)的时间提前进行数据传输，积累起来还是一个比较大的优势。")])])}),[],!1,null,null,null);a.default=e.exports}}]);