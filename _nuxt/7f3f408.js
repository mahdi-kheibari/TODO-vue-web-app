(window.webpackJsonp=window.webpackJsonp||[]).push([[4,2,3],{254:function(t,e,o){var content=o(257);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(94).default)("0365681e",content,!0,{sourceMap:!1})},255:function(t,e,o){var content=o(259);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(94).default)("02bbd85f",content,!0,{sourceMap:!1})},256:function(t,e,o){"use strict";o(254)},257:function(t,e,o){var n=o(93)(!1);n.push([t.i,".TodoBox[data-v-6b11e6da]{height:100vh}",""]),t.exports=n},258:function(t,e,o){"use strict";o(255)},259:function(t,e,o){var n=o(93)(!1);n.push([t.i,".bg-title[data-v-713fb4b1]{background:#000839;background:-webkit-gradient(linear,left top,right top,from(#000839),color-stop(50%,#005082),to(#00a8cc));background:linear-gradient(90deg,#000839,#005082 50%,#00a8cc)}.items-icon[data-v-713fb4b1]{cursor:pointer}.completed[data-v-713fb4b1]{color:grey;text-decoration:line-through}.forCompleted[data-v-713fb4b1]{color:#d3d3d3!important;pointer-events:none}",""]),t.exports=n},260:function(t,e,o){"use strict";o.r(e);o(59),o(49),o(58),o(70),o(50),o(71);var n=o(42),r=o(72);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={computed:{title:{get:function(){return this.$store.getters.getTodoTitle},set:function(t){this.$store.commit("changeTodoTitle",t)}},caption:{get:function(){return this.$store.getters.getTodoCaption},set:function(t){this.$store.commit("changeTodoCaption",t)}},submit:function(){return this.$store.state.submitValue}},methods:l(l({},Object(r.b)(["setTodos"])),Object(r.c)(["changeTodo"]))},f=(o(256),o(62)),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"TodoBox d-flex align-items-center"},[o("div",{staticClass:"d-flex flex-column justify-content-center align-items-center"},[t._m(0),t._v(" "),o("form",{staticClass:"w-100",attrs:{action:""}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Enter title of TODO"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),t._v(" "),o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.caption,expression:"caption"}],staticClass:"form-control my-4",attrs:{cols:"30",rows:"10",placeholder:"Enter discription of your TODO"},domProps:{value:t.caption},on:{input:function(e){e.target.composing||(t.caption=e.target.value)}}}),t._v(" "),"Create"===t.submit?o("input",{staticClass:"btn btn-primary text-white align-self-start",attrs:{type:"submit",value:"Create new TODO"},on:{click:function(e){e.preventDefault(),t.setTodos({title:t.title,caption:t.caption,id:t.$uuid.v4(),complete:!1})}}}):o("input",{staticClass:"btn btn-primary text-white align-self-start",attrs:{type:"submit",value:"Change TODO"},on:{click:function(e){return e.preventDefault(),t.changeTodo.apply(null,arguments)}}})])])])])}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("h1",{staticClass:"text-white mb-3"},[o("span",{staticClass:"text-primary"},[t._v("TODO App")]),t._v(" by Mahdi Kheibari")])}],!1,null,"6b11e6da",null);e.default=component.exports},261:function(t,e,o){"use strict";o.r(e);o(59),o(49),o(58),o(70),o(50),o(71);var n=o(42),r=o(72);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={props:{title:String,caption:String,id:String,complete:Boolean},methods:l(l(l(l(l({},Object(r.c)(["deleteTodo"])),Object(r.c)(["editTodo"])),Object(r.c)(["changeItemInfo"])),Object(r.c)(["todoCompleted"])),Object(r.c)(["completedList"])),computed:{checkCompleted:function(){return this.complete?"check-square-fill":"check-square"},viewTodos:function(){return this.$store.getters.viewTodos}}},f=(o(258),o(62)),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"card my-4"},[o("div",{staticClass:"card-header bg-title text-white"},[o("div",{staticClass:"row no-gutters w-100 align-items-center"},[o("h3",{class:["card-title","col-8",{completed:t.complete}]},[t._v("\n          "+t._s(t.title)+"\n        ")]),t._v(" "),o("div",{staticClass:"col-3 offset-1 d-flex align-items-center justify-content-lg-around"},[o("b-icon",{staticClass:"text-white items-icon",attrs:{icon:t.checkCompleted,"font-scale":"1.8"},on:{click:function(e){return t.completedList({complete:t.complete,title:t.title,caption:t.caption,id:t.id})}}}),t._v(" "),o("b-icon",{class:["text-warning","items-icon",{forCompleted:t.complete}],attrs:{icon:"pencil-square","font-scale":"2"},on:{click:function(e){return t.editTodo({title:t.title,caption:t.caption,id:t.id})}}}),t._v(" "),o("b-icon",{staticClass:"text-danger items-icon",attrs:{icon:"trash","font-scale":"2"},on:{click:function(e){return t.deleteTodo(t.id)}}})],1)])]),t._v(" "),o("div",{staticClass:"card-body"},[o("p",{class:{completed:t.complete}},[t._v("\n        "+t._s(t.caption)+"\n      ")])])])])}),[],!1,null,"713fb4b1",null);e.default=component.exports},262:function(t,e,o){var content=o(264);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(94).default)("1b7833da",content,!0,{sourceMap:!1})},263:function(t,e,o){"use strict";o(262)},264:function(t,e,o){var n=o(93)(!1);n.push([t.i,"body{background:#f96400;background:-webkit-gradient(linear,left top,right top,from(#f90),color-stop(50%,#ffad31),to(#ffc163));background:linear-gradient(90deg,#f90,#ffad31 50%,#ffc163)}.todoMode{min-height:2.5rem;z-index:10}.btn-light{border-top:hidden}",""]),t.exports=n},265:function(t,e,o){"use strict";o.r(e);o(59),o(49),o(58),o(70),o(50),o(71);var n=o(42),r=o(72),c=o(260),l=o(261);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}var f={data:function(){return{}},components:{"todo-box":c.default,"todo-item":l.default},computed:{viewTodos:function(){return this.$store.getters.viewTodos},todos:function(){return this.$store.getters.todos},completedTodo:function(){return this.$store.getters.completedTodo},uncompletedTodo:function(){return this.$store.getters.uncompletedTodo},todoList:function(){return"All"===this.$store.state.viewTodos?this.todos:"Uncompleted"===this.$store.state.viewTodos?this.uncompletedTodo:"Completed"===this.$store.state.viewTodos?this.completedTodo:void 0}},methods:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(r.c)(["changeViewTodos"]))},m=(o(263),o(62)),component=Object(m.a)(f,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-12 col-md-6"},[o("todo-box")],1),t._v(" "),o("div",{staticClass:"col-12 col-md-6"},[o("div",{staticClass:"w-100 position-relative todoMode"},[o("b-dropdown",{staticClass:"w-100 position-absolute",attrs:{text:t.viewTodos,variant:"light","menu-class":"w-100"}},[o("b-dropdown-item",{on:{click:function(e){return t.changeViewTodos("All")}}},[t._v("All")]),t._v(" "),o("b-dropdown-item",{on:{click:function(e){return t.changeViewTodos("Uncompleted")}}},[t._v("Uncompleted")]),t._v(" "),o("b-dropdown-item",{on:{click:function(e){return t.changeViewTodos("Completed")}}},[t._v("Completed")])],1)],1),t._v(" "),o("div",{staticClass:"d-flex flex-column h-100 justify-content-center"},t._l(t.todoList,(function(t){return o("todo-item",{key:t.id,attrs:{id:t.id,title:t.title,caption:t.caption,complete:t.complete}})})),1)])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TodoBox:o(260).default,TodoItem:o(261).default})}}]);