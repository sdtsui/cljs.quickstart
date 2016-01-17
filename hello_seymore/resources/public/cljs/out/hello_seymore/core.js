// Compiled by ClojureScript 1.7.170 {}
goog.provide('hello_seymore.core');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('hello_seymore.components');
if(typeof hello_seymore.core.app_state !== 'undefined'){
} else {
hello_seymore.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"likes","likes",792554542),(0)], null));
}
hello_seymore.core.render_BANG_ = (function hello_seymore$core$render_BANG_(){
return React.render(hello_seymore.components.like_seymore.call(null,hello_seymore.core.app_state),document.getElementById("app"));
});
cljs.core.add_watch.call(null,hello_seymore.core.app_state,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (_,___$1,___$2,___$3){
return hello_seymore.core.render_BANG_.call(null);
}));
hello_seymore.core.render_BANG_.call(null);

//# sourceMappingURL=core.js.map