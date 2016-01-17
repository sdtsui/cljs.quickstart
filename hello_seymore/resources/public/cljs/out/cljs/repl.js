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
var seq__23698_23712 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__23699_23713 = null;
var count__23700_23714 = (0);
var i__23701_23715 = (0);
while(true){
if((i__23701_23715 < count__23700_23714)){
var f_23716 = cljs.core._nth.call(null,chunk__23699_23713,i__23701_23715);
cljs.core.println.call(null,"  ",f_23716);

var G__23717 = seq__23698_23712;
var G__23718 = chunk__23699_23713;
var G__23719 = count__23700_23714;
var G__23720 = (i__23701_23715 + (1));
seq__23698_23712 = G__23717;
chunk__23699_23713 = G__23718;
count__23700_23714 = G__23719;
i__23701_23715 = G__23720;
continue;
} else {
var temp__4425__auto___23721 = cljs.core.seq.call(null,seq__23698_23712);
if(temp__4425__auto___23721){
var seq__23698_23722__$1 = temp__4425__auto___23721;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23698_23722__$1)){
var c__17629__auto___23723 = cljs.core.chunk_first.call(null,seq__23698_23722__$1);
var G__23724 = cljs.core.chunk_rest.call(null,seq__23698_23722__$1);
var G__23725 = c__17629__auto___23723;
var G__23726 = cljs.core.count.call(null,c__17629__auto___23723);
var G__23727 = (0);
seq__23698_23712 = G__23724;
chunk__23699_23713 = G__23725;
count__23700_23714 = G__23726;
i__23701_23715 = G__23727;
continue;
} else {
var f_23728 = cljs.core.first.call(null,seq__23698_23722__$1);
cljs.core.println.call(null,"  ",f_23728);

var G__23729 = cljs.core.next.call(null,seq__23698_23722__$1);
var G__23730 = null;
var G__23731 = (0);
var G__23732 = (0);
seq__23698_23712 = G__23729;
chunk__23699_23713 = G__23730;
count__23700_23714 = G__23731;
i__23701_23715 = G__23732;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_23733 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16826__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_23733);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_23733)))?cljs.core.second.call(null,arglists_23733):arglists_23733));
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
var seq__23702 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__23703 = null;
var count__23704 = (0);
var i__23705 = (0);
while(true){
if((i__23705 < count__23704)){
var vec__23706 = cljs.core._nth.call(null,chunk__23703,i__23705);
var name = cljs.core.nth.call(null,vec__23706,(0),null);
var map__23707 = cljs.core.nth.call(null,vec__23706,(1),null);
var map__23707__$1 = ((((!((map__23707 == null)))?((((map__23707.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23707.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23707):map__23707);
var doc = cljs.core.get.call(null,map__23707__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__23707__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__23734 = seq__23702;
var G__23735 = chunk__23703;
var G__23736 = count__23704;
var G__23737 = (i__23705 + (1));
seq__23702 = G__23734;
chunk__23703 = G__23735;
count__23704 = G__23736;
i__23705 = G__23737;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__23702);
if(temp__4425__auto__){
var seq__23702__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23702__$1)){
var c__17629__auto__ = cljs.core.chunk_first.call(null,seq__23702__$1);
var G__23738 = cljs.core.chunk_rest.call(null,seq__23702__$1);
var G__23739 = c__17629__auto__;
var G__23740 = cljs.core.count.call(null,c__17629__auto__);
var G__23741 = (0);
seq__23702 = G__23738;
chunk__23703 = G__23739;
count__23704 = G__23740;
i__23705 = G__23741;
continue;
} else {
var vec__23709 = cljs.core.first.call(null,seq__23702__$1);
var name = cljs.core.nth.call(null,vec__23709,(0),null);
var map__23710 = cljs.core.nth.call(null,vec__23709,(1),null);
var map__23710__$1 = ((((!((map__23710 == null)))?((((map__23710.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23710.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23710):map__23710);
var doc = cljs.core.get.call(null,map__23710__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__23710__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__23742 = cljs.core.next.call(null,seq__23702__$1);
var G__23743 = null;
var G__23744 = (0);
var G__23745 = (0);
seq__23702 = G__23742;
chunk__23703 = G__23743;
count__23704 = G__23744;
i__23705 = G__23745;
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