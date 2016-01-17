// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16826__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16826__auto__){
return or__16826__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__16826__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__22674_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__22674_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__22679 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__22680 = null;
var count__22681 = (0);
var i__22682 = (0);
while(true){
if((i__22682 < count__22681)){
var n = cljs.core._nth.call(null,chunk__22680,i__22682);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__22683 = seq__22679;
var G__22684 = chunk__22680;
var G__22685 = count__22681;
var G__22686 = (i__22682 + (1));
seq__22679 = G__22683;
chunk__22680 = G__22684;
count__22681 = G__22685;
i__22682 = G__22686;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__22679);
if(temp__4425__auto__){
var seq__22679__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22679__$1)){
var c__17629__auto__ = cljs.core.chunk_first.call(null,seq__22679__$1);
var G__22687 = cljs.core.chunk_rest.call(null,seq__22679__$1);
var G__22688 = c__17629__auto__;
var G__22689 = cljs.core.count.call(null,c__17629__auto__);
var G__22690 = (0);
seq__22679 = G__22687;
chunk__22680 = G__22688;
count__22681 = G__22689;
i__22682 = G__22690;
continue;
} else {
var n = cljs.core.first.call(null,seq__22679__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__22691 = cljs.core.next.call(null,seq__22679__$1);
var G__22692 = null;
var G__22693 = (0);
var G__22694 = (0);
seq__22679 = G__22691;
chunk__22680 = G__22692;
count__22681 = G__22693;
i__22682 = G__22694;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__22733_22740 = cljs.core.seq.call(null,deps);
var chunk__22734_22741 = null;
var count__22735_22742 = (0);
var i__22736_22743 = (0);
while(true){
if((i__22736_22743 < count__22735_22742)){
var dep_22744 = cljs.core._nth.call(null,chunk__22734_22741,i__22736_22743);
topo_sort_helper_STAR_.call(null,dep_22744,(depth + (1)),state);

var G__22745 = seq__22733_22740;
var G__22746 = chunk__22734_22741;
var G__22747 = count__22735_22742;
var G__22748 = (i__22736_22743 + (1));
seq__22733_22740 = G__22745;
chunk__22734_22741 = G__22746;
count__22735_22742 = G__22747;
i__22736_22743 = G__22748;
continue;
} else {
var temp__4425__auto___22749 = cljs.core.seq.call(null,seq__22733_22740);
if(temp__4425__auto___22749){
var seq__22733_22750__$1 = temp__4425__auto___22749;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22733_22750__$1)){
var c__17629__auto___22751 = cljs.core.chunk_first.call(null,seq__22733_22750__$1);
var G__22752 = cljs.core.chunk_rest.call(null,seq__22733_22750__$1);
var G__22753 = c__17629__auto___22751;
var G__22754 = cljs.core.count.call(null,c__17629__auto___22751);
var G__22755 = (0);
seq__22733_22740 = G__22752;
chunk__22734_22741 = G__22753;
count__22735_22742 = G__22754;
i__22736_22743 = G__22755;
continue;
} else {
var dep_22756 = cljs.core.first.call(null,seq__22733_22750__$1);
topo_sort_helper_STAR_.call(null,dep_22756,(depth + (1)),state);

var G__22757 = cljs.core.next.call(null,seq__22733_22750__$1);
var G__22758 = null;
var G__22759 = (0);
var G__22760 = (0);
seq__22733_22740 = G__22757;
chunk__22734_22741 = G__22758;
count__22735_22742 = G__22759;
i__22736_22743 = G__22760;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__22737){
var vec__22739 = p__22737;
var x = cljs.core.nth.call(null,vec__22739,(0),null);
var xs = cljs.core.nthnext.call(null,vec__22739,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__22739,x,xs,get_deps__$1){
return (function (p1__22695_SHARP_){
return clojure.set.difference.call(null,p1__22695_SHARP_,x);
});})(vec__22739,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__22773 = cljs.core.seq.call(null,provides);
var chunk__22774 = null;
var count__22775 = (0);
var i__22776 = (0);
while(true){
if((i__22776 < count__22775)){
var prov = cljs.core._nth.call(null,chunk__22774,i__22776);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__22777_22785 = cljs.core.seq.call(null,requires);
var chunk__22778_22786 = null;
var count__22779_22787 = (0);
var i__22780_22788 = (0);
while(true){
if((i__22780_22788 < count__22779_22787)){
var req_22789 = cljs.core._nth.call(null,chunk__22778_22786,i__22780_22788);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22789,prov);

var G__22790 = seq__22777_22785;
var G__22791 = chunk__22778_22786;
var G__22792 = count__22779_22787;
var G__22793 = (i__22780_22788 + (1));
seq__22777_22785 = G__22790;
chunk__22778_22786 = G__22791;
count__22779_22787 = G__22792;
i__22780_22788 = G__22793;
continue;
} else {
var temp__4425__auto___22794 = cljs.core.seq.call(null,seq__22777_22785);
if(temp__4425__auto___22794){
var seq__22777_22795__$1 = temp__4425__auto___22794;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22777_22795__$1)){
var c__17629__auto___22796 = cljs.core.chunk_first.call(null,seq__22777_22795__$1);
var G__22797 = cljs.core.chunk_rest.call(null,seq__22777_22795__$1);
var G__22798 = c__17629__auto___22796;
var G__22799 = cljs.core.count.call(null,c__17629__auto___22796);
var G__22800 = (0);
seq__22777_22785 = G__22797;
chunk__22778_22786 = G__22798;
count__22779_22787 = G__22799;
i__22780_22788 = G__22800;
continue;
} else {
var req_22801 = cljs.core.first.call(null,seq__22777_22795__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22801,prov);

var G__22802 = cljs.core.next.call(null,seq__22777_22795__$1);
var G__22803 = null;
var G__22804 = (0);
var G__22805 = (0);
seq__22777_22785 = G__22802;
chunk__22778_22786 = G__22803;
count__22779_22787 = G__22804;
i__22780_22788 = G__22805;
continue;
}
} else {
}
}
break;
}

var G__22806 = seq__22773;
var G__22807 = chunk__22774;
var G__22808 = count__22775;
var G__22809 = (i__22776 + (1));
seq__22773 = G__22806;
chunk__22774 = G__22807;
count__22775 = G__22808;
i__22776 = G__22809;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__22773);
if(temp__4425__auto__){
var seq__22773__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22773__$1)){
var c__17629__auto__ = cljs.core.chunk_first.call(null,seq__22773__$1);
var G__22810 = cljs.core.chunk_rest.call(null,seq__22773__$1);
var G__22811 = c__17629__auto__;
var G__22812 = cljs.core.count.call(null,c__17629__auto__);
var G__22813 = (0);
seq__22773 = G__22810;
chunk__22774 = G__22811;
count__22775 = G__22812;
i__22776 = G__22813;
continue;
} else {
var prov = cljs.core.first.call(null,seq__22773__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__22781_22814 = cljs.core.seq.call(null,requires);
var chunk__22782_22815 = null;
var count__22783_22816 = (0);
var i__22784_22817 = (0);
while(true){
if((i__22784_22817 < count__22783_22816)){
var req_22818 = cljs.core._nth.call(null,chunk__22782_22815,i__22784_22817);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22818,prov);

var G__22819 = seq__22781_22814;
var G__22820 = chunk__22782_22815;
var G__22821 = count__22783_22816;
var G__22822 = (i__22784_22817 + (1));
seq__22781_22814 = G__22819;
chunk__22782_22815 = G__22820;
count__22783_22816 = G__22821;
i__22784_22817 = G__22822;
continue;
} else {
var temp__4425__auto___22823__$1 = cljs.core.seq.call(null,seq__22781_22814);
if(temp__4425__auto___22823__$1){
var seq__22781_22824__$1 = temp__4425__auto___22823__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22781_22824__$1)){
var c__17629__auto___22825 = cljs.core.chunk_first.call(null,seq__22781_22824__$1);
var G__22826 = cljs.core.chunk_rest.call(null,seq__22781_22824__$1);
var G__22827 = c__17629__auto___22825;
var G__22828 = cljs.core.count.call(null,c__17629__auto___22825);
var G__22829 = (0);
seq__22781_22814 = G__22826;
chunk__22782_22815 = G__22827;
count__22783_22816 = G__22828;
i__22784_22817 = G__22829;
continue;
} else {
var req_22830 = cljs.core.first.call(null,seq__22781_22824__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22830,prov);

var G__22831 = cljs.core.next.call(null,seq__22781_22824__$1);
var G__22832 = null;
var G__22833 = (0);
var G__22834 = (0);
seq__22781_22814 = G__22831;
chunk__22782_22815 = G__22832;
count__22783_22816 = G__22833;
i__22784_22817 = G__22834;
continue;
}
} else {
}
}
break;
}

