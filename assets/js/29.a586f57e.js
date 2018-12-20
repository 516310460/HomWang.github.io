(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{224:function(t,s,e){"use strict";e.r(s);var n=e(0),a=Object(n.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),e("p",[e("a",{attrs:{href:"https://www.npmjs.com/package/nuxt-generate-cluster",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://img.shields.io/npm/dt/nuxt-generate-cluster.svg?style=flat-square",alt:"npm"}}),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://www.npmjs.com/package/nuxt-generate-cluster",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://img.shields.io/npm/v/nuxt-generate-cluster/latest.svg?style=flat-square",alt:"npm (scoped with tag)"}}),e("OutboundLink")],1),t._v(" "),t._m(1)]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),e("p",[t._v("安装包")]),t._v(" "),t._m(4),t._m(5),t._v(" "),t._m(6),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._m(10),t._v(" "),t._m(11),t._v(" "),e("p",[t._v("应该配置 workers 数量。因为它可能没有用来启动 workers，然后在系统中使用处理器的数量。")]),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),e("p",[t._v("为了平衡 workers 之间的负荷，他们会被发送成批的线程，否则一个拥有 '简单' 线程的 workers 可能会在其他人之前很久就完成。 workers 还将使用Nuxt的并发选项。")]),t._v(" "),t._m(14),t._v(" "),e("p",[t._v("默认的"),e("a",{attrs:{href:"https://nuxtjs.org/api/configuration-generate#routes",target:"_blank",rel:"noopener noreferrer"}},[t._v("Nuxt.js routes 方法"),e("OutboundLink")],1),t._v("已经扩展，因此您可以向其传递其他参数，请参阅以下示例配置中的params参数。默认情况下，它将列出3个时间戳：")]),t._v(" "),t._m(15),t._v(" "),e("blockquote",[e("p",[t._v("时间戳在本地 "),e("code",[t._v("~/.data-store/nuxt-generate-cluster.json")]),t._v(" 存储，详情请参考 "),e("a",{attrs:{href:"https://github.com/jonschlinkert/data-store",target:"_blank",rel:"noopener noreferrer"}},[t._v("data-store"),e("OutboundLink")],1)])]),t._v(" "),t._m(16),t._v(" "),e("p",[t._v("当所有 workers 完成时，将调用此方法，它会接收三个参数:")]),t._v(" "),t._m(17),t._v(" "),t._m(18),t._m(19),t._v(" "),t._m(20),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._m(24),t._v(" "),t._m(25),t._m(26),t._v(" "),t._m(27),t._m(28),t._v(" "),t._m(29),t._v(" "),e("p",[t._v("日志级别2、3和4之间的差异是:")]),t._v(" "),t._m(30),t._v(" "),t._m(31),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/nuxt-community/nuxt-generate-cluster",target:"_blank",rel:"noopener noreferrer"}},[t._v("nuxt-community/nuxt-generate-cluster"),e("OutboundLink")],1),t._v(" - Nuxt.js 多线程生成命令。")])])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"nuxt-js-多线程生成命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nuxt-js-多线程生成命令","aria-hidden":"true"}},[this._v("#")]),this._v(" Nuxt.js 多线程生成命令")])},function(){var t=this.$createElement,s=this._self._c||t;return s("a",{attrs:{href:"https://github.com/nuxt/nuxt.js/"}},[s("img",{attrs:{src:"https://img.shields.io/badge/nuxt.js-v2.0.0-800080.svg?style=flat-square",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("使用多个 Workers 来为Nuxt.js项目生成静态文件")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用","aria-hidden":"true"}},[this._v("#")]),this._v(" 使用")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("yarn add nuxt"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("generate"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("cluster`\n"),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("OR")]),t._v("\nnpm install nuxt"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("generate"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("cluster\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("添加生成脚本到您的 "),s("code",[this._v("package.json")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"scripts"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"generate"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"nuxt-generate -w 4"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"nuxt-配置选项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nuxt-配置选项","aria-hidden":"true"}},[this._v("#")]),this._v(" Nuxt 配置选项")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("配置生成的选项到 "),s("code",[this._v("nuxt.config.js")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("  generate"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    workers"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    workerConcurrency"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    concurrency"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("routes")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("callback"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" params"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" axios"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://api.example.com/routes?since='")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" params"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lastFinished"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" res"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("done")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" duration"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" errors"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" workerInfo "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("errors"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        axios"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("post")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://api.example.com/routes'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" generate_errors"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" errors "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"workers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#workers","aria-hidden":"true"}},[this._v("#")]),this._v(" "),s("code",[this._v("workers")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("Default: number of processors")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"workerconcurrency"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#workerconcurrency","aria-hidden":"true"}},[this._v("#")]),this._v(" "),s("code",[this._v("workerConcurrency")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("Default: "),s("code",[this._v("500")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"routes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#routes","aria-hidden":"true"}},[this._v("#")]),this._v(" "),s("code",[this._v("routes")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",[e("li",[e("p",[e("code",[t._v("lastStarted")]),t._v("\n上次执行nuxt-generate命令时的unix时间戳")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("lastBuilt")]),t._v("\nnuxt项目最后由nuxt-generate构建时的unix时间戳")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("lastFinished")]),t._v("\nnuxt-generate上次成功完成时的unix时间戳（未被 "),e("code",[t._v("ctrl+c")]),t._v(" 中断）")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"done"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#done","aria-hidden":"true"}},[this._v("#")]),this._v(" "),s("code",[this._v("done")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",[e("li",[e("p",[e("code",[t._v("duration")]),t._v("\n命令运行的总时间（以秒为单位）")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("errors")]),t._v("\n遇到的所有错误的数组。错误可以有类型，"),e("code",[t._v("handled")]),t._v(" 或者 "),e("code",[t._v("unhandled")]),t._v(" 对于后者，错误消息将包含堆栈跟踪")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" type"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'handled'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    route"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/non-existing-link'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    error"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \n     "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" statusCode"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("404")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       message"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'The message from your 404 page'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("code",[this._v("workerInfo")]),this._v("\n包含每个 workers 详细信息的对象。传递的数据来自内部用于监视 workers 状态的监视程序对象。")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'6707'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("                            "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// the process id of the worker")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" start"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1929158")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("859524606")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("   "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// process.hrtime the worker was started")]),t._v("\n     duration"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("109567")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// how long the worker was active")]),t._v("\n     signal"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                       "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// the signal by which the worker was killed (if any)")]),t._v("\n     code"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                         "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// the exit status of the worker")]),t._v("\n     routes"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("73")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                      "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// the number of routes generated by this worker")]),t._v("\n     errors"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// the errors this worker encountered, errors of all workers")]),t._v("\n                                      "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// combined is the error argument above")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"命令行选项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#命令行选项","aria-hidden":"true"}},[this._v("#")]),this._v(" 命令行选项")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("请注意，您需要明确指出 "),s("code",[this._v("-b")]),this._v(" 您想要（重新）构建项目")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("$ ./node_modules/.bin/nuxt-generate -h\n\n  Multi-threaded generate for nuxt using cluster\n\n  Description\n    Generate a static web application (server-rendered)\n  Usage\n    $ nuxt-generate <dir>\n  Options\n    -b, --build           Whether to (re-)build the nuxt project\n    -c, --config-file     Path to Nuxt.js config file (default: nuxt.config.js)\n    -h, --help            Displays this message\n    -p, --params          Extra parameters which should be passed to routes method\n                            (should be a JSON string or queryString)\n    -q, --quiet           Decrease verbosity (repeat to decrease more)\n    -v, --verbose         Increase verbosity (repeat to increase more)\n    -w, --workers [NUM]   How many workers should be started\n                            (default: # cpus)\n    -wc [NUM],            How many routes should be sent to \n    --worker-concurrency [NUM]    a worker per iteration\n\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("如果需要控制更多生成的路径，请使用 "),s("code",[this._v("-p")]),this._v(" 选项将其他参数传递给routes方法。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("# nuxt.config.js\ngenerate: {\n  routes (callback, params) {\n    console.log(params)\n  }\n}\n\n$ nuxt-generate -w 2 -p id=1&id=2\n// will print =>\n{ id: [ '1', '2' ],\n  lastStarted: 1508609323,\n  lastBuilt: 0,\n  lastFinished: 0 }\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("如果你在bash下使用npm脚本 "),s("code",[this._v("--")]),this._v(" 将会把参数传递给nuxt-generate而不是npm：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("$ npm run generate -- -p '{ \"id\": [1,2,3] }'\n// will print =>\n{ id: [ 1, 2, 3 ],\n  lastStarted: 1508786574,\n  lastBuilt: 0,\n  lastFinished: 0 }\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"记录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#记录","aria-hidden":"true"}},[this._v("#")]),this._v(" 记录")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("您可以使用多个 "),s("code",[this._v("-v")]),this._v(" 或 "),s("code",[this._v("-q")]),this._v(" 在命令行上增加或减少详细程度。我们使用consola进行日志记录并将默认日志级别设置为3，除非设置了 DEBUG 为5，如果要在不设置DEBUG的情况下记录调试消息，可以在 "),s("code",[this._v("-vv")]),this._v(" 命令行上使用")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",[e("li",[e("p",[e("code",[t._v("Level 2")]),t._v(" (-q)\n只打印主线程消息，比如worker启动/退出。没有子线程的消息。")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("Level 3")]),t._v("\n还要打印子线程生成的路由")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("Level 4")]),t._v(" (-v)\n还打印路由生成所花费的时间以及主线程和子线程之间的消息")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"链接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#链接","aria-hidden":"true"}},[this._v("#")]),this._v(" 链接")])}],!1,null,null,null);a.options.__file="nuxt-generate-cluster.md";s.default=a.exports}}]);