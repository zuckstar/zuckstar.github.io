(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{423:function(t,a,s){"use strict";s.r(a);var n=s(24),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"实现一个-call-apply-函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实现一个-call-apply-函数"}},[t._v("#")]),t._v(" 实现一个 call & apply 函数")]),t._v(" "),s("h2",{attrs:{id:"function-prototype-call"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#function-prototype-call"}},[t._v("#")]),t._v(" Function.prototype.call()")]),t._v(" "),s("h3",{attrs:{id:"定义"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#定义"}},[t._v("#")]),t._v(" 定义")]),t._v(" "),s("p",[t._v("call() 方法使用一个指定的 this 值和单独给出的一个或多个参数来调用一个函数。")]),t._v(" "),s("h3",{attrs:{id:"语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[t._v("#")]),t._v(" 语法")]),t._v(" "),s("p",[t._v("function.call(thisArg, arg1, arg2, ...)")]),t._v(" "),s("h3",{attrs:{id:"使用-call-方法调用函数并且指定上下文的-this"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-call-方法调用函数并且指定上下文的-this"}},[t._v("#")]),t._v(" 使用 call 方法调用函数并且指定上下文的 'this'")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("greet")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" reply "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("animal"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'typically sleep between'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sleepDuration"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("' '")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("reply"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" obj "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  animal"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cats'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" sleepDuration"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'12 and 16 hours'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("greet")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// cats typically sleep between 12 and 16 hours")]),t._v("\n")])])]),s("h3",{attrs:{id:"代码实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码实现"}},[t._v("#")]),t._v(" 代码实现")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("call")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("args")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 考虑不传 context 的情况")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" context "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" context "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" window\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 把当前的方法添加到该对象身上去")]),t._v("\n    context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fn "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// eval 函数解决了执行方法传参的问题")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" result "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("eval")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'context.fn(...args)'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在对象身上删除这个方法")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("delete")]),t._v(" context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fn\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" result\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"function-prototype-apply"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#function-prototype-apply"}},[t._v("#")]),t._v(" Function.prototype.apply()")]),t._v(" "),s("h3",{attrs:{id:"定义-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#定义-2"}},[t._v("#")]),t._v(" 定义")]),t._v(" "),s("p",[t._v("apply() 方法调用一个具有给定this值的函数，以及以一个数组（或类数组对象）的形式提供的参数。")]),t._v(" "),s("blockquote",[s("p",[t._v("注意：call()方法的作用和 apply() 方法类似，区别就是call()方法接受的是参数列表，而apply()方法接受的是一个参数数组。")])]),t._v(" "),s("h3",{attrs:{id:"语法-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#语法-2"}},[t._v("#")]),t._v(" 语法")]),t._v(" "),s("p",[t._v("func.apply(thisArg, [argsArray])")]),t._v(" "),s("h3",{attrs:{id:"代码实现-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码实现-2"}},[t._v("#")]),t._v(" 代码实现")]),t._v(" "),s("p",[t._v("类似的，有apply的对应实现:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("apply")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" args")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" context "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" context "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fn "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 参数会一一对应传入")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" result "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("eval")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'context.fn(...args)'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("delete")]),t._v(" context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fn\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" result"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.cnblogs.com/echolun/p/12144344.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("js 实现call和apply方法，超详细思路分析"),s("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=e.exports}}]);