var G__22835 = cljs.core.next.call(null,seq__22773__$1);
var G__22836 = null;
var G__22837 = (0);
var G__22838 = (0);
seq__22773 = G__22835;
chunk__22774 = G__22836;
count__22775 = G__22837;
i__22776 = G__22838;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__22843_22847 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__22844_22848 = null;
var count__22845_22849 = (0);
var i__22846_22850 = (0);
while(true){
if((i__22846_22850 < count__22845_22849)){
var ns_22851 = cljs.core._nth.call(null,chunk__22844_22848,i__22846_22850);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_22851);

var G__22852 = seq__22843_22847;
var G__22853 = chunk__22844_22848;
var G__22854 = count__22845_22849;
var G__22855 = (i__22846_22850 + (1));
seq__22843_22847 = G__22852;
chunk__22844_22848 = G__22853;
count__22845_22849 = G__22854;
i__22846_22850 = G__22855;
continue;
} else {
var temp__4425__auto___22856 = cljs.core.seq.call(null,seq__22843_22847);
if(temp__4425__auto___22856){
var seq__22843_22857__$1 = temp__4425__auto___22856;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22843_22857__$1)){
var c__17629__auto___22858 = cljs.core.chunk_first.call(null,seq__22843_22857__$1);
var G__22859 = cljs.core.chunk_rest.call(null,seq__22843_22857__$1);
var G__22860 = c__17629__auto___22858;
var G__22861 = cljs.core.count.call(null,c__17629__auto___22858);
var G__22862 = (0);
seq__22843_22847 = G__22859;
chunk__22844_22848 = G__22860;
count__22845_22849 = G__22861;
i__22846_22850 = G__22862;
continue;
} else {
var ns_22863 = cljs.core.first.call(null,seq__22843_22857__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_22863);

var G__22864 = cljs.core.next.call(null,seq__22843_22857__$1);
var G__22865 = null;
var G__22866 = (0);
var G__22867 = (0);
seq__22843_22847 = G__22864;
chunk__22844_22848 = G__22865;
count__22845_22849 = G__22866;
i__22846_22850 = G__22867;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__16826__auto__ = goog.require__;
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__22868__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__22868 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22869__i = 0, G__22869__a = new Array(arguments.length -  0);
while (G__22869__i < G__22869__a.length) {G__22869__a[G__22869__i] = arguments[G__22869__i + 0]; ++G__22869__i;}
  args = new cljs.core.IndexedSeq(G__22869__a,0);
} 
return G__22868__delegate.call(this,args);};
G__22868.cljs$lang$maxFixedArity = 0;
G__22868.cljs$lang$applyTo = (function (arglist__22870){
var args = cljs.core.seq(arglist__22870);
return G__22868__delegate(args);
});
G__22868.cljs$core$IFn$_invoke$arity$variadic = G__22868__delegate;
return G__22868;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__22872 = cljs.core._EQ_;
var expr__22873 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__22872.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__22873))){
var path_parts = ((function (pred__22872,expr__22873){
return (function (p1__22871_SHARP_){
return clojure.string.split.call(null,p1__22871_SHARP_,/[\/\\]/);
});})(pred__22872,expr__22873))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__22872,expr__22873){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e22875){if((e22875 instanceof Error)){
var e = e22875;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e22875;

}
}})());
});
;})(path_parts,sep,root,pred__22872,expr__22873))
} else {
if(cljs.core.truth_(pred__22872.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__22873))){
return ((function (pred__22872,expr__22873){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__22872,expr__22873){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__22872,expr__22873))
);

return deferred.addErrback(((function (deferred,pred__22872,expr__22873){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__22872,expr__22873))
);
});
;})(pred__22872,expr__22873))
} else {
return ((function (pred__22872,expr__22873){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__22872,expr__22873))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__22876,callback){
var map__22879 = p__22876;
var map__22879__$1 = ((((!((map__22879 == null)))?((((map__22879.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22879.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22879):map__22879);
var file_msg = map__22879__$1;
var request_url = cljs.core.get.call(null,map__22879__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__22879,map__22879__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__22879,map__22879__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__19841__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19841__auto__){
return (function (){
var f__19842__auto__ = (function (){var switch__19729__auto__ = ((function (c__19841__auto__){
return (function (state_22903){
var state_val_22904 = (state_22903[(1)]);
if((state_val_22904 === (7))){
var inst_22899 = (state_22903[(2)]);
var state_22903__$1 = state_22903;
var statearr_22905_22925 = state_22903__$1;
(statearr_22905_22925[(2)] = inst_22899);

(statearr_22905_22925[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22904 === (1))){
var state_22903__$1 = state_22903;
var statearr_22906_22926 = state_22903__$1;
(statearr_22906_22926[(2)] = null);

(statearr_22906_22926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22904 === (4))){
var inst_22883 = (state_22903[(7)]);
var inst_22883__$1 = (state_22903[(2)]);
var state_22903__$1 = (function (){var statearr_22907 = state_22903;
(statearr_22907[(7)] = inst_22883__$1);

return statearr_22907;
})();
if(cljs.core.truth_(inst_22883__$1)){
var statearr_22908_22927 = state_22903__$1;
(statearr_22908_22927[(1)] = (5));

} else {
var statearr_22909_22928 = state_22903__$1;
(statearr_22909_22928[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22904 === (6))){
var state_22903__$1 = state_22903;
var statearr_22910_22929 = state_22903__$1;
(statearr_22910_22929[(2)] = null);

(statearr_22910_22929[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22904 === (3))){
var inst_22901 = (state_22903[(2)]);
var state_22903__$1 = state_22903;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22903__$1,inst_22901);
} else {
if((state_val_22904 === (2))){
var state_22903__$1 = state_22903;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22903__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_22904 === (11))){
var inst_22895 = (state_22903[(2)]);
var state_22903__$1 = (function (){var statearr_22911 = state_22903;
(statearr_22911[(8)] = inst_22895);

return statearr_22911;
})();
var statearr_22912_22930 = state_22903__$1;
(statearr_22912_22930[(2)] = null);

(statearr_22912_22930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22904 === (9))){
var inst_22889 = (state_22903[(9)]);
var inst_22887 = (state_22903[(10)]);
var inst_22891 = inst_22889.call(null,inst_22887);
var state_22903__$1 = state_22903;
var statearr_22913_22931 = state_22903__$1;
(statearr_22913_22931[(2)] = inst_22891);

(statearr_22913_22931[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22904 === (5))){
var inst_22883 = (state_22903[(7)]);
var inst_22885 = figwheel.client.file_reloading.blocking_load.call(null,inst_22883);
var state_22903__$1 = state_22903;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22903__$1,(8),inst_22885);
} else {
if((state_val_22904 === (10))){
var inst_22887 = (state_22903[(10)]);
var inst_22893 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_22887);
var state_22903__$1 = state_22903;
var statearr_22914_22932 = state_22903__$1;
(statearr_22914_22932[(2)] = inst_22893);

(statearr_22914_22932[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22904 === (8))){
var inst_22889 = (state_22903[(9)]);
var inst_22883 = (state_22903[(7)]);
var inst_22887 = (state_22903[(2)]);
var inst_22888 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_22889__$1 = cljs.core.get.call(null,inst_22888,inst_22883);
var state_22903__$1 = (function (){var statearr_22915 = state_22903;
(statearr_22915[(9)] = inst_22889__$1);

(statearr_22915[(10)] = inst_22887);

return statearr_22915;
})();
if(cljs.core.truth_(inst_22889__$1)){
var statearr_22916_22933 = state_22903__$1;
(statearr_22916_22933[(1)] = (9));

} else {
var statearr_22917_22934 = state_22903__$1;
(statearr_22917_22934[(1)] = (10));

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
});})(c__19841__auto__))
;
return ((function (switch__19729__auto__,c__19841__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__19730__auto__ = null;
var figwheel$client$file_reloading$state_machine__19730__auto____0 = (function (){
var statearr_22921 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22921[(0)] = figwheel$client$file_reloading$state_machine__19730__auto__);

(statearr_22921[(1)] = (1));

return statearr_22921;
});
var figwheel$client$file_reloading$state_machine__19730__auto____1 = (function (state_22903){
while(true){
var ret_value__19731__auto__ = (function (){try{while(true){
var result__19732__auto__ = switch__19729__auto__.call(null,state_22903);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19732__auto__;
}
break;
}
}catch (e22922){if((e22922 instanceof Object)){
var ex__19733__auto__ = e22922;
var statearr_22923_22935 = state_22903;
(statearr_22923_22935[(5)] = ex__19733__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22903);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22922;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22936 = state_22903;
state_22903 = G__22936;
continue;
} else {
return ret_value__19731__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__19730__auto__ = function(state_22903){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__19730__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__19730__auto____1.call(this,state_22903);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__19730__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__19730__auto____0;
figwheel$client$file_reloading$state_machine__19730__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__19730__auto____1;
return figwheel$client$file_reloading$state_machine__19730__auto__;
})()
;})(switch__19729__auto__,c__19841__auto__))
})();
var state__19843__auto__ = (function (){var statearr_22924 = f__19842__auto__.call(null);
(statearr_22924[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19841__auto__);

return statearr_22924;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19843__auto__);
});})(c__19841__auto__))
);

return c__19841__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__22937,callback){
var map__22940 = p__22937;
var map__22940__$1 = ((((!((map__22940 == null)))?((((map__22940.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22940.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22940):map__22940);
var file_msg = map__22940__$1;
var namespace = cljs.core.get.call(null,map__22940__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__22940,map__22940__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__22940,map__22940__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__22942){
var map__22945 = p__22942;
var map__22945__$1 = ((((!((map__22945 == null)))?((((map__22945.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22945.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22945):map__22945);
var file_msg = map__22945__$1;
var namespace = cljs.core.get.call(null,map__22945__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__16814__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__16814__auto__){
var or__16826__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
var or__16826__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16826__auto____$1)){
return or__16826__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__16814__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__22947,callback){
var map__22950 = p__22947;
var map__22950__$1 = ((((!((map__22950 == null)))?((((map__22950.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22950.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22950):map__22950);
var file_msg = map__22950__$1;
var request_url = cljs.core.get.call(null,map__22950__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__22950__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__19841__auto___23038 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19841__auto___23038,out){
return (function (){
var f__19842__auto__ = (function (){var switch__19729__auto__ = ((function (c__19841__auto___23038,out){
return (function (state_23020){
var state_val_23021 = (state_23020[(1)]);
if((state_val_23021 === (1))){
var inst_22998 = cljs.core.nth.call(null,files,(0),null);
var inst_22999 = cljs.core.nthnext.call(null,files,(1));
var inst_23000 = files;
var state_23020__$1 = (function (){var statearr_23022 = state_23020;
(statearr_23022[(7)] = inst_23000);

(statearr_23022[(8)] = inst_22999);

(statearr_23022[(9)] = inst_22998);

return statearr_23022;
})();
var statearr_23023_23039 = state_23020__$1;
(statearr_23023_23039[(2)] = null);

(statearr_23023_23039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23021 === (2))){
var inst_23000 = (state_23020[(7)]);
var inst_23003 = (state_23020[(10)]);
var inst_23003__$1 = cljs.core.nth.call(null,inst_23000,(0),null);
var inst_23004 = cljs.core.nthnext.call(null,inst_23000,(1));
var inst_23005 = (inst_23003__$1 == null);
var inst_23006 = cljs.core.not.call(null,inst_23005);
var state_23020__$1 = (function (){var statearr_23024 = state_23020;
(statearr_23024[(11)] = inst_23004);

(statearr_23024[(10)] = inst_23003__$1);

return statearr_23024;
})();
if(inst_23006){
var statearr_23025_23040 = state_23020__$1;
(statearr_23025_23040[(1)] = (4));

} else {
var statearr_23026_23041 = state_23020__$1;
(statearr_23026_23041[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23021 === (3))){
var inst_23018 = (state_23020[(2)]);
var state_23020__$1 = state_23020;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23020__$1,inst_23018);
} else {
if((state_val_23021 === (4))){
var inst_23003 = (state_23020[(10)]);
var inst_23008 = figwheel.client.file_reloading.reload_js_file.call(null,inst_23003);
var state_23020__$1 = state_23020;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23020__$1,(7),inst_23008);
} else {
if((state_val_23021 === (5))){
var inst_23014 = cljs.core.async.close_BANG_.call(null,out);
var state_23020__$1 = state_23020;
var statearr_23027_23042 = state_23020__$1;
(statearr_23027_23042[(2)] = inst_23014);

(statearr_23027_23042[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23021 === (6))){
var inst_23016 = (state_23020[(2)]);
var state_23020__$1 = state_23020;
var statearr_23028_23043 = state_23020__$1;
(statearr_23028_23043[(2)] = inst_23016);

(statearr_23028_23043[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23021 === (7))){
var inst_23004 = (state_23020[(11)]);
var inst_23010 = (state_23020[(2)]);
var inst_23011 = cljs.core.async.put_BANG_.call(null,out,inst_23010);
var inst_23000 = inst_23004;
var state_23020__$1 = (function (){var statearr_23029 = state_23020;
(statearr_23029[(7)] = inst_23000);

(statearr_23029[(12)] = inst_23011);

return statearr_23029;
})();
var statearr_23030_23044 = state_23020__$1;
(statearr_23030_23044[(2)] = null);

(statearr_23030_23044[(1)] = (2));


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
});})(c__19841__auto___23038,out))
;
return ((function (switch__19729__auto__,c__19841__auto___23038,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19730__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19730__auto____0 = (function (){
var statearr_23034 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23034[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19730__auto__);

(statearr_23034[(1)] = (1));

return statearr_23034;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19730__auto____1 = (function (state_23020){
while(true){
var ret_value__19731__auto__ = (function (){try{while(true){
var result__19732__auto__ = switch__19729__auto__.call(null,state_23020);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19732__auto__;
}
break;
}
}catch (e23035){if((e23035 instanceof Object)){
var ex__19733__auto__ = e23035;
var statearr_23036_23045 = state_23020;
(statearr_23036_23045[(5)] = ex__19733__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23020);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23035;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23046 = state_23020;
state_23020 = G__23046;
continue;
} else {
return ret_value__19731__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19730__auto__ = function(state_23020){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19730__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19730__auto____1.call(this,state_23020);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19730__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19730__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19730__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19730__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19730__auto__;
})()
;})(switch__19729__auto__,c__19841__auto___23038,out))
})();
var state__19843__auto__ = (function (){var statearr_23037 = f__19842__auto__.call(null);
(statearr_23037[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19841__auto___23038);

return statearr_23037;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19843__auto__);
});})(c__19841__auto___23038,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__23047,opts){
var map__23051 = p__23047;
var map__23051__$1 = ((((!((map__23051 == null)))?((((map__23051.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23051.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23051):map__23051);
var eval_body__$1 = cljs.core.get.call(null,map__23051__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__23051__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16814__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16814__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16814__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e23053){var e = e23053;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__23054_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__23054_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__23059){
var vec__23060 = p__23059;
var k = cljs.core.nth.call(null,vec__23060,(0),null);
var v = cljs.core.nth.call(null,vec__23060,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__23061){
var vec__23062 = p__23061;
var k = cljs.core.nth.call(null,vec__23062,(0),null);
var v = cljs.core.nth.call(null,vec__23062,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__23066,p__23067){
var map__23314 = p__23066;
var map__23314__$1 = ((((!((map__23314 == null)))?((((map__23314.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23314.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23314):map__23314);
var opts = map__23314__$1;
var before_jsload = cljs.core.get.call(null,map__23314__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__23314__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__23314__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__23315 = p__23067;
var map__23315__$1 = ((((!((map__23315 == null)))?((((map__23315.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23315.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23315):map__23315);
var msg = map__23315__$1;
var files = cljs.core.get.call(null,map__23315__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__23315__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__23315__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__19841__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19841__auto__,map__23314,map__23314__$1,opts,before_jsload,on_jsload,reload_dependents,map__23315,map__23315__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__19842__auto__ = (function (){var switch__19729__auto__ = ((function (c__19841__auto__,map__23314,map__23314__$1,opts,before_jsload,on_jsload,reload_dependents,map__23315,map__23315__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_23468){
var state_val_23469 = (state_23468[(1)]);
if((state_val_23469 === (7))){
var inst_23330 = (state_23468[(7)]);
var inst_23329 = (state_23468[(8)]);
var inst_23332 = (state_23468[(9)]);
var inst_23331 = (state_23468[(10)]);
var inst_23337 = cljs.core._nth.call(null,inst_23330,inst_23332);
var inst_23338 = figwheel.client.file_reloading.eval_body.call(null,inst_23337,opts);
var inst_23339 = (inst_23332 + (1));
var tmp23470 = inst_23330;
var tmp23471 = inst_23329;
var tmp23472 = inst_23331;
var inst_23329__$1 = tmp23471;
var inst_23330__$1 = tmp23470;
var inst_23331__$1 = tmp23472;
var inst_23332__$1 = inst_23339;
var state_23468__$1 = (function (){var statearr_23473 = state_23468;
(statearr_23473[(7)] = inst_23330__$1);

(statearr_23473[(8)] = inst_23329__$1);

(statearr_23473[(9)] = inst_23332__$1);

(statearr_23473[(10)] = inst_23331__$1);

(statearr_23473[(11)] = inst_23338);

return statearr_23473;
})();
var statearr_23474_23560 = state_23468__$1;
(statearr_23474_23560[(2)] = null);

(statearr_23474_23560[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23469 === (20))){
var inst_23372 = (state_23468[(12)]);
var inst_23380 = figwheel.client.file_reloading.sort_files.call(null,inst_23372);
var state_23468__$1 = state_23468;
var statearr_23475_23561 = state_23468__$1;
(statearr_23475_23561[(2)] = inst_23380);

(statearr_23475_23561[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23469 === (27))){
var state_23468__$1 = state_23468;
var statearr_23476_23562 = state_23468__$1;
(statearr_23476_23562[(2)] = null);

(statearr_23476_23562[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23469 === (1))){
var inst_23321 = (state_23468[(13)]);
var inst_23318 = before_jsload.call(null,files);
var inst_23319 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_23320 = (function (){return ((function (inst_23321,inst_23318,inst_23319,state_val_23469,c__19841__auto__,map__23314,map__23314__$1,opts,before_jsload,on_jsload,reload_dependents,map__23315,map__23315__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__23063_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__23063_SHARP_);
});
;})(inst_23321,inst_23318,inst_23319,state_val_23469,c__19841__auto__,map__23314,map__23314__$1,opts,before_jsload,on_jsload,reload_dependents,map__23315,map__23315__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23321__$1 = cljs.core.filter.call(null,inst_23320,files);
var inst_23322 = cljs.core.not_empty.call(null,inst_23321__$1);
var state_23468__$1 = (function (){var statearr_23477 = state_23468;
(statearr_23477[(13)] = inst_23321__$1);

(statearr_23477[(14)] = inst_23318);

(statearr_23477[(15)] = inst_23319);

return statearr_23477;
})();
if(cljs.core.truth_(inst_23322)){
var statearr_23478_23563 = state_23468__$1;
(statearr_23478_23563[(1)] = (2));

} else {
var statearr_23479_23564 = state_23468__$1;
(statearr_23479_23564[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23469 === (24))){
var state_23468__$1 = state_23468;
var statearr_23480_23565 = state_23468__$1;
(statearr_23480_23565[(2)] = null);

(statearr_23480_23565[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23469 === (39))){
var inst_23422 = (state_23468[(16)]);
var state_23468__$1 = state_23468;
var statearr_23481_23566 = state_23468__$1;
(statearr_23481_23566[(2)] = inst_23422);

(statearr_23481_23566[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23469 === (46))){
var inst_23463 = (state_23468[(2)]);
var state_23468__$1 = state_23468;
var statearr_23482_23567 = state_23468__$1;
(statearr_23482_23567[(2)] = inst_23463);

(statearr_23482_23567[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23469 === (4))){
var inst_23366 = (state_23468[(2)]);
var inst_23367 = cljs.core.List.EMPTY;
var inst_23368 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_23367);
var inst_23369 = (function (){return ((function (inst_23366,inst_23367,inst_23368,state_val_23469,c__19841__auto__,map__23314,map__23314__$1,opts,before_jsload,on_jsload,reload_dependents,map__23315,map__23315__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__23064_SHARP_){
var and__16814__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__23064_SHARP_);
if(cljs.core.truth_(and__16814__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__23064_SHARP_));
} else {
return and__16814__auto__;
}
});
;})(inst_23366,inst_23367,inst_23368,state_val_23469,c__19841__auto__,map__23314,map__23314__$1,opts,before_jsload,on_jsload,reload_dependents,map__23315,map__23315__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23370 = cljs.core.filter.call(null,inst_23369,files);
var inst_23371 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_23372 = cljs.core.concat.call(null,inst_23370,inst_23371);
var state_23468__$1 = (function (){var statearr_23483 = state_23468;
(statearr_23483[(17)] = inst_23368);

(statearr_23483[(12)] = inst_23372);

(statearr_23483[(18)] = inst_23366);

return statearr_23483;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_23484_23568 = state_23468__$1;
(statearr_23484_23568[(1)] = (16));

} else {
var statearr_23485_23569 = state_23468__$1;
(statearr_23485_23569[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23469 === (15))){
var inst_23356 = (state_23468[(2)]);
var state_23468__$1 = state_23468;
var statearr_23486_23570 = state_23468__$1;
(statearr_23486_23570[(2)] = inst_23356);

(statearr_23486_23570[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23469 === (21))){
var inst_23382 = (state_23468[(19)]);
var inst_23382__$1 = (state_23468[(2)]);
var inst_23383 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_23382__$1);
var state_23468__$1 = (function (){var statearr_23487 = state_23468;
(statearr_23487[(19)] = inst_23382__$1);

return statearr_23487;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23468__$1,(22),inst_23383);
} else {
if((state_val_23469 === (31))){
var inst_23466 = (state_23468[(2)]);
var state_23468__$1 = state_23468;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23468__$1,inst_23466);
} else {
if((state_val_23469 === (32))){
var inst_23422 = (state_23468[(16)]);
var inst_23427 = inst_23422.cljs$lang$protocol_mask$partition0$;
var inst_23428 = (inst_23427 & (64));
var inst_23429 = inst_23422.cljs$core$ISeq$;
var inst_23430 = (inst_23428) || (inst_23429);
var state_23468__$1 = state_23468;
if(cljs.core.truth_(inst_23430)){
var statearr_23488_23571 = state_23468__$1;
(statearr_23488_23571[(1)] = (35));

} else {
var statearr_23489_23572 = state_23468__$1;
(statearr_23489_23572[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23469 === (40))){
var inst_23443 = (state_23468[(20)]);
var inst_23442 = (state_23468[(2)]);
var inst_23443__$1 = cljs.core.get.call(null,inst_23442,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_23444 = cljs.core.get.call(null,inst_23442,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_23445 = cljs.core.not_empty.call(null,inst_23443__$1);
var state_23468__$1 = (function (){var statearr_23490 = state_23468;
(statearr_23490[(21)] = inst_23444);

(statearr_23490[(20)] = inst_23443__$1);

return statearr_23490;
})();
if(cljs.core.truth_(inst_23445)){
var statearr_23491_23573 = state_23468__$1;
(statearr_23491_23573[(1)] = (41));

} else {
var statearr_23492_23574 = state_23468__$1;
(statearr_23492_23574[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23469 === (33))){
var state_23468__$1 = state_23468;
var statearr_23493_23575 = state_23468__$1;
(statearr_23493_23575[(2)] = false);

(statearr_23493_23575[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23469 === (13))){
var inst_23342 = (state_23468[(22)]);
var inst_23346 = cljs.core.chunk_first.call(null,inst_23342);
var inst_23347 = cljs.core.chunk_rest.call(null,inst_23342);
var inst_23348 = cljs.core.count.call(null,inst_23346);
var inst_23329 = inst_23347;
var inst_23330 = inst_23346;
var inst_23331 = inst_23348;
var inst_23332 = (0);
var state_23468__$1 = (function (){var statearr_23494 = state_23468;
(statearr_23494[(7)] = inst_23330);

(statearr_23494[(8)] = inst_23329);

(statearr_23494[(9)] = inst_23332);

(statearr_23494[(10)] = inst_23331);

return statearr_23494;
})();
var statearr_23495_23576 = state_23468__$1;
(statearr_23495_23576[(2)] = null);

(statearr_23495_23576[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23469 === (22))){
var inst_23386 = (state_23468[(23)]);
var inst_23382 = (state_23468[(19)]);
var inst_23385 = (state_23468[(24)]);
var inst_23390 = (state_23468[(25)]);
var inst_23385__$1 = (state_23468[(2)]);
var inst_23386__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_23385__$1);
var inst_23387 = (function (){var all_files = inst_23382;
var res_SINGLEQUOTE_ = inst_23385__$1;
var res = inst_23386__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_23386,inst_23382,inst_23385,inst_23390,inst_23385__$1,inst_23386__$1,state_val_23469,c__19841__auto__,map__23314,map__23314__$1,opts,before_jsload,on_jsload,reload_dependents,map__23315,map__23315__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__23065_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__23065_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_23386,inst_23382,inst_23385,inst_23390,inst_23385__$1,inst_23386__$1,state_val_23469,c__19841__auto__,map__23314,map__23314__$1,opts,before_jsload,on_jsload,reload_dependents,map__23315,map__23315__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23388 = cljs.core.filter.call(null,inst_23387,inst_23385__$1);
var inst_23389 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_23390__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_23389);
var inst_23391 = cljs.core.not_empty.call(null,inst_23390__$1);
var state_23468__$1 = (function (){var statearr_23496 = state_23468;
(statearr_23496[(23)] = inst_23386__$1);

(statearr_23496[(26)] = inst_23388);

(statearr_23496[(24)] = inst_23385__$1);

(statearr_23496[(25)] = inst_23390__$1);

return statearr_23496;
})();
if(cljs.core.truth_(inst_23391)){
var statearr_23497_23577 = state_23468__$1;
(statearr_23497_23577[(1)] = (23));

} else {
var statearr_23498_23578 = state_23468__$1;
(statearr_23498_23578[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23469 === (36))){
var state_23468__$1 = state_23468;
var statearr_23499_23579 = state_23468__$1;
(statearr_23499_23579[(2)] = false);

(statearr_23499_23579[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23469 === (41))){
var inst_23443 = (state_23468[(20)]);
var inst_23447 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_23448 = cljs.core.map.call(null,inst_23447,inst_23443);
var inst_23449 = cljs.core.pr_str.call(null,inst_23448);
var inst_23450 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_23449)].join('');
var inst_23451 = figwheel.client.utils.log.call(null,inst_23450);
var state_23468__$1 = state_23468;
var statearr_23500_23580 = state_23468__$1;
(statearr_23500_23580[(2)] = inst_23451);

(statearr_23500_23580[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23469 === (43))){
var inst_23444 = (state_23468[(21)]);
var inst_23454 = (state_23468[(2)]);
var inst_23455 = cljs.core.not_empty.call(null,inst_23444);
var state_23468__$1 = (function (){var statearr_23501 = state_23468;
(statearr_23501[(27)] = inst_23454);

return statearr_23501;
})();
if(cljs.core.truth_(inst_23455)){
var statearr_23502_23581 = state_23468__$1;
(statearr_23502_23581[(1)] = (44));

} else {
var statearr_23503_23582 = state_23468__$1;
(statearr_23503_23582[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23469 === (29))){
var inst_23386 = (state_23468[(23)]);
var inst_23382 = (state_23468[(19)]);
var inst_23422 = (state_23468[(16)]);
var inst_23388 = (state_23468[(26)]);
var inst_23385 = (state_23468[(24)]);
var inst_23390 = (state_23468[(25)]);
var inst_23418 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_23421 = (function (){var all_files = inst_23382;
var res_SINGLEQUOTE_ = inst_23385;
var res = inst_23386;
var files_not_loaded = inst_23388;
var dependencies_that_loaded = inst_23390;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23386,inst_23382,inst_23422,inst_23388,inst_23385,inst_23390,inst_23418,state_val_23469,c__19841__auto__,map__23314,map__23314__$1,opts,before_jsload,on_jsload,reload_dependents,map__23315,map__23315__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__23420){
var map__23504 = p__23420;
var map__23504__$1 = ((((!((map__23504 == null)))?((((map__23504.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23504.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23504):map__23504);
var namespace = cljs.core.get.call(null,map__23504__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23386,inst_23382,inst_23422,inst_23388,inst_23385,inst_23390,inst_23418,state_val_23469,c__19841__auto__,map__23314,map__23314__$1,opts,before_jsload,on_jsload,reload_dependents,map__23315,map__23315__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23422__$1 = cljs.core.group_by.call(null,inst_23421,inst_23388);
var inst_23424 = (inst_23422__$1 == null);
var inst_23425 = cljs.core.not.call(null,inst_23424);
var state_23468__$1 = (function (){var statearr_23506 = state_23468;
(statearr_23506[(28)] = inst_23418);

(statearr_23506[(16)] = inst_23422__$1);

return statearr_23506;
})();
if(inst_23425){
var statearr_23507_23583 = state_23468__$1;
(statearr_23507_23583[(1)] = (32));

} else {
var statearr_23508_23584 = state_23468__$1;
(statearr_23508_23584[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23469 === (44))){
var inst_23444 = (state_23468[(21)]);
var inst_23457 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_23444);
var inst_23458 = cljs.core.pr_str.call(null,inst_23457);
var inst_23459 = [cljs.core.str("not required: "),cljs.core.str(inst_23458)].join('');
var inst_23460 = figwheel.client.utils.log.call(null,inst_23459);
var state_23468__$1 = state_23468;
var statearr_23509_23585 = state_23468__$1;
(statearr_23509_23585[(2)] = inst_23460);

(statearr_23509_23585[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23469 === (6))){
var inst_23363 = (state_23468[(2)]);
var state_23468__$1 = state_23468;
var statearr_23510_23586 = state_23468__$1;
(statearr_23510_23586[(2)] = inst_23363);

(statearr_23510_23586[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23469 === (28))){
var inst_23388 = (state_23468[(26)]);
var inst_23415 = (state_23468[(2)]);
var inst_23416 = cljs.core.not_empty.call(null,inst_23388);
var state_23468__$1 = (function (){var statearr_23511 = state_23468;
(statearr_23511[(29)] = inst_23415);

return statearr_23511;
})();
if(cljs.core.truth_(inst_23416)){
var statearr_23512_23587 = state_23468__$1;
(statearr_23512_23587[(1)] = (29));

} else {
var statearr_23513_23588 = state_23468__$1;
(statearr_23513_23588[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23469 === (25))){
var inst_23386 = (state_23468[(23)]);
var inst_23402 = (state_23468[(2)]);
var inst_23403 = cljs.core.not_empty.call(null,inst_23386);
var state_23468__$1 = (function (){var statearr_23514 = state_23468;
(statearr_23514[(30)] = inst_23402);

return statearr_23514;
})();
if(cljs.core.truth_(inst_23403)){
var statearr_23515_23589 = state_23468__$1;
(statearr_23515_23589[(1)] = (26));

} else {
var statearr_23516_23590 = state_23468__$1;
(statearr_23516_23590[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23469 === (34))){
var inst_23437 = (state_23468[(2)]);
var state_23468__$1 = state_23468;
if(cljs.core.truth_(inst_23437)){
var statearr_23517_23591 = state_23468__$1;
(statearr_23517_23591[(1)] = (38));

} else {
var statearr_23518_23592 = state_23468__$1;
(statearr_23518_23592[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23469 === (17))){
var state_23468__$1 = state_23468;
var statearr_23519_23593 = state_23468__$1;
(statearr_23519_23593[(2)] = recompile_dependents);

(statearr_23519_23593[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23469 === (3))){
var state_23468__$1 = state_23468;
var statearr_23520_23594 = state_23468__$1;
(statearr_23520_23594[(2)] = null);

(statearr_23520_23594[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23469 === (12))){
var inst_23359 = (state_23468[(2)]);
var state_23468__$1 = state_23468;
var statearr_23521_23595 = state_23468__$1;
(statearr_23521_23595[(2)] = inst_23359);

(statearr_23521_23595[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23469 === (2))){
var inst_23321 = (state_23468[(13)]);
var inst_23328 = cljs.core.seq.call(null,inst_23321);
var inst_23329 = inst_23328;
var inst_23330 = null;
var inst_23331 = (0);
var inst_23332 = (0);
var state_23468__$1 = (function (){var statearr_23522 = state_23468;
(statearr_23522[(7)] = inst_23330);

(statearr_23522[(8)] = inst_23329);

(statearr_23522[(9)] = inst_23332);

(statearr_23522[(10)] = inst_23331);

return statearr_23522;
})();
var statearr_23523_23596 = state_23468__$1;
(statearr_23523_23596[(2)] = null);

(statearr_23523_23596[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23469 === (23))){
var inst_23386 = (state_23468[(23)]);
var inst_23382 = (state_23468[(19)]);
var inst_23388 = (state_23468[(26)]);
var inst_23385 = (state_23468[(24)]);
var inst_23390 = (state_23468[(25)]);
var inst_23393 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_23395 = (function (){var all_files = inst_23382;
var res_SINGLEQUOTE_ = inst_23385;
var res = inst_23386;
var files_not_loaded = inst_23388;
var dependencies_that_loaded = inst_23390;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23386,inst_23382,inst_23388,inst_23385,inst_23390,inst_23393,state_val_23469,c__19841__auto__,map__23314,map__23314__$1,opts,before_jsload,on_jsload,reload_dependents,map__23315,map__23315__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__23394){
var map__23524 = p__23394;
var map__23524__$1 = ((((!((map__23524 == null)))?((((map__23524.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23524.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23524):map__23524);
var request_url = cljs.core.get.call(null,map__23524__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23386,inst_23382,inst_23388,inst_23385,inst_23390,inst_23393,state_val_23469,c__19841__auto__,map__23314,map__23314__$1,opts,before_jsload,on_jsload,reload_dependents,map__23315,map__23315__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23396 = cljs.core.reverse.call(null,inst_23390);
var inst_23397 = cljs.core.map.call(null,inst_23395,inst_23396);
var inst_23398 = cljs.core.pr_str.call(null,inst_23397);
var inst_23399 = figwheel.client.utils.log.call(null,inst_23398);
var state_23468__$1 = (function (){var statearr_23526 = state_23468;
(statearr_23526[(31)] = inst_23393);

return statearr_23526;
})();
var statearr_23527_23597 = state_23468__$1;
(statearr_23527_23597[(2)] = inst_23399);

(statearr_23527_23597[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23469 === (35))){
var state_23468__$1 = state_23468;
var statearr_23528_23598 = state_23468__$1;
(statearr_23528_23598[(2)] = true);

(statearr_23528_23598[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23469 === (19))){
var inst_23372 = (state_23468[(12)]);
var inst_23378 = figwheel.client.file_reloading.expand_files.call(null,inst_23372);
var state_23468__$1 = state_23468;
var statearr_23529_23599 = state_23468__$1;
(statearr_23529_23599[(2)] = inst_23378);

(statearr_23529_23599[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23469 === (11))){
var state_23468__$1 = state_23468;
var statearr_23530_23600 = state_23468__$1;
(statearr_23530_23600[(2)] = null);

(statearr_23530_23600[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23469 === (9))){
var inst_23361 = (state_23468[(2)]);
var state_23468__$1 = state_23468;
var statearr_23531_23601 = state_23468__$1;
(statearr_23531_23601[(2)] = inst_23361);

(statearr_23531_23601[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23469 === (5))){
var inst_23332 = (state_23468[(9)]);
var inst_23331 = (state_23468[(10)]);
var inst_23334 = (inst_23332 < inst_23331);
var inst_23335 = inst_23334;
var state_23468__$1 = state_23468;
if(cljs.core.truth_(inst_23335)){
var statearr_23532_23602 = state_23468__$1;
(statearr_23532_23602[(1)] = (7));

} else {
var statearr_23533_23603 = state_23468__$1;
(statearr_23533_23603[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23469 === (14))){
var inst_23342 = (state_23468[(22)]);
var inst_23351 = cljs.core.first.call(null,inst_23342);
var inst_23352 = figwheel.client.file_reloading.eval_body.call(null,inst_23351,opts);
var inst_23353 = cljs.core.next.call(null,inst_23342);
var inst_23329 = inst_23353;
var inst_23330 = null;
var inst_23331 = (0);
var inst_23332 = (0);
var state_23468__$1 = (function (){var statearr_23534 = state_23468;
(statearr_23534[(7)] = inst_23330);

(statearr_23534[(8)] = inst_23329);

(statearr_23534[(9)] = inst_23332);

(statearr_23534[(10)] = inst_23331);

(statearr_23534[(32)] = inst_23352);

return statearr_23534;
})();
var statearr_23535_23604 = state_23468__$1;
(statearr_23535_23604[(2)] = null);

(statearr_23535_23604[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23469 === (45))){
var state_23468__$1 = state_23468;
var statearr_23536_23605 = state_23468__$1;
(statearr_23536_23605[(2)] = null);

(statearr_23536_23605[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23469 === (26))){
var inst_23386 = (state_23468[(23)]);
var inst_23382 = (state_23468[(19)]);
var inst_23388 = (state_23468[(26)]);
var inst_23385 = (state_23468[(24)]);
var inst_23390 = (state_23468[(25)]);
var inst_23405 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_23407 = (function (){var all_files = inst_23382;
var res_SINGLEQUOTE_ = inst_23385;
var res = inst_23386;
var files_not_loaded = inst_23388;
var dependencies_that_loaded = inst_23390;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23386,inst_23382,inst_23388,inst_23385,inst_23390,inst_23405,state_val_23469,c__19841__auto__,map__23314,map__23314__$1,opts,before_jsload,on_jsload,reload_dependents,map__23315,map__23315__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__23406){
var map__23537 = p__23406;
var map__23537__$1 = ((((!((map__23537 == null)))?((((map__23537.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23537.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23537):map__23537);
var namespace = cljs.core.get.call(null,map__23537__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__23537__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23386,inst_23382,inst_23388,inst_23385,inst_23390,inst_23405,state_val_23469,c__19841__auto__,map__23314,map__23314__$1,opts,before_jsload,on_jsload,reload_dependents,map__23315,map__23315__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23408 = cljs.core.map.call(null,inst_23407,inst_23386);
var inst_23409 = cljs.core.pr_str.call(null,inst_23408);
var inst_23410 = figwheel.client.utils.log.call(null,inst_23409);
var inst_23411 = (function (){var all_files = inst_23382;
var res_SINGLEQUOTE_ = inst_23385;
var res = inst_23386;
var files_not_loaded = inst_23388;
var dependencies_that_loaded = inst_23390;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23386,inst_23382,inst_23388,inst_23385,inst_23390,inst_23405,inst_23407,inst_23408,inst_23409,inst_23410,state_val_23469,c__19841__auto__,map__23314,map__23314__$1,opts,before_jsload,on_jsload,reload_dependents,map__23315,map__23315__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23386,inst_23382,inst_23388,inst_23385,inst_23390,inst_23405,inst_23407,inst_23408,inst_23409,inst_23410,state_val_23469,c__19841__auto__,map__23314,map__23314__$1,opts,before_jsload,on_jsload,reload_dependents,map__23315,map__23315__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23412 = setTimeout(inst_23411,(10));
var state_23468__$1 = (function (){var statearr_23539 = state_23468;
(statearr_23539[(33)] = inst_23405);

(statearr_23539[(34)] = inst_23410);

return statearr_23539;
})();
var statearr_23540_23606 = state_23468__$1;
(statearr_23540_23606[(2)] = inst_23412);

(statearr_23540_23606[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23469 === (16))){
var state_23468__$1 = state_23468;
var statearr_23541_23607 = state_23468__$1;
(statearr_23541_23607[(2)] = reload_dependents);

(statearr_23541_23607[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23469 === (38))){
var inst_23422 = (state_23468[(16)]);
var inst_23439 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23422);
var state_23468__$1 = state_23468;
var statearr_23542_23608 = state_23468__$1;
(statearr_23542_23608[(2)] = inst_23439);

(statearr_23542_23608[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23469 === (30))){
var state_23468__$1 = state_23468;
var statearr_23543_23609 = state_23468__$1;
(statearr_23543_23609[(2)] = null);

(statearr_23543_23609[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23469 === (10))){
var inst_23342 = (state_23468[(22)]);
var inst_23344 = cljs.core.chunked_seq_QMARK_.call(null,inst_23342);
var state_23468__$1 = state_23468;
if(inst_23344){
var statearr_23544_23610 = state_23468__$1;
(statearr_23544_23610[(1)] = (13));

} else {
var statearr_23545_23611 = state_23468__$1;
(statearr_23545_23611[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23469 === (18))){
var inst_23376 = (state_23468[(2)]);
var state_23468__$1 = state_23468;
if(cljs.core.truth_(inst_23376)){
var statearr_23546_23612 = state_23468__$1;
(statearr_23546_23612[(1)] = (19));

} else {
var statearr_23547_23613 = state_23468__$1;
(statearr_23547_23613[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23469 === (42))){
var state_23468__$1 = state_23468;
var statearr_23548_23614 = state_23468__$1;
(statearr_23548_23614[(2)] = null);

(statearr_23548_23614[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23469 === (37))){
var inst_23434 = (state_23468[(2)]);
var state_23468__$1 = state_23468;
var statearr_23549_23615 = state_23468__$1;
(statearr_23549_23615[(2)] = inst_23434);

(statearr_23549_23615[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23469 === (8))){
var inst_23342 = (state_23468[(22)]);
var inst_23329 = (state_23468[(8)]);
var inst_23342__$1 = cljs.core.seq.call(null,inst_23329);
var state_23468__$1 = (function (){var statearr_23550 = state_23468;
(statearr_23550[(22)] = inst_23342__$1);

return statearr_23550;
})();
if(inst_23342__$1){
var statearr_23551_23616 = state_23468__$1;
(statearr_23551_23616[(1)] = (10));

} else {
var statearr_23552_23617 = state_23468__$1;
(statearr_23552_23617[(1)] = (11));

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
});})(c__19841__auto__,map__23314,map__23314__$1,opts,before_jsload,on_jsload,reload_dependents,map__23315,map__23315__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__19729__auto__,c__19841__auto__,map__23314,map__23314__$1,opts,before_jsload,on_jsload,reload_dependents,map__23315,map__23315__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19730__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19730__auto____0 = (function (){
var statearr_23556 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23556[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__19730__auto__);

(statearr_23556[(1)] = (1));

return statearr_23556;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19730__auto____1 = (function (state_23468){
while(true){
var ret_value__19731__auto__ = (function (){try{while(true){
var result__19732__auto__ = switch__19729__auto__.call(null,state_23468);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19732__auto__;
}
break;
}
}catch (e23557){if((e23557 instanceof Object)){
var ex__19733__auto__ = e23557;
var statearr_23558_23618 = state_23468;
(statearr_23558_23618[(5)] = ex__19733__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23468);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23557;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23619 = state_23468;
state_23468 = G__23619;
continue;
} else {
return ret_value__19731__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__19730__auto__ = function(state_23468){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19730__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19730__auto____1.call(this,state_23468);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__19730__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19730__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__19730__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19730__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19730__auto__;
})()
;})(switch__19729__auto__,c__19841__auto__,map__23314,map__23314__$1,opts,before_jsload,on_jsload,reload_dependents,map__23315,map__23315__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__19843__auto__ = (function (){var statearr_23559 = f__19842__auto__.call(null);
(statearr_23559[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19841__auto__);

return statearr_23559;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19843__auto__);
});})(c__19841__auto__,map__23314,map__23314__$1,opts,before_jsload,on_jsload,reload_dependents,map__23315,map__23315__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__19841__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__23622,link){
var map__23625 = p__23622;
var map__23625__$1 = ((((!((map__23625 == null)))?((((map__23625.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23625.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23625):map__23625);
var file = cljs.core.get.call(null,map__23625__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__23625,map__23625__$1,file){
return (function (p1__23620_SHARP_,p2__23621_SHARP_){
if(cljs.core._EQ_.call(null,p1__23620_SHARP_,p2__23621_SHARP_)){
return p1__23620_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__23625,map__23625__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__23631){
var map__23632 = p__23631;
var map__23632__$1 = ((((!((map__23632 == null)))?((((map__23632.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23632.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23632):map__23632);
var match_length = cljs.core.get.call(null,map__23632__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__23632__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__23627_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__23627_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args23634 = [];
var len__17884__auto___23637 = arguments.length;
var i__17885__auto___23638 = (0);
while(true){
if((i__17885__auto___23638 < len__17884__auto___23637)){
args23634.push((arguments[i__17885__auto___23638]));

var G__23639 = (i__17885__auto___23638 + (1));
i__17885__auto___23638 = G__23639;
continue;
} else {
}
break;
}

var G__23636 = args23634.length;
switch (G__23636) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23634.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__23641_SHARP_,p2__23642_SHARP_){
return cljs.core.assoc.call(null,p1__23641_SHARP_,cljs.core.get.call(null,p2__23642_SHARP_,key),p2__23642_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__23643){
var map__23646 = p__23643;
var map__23646__$1 = ((((!((map__23646 == null)))?((((map__23646.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23646.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23646):map__23646);
var f_data = map__23646__$1;
var file = cljs.core.get.call(null,map__23646__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__23648,files_msg){
var map__23655 = p__23648;
var map__23655__$1 = ((((!((map__23655 == null)))?((((map__23655.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23655.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23655):map__23655);
var opts = map__23655__$1;
var on_cssload = cljs.core.get.call(null,map__23655__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__23657_23661 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__23658_23662 = null;
var count__23659_23663 = (0);
var i__23660_23664 = (0);
while(true){
if((i__23660_23664 < count__23659_23663)){
var f_23665 = cljs.core._nth.call(null,chunk__23658_23662,i__23660_23664);
figwheel.client.file_reloading.reload_css_file.call(null,f_23665);

var G__23666 = seq__23657_23661;
var G__23667 = chunk__23658_23662;
var G__23668 = count__23659_23663;
var G__23669 = (i__23660_23664 + (1));
seq__23657_23661 = G__23666;
chunk__23658_23662 = G__23667;
count__23659_23663 = G__23668;
i__23660_23664 = G__23669;
continue;
} else {
var temp__4425__auto___23670 = cljs.core.seq.call(null,seq__23657_23661);
if(temp__4425__auto___23670){
var seq__23657_23671__$1 = temp__4425__auto___23670;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23657_23671__$1)){
var c__17629__auto___23672 = cljs.core.chunk_first.call(null,seq__23657_23671__$1);
var G__23673 = cljs.core.chunk_rest.call(null,seq__23657_23671__$1);
var G__23674 = c__17629__auto___23672;
var G__23675 = cljs.core.count.call(null,c__17629__auto___23672);
var G__23676 = (0);
seq__23657_23661 = G__23673;
chunk__23658_23662 = G__23674;
count__23659_23663 = G__23675;
i__23660_23664 = G__23676;
continue;
} else {
var f_23677 = cljs.core.first.call(null,seq__23657_23671__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_23677);

var G__23678 = cljs.core.next.call(null,seq__23657_23671__$1);
var G__23679 = null;
var G__23680 = (0);
var G__23681 = (0);
seq__23657_23661 = G__23678;
chunk__23658_23662 = G__23679;
count__23659_23663 = G__23680;
i__23660_23664 = G__23681;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__23655,map__23655__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__23655,map__23655__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map