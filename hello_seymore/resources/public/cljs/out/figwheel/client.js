// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__24117 = cljs.core._EQ_;
var expr__24118 = (function (){var or__16826__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__24117.call(null,"true",expr__24118))){
return true;
} else {
if(cljs.core.truth_(pred__24117.call(null,"false",expr__24118))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__24118)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__24120__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__24120 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24121__i = 0, G__24121__a = new Array(arguments.length -  0);
while (G__24121__i < G__24121__a.length) {G__24121__a[G__24121__i] = arguments[G__24121__i + 0]; ++G__24121__i;}
  args = new cljs.core.IndexedSeq(G__24121__a,0);
} 
return G__24120__delegate.call(this,args);};
G__24120.cljs$lang$maxFixedArity = 0;
G__24120.cljs$lang$applyTo = (function (arglist__24122){
var args = cljs.core.seq(arglist__24122);
return G__24120__delegate(args);
});
G__24120.cljs$core$IFn$_invoke$arity$variadic = G__24120__delegate;
return G__24120;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__24123){
var map__24126 = p__24123;
var map__24126__$1 = ((((!((map__24126 == null)))?((((map__24126.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24126.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24126):map__24126);
var message = cljs.core.get.call(null,map__24126__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__24126__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16826__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16814__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16814__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16814__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__19841__auto___24288 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19841__auto___24288,ch){
return (function (){
var f__19842__auto__ = (function (){var switch__19729__auto__ = ((function (c__19841__auto___24288,ch){
return (function (state_24257){
var state_val_24258 = (state_24257[(1)]);
if((state_val_24258 === (7))){
var inst_24253 = (state_24257[(2)]);
var state_24257__$1 = state_24257;
var statearr_24259_24289 = state_24257__$1;
(statearr_24259_24289[(2)] = inst_24253);

(statearr_24259_24289[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (1))){
var state_24257__$1 = state_24257;
var statearr_24260_24290 = state_24257__$1;
(statearr_24260_24290[(2)] = null);

(statearr_24260_24290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (4))){
var inst_24210 = (state_24257[(7)]);
var inst_24210__$1 = (state_24257[(2)]);
var state_24257__$1 = (function (){var statearr_24261 = state_24257;
(statearr_24261[(7)] = inst_24210__$1);

return statearr_24261;
})();
if(cljs.core.truth_(inst_24210__$1)){
var statearr_24262_24291 = state_24257__$1;
(statearr_24262_24291[(1)] = (5));

} else {
var statearr_24263_24292 = state_24257__$1;
(statearr_24263_24292[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (15))){
var inst_24217 = (state_24257[(8)]);
var inst_24232 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_24217);
var inst_24233 = cljs.core.first.call(null,inst_24232);
var inst_24234 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_24233);
var inst_24235 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_24234)].join('');
var inst_24236 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_24235);
var state_24257__$1 = state_24257;
var statearr_24264_24293 = state_24257__$1;
(statearr_24264_24293[(2)] = inst_24236);

(statearr_24264_24293[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (13))){
var inst_24241 = (state_24257[(2)]);
var state_24257__$1 = state_24257;
var statearr_24265_24294 = state_24257__$1;
(statearr_24265_24294[(2)] = inst_24241);

(statearr_24265_24294[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (6))){
var state_24257__$1 = state_24257;
var statearr_24266_24295 = state_24257__$1;
(statearr_24266_24295[(2)] = null);

(statearr_24266_24295[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (17))){
var inst_24239 = (state_24257[(2)]);
var state_24257__$1 = state_24257;
var statearr_24267_24296 = state_24257__$1;
(statearr_24267_24296[(2)] = inst_24239);

(statearr_24267_24296[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (3))){
var inst_24255 = (state_24257[(2)]);
var state_24257__$1 = state_24257;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24257__$1,inst_24255);
} else {
if((state_val_24258 === (12))){
var inst_24216 = (state_24257[(9)]);
var inst_24230 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_24216,opts);
var state_24257__$1 = state_24257;
if(cljs.core.truth_(inst_24230)){
var statearr_24268_24297 = state_24257__$1;
(statearr_24268_24297[(1)] = (15));

} else {
var statearr_24269_24298 = state_24257__$1;
(statearr_24269_24298[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (2))){
var state_24257__$1 = state_24257;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24257__$1,(4),ch);
} else {
if((state_val_24258 === (11))){
var inst_24217 = (state_24257[(8)]);
var inst_24222 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24223 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_24217);
var inst_24224 = cljs.core.async.timeout.call(null,(1000));
var inst_24225 = [inst_24223,inst_24224];
var inst_24226 = (new cljs.core.PersistentVector(null,2,(5),inst_24222,inst_24225,null));
var state_24257__$1 = state_24257;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24257__$1,(14),inst_24226);
} else {
if((state_val_24258 === (9))){
var inst_24217 = (state_24257[(8)]);
var inst_24243 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_24244 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_24217);
var inst_24245 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_24244);
var inst_24246 = [cljs.core.str("Not loading: "),cljs.core.str(inst_24245)].join('');
var inst_24247 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_24246);
var state_24257__$1 = (function (){var statearr_24270 = state_24257;
(statearr_24270[(10)] = inst_24243);

return statearr_24270;
})();
var statearr_24271_24299 = state_24257__$1;
(statearr_24271_24299[(2)] = inst_24247);

(statearr_24271_24299[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (5))){
var inst_24210 = (state_24257[(7)]);
var inst_24212 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_24213 = (new cljs.core.PersistentArrayMap(null,2,inst_24212,null));
var inst_24214 = (new cljs.core.PersistentHashSet(null,inst_24213,null));
var inst_24215 = figwheel.client.focus_msgs.call(null,inst_24214,inst_24210);
var inst_24216 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_24215);
var inst_24217 = cljs.core.first.call(null,inst_24215);
var inst_24218 = figwheel.client.autoload_QMARK_.call(null);
var state_24257__$1 = (function (){var statearr_24272 = state_24257;
(statearr_24272[(9)] = inst_24216);

(statearr_24272[(8)] = inst_24217);

return statearr_24272;
})();
if(cljs.core.truth_(inst_24218)){
var statearr_24273_24300 = state_24257__$1;
(statearr_24273_24300[(1)] = (8));

} else {
var statearr_24274_24301 = state_24257__$1;
(statearr_24274_24301[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (14))){
var inst_24228 = (state_24257[(2)]);
var state_24257__$1 = state_24257;
var statearr_24275_24302 = state_24257__$1;
(statearr_24275_24302[(2)] = inst_24228);

(statearr_24275_24302[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (16))){
var state_24257__$1 = state_24257;
var statearr_24276_24303 = state_24257__$1;
(statearr_24276_24303[(2)] = null);

(statearr_24276_24303[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (10))){
var inst_24249 = (state_24257[(2)]);
var state_24257__$1 = (function (){var statearr_24277 = state_24257;
(statearr_24277[(11)] = inst_24249);

return statearr_24277;
})();
var statearr_24278_24304 = state_24257__$1;
(statearr_24278_24304[(2)] = null);

(statearr_24278_24304[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (8))){
var inst_24216 = (state_24257[(9)]);
var inst_24220 = figwheel.client.reload_file_state_QMARK_.call(null,inst_24216,opts);
var state_24257__$1 = state_24257;
if(cljs.core.truth_(inst_24220)){
var statearr_24279_24305 = state_24257__$1;
(statearr_24279_24305[(1)] = (11));

} else {
var statearr_24280_24306 = state_24257__$1;
(statearr_24280_24306[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19841__auto___24288,ch))
;
return ((function (switch__19729__auto__,c__19841__auto___24288,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__19730__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__19730__auto____0 = (function (){
var statearr_24284 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24284[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__19730__auto__);

(statearr_24284[(1)] = (1));

return statearr_24284;
});
var figwheel$client$file_reloader_plugin_$_state_machine__19730__auto____1 = (function (state_24257){
while(true){
var ret_value__19731__auto__ = (function (){try{while(true){
var result__19732__auto__ = switch__19729__auto__.call(null,state_24257);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19732__auto__;
}
break;
}
}catch (e24285){if((e24285 instanceof Object)){
var ex__19733__auto__ = e24285;
var statearr_24286_24307 = state_24257;
(statearr_24286_24307[(5)] = ex__19733__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24257);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24285;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24308 = state_24257;
state_24257 = G__24308;
continue;
} else {
return ret_value__19731__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__19730__auto__ = function(state_24257){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__19730__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__19730__auto____1.call(this,state_24257);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__19730__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__19730__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__19730__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__19730__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__19730__auto__;
})()
;})(switch__19729__auto__,c__19841__auto___24288,ch))
})();
var state__19843__auto__ = (function (){var statearr_24287 = f__19842__auto__.call(null);
(statearr_24287[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19841__auto___24288);

return statearr_24287;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19843__auto__);
});})(c__19841__auto___24288,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__24309_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__24309_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_24316 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_24316){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_24314 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_24315 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_24314,_STAR_print_newline_STAR_24315,base_path_24316){
return (function() { 
var G__24317__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__24317 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24318__i = 0, G__24318__a = new Array(arguments.length -  0);
while (G__24318__i < G__24318__a.length) {G__24318__a[G__24318__i] = arguments[G__24318__i + 0]; ++G__24318__i;}
  args = new cljs.core.IndexedSeq(G__24318__a,0);
} 
return G__24317__delegate.call(this,args);};
G__24317.cljs$lang$maxFixedArity = 0;
G__24317.cljs$lang$applyTo = (function (arglist__24319){
var args = cljs.core.seq(arglist__24319);
return G__24317__delegate(args);
});
G__24317.cljs$core$IFn$_invoke$arity$variadic = G__24317__delegate;
return G__24317;
})()
;})(_STAR_print_fn_STAR_24314,_STAR_print_newline_STAR_24315,base_path_24316))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_24315;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_24314;
}}catch (e24313){if((e24313 instanceof Error)){
var e = e24313;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_24316], null));
} else {
var e = e24313;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_24316))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__24320){
var map__24327 = p__24320;
var map__24327__$1 = ((((!((map__24327 == null)))?((((map__24327.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24327.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24327):map__24327);
var opts = map__24327__$1;
var build_id = cljs.core.get.call(null,map__24327__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__24327,map__24327__$1,opts,build_id){
return (function (p__24329){
var vec__24330 = p__24329;
var map__24331 = cljs.core.nth.call(null,vec__24330,(0),null);
var map__24331__$1 = ((((!((map__24331 == null)))?((((map__24331.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24331.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24331):map__24331);
var msg = map__24331__$1;
var msg_name = cljs.core.get.call(null,map__24331__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24330,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__24330,map__24331,map__24331__$1,msg,msg_name,_,map__24327,map__24327__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__24330,map__24331,map__24331__$1,msg,msg_name,_,map__24327,map__24327__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__24327,map__24327__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__24337){
var vec__24338 = p__24337;
var map__24339 = cljs.core.nth.call(null,vec__24338,(0),null);
var map__24339__$1 = ((((!((map__24339 == null)))?((((map__24339.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24339.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24339):map__24339);
var msg = map__24339__$1;
var msg_name = cljs.core.get.call(null,map__24339__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24338,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__24341){
var map__24351 = p__24341;
var map__24351__$1 = ((((!((map__24351 == null)))?((((map__24351.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24351.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24351):map__24351);
var on_compile_warning = cljs.core.get.call(null,map__24351__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__24351__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__24351,map__24351__$1,on_compile_warning,on_compile_fail){
return (function (p__24353){
var vec__24354 = p__24353;
var map__24355 = cljs.core.nth.call(null,vec__24354,(0),null);
var map__24355__$1 = ((((!((map__24355 == null)))?((((map__24355.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24355.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24355):map__24355);
var msg = map__24355__$1;
var msg_name = cljs.core.get.call(null,map__24355__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24354,(1));
var pred__24357 = cljs.core._EQ_;
var expr__24358 = msg_name;
if(cljs.core.truth_(pred__24357.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__24358))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__24357.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__24358))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__24351,map__24351__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__19841__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19841__auto__,msg_hist,msg_names,msg){
return (function (){
var f__19842__auto__ = (function (){var switch__19729__auto__ = ((function (c__19841__auto__,msg_hist,msg_names,msg){
return (function (state_24574){
var state_val_24575 = (state_24574[(1)]);
if((state_val_24575 === (7))){
var inst_24498 = (state_24574[(2)]);
var state_24574__$1 = state_24574;
if(cljs.core.truth_(inst_24498)){
var statearr_24576_24622 = state_24574__$1;
(statearr_24576_24622[(1)] = (8));

} else {
var statearr_24577_24623 = state_24574__$1;
(statearr_24577_24623[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24575 === (20))){
var inst_24568 = (state_24574[(2)]);
var state_24574__$1 = state_24574;
var statearr_24578_24624 = state_24574__$1;
(statearr_24578_24624[(2)] = inst_24568);

(statearr_24578_24624[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24575 === (27))){
var inst_24564 = (state_24574[(2)]);
var state_24574__$1 = state_24574;
var statearr_24579_24625 = state_24574__$1;
(statearr_24579_24625[(2)] = inst_24564);

(statearr_24579_24625[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24575 === (1))){
var inst_24491 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_24574__$1 = state_24574;
if(cljs.core.truth_(inst_24491)){
var statearr_24580_24626 = state_24574__$1;
(statearr_24580_24626[(1)] = (2));

} else {
var statearr_24581_24627 = state_24574__$1;
(statearr_24581_24627[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24575 === (24))){
var inst_24566 = (state_24574[(2)]);
var state_24574__$1 = state_24574;
var statearr_24582_24628 = state_24574__$1;
(statearr_24582_24628[(2)] = inst_24566);

(statearr_24582_24628[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24575 === (4))){
var inst_24572 = (state_24574[(2)]);
var state_24574__$1 = state_24574;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24574__$1,inst_24572);
} else {
if((state_val_24575 === (15))){
var inst_24570 = (state_24574[(2)]);
var state_24574__$1 = state_24574;
var statearr_24583_24629 = state_24574__$1;
(statearr_24583_24629[(2)] = inst_24570);

(statearr_24583_24629[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24575 === (21))){
var inst_24529 = (state_24574[(2)]);
var state_24574__$1 = state_24574;
var statearr_24584_24630 = state_24574__$1;
(statearr_24584_24630[(2)] = inst_24529);

(statearr_24584_24630[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24575 === (31))){
var inst_24553 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_24574__$1 = state_24574;
if(cljs.core.truth_(inst_24553)){
var statearr_24585_24631 = state_24574__$1;
(statearr_24585_24631[(1)] = (34));

} else {
var statearr_24586_24632 = state_24574__$1;
(statearr_24586_24632[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24575 === (32))){
var inst_24562 = (state_24574[(2)]);
var state_24574__$1 = state_24574;
var statearr_24587_24633 = state_24574__$1;
(statearr_24587_24633[(2)] = inst_24562);

(statearr_24587_24633[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24575 === (33))){
var inst_24551 = (state_24574[(2)]);
var state_24574__$1 = state_24574;
var statearr_24588_24634 = state_24574__$1;
(statearr_24588_24634[(2)] = inst_24551);

(statearr_24588_24634[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24575 === (13))){
var inst_24512 = figwheel.client.heads_up.clear.call(null);
var state_24574__$1 = state_24574;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24574__$1,(16),inst_24512);
} else {
if((state_val_24575 === (22))){
var inst_24533 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24534 = figwheel.client.heads_up.append_message.call(null,inst_24533);
var state_24574__$1 = state_24574;
var statearr_24589_24635 = state_24574__$1;
(statearr_24589_24635[(2)] = inst_24534);

(statearr_24589_24635[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24575 === (36))){
var inst_24560 = (state_24574[(2)]);
var state_24574__$1 = state_24574;
var statearr_24590_24636 = state_24574__$1;
(statearr_24590_24636[(2)] = inst_24560);

(statearr_24590_24636[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24575 === (29))){
var inst_24544 = (state_24574[(2)]);
var state_24574__$1 = state_24574;
var statearr_24591_24637 = state_24574__$1;
(statearr_24591_24637[(2)] = inst_24544);

(statearr_24591_24637[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24575 === (6))){
var inst_24493 = (state_24574[(7)]);
var state_24574__$1 = state_24574;
var statearr_24592_24638 = state_24574__$1;
(statearr_24592_24638[(2)] = inst_24493);

(statearr_24592_24638[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24575 === (28))){
var inst_24540 = (state_24574[(2)]);
var inst_24541 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24542 = figwheel.client.heads_up.display_warning.call(null,inst_24541);
var state_24574__$1 = (function (){var statearr_24593 = state_24574;
(statearr_24593[(8)] = inst_24540);

return statearr_24593;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24574__$1,(29),inst_24542);
} else {
if((state_val_24575 === (25))){
var inst_24538 = figwheel.client.heads_up.clear.call(null);
var state_24574__$1 = state_24574;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24574__$1,(28),inst_24538);
} else {
if((state_val_24575 === (34))){
var inst_24555 = figwheel.client.heads_up.flash_loaded.call(null);
var state_24574__$1 = state_24574;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24574__$1,(37),inst_24555);
} else {
if((state_val_24575 === (17))){
var inst_24520 = (state_24574[(2)]);
var state_24574__$1 = state_24574;
var statearr_24594_24639 = state_24574__$1;
(statearr_24594_24639[(2)] = inst_24520);

(statearr_24594_24639[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24575 === (3))){
var inst_24510 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_24574__$1 = state_24574;
if(cljs.core.truth_(inst_24510)){
var statearr_24595_24640 = state_24574__$1;
(statearr_24595_24640[(1)] = (13));

} else {
var statearr_24596_24641 = state_24574__$1;
(statearr_24596_24641[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24575 === (12))){
var inst_24506 = (state_24574[(2)]);
var state_24574__$1 = state_24574;
var statearr_24597_24642 = state_24574__$1;
(statearr_24597_24642[(2)] = inst_24506);

(statearr_24597_24642[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24575 === (2))){
var inst_24493 = (state_24574[(7)]);
var inst_24493__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_24574__$1 = (function (){var statearr_24598 = state_24574;
(statearr_24598[(7)] = inst_24493__$1);

return statearr_24598;
})();
if(cljs.core.truth_(inst_24493__$1)){
var statearr_24599_24643 = state_24574__$1;
(statearr_24599_24643[(1)] = (5));

} else {
var statearr_24600_24644 = state_24574__$1;
(statearr_24600_24644[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24575 === (23))){
var inst_24536 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_24574__$1 = state_24574;
if(cljs.core.truth_(inst_24536)){
var statearr_24601_24645 = state_24574__$1;
(statearr_24601_24645[(1)] = (25));

} else {
var statearr_24602_24646 = state_24574__$1;
(statearr_24602_24646[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24575 === (35))){
var state_24574__$1 = state_24574;
var statearr_24603_24647 = state_24574__$1;
(statearr_24603_24647[(2)] = null);

(statearr_24603_24647[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24575 === (19))){
var inst_24531 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_24574__$1 = state_24574;
if(cljs.core.truth_(inst_24531)){
var statearr_24604_24648 = state_24574__$1;
(statearr_24604_24648[(1)] = (22));

} else {
var statearr_24605_24649 = state_24574__$1;
(statearr_24605_24649[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24575 === (11))){
var inst_24502 = (state_24574[(2)]);
var state_24574__$1 = state_24574;
var statearr_24606_24650 = state_24574__$1;
(statearr_24606_24650[(2)] = inst_24502);

(statearr_24606_24650[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24575 === (9))){
var inst_24504 = figwheel.client.heads_up.clear.call(null);
var state_24574__$1 = state_24574;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24574__$1,(12),inst_24504);
} else {
if((state_val_24575 === (5))){
var inst_24495 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_24574__$1 = state_24574;
var statearr_24607_24651 = state_24574__$1;
(statearr_24607_24651[(2)] = inst_24495);

(statearr_24607_24651[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24575 === (14))){
var inst_24522 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_24574__$1 = state_24574;
if(cljs.core.truth_(inst_24522)){
var statearr_24608_24652 = state_24574__$1;
(statearr_24608_24652[(1)] = (18));

} else {
var statearr_24609_24653 = state_24574__$1;
(statearr_24609_24653[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24575 === (26))){
var inst_24546 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_24574__$1 = state_24574;
if(cljs.core.truth_(inst_24546)){
var statearr_24610_24654 = state_24574__$1;
(statearr_24610_24654[(1)] = (30));

} else {
var statearr_24611_24655 = state_24574__$1;
(statearr_24611_24655[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24575 === (16))){
var inst_24514 = (state_24574[(2)]);
var inst_24515 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24516 = figwheel.client.format_messages.call(null,inst_24515);
var inst_24517 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24518 = figwheel.client.heads_up.display_error.call(null,inst_24516,inst_24517);
var state_24574__$1 = (function (){var statearr_24612 = state_24574;
(statearr_24612[(9)] = inst_24514);

return statearr_24612;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24574__$1,(17),inst_24518);
} else {
if((state_val_24575 === (30))){
var inst_24548 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24549 = figwheel.client.heads_up.display_warning.call(null,inst_24548);
var state_24574__$1 = state_24574;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24574__$1,(33),inst_24549);
} else {
if((state_val_24575 === (10))){
var inst_24508 = (state_24574[(2)]);
var state_24574__$1 = state_24574;
var statearr_24613_24656 = state_24574__$1;
(statearr_24613_24656[(2)] = inst_24508);

(statearr_24613_24656[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24575 === (18))){
var inst_24524 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24525 = figwheel.client.format_messages.call(null,inst_24524);
var inst_24526 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24527 = figwheel.client.heads_up.display_error.call(null,inst_24525,inst_24526);
var state_24574__$1 = state_24574;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24574__$1,(21),inst_24527);
} else {
if((state_val_24575 === (37))){
var inst_24557 = (state_24574[(2)]);
var state_24574__$1 = state_24574;
var statearr_24614_24657 = state_24574__$1;
(statearr_24614_24657[(2)] = inst_24557);

(statearr_24614_24657[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24575 === (8))){
var inst_24500 = figwheel.client.heads_up.flash_loaded.call(null);
var state_24574__$1 = state_24574;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24574__$1,(11),inst_24500);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19841__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__19729__auto__,c__19841__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19730__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19730__auto____0 = (function (){
var statearr_24618 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24618[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19730__auto__);

(statearr_24618[(1)] = (1));

return statearr_24618;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19730__auto____1 = (function (state_24574){
while(true){
var ret_value__19731__auto__ = (function (){try{while(true){
var result__19732__auto__ = switch__19729__auto__.call(null,state_24574);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19732__auto__;
}
break;
}
}catch (e24619){if((e24619 instanceof Object)){
var ex__19733__auto__ = e24619;
var statearr_24620_24658 = state_24574;
(statearr_24620_24658[(5)] = ex__19733__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24574);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24619;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24659 = state_24574;
state_24574 = G__24659;
continue;
} else {
return ret_value__19731__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19730__auto__ = function(state_24574){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19730__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19730__auto____1.call(this,state_24574);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19730__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19730__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19730__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19730__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19730__auto__;
})()
;})(switch__19729__auto__,c__19841__auto__,msg_hist,msg_names,msg))
})();
var state__19843__auto__ = (function (){var statearr_24621 = f__19842__auto__.call(null);
(statearr_24621[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19841__auto__);

return statearr_24621;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19843__auto__);
});})(c__19841__auto__,msg_hist,msg_names,msg))
);

return c__19841__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__19841__auto___24722 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19841__auto___24722,ch){
return (function (){
var f__19842__auto__ = (function (){var switch__19729__auto__ = ((function (c__19841__auto___24722,ch){
return (function (state_24705){
var state_val_24706 = (state_24705[(1)]);
if((state_val_24706 === (1))){
var state_24705__$1 = state_24705;
var statearr_24707_24723 = state_24705__$1;
(statearr_24707_24723[(2)] = null);

(statearr_24707_24723[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24706 === (2))){
var state_24705__$1 = state_24705;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24705__$1,(4),ch);
} else {
if((state_val_24706 === (3))){
var inst_24703 = (state_24705[(2)]);
var state_24705__$1 = state_24705;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24705__$1,inst_24703);
} else {
if((state_val_24706 === (4))){
var inst_24693 = (state_24705[(7)]);
var inst_24693__$1 = (state_24705[(2)]);
var state_24705__$1 = (function (){var statearr_24708 = state_24705;
(statearr_24708[(7)] = inst_24693__$1);

return statearr_24708;
})();
if(cljs.core.truth_(inst_24693__$1)){
var statearr_24709_24724 = state_24705__$1;
(statearr_24709_24724[(1)] = (5));

} else {
var statearr_24710_24725 = state_24705__$1;
(statearr_24710_24725[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24706 === (5))){
var inst_24693 = (state_24705[(7)]);
var inst_24695 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_24693);
var state_24705__$1 = state_24705;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24705__$1,(8),inst_24695);
} else {
if((state_val_24706 === (6))){
var state_24705__$1 = state_24705;
var statearr_24711_24726 = state_24705__$1;
(statearr_24711_24726[(2)] = null);

(statearr_24711_24726[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24706 === (7))){
var inst_24701 = (state_24705[(2)]);
var state_24705__$1 = state_24705;
var statearr_24712_24727 = state_24705__$1;
(statearr_24712_24727[(2)] = inst_24701);

(statearr_24712_24727[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24706 === (8))){
var inst_24697 = (state_24705[(2)]);
var state_24705__$1 = (function (){var statearr_24713 = state_24705;
(statearr_24713[(8)] = inst_24697);

return statearr_24713;
})();
var statearr_24714_24728 = state_24705__$1;
(statearr_24714_24728[(2)] = null);

(statearr_24714_24728[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__19841__auto___24722,ch))
;
return ((function (switch__19729__auto__,c__19841__auto___24722,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__19730__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__19730__auto____0 = (function (){
var statearr_24718 = [null,null,null,null,null,null,null,null,null];
(statearr_24718[(0)] = figwheel$client$heads_up_plugin_$_state_machine__19730__auto__);

(statearr_24718[(1)] = (1));

return statearr_24718;
});
var figwheel$client$heads_up_plugin_$_state_machine__19730__auto____1 = (function (state_24705){
while(true){
var ret_value__19731__auto__ = (function (){try{while(true){
var result__19732__auto__ = switch__19729__auto__.call(null,state_24705);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19732__auto__;
}
break;
}
}catch (e24719){if((e24719 instanceof Object)){
var ex__19733__auto__ = e24719;
var statearr_24720_24729 = state_24705;
(statearr_24720_24729[(5)] = ex__19733__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24705);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24719;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24730 = state_24705;
state_24705 = G__24730;
continue;
} else {
return ret_value__19731__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__19730__auto__ = function(state_24705){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__19730__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__19730__auto____1.call(this,state_24705);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__19730__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__19730__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__19730__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__19730__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__19730__auto__;
})()
;})(switch__19729__auto__,c__19841__auto___24722,ch))
})();
var state__19843__auto__ = (function (){var statearr_24721 = f__19842__auto__.call(null);
(statearr_24721[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19841__auto___24722);

return statearr_24721;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19843__auto__);
});})(c__19841__auto___24722,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__19841__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19841__auto__){
return (function (){
var f__19842__auto__ = (function (){var switch__19729__auto__ = ((function (c__19841__auto__){
return (function (state_24751){
var state_val_24752 = (state_24751[(1)]);
if((state_val_24752 === (1))){
var inst_24746 = cljs.core.async.timeout.call(null,(3000));
var state_24751__$1 = state_24751;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24751__$1,(2),inst_24746);
} else {
if((state_val_24752 === (2))){
var inst_24748 = (state_24751[(2)]);
var inst_24749 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_24751__$1 = (function (){var statearr_24753 = state_24751;
(statearr_24753[(7)] = inst_24748);

return statearr_24753;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24751__$1,inst_24749);
} else {
return null;
}
}
});})(c__19841__auto__))
;
return ((function (switch__19729__auto__,c__19841__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__19730__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__19730__auto____0 = (function (){
var statearr_24757 = [null,null,null,null,null,null,null,null];
(statearr_24757[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__19730__auto__);

(statearr_24757[(1)] = (1));

return statearr_24757;
});
var figwheel$client$enforce_project_plugin_$_state_machine__19730__auto____1 = (function (state_24751){
while(true){
var ret_value__19731__auto__ = (function (){try{while(true){
var result__19732__auto__ = switch__19729__auto__.call(null,state_24751);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19732__auto__;
}
break;
}
}catch (e24758){if((e24758 instanceof Object)){
var ex__19733__auto__ = e24758;
var statearr_24759_24761 = state_24751;
(statearr_24759_24761[(5)] = ex__19733__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24751);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24758;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24762 = state_24751;
state_24751 = G__24762;
continue;
} else {
return ret_value__19731__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__19730__auto__ = function(state_24751){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__19730__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__19730__auto____1.call(this,state_24751);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__19730__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__19730__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__19730__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__19730__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__19730__auto__;
})()
;})(switch__19729__auto__,c__19841__auto__))
})();
var state__19843__auto__ = (function (){var statearr_24760 = f__19842__auto__.call(null);
(statearr_24760[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19841__auto__);

return statearr_24760;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19843__auto__);
});})(c__19841__auto__))
);

return c__19841__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__24763){
var map__24770 = p__24763;
var map__24770__$1 = ((((!((map__24770 == null)))?((((map__24770.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24770.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24770):map__24770);
var ed = map__24770__$1;
var formatted_exception = cljs.core.get.call(null,map__24770__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__24770__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__24770__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__24772_24776 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__24773_24777 = null;
var count__24774_24778 = (0);
var i__24775_24779 = (0);
while(true){
if((i__24775_24779 < count__24774_24778)){
var msg_24780 = cljs.core._nth.call(null,chunk__24773_24777,i__24775_24779);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_24780);

var G__24781 = seq__24772_24776;
var G__24782 = chunk__24773_24777;
var G__24783 = count__24774_24778;
var G__24784 = (i__24775_24779 + (1));
seq__24772_24776 = G__24781;
chunk__24773_24777 = G__24782;
count__24774_24778 = G__24783;
i__24775_24779 = G__24784;
continue;
} else {
var temp__4425__auto___24785 = cljs.core.seq.call(null,seq__24772_24776);
if(temp__4425__auto___24785){
var seq__24772_24786__$1 = temp__4425__auto___24785;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24772_24786__$1)){
var c__17629__auto___24787 = cljs.core.chunk_first.call(null,seq__24772_24786__$1);
var G__24788 = cljs.core.chunk_rest.call(null,seq__24772_24786__$1);
var G__24789 = c__17629__auto___24787;
var G__24790 = cljs.core.count.call(null,c__17629__auto___24787);
var G__24791 = (0);
seq__24772_24776 = G__24788;
chunk__24773_24777 = G__24789;
count__24774_24778 = G__24790;
i__24775_24779 = G__24791;
continue;
} else {
var msg_24792 = cljs.core.first.call(null,seq__24772_24786__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_24792);

var G__24793 = cljs.core.next.call(null,seq__24772_24786__$1);
var G__24794 = null;
var G__24795 = (0);
var G__24796 = (0);
seq__24772_24776 = G__24793;
chunk__24773_24777 = G__24794;
count__24774_24778 = G__24795;
i__24775_24779 = G__24796;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__24797){
var map__24800 = p__24797;
var map__24800__$1 = ((((!((map__24800 == null)))?((((map__24800.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24800.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24800):map__24800);
var w = map__24800__$1;
var message = cljs.core.get.call(null,map__24800__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16814__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16814__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16814__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__24808 = cljs.core.seq.call(null,plugins);
var chunk__24809 = null;
var count__24810 = (0);
var i__24811 = (0);
while(true){
if((i__24811 < count__24810)){
var vec__24812 = cljs.core._nth.call(null,chunk__24809,i__24811);
var k = cljs.core.nth.call(null,vec__24812,(0),null);
var plugin = cljs.core.nth.call(null,vec__24812,(1),null);
if(cljs.core.truth_(plugin)){
var pl_24814 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__24808,chunk__24809,count__24810,i__24811,pl_24814,vec__24812,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_24814.call(null,msg_hist);
});})(seq__24808,chunk__24809,count__24810,i__24811,pl_24814,vec__24812,k,plugin))
);
} else {
}

var G__24815 = seq__24808;
var G__24816 = chunk__24809;
var G__24817 = count__24810;
var G__24818 = (i__24811 + (1));
seq__24808 = G__24815;
chunk__24809 = G__24816;
count__24810 = G__24817;
i__24811 = G__24818;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24808);
if(temp__4425__auto__){
var seq__24808__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24808__$1)){
var c__17629__auto__ = cljs.core.chunk_first.call(null,seq__24808__$1);
var G__24819 = cljs.core.chunk_rest.call(null,seq__24808__$1);
var G__24820 = c__17629__auto__;
var G__24821 = cljs.core.count.call(null,c__17629__auto__);
var G__24822 = (0);
seq__24808 = G__24819;
chunk__24809 = G__24820;
count__24810 = G__24821;
i__24811 = G__24822;
continue;
} else {
var vec__24813 = cljs.core.first.call(null,seq__24808__$1);
var k = cljs.core.nth.call(null,vec__24813,(0),null);
var plugin = cljs.core.nth.call(null,vec__24813,(1),null);
if(cljs.core.truth_(plugin)){
var pl_24823 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__24808,chunk__24809,count__24810,i__24811,pl_24823,vec__24813,k,plugin,seq__24808__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_24823.call(null,msg_hist);
});})(seq__24808,chunk__24809,count__24810,i__24811,pl_24823,vec__24813,k,plugin,seq__24808__$1,temp__4425__auto__))
);
} else {
}

var G__24824 = cljs.core.next.call(null,seq__24808__$1);
var G__24825 = null;
var G__24826 = (0);
var G__24827 = (0);
seq__24808 = G__24824;
chunk__24809 = G__24825;
count__24810 = G__24826;
i__24811 = G__24827;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args24828 = [];
var len__17884__auto___24831 = arguments.length;
var i__17885__auto___24832 = (0);
while(true){
if((i__17885__auto___24832 < len__17884__auto___24831)){
args24828.push((arguments[i__17885__auto___24832]));

var G__24833 = (i__17885__auto___24832 + (1));
i__17885__auto___24832 = G__24833;
continue;
} else {
}
break;
}

var G__24830 = args24828.length;
switch (G__24830) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24828.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__17891__auto__ = [];
var len__17884__auto___24839 = arguments.length;
var i__17885__auto___24840 = (0);
while(true){
if((i__17885__auto___24840 < len__17884__auto___24839)){
args__17891__auto__.push((arguments[i__17885__auto___24840]));

var G__24841 = (i__17885__auto___24840 + (1));
i__17885__auto___24840 = G__24841;
continue;
} else {
}
break;
}

var argseq__17892__auto__ = ((((0) < args__17891__auto__.length))?(new cljs.core.IndexedSeq(args__17891__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17892__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__24836){
var map__24837 = p__24836;
var map__24837__$1 = ((((!((map__24837 == null)))?((((map__24837.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24837.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24837):map__24837);
var opts = map__24837__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq24835){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24835));
});

//# sourceMappingURL=client.js.map