// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__123_137 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__124_138 = null;
var count__125_139 = (0);
var i__126_140 = (0);
while(true){
if((i__126_140 < count__125_139)){
var f_141 = cljs.core._nth.call(null,chunk__124_138,i__126_140);
cljs.core.println.call(null,"  ",f_141);

var G__142 = seq__123_137;
var G__143 = chunk__124_138;
var G__144 = count__125_139;
var G__145 = (i__126_140 + (1));
seq__123_137 = G__142;
chunk__124_138 = G__143;
count__125_139 = G__144;
i__126_140 = G__145;
continue;
} else {
var temp__4425__auto___146 = cljs.core.seq.call(null,seq__123_137);
if(temp__4425__auto___146){
var seq__123_147__$1 = temp__4425__auto___146;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__123_147__$1)){
var c__3197__auto___148 = cljs.core.chunk_first.call(null,seq__123_147__$1);
var G__149 = cljs.core.chunk_rest.call(null,seq__123_147__$1);
var G__150 = c__3197__auto___148;
var G__151 = cljs.core.count.call(null,c__3197__auto___148);
var G__152 = (0);
seq__123_137 = G__149;
chunk__124_138 = G__150;
count__125_139 = G__151;
i__126_140 = G__152;
continue;
} else {
var f_153 = cljs.core.first.call(null,seq__123_147__$1);
cljs.core.println.call(null,"  ",f_153);

var G__154 = cljs.core.next.call(null,seq__123_147__$1);
var G__155 = null;
var G__156 = (0);
var G__157 = (0);
seq__123_137 = G__154;
chunk__124_138 = G__155;
count__125_139 = G__156;
i__126_140 = G__157;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_158 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__2822__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__2822__auto__)){
return or__2822__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_158);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_158)))?cljs.core.second.call(null,arglists_158):arglists_158));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__127 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__128 = null;
var count__129 = (0);
var i__130 = (0);
while(true){
if((i__130 < count__129)){
var vec__131 = cljs.core._nth.call(null,chunk__128,i__130);
var name = cljs.core.nth.call(null,vec__131,(0),null);
var map__132 = cljs.core.nth.call(null,vec__131,(1),null);
var map__132__$1 = ((((!((map__132 == null)))?((((map__132.cljs$lang$protocol_mask$partition0$ & (64))) || (map__132.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__132):map__132);
var doc = cljs.core.get.call(null,map__132__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__132__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__159 = seq__127;
var G__160 = chunk__128;
var G__161 = count__129;
var G__162 = (i__130 + (1));
seq__127 = G__159;
chunk__128 = G__160;
count__129 = G__161;
i__130 = G__162;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__127);
if(temp__4425__auto__){
var seq__127__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__127__$1)){
var c__3197__auto__ = cljs.core.chunk_first.call(null,seq__127__$1);
var G__163 = cljs.core.chunk_rest.call(null,seq__127__$1);
var G__164 = c__3197__auto__;
var G__165 = cljs.core.count.call(null,c__3197__auto__);
var G__166 = (0);
seq__127 = G__163;
chunk__128 = G__164;
count__129 = G__165;
i__130 = G__166;
continue;
} else {
var vec__134 = cljs.core.first.call(null,seq__127__$1);
var name = cljs.core.nth.call(null,vec__134,(0),null);
var map__135 = cljs.core.nth.call(null,vec__134,(1),null);
var map__135__$1 = ((((!((map__135 == null)))?((((map__135.cljs$lang$protocol_mask$partition0$ & (64))) || (map__135.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__135):map__135);
var doc = cljs.core.get.call(null,map__135__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__135__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__167 = cljs.core.next.call(null,seq__127__$1);
var G__168 = null;
var G__169 = (0);
var G__170 = (0);
seq__127 = G__167;
chunk__128 = G__168;
count__129 = G__169;
i__130 = G__170;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map