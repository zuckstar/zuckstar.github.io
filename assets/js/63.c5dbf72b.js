(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{393:function(e,r,t){"use strict";t.r(r);var s=t(10),a=Object(s.a)({},(function(){var e=this,r=e._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"promise-系列-二-promise-为什么要引入微任务"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#promise-系列-二-promise-为什么要引入微任务"}},[e._v("#")]),e._v(" Promise 系列(二)：Promise 为什么要引入微任务?")]),e._v(" "),r("h2",{attrs:{id:"转载"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#转载"}},[e._v("#")]),e._v(" 转载")]),e._v(" "),r("p",[e._v("本文转载自 "),r("a",{attrs:{href:"http://47.98.159.95/my_blog/blogs/javascript/js-async/005.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("005 Promise 之问(二)——为什么 Promise 要引入微任务？"),r("OutboundLink")],1)]),e._v(" "),r("h2",{attrs:{id:"简介"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[e._v("#")]),e._v(" 简介")]),e._v(" "),r("p",[e._v("在这里，如果你还没有接触过 Promise, 务必去看看 "),r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise",target:"_blank",rel:"noopener noreferrer"}},[e._v("MDN 文档"),r("OutboundLink")],1),e._v("，了解使用方式，不然后面很会懵。")]),e._v(" "),r("p",[e._v("Promise 中的执行函数是同步进行的，但是里面存在着异步操作，在异步操作结束后会调用 resolve 方法，或者中途遇到错误调用 reject 方法，这两者都是作为微任务进入到 EventLoop 中。但是你有没有想过，Promise 为什么要引入微任务的方式来进行回调操作？")]),e._v(" "),r("h2",{attrs:{id:"解决方式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#解决方式"}},[e._v("#")]),e._v(" 解决方式")]),e._v(" "),r("p",[e._v("回到问题本身，其实就是如何处理回调的问题。总结起来有三种方式:")]),e._v(" "),r("ol",[r("li",[r("p",[e._v("使用同步回调，直到异步任务进行完，再进行后面的任务。")])]),e._v(" "),r("li",[r("p",[e._v("使用异步回调，将回调函数放在进行宏任务队列的队尾。")])]),e._v(" "),r("li",[r("p",[e._v("使用异步回调，将回调函数放到当前宏任务中的最后面。")])])]),e._v(" "),r("h2",{attrs:{id:"优劣对比"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#优劣对比"}},[e._v("#")]),e._v(" 优劣对比")]),e._v(" "),r("p",[e._v("第一种方式显然不可取，因为同步的问题非常明显，会让整个脚本阻塞住，当前任务等待，后面的任务都无法得到执行，而这部分等待的时间是可以拿来完成其他事情的，导致 CPU 的利用率非常低，而且还有另外一个致命的问题，就是无法实现延迟绑定的效果。")]),e._v(" "),r("p",[e._v("如果采用第二种方式，那么执行回调(resolve/reject)的时机应该是在前面所有的宏任务完成之后，倘若现在的任务队列非常长，那么回调迟迟得不到执行，造成应用卡顿。")]),e._v(" "),r("p",[e._v("为了解决上述方案的问题，另外也考虑到延迟绑定的需求，Promise 采取第三种方式, 即引入微任务, 即把 resolve(reject) 回调的执行放在当前宏任务的末尾。")]),e._v(" "),r("p",[e._v("这样，利用微任务解决了两大痛点:")]),e._v(" "),r("ol",[r("li",[r("p",[e._v("采用异步回调替代同步回调解决了浪费 CPU 性能的问题。")])]),e._v(" "),r("li",[r("p",[e._v("放到当前宏任务最后执行，解决了回调执行的实时性问题。")])])]),e._v(" "),r("p",[e._v("好，Promise 的基本实现思想已经讲清楚了，相信大家已经知道了它为什么这么设计，接下来就让我们一步步弄清楚它内部到底是怎么设计的。")])])}),[],!1,null,null,null);r.default=a.exports}}]);