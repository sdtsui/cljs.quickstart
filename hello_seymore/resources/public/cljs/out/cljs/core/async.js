// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args19886 = [];
var len__17884__auto___19892 = arguments.length;
var i__17885__auto___19893 = (0);
while(true){
if((i__17885__auto___19893 < len__17884__auto___19892)){
args19886.push((arguments[i__17885__auto___19893]));

var G__19894 = (i__17885__auto___19893 + (1));
i__17885__auto___19893 = G__19894;
continue;
} else {
}
break;
}

var G__19888 = args19886.length;
switch (G__19888) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19886.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async19889 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19889 = (function (f,blockable,meta19890){
this.f = f;
this.blockable = blockable;
this.meta19890 = meta19890;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19889.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19891,meta19890__$1){
var self__ = this;
var _19891__$1 = this;
return (new cljs.core.async.t_cljs$core$async19889(self__.f,self__.blockable,meta19890__$1));
});

cljs.core.async.t_cljs$core$async19889.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19891){
var self__ = this;
var _19891__$1 = this;
return self__.meta19890;
});

cljs.core.async.t_cljs$core$async19889.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async19889.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async19889.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async19889.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async19889.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta19890","meta19890",1743142528,null)], null);
});

cljs.core.async.t_cljs$core$async19889.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19889.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19889";

cljs.core.async.t_cljs$core$async19889.cljs$lang$ctorPrWriter = (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async19889");
});

cljs.core.async.__GT_t_cljs$core$async19889 = (function cljs$core$async$__GT_t_cljs$core$async19889(f__$1,blockable__$1,meta19890){
return (new cljs.core.async.t_cljs$core$async19889(f__$1,blockable__$1,meta19890));
});

}

return (new cljs.core.async.t_cljs$core$async19889(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args19898 = [];
var len__17884__auto___19901 = arguments.length;
var i__17885__auto___19902 = (0);
while(true){
if((i__17885__auto___19902 < len__17884__auto___19901)){
args19898.push((arguments[i__17885__auto___19902]));

var G__19903 = (i__17885__auto___19902 + (1));
i__17885__auto___19902 = G__19903;
continue;
} else {
}
break;
}

var G__19900 = args19898.length;
switch (G__19900) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19898.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args19905 = [];
var len__17884__auto___19908 = arguments.length;
var i__17885__auto___19909 = (0);
while(true){
if((i__17885__auto___19909 < len__17884__auto___19908)){
args19905.push((arguments[i__17885__auto___19909]));

var G__19910 = (i__17885__auto___19909 + (1));
i__17885__auto___19909 = G__19910;
continue;
} else {
}
break;
}

var G__19907 = args19905.length;
switch (G__19907) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19905.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args19912 = [];
var len__17884__auto___19915 = arguments.length;
var i__17885__auto___19916 = (0);
while(true){
if((i__17885__auto___19916 < len__17884__auto___19915)){
args19912.push((arguments[i__17885__auto___19916]));

var G__19917 = (i__17885__auto___19916 + (1));
i__17885__auto___19916 = G__19917;
continue;
} else {
}
break;
}

var G__19914 = args19912.length;
switch (G__19914) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19912.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_19919 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_19919);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_19919,ret){
return (function (){
return fn1.call(null,val_19919);
});})(val_19919,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args19920 = [];
var len__17884__auto___19923 = arguments.length;
var i__17885__auto___19924 = (0);
while(true){
if((i__17885__auto___19924 < len__17884__auto___19923)){
args19920.push((arguments[i__17885__auto___19924]));

var G__19925 = (i__17885__auto___19924 + (1));
i__17885__auto___19924 = G__19925;
continue;
} else {
}
break;
}

var G__19922 = args19920.length;
switch (G__19922) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19920.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__17729__auto___19927 = n;
var x_19928 = (0);
while(true){
if((x_19928 < n__17729__auto___19927)){
(a[x_19928] = (0));

var G__19929 = (x_19928 + (1));
x_19928 = G__19929;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__19930 = (i + (1));
i = G__19930;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async19934 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19934 = (function (alt_flag,flag,meta19935){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta19935 = meta19935;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19934.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_19936,meta19935__$1){
var self__ = this;
var _19936__$1 = this;
return (new cljs.core.async.t_cljs$core$async19934(self__.alt_flag,self__.flag,meta19935__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async19934.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_19936){
var self__ = this;
var _19936__$1 = this;
return self__.meta19935;
});})(flag))
;

cljs.core.async.t_cljs$core$async19934.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async19934.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async19934.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async19934.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async19934.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta19935","meta19935",283868861,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async19934.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19934.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19934";

cljs.core.async.t_cljs$core$async19934.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async19934");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async19934 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async19934(alt_flag__$1,flag__$1,meta19935){
return (new cljs.core.async.t_cljs$core$async19934(alt_flag__$1,flag__$1,meta19935));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async19934(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async19940 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19940 = (function (alt_handler,flag,cb,meta19941){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta19941 = meta19941;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19940.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19942,meta19941__$1){
var self__ = this;
var _19942__$1 = this;
return (new cljs.core.async.t_cljs$core$async19940(self__.alt_handler,self__.flag,self__.cb,meta19941__$1));
});

cljs.core.async.t_cljs$core$async19940.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19942){
var self__ = this;
var _19942__$1 = this;
return self__.meta19941;
});

cljs.core.async.t_cljs$core$async19940.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async19940.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async19940.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async19940.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async19940.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta19941","meta19941",659691849,null)], null);
});

cljs.core.async.t_cljs$core$async19940.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19940.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19940";

cljs.core.async.t_cljs$core$async19940.cljs$lang$ctorPrWriter = (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async19940");
});

cljs.core.async.__GT_t_cljs$core$async19940 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async19940(alt_handler__$1,flag__$1,cb__$1,meta19941){
return (new cljs.core.async.t_cljs$core$async19940(alt_handler__$1,flag__$1,cb__$1,meta19941));
});

}

return (new cljs.core.async.t_cljs$core$async19940(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__19943_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19943_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__19944_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19944_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16826__auto__ = wport;
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return port;
}
})()], null));
} else {
var G__19945 = (i + (1));
i = G__19945;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16826__auto__ = ret;
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16814__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16814__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16814__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__17891__auto__ = [];
var len__17884__auto___19951 = arguments.length;
var i__17885__auto___19952 = (0);
while(true){
if((i__17885__auto___19952 < len__17884__auto___19951)){
args__17891__auto__.push((arguments[i__17885__auto___19952]));

var G__19953 = (i__17885__auto___19952 + (1));
i__17885__auto___19952 = G__19953;
continue;
} else {
}
break;
}

var argseq__17892__auto__ = ((((1) < args__17891__auto__.length))?(new cljs.core.IndexedSeq(args__17891__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17892__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__19948){
var map__19949 = p__19948;
var map__19949__$1 = ((((!((map__19949 == null)))?((((map__19949.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19949.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19949):map__19949);
var opts = map__19949__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq19946){
var G__19947 = cljs.core.first.call(null,seq19946);
var seq19946__$1 = cljs.core.next.call(null,seq19946);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19947,seq19946__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args19954 = [];
var len__17884__auto___20004 = arguments.length;
var i__17885__auto___20005 = (0);
while(true){
if((i__17885__auto___20005 < len__17884__auto___20004)){
args19954.push((arguments[i__17885__auto___20005]));

var G__20006 = (i__17885__auto___20005 + (1));
i__17885__auto___20005 = G__20006;
continue;
} else {
}
break;
}

var G__19956 = args19954.length;
switch (G__19956) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19954.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__19841__auto___20008 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19841__auto___20008){
return (function (){
var f__19842__auto__ = (function (){var switch__19729__auto__ = ((function (c__19841__auto___20008){
return (function (state_19980){
var state_val_19981 = (state_19980[(1)]);
if((state_val_19981 === (7))){
var inst_19976 = (state_19980[(2)]);
var state_19980__$1 = state_19980;
var statearr_19982_20009 = state_19980__$1;
(statearr_19982_20009[(2)] = inst_19976);

(statearr_19982_20009[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19981 === (1))){
var state_19980__$1 = state_19980;
var statearr_19983_20010 = state_19980__$1;
(statearr_19983_20010[(2)] = null);

(statearr_19983_20010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19981 === (4))){
var inst_19959 = (state_19980[(7)]);
var inst_19959__$1 = (state_19980[(2)]);
var inst_19960 = (inst_19959__$1 == null);
var state_19980__$1 = (function (){var statearr_19984 = state_19980;
(statearr_19984[(7)] = inst_19959__$1);

return statearr_19984;
})();
if(cljs.core.truth_(inst_19960)){
var statearr_19985_20011 = state_19980__$1;
(statearr_19985_20011[(1)] = (5));

} else {
var statearr_19986_20012 = state_19980__$1;
(statearr_19986_20012[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19981 === (13))){
var state_19980__$1 = state_19980;
var statearr_19987_20013 = state_19980__$1;
(statearr_19987_20013[(2)] = null);

(statearr_19987_20013[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19981 === (6))){
var inst_19959 = (state_19980[(7)]);
var state_19980__$1 = state_19980;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19980__$1,(11),to,inst_19959);
} else {
if((state_val_19981 === (3))){
var inst_19978 = (state_19980[(2)]);
var state_19980__$1 = state_19980;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19980__$1,inst_19978);
} else {
if((state_val_19981 === (12))){
var state_19980__$1 = state_19980;
var statearr_19988_20014 = state_19980__$1;
(statearr_19988_20014[(2)] = null);

(statearr_19988_20014[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19981 === (2))){
var state_19980__$1 = state_19980;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19980__$1,(4),from);
} else {
if((state_val_19981 === (11))){
var inst_19969 = (state_19980[(2)]);
var state_19980__$1 = state_19980;
if(cljs.core.truth_(inst_19969)){
var statearr_19989_20015 = state_19980__$1;
(statearr_19989_20015[(1)] = (12));

} else {
var statearr_19990_20016 = state_19980__$1;
(statearr_19990_20016[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19981 === (9))){
var state_19980__$1 = state_19980;
var statearr_19991_20017 = state_19980__$1;
(statearr_19991_20017[(2)] = null);

(statearr_19991_20017[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19981 === (5))){
var state_19980__$1 = state_19980;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19992_20018 = state_19980__$1;
(statearr_19992_20018[(1)] = (8));

} else {
var statearr_19993_20019 = state_19980__$1;
(statearr_19993_20019[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19981 === (14))){
var inst_19974 = (state_19980[(2)]);
var state_19980__$1 = state_19980;
var statearr_19994_20020 = state_19980__$1;
(statearr_19994_20020[(2)] = inst_19974);

(statearr_19994_20020[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19981 === (10))){
var inst_19966 = (state_19980[(2)]);
var state_19980__$1 = state_19980;
var statearr_19995_20021 = state_19980__$1;
(statearr_19995_20021[(2)] = inst_19966);

(statearr_19995_20021[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19981 === (8))){
var inst_19963 = cljs.core.async.close_BANG_.call(null,to);
var state_19980__$1 = state_19980;
var statearr_19996_20022 = state_19980__$1;
(statearr_19996_20022[(2)] = inst_19963);

(statearr_19996_20022[(1)] = (10));


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
});})(c__19841__auto___20008))
;
return ((function (switch__19729__auto__,c__19841__auto___20008){
return (function() {
var cljs$core$async$state_machine__19730__auto__ = null;
var cljs$core$async$state_machine__19730__auto____0 = (function (){
var statearr_20000 = [null,null,null,null,null,null,null,null];
(statearr_20000[(0)] = cljs$core$async$state_machine__19730__auto__);

(statearr_20000[(1)] = (1));

return statearr_20000;
});
var cljs$core$async$state_machine__19730__auto____1 = (function (state_19980){
while(true){
var ret_value__19731__auto__ = (function (){try{while(true){
var result__19732__auto__ = switch__19729__auto__.call(null,state_19980);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19732__auto__;
}
break;
}
}catch (e20001){if((e20001 instanceof Object)){
var ex__19733__auto__ = e20001;
var statearr_20002_20023 = state_19980;
(statearr_20002_20023[(5)] = ex__19733__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19980);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20001;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20024 = state_19980;
state_19980 = G__20024;
continue;
} else {
return ret_value__19731__auto__;
}
break;
}
});
cljs$core$async$state_machine__19730__auto__ = function(state_19980){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19730__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19730__auto____1.call(this,state_19980);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19730__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19730__auto____0;
cljs$core$async$state_machine__19730__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19730__auto____1;
return cljs$core$async$state_machine__19730__auto__;
})()
;})(switch__19729__auto__,c__19841__auto___20008))
})();
var state__19843__auto__ = (function (){var statearr_20003 = f__19842__auto__.call(null);
(statearr_20003[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19841__auto___20008);

return statearr_20003;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19843__auto__);
});})(c__19841__auto___20008))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__20208){
var vec__20209 = p__20208;
var v = cljs.core.nth.call(null,vec__20209,(0),null);
var p = cljs.core.nth.call(null,vec__20209,(1),null);
var job = vec__20209;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19841__auto___20391 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19841__auto___20391,res,vec__20209,v,p,job,jobs,results){
return (function (){
var f__19842__auto__ = (function (){var switch__19729__auto__ = ((function (c__19841__auto___20391,res,vec__20209,v,p,job,jobs,results){
return (function (state_20214){
var state_val_20215 = (state_20214[(1)]);
if((state_val_20215 === (1))){
var state_20214__$1 = state_20214;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20214__$1,(2),res,v);
} else {
if((state_val_20215 === (2))){
var inst_20211 = (state_20214[(2)]);
var inst_20212 = cljs.core.async.close_BANG_.call(null,res);
var state_20214__$1 = (function (){var statearr_20216 = state_20214;
(statearr_20216[(7)] = inst_20211);

return statearr_20216;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20214__$1,inst_20212);
} else {
return null;
}
}
});})(c__19841__auto___20391,res,vec__20209,v,p,job,jobs,results))
;
return ((function (switch__19729__auto__,c__19841__auto___20391,res,vec__20209,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19730__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19730__auto____0 = (function (){
var statearr_20220 = [null,null,null,null,null,null,null,null];
(statearr_20220[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19730__auto__);

(statearr_20220[(1)] = (1));

return statearr_20220;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19730__auto____1 = (function (state_20214){
while(true){
var ret_value__19731__auto__ = (function (){try{while(true){
var result__19732__auto__ = switch__19729__auto__.call(null,state_20214);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19732__auto__;
}
break;
}
}catch (e20221){if((e20221 instanceof Object)){
var ex__19733__auto__ = e20221;
var statearr_20222_20392 = state_20214;
(statearr_20222_20392[(5)] = ex__19733__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20214);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20221;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20393 = state_20214;
state_20214 = G__20393;
continue;
} else {
return ret_value__19731__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19730__auto__ = function(state_20214){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19730__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19730__auto____1.call(this,state_20214);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19730__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19730__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19730__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19730__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19730__auto__;
})()
;})(switch__19729__auto__,c__19841__auto___20391,res,vec__20209,v,p,job,jobs,results))
})();
var state__19843__auto__ = (function (){var statearr_20223 = f__19842__auto__.call(null);
(statearr_20223[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19841__auto___20391);

return statearr_20223;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19843__auto__);
});})(c__19841__auto___20391,res,vec__20209,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__20224){
var vec__20225 = p__20224;
var v = cljs.core.nth.call(null,vec__20225,(0),null);
var p = cljs.core.nth.call(null,vec__20225,(1),null);
var job = vec__20225;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__17729__auto___20394 = n;
var __20395 = (0);
while(true){
if((__20395 < n__17729__auto___20394)){
var G__20226_20396 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__20226_20396) {
case "compute":
var c__19841__auto___20398 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__20395,c__19841__auto___20398,G__20226_20396,n__17729__auto___20394,jobs,results,process,async){
return (function (){
var f__19842__auto__ = (function (){var switch__19729__auto__ = ((function (__20395,c__19841__auto___20398,G__20226_20396,n__17729__auto___20394,jobs,results,process,async){
return (function (state_20239){
var state_val_20240 = (state_20239[(1)]);
if((state_val_20240 === (1))){
var state_20239__$1 = state_20239;
var statearr_20241_20399 = state_20239__$1;
(statearr_20241_20399[(2)] = null);

(statearr_20241_20399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20240 === (2))){
var state_20239__$1 = state_20239;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20239__$1,(4),jobs);
} else {
if((state_val_20240 === (3))){
var inst_20237 = (state_20239[(2)]);
var state_20239__$1 = state_20239;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20239__$1,inst_20237);
} else {
if((state_val_20240 === (4))){
var inst_20229 = (state_20239[(2)]);
var inst_20230 = process.call(null,inst_20229);
var state_20239__$1 = state_20239;
if(cljs.core.truth_(inst_20230)){
var statearr_20242_20400 = state_20239__$1;
(statearr_20242_20400[(1)] = (5));

} else {
var statearr_20243_20401 = state_20239__$1;
(statearr_20243_20401[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20240 === (5))){
var state_20239__$1 = state_20239;
var statearr_20244_20402 = state_20239__$1;
(statearr_20244_20402[(2)] = null);

(statearr_20244_20402[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20240 === (6))){
var state_20239__$1 = state_20239;
var statearr_20245_20403 = state_20239__$1;
(statearr_20245_20403[(2)] = null);

(statearr_20245_20403[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20240 === (7))){
var inst_20235 = (state_20239[(2)]);
var state_20239__$1 = state_20239;
var statearr_20246_20404 = state_20239__$1;
(statearr_20246_20404[(2)] = inst_20235);

(statearr_20246_20404[(1)] = (3));


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
});})(__20395,c__19841__auto___20398,G__20226_20396,n__17729__auto___20394,jobs,results,process,async))
;
return ((function (__20395,switch__19729__auto__,c__19841__auto___20398,G__20226_20396,n__17729__auto___20394,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19730__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19730__auto____0 = (function (){
var statearr_20250 = [null,null,null,null,null,null,null];
(statearr_20250[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19730__auto__);

(statearr_20250[(1)] = (1));

return statearr_20250;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19730__auto____1 = (function (state_20239){
while(true){
var ret_value__19731__auto__ = (function (){try{while(true){
var result__19732__auto__ = switch__19729__auto__.call(null,state_20239);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19732__auto__;
}
break;
}
}catch (e20251){if((e20251 instanceof Object)){
var ex__19733__auto__ = e20251;
var statearr_20252_20405 = state_20239;
(statearr_20252_20405[(5)] = ex__19733__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20239);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20251;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20406 = state_20239;
state_20239 = G__20406;
continue;
} else {
return ret_value__19731__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19730__auto__ = function(state_20239){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19730__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19730__auto____1.call(this,state_20239);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19730__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19730__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19730__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19730__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19730__auto__;
})()
;})(__20395,switch__19729__auto__,c__19841__auto___20398,G__20226_20396,n__17729__auto___20394,jobs,results,process,async))
})();
var state__19843__auto__ = (function (){var statearr_20253 = f__19842__auto__.call(null);
(statearr_20253[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19841__auto___20398);

return statearr_20253;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19843__auto__);
});})(__20395,c__19841__auto___20398,G__20226_20396,n__17729__auto___20394,jobs,results,process,async))
);


break;
case "async":
var c__19841__auto___20407 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__20395,c__19841__auto___20407,G__20226_20396,n__17729__auto___20394,jobs,results,process,async){
return (function (){
var f__19842__auto__ = (function (){var switch__19729__auto__ = ((function (__20395,c__19841__auto___20407,G__20226_20396,n__17729__auto___20394,jobs,results,process,async){
return (function (state_20266){
var state_val_20267 = (state_20266[(1)]);
if((state_val_20267 === (1))){
var state_20266__$1 = state_20266;
var statearr_20268_20408 = state_20266__$1;
(statearr_20268_20408[(2)] = null);

(statearr_20268_20408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20267 === (2))){
var state_20266__$1 = state_20266;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20266__$1,(4),jobs);
} else {
if((state_val_20267 === (3))){
var inst_20264 = (state_20266[(2)]);
var state_20266__$1 = state_20266;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20266__$1,inst_20264);
} else {
if((state_val_20267 === (4))){
var inst_20256 = (state_20266[(2)]);
var inst_20257 = async.call(null,inst_20256);
var state_20266__$1 = state_20266;
if(cljs.core.truth_(inst_20257)){
var statearr_20269_20409 = state_20266__$1;
(statearr_20269_20409[(1)] = (5));

} else {
var statearr_20270_20410 = state_20266__$1;
(statearr_20270_20410[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20267 === (5))){
var state_20266__$1 = state_20266;
var statearr_20271_20411 = state_20266__$1;
(statearr_20271_20411[(2)] = null);

(statearr_20271_20411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20267 === (6))){
var state_20266__$1 = state_20266;
var statearr_20272_20412 = state_20266__$1;
(statearr_20272_20412[(2)] = null);

(statearr_20272_20412[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20267 === (7))){
var inst_20262 = (state_20266[(2)]);
var state_20266__$1 = state_20266;
var statearr_20273_20413 = state_20266__$1;
(statearr_20273_20413[(2)] = inst_20262);

(statearr_20273_20413[(1)] = (3));


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
});})(__20395,c__19841__auto___20407,G__20226_20396,n__17729__auto___20394,jobs,results,process,async))
;
return ((function (__20395,switch__19729__auto__,c__19841__auto___20407,G__20226_20396,n__17729__auto___20394,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19730__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19730__auto____0 = (function (){
var statearr_20277 = [null,null,null,null,null,null,null];
(statearr_20277[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19730__auto__);

(statearr_20277[(1)] = (1));

return statearr_20277;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19730__auto____1 = (function (state_20266){
while(true){
var ret_value__19731__auto__ = (function (){try{while(true){
var result__19732__auto__ = switch__19729__auto__.call(null,state_20266);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19732__auto__;
}
break;
}
}catch (e20278){if((e20278 instanceof Object)){
var ex__19733__auto__ = e20278;
var statearr_20279_20414 = state_20266;
(statearr_20279_20414[(5)] = ex__19733__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20266);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20278;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20415 = state_20266;
state_20266 = G__20415;
continue;
} else {
return ret_value__19731__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19730__auto__ = function(state_20266){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19730__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19730__auto____1.call(this,state_20266);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19730__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19730__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19730__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19730__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19730__auto__;
})()
;})(__20395,switch__19729__auto__,c__19841__auto___20407,G__20226_20396,n__17729__auto___20394,jobs,results,process,async))
})();
var state__19843__auto__ = (function (){var statearr_20280 = f__19842__auto__.call(null);
(statearr_20280[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19841__auto___20407);

return statearr_20280;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19843__auto__);
});})(__20395,c__19841__auto___20407,G__20226_20396,n__17729__auto___20394,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__20416 = (__20395 + (1));
__20395 = G__20416;
continue;
} else {
}
break;
}

var c__19841__auto___20417 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19841__auto___20417,jobs,results,process,async){
return (function (){
var f__19842__auto__ = (function (){var switch__19729__auto__ = ((function (c__19841__auto___20417,jobs,results,process,async){
return (function (state_20302){
var state_val_20303 = (state_20302[(1)]);
if((state_val_20303 === (1))){
var state_20302__$1 = state_20302;
var statearr_20304_20418 = state_20302__$1;
(statearr_20304_20418[(2)] = null);

(statearr_20304_20418[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20303 === (2))){
var state_20302__$1 = state_20302;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20302__$1,(4),from);
} else {
if((state_val_20303 === (3))){
var inst_20300 = (state_20302[(2)]);
var state_20302__$1 = state_20302;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20302__$1,inst_20300);
} else {
if((state_val_20303 === (4))){
var inst_20283 = (state_20302[(7)]);
var inst_20283__$1 = (state_20302[(2)]);
var inst_20284 = (inst_20283__$1 == null);
var state_20302__$1 = (function (){var statearr_20305 = state_20302;
(statearr_20305[(7)] = inst_20283__$1);

return statearr_20305;
})();
if(cljs.core.truth_(inst_20284)){
var statearr_20306_20419 = state_20302__$1;
(statearr_20306_20419[(1)] = (5));

} else {
var statearr_20307_20420 = state_20302__$1;
(statearr_20307_20420[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20303 === (5))){
var inst_20286 = cljs.core.async.close_BANG_.call(null,jobs);
var state_20302__$1 = state_20302;
var statearr_20308_20421 = state_20302__$1;
(statearr_20308_20421[(2)] = inst_20286);

(statearr_20308_20421[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20303 === (6))){
var inst_20283 = (state_20302[(7)]);
var inst_20288 = (state_20302[(8)]);
var inst_20288__$1 = cljs.core.async.chan.call(null,(1));
var inst_20289 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20290 = [inst_20283,inst_20288__$1];
var inst_20291 = (new cljs.core.PersistentVector(null,2,(5),inst_20289,inst_20290,null));
var state_20302__$1 = (function (){var statearr_20309 = state_20302;
(statearr_20309[(8)] = inst_20288__$1);

return statearr_20309;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20302__$1,(8),jobs,inst_20291);
} else {
if((state_val_20303 === (7))){
var inst_20298 = (state_20302[(2)]);
var state_20302__$1 = state_20302;
var statearr_20310_20422 = state_20302__$1;
(statearr_20310_20422[(2)] = inst_20298);

(statearr_20310_20422[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20303 === (8))){
var inst_20288 = (state_20302[(8)]);
var inst_20293 = (state_20302[(2)]);
var state_20302__$1 = (function (){var statearr_20311 = state_20302;
(statearr_20311[(9)] = inst_20293);

return statearr_20311;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20302__$1,(9),results,inst_20288);
} else {
if((state_val_20303 === (9))){
var inst_20295 = (state_20302[(2)]);
var state_20302__$1 = (function (){var statearr_20312 = state_20302;
(statearr_20312[(10)] = inst_20295);

return statearr_20312;
})();
var statearr_20313_20423 = state_20302__$1;
(statearr_20313_20423[(2)] = null);

(statearr_20313_20423[(1)] = (2));


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
});})(c__19841__auto___20417,jobs,results,process,async))
;
return ((function (switch__19729__auto__,c__19841__auto___20417,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19730__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19730__auto____0 = (function (){
var statearr_20317 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20317[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19730__auto__);

(statearr_20317[(1)] = (1));

return statearr_20317;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19730__auto____1 = (function (state_20302){
while(true){
var ret_value__19731__auto__ = (function (){try{while(true){
var result__19732__auto__ = switch__19729__auto__.call(null,state_20302);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19732__auto__;
}
break;
}
}catch (e20318){if((e20318 instanceof Object)){
var ex__19733__auto__ = e20318;
var statearr_20319_20424 = state_20302;
(statearr_20319_20424[(5)] = ex__19733__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20302);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20318;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20425 = state_20302;
state_20302 = G__20425;
continue;
} else {
return ret_value__19731__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19730__auto__ = function(state_20302){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19730__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19730__auto____1.call(this,state_20302);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19730__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19730__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19730__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19730__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19730__auto__;
})()
;})(switch__19729__auto__,c__19841__auto___20417,jobs,results,process,async))
})();
var state__19843__auto__ = (function (){var statearr_20320 = f__19842__auto__.call(null);
(statearr_20320[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19841__auto___20417);

return statearr_20320;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19843__auto__);
});})(c__19841__auto___20417,jobs,results,process,async))
);


var c__19841__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19841__auto__,jobs,results,process,async){
return (function (){
var f__19842__auto__ = (function (){var switch__19729__auto__ = ((function (c__19841__auto__,jobs,results,process,async){
return (function (state_20358){
var state_val_20359 = (state_20358[(1)]);
if((state_val_20359 === (7))){
var inst_20354 = (state_20358[(2)]);
var state_20358__$1 = state_20358;
var statearr_20360_20426 = state_20358__$1;
(statearr_20360_20426[(2)] = inst_20354);

(statearr_20360_20426[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20359 === (20))){
var state_20358__$1 = state_20358;
var statearr_20361_20427 = state_20358__$1;
(statearr_20361_20427[(2)] = null);

(statearr_20361_20427[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20359 === (1))){
var state_20358__$1 = state_20358;
var statearr_20362_20428 = state_20358__$1;
(statearr_20362_20428[(2)] = null);

(statearr_20362_20428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20359 === (4))){
var inst_20323 = (state_20358[(7)]);
var inst_20323__$1 = (state_20358[(2)]);
var inst_20324 = (inst_20323__$1 == null);
var state_20358__$1 = (function (){var statearr_20363 = state_20358;
(statearr_20363[(7)] = inst_20323__$1);

return statearr_20363;
})();
if(cljs.core.truth_(inst_20324)){
var statearr_20364_20429 = state_20358__$1;
(statearr_20364_20429[(1)] = (5));

} else {
var statearr_20365_20430 = state_20358__$1;
(statearr_20365_20430[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20359 === (15))){
var inst_20336 = (state_20358[(8)]);
var state_20358__$1 = state_20358;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20358__$1,(18),to,inst_20336);
} else {
if((state_val_20359 === (21))){
var inst_20349 = (state_20358[(2)]);
var state_20358__$1 = state_20358;
var statearr_20366_20431 = state_20358__$1;
(statearr_20366_20431[(2)] = inst_20349);

(statearr_20366_20431[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20359 === (13))){
var inst_20351 = (state_20358[(2)]);
var state_20358__$1 = (function (){var statearr_20367 = state_20358;
(statearr_20367[(9)] = inst_20351);

return statearr_20367;
})();
var statearr_20368_20432 = state_20358__$1;
(statearr_20368_20432[(2)] = null);

(statearr_20368_20432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20359 === (6))){
var inst_20323 = (state_20358[(7)]);
var state_20358__$1 = state_20358;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20358__$1,(11),inst_20323);
} else {
if((state_val_20359 === (17))){
var inst_20344 = (state_20358[(2)]);
var state_20358__$1 = state_20358;
if(cljs.core.truth_(inst_20344)){
var statearr_20369_20433 = state_20358__$1;
(statearr_20369_20433[(1)] = (19));

} else {
var statearr_20370_20434 = state_20358__$1;
(statearr_20370_20434[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20359 === (3))){
var inst_20356 = (state_20358[(2)]);
var state_20358__$1 = state_20358;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20358__$1,inst_20356);
} else {
if((state_val_20359 === (12))){
var inst_20333 = (state_20358[(10)]);
var state_20358__$1 = state_20358;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20358__$1,(14),inst_20333);
} else {
if((state_val_20359 === (2))){
var state_20358__$1 = state_20358;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20358__$1,(4),results);
} else {
if((state_val_20359 === (19))){
var state_20358__$1 = state_20358;
var statearr_20371_20435 = state_20358__$1;
(statearr_20371_20435[(2)] = null);

(statearr_20371_20435[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20359 === (11))){
var inst_20333 = (state_20358[(2)]);
var state_20358__$1 = (function (){var statearr_20372 = state_20358;
(statearr_20372[(10)] = inst_20333);

return statearr_20372;
})();
var statearr_20373_20436 = state_20358__$1;
(statearr_20373_20436[(2)] = null);

(statearr_20373_20436[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20359 === (9))){
var state_20358__$1 = state_20358;
var statearr_20374_20437 = state_20358__$1;
(statearr_20374_20437[(2)] = null);

(statearr_20374_20437[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20359 === (5))){
var state_20358__$1 = state_20358;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20375_20438 = state_20358__$1;
(statearr_20375_20438[(1)] = (8));

} else {
var statearr_20376_20439 = state_20358__$1;
(statearr_20376_20439[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20359 === (14))){
var inst_20336 = (state_20358[(8)]);
var inst_20338 = (state_20358[(11)]);
var inst_20336__$1 = (state_20358[(2)]);
var inst_20337 = (inst_20336__$1 == null);
var inst_20338__$1 = cljs.core.not.call(null,inst_20337);
var state_20358__$1 = (function (){var statearr_20377 = state_20358;
(statearr_20377[(8)] = inst_20336__$1);

(statearr_20377[(11)] = inst_20338__$1);

return statearr_20377;
})();
if(inst_20338__$1){
var statearr_20378_20440 = state_20358__$1;
(statearr_20378_20440[(1)] = (15));

} else {
var statearr_20379_20441 = state_20358__$1;
(statearr_20379_20441[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20359 === (16))){
var inst_20338 = (state_20358[(11)]);
var state_20358__$1 = state_20358;
var statearr_20380_20442 = state_20358__$1;
(statearr_20380_20442[(2)] = inst_20338);

(statearr_20380_20442[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20359 === (10))){
var inst_20330 = (state_20358[(2)]);
var state_20358__$1 = state_20358;
var statearr_20381_20443 = state_20358__$1;
(statearr_20381_20443[(2)] = inst_20330);

(statearr_20381_20443[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20359 === (18))){
var inst_20341 = (state_20358[(2)]);
var state_20358__$1 = state_20358;
var statearr_20382_20444 = state_20358__$1;
(statearr_20382_20444[(2)] = inst_20341);

(statearr_20382_20444[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20359 === (8))){
var inst_20327 = cljs.core.async.close_BANG_.call(null,to);
var state_20358__$1 = state_20358;
var statearr_20383_20445 = state_20358__$1;
(statearr_20383_20445[(2)] = inst_20327);

(statearr_20383_20445[(1)] = (10));


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
});})(c__19841__auto__,jobs,results,process,async))
;
return ((function (switch__19729__auto__,c__19841__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19730__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19730__auto____0 = (function (){
var statearr_20387 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20387[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19730__auto__);

(statearr_20387[(1)] = (1));

return statearr_20387;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19730__auto____1 = (function (state_20358){
while(true){
var ret_value__19731__auto__ = (function (){try{while(true){
var result__19732__auto__ = switch__19729__auto__.call(null,state_20358);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19732__auto__;
}
break;
}
}catch (e20388){if((e20388 instanceof Object)){
var ex__19733__auto__ = e20388;
var statearr_20389_20446 = state_20358;
(statearr_20389_20446[(5)] = ex__19733__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20358);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20388;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20447 = state_20358;
state_20358 = G__20447;
continue;
} else {
return ret_value__19731__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19730__auto__ = function(state_20358){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19730__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19730__auto____1.call(this,state_20358);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19730__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19730__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19730__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19730__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19730__auto__;
})()
;})(switch__19729__auto__,c__19841__auto__,jobs,results,process,async))
})();
var state__19843__auto__ = (function (){var statearr_20390 = f__19842__auto__.call(null);
(statearr_20390[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19841__auto__);

return statearr_20390;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19843__auto__);
});})(c__19841__auto__,jobs,results,process,async))
);

return c__19841__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args20448 = [];
var len__17884__auto___20451 = arguments.length;
var i__17885__auto___20452 = (0);
while(true){
if((i__17885__auto___20452 < len__17884__auto___20451)){
args20448.push((arguments[i__17885__auto___20452]));

var G__20453 = (i__17885__auto___20452 + (1));
i__17885__auto___20452 = G__20453;
continue;
} else {
}
break;
}

var G__20450 = args20448.length;
switch (G__20450) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20448.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args20455 = [];
var len__17884__auto___20458 = arguments.length;
var i__17885__auto___20459 = (0);
while(true){
if((i__17885__auto___20459 < len__17884__auto___20458)){
args20455.push((arguments[i__17885__auto___20459]));

var G__20460 = (i__17885__auto___20459 + (1));
i__17885__auto___20459 = G__20460;
continue;
} else {
}
break;
}

var G__20457 = args20455.length;
switch (G__20457) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20455.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args20462 = [];
var len__17884__auto___20515 = arguments.length;
var i__17885__auto___20516 = (0);
while(true){
if((i__17885__auto___20516 < len__17884__auto___20515)){
args20462.push((arguments[i__17885__auto___20516]));

var G__20517 = (i__17885__auto___20516 + (1));
i__17885__auto___20516 = G__20517;
continue;
} else {
}
break;
}

var G__20464 = args20462.length;
switch (G__20464) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20462.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__19841__auto___20519 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19841__auto___20519,tc,fc){
return (function (){
var f__19842__auto__ = (function (){var switch__19729__auto__ = ((function (c__19841__auto___20519,tc,fc){
return (function (state_20490){
var state_val_20491 = (state_20490[(1)]);
if((state_val_20491 === (7))){
var inst_20486 = (state_20490[(2)]);
var state_20490__$1 = state_20490;
var statearr_20492_20520 = state_20490__$1;
(statearr_20492_20520[(2)] = inst_20486);

(statearr_20492_20520[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20491 === (1))){
var state_20490__$1 = state_20490;
var statearr_20493_20521 = state_20490__$1;
(statearr_20493_20521[(2)] = null);

(statearr_20493_20521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20491 === (4))){
var inst_20467 = (state_20490[(7)]);
var inst_20467__$1 = (state_20490[(2)]);
var inst_20468 = (inst_20467__$1 == null);
var state_20490__$1 = (function (){var statearr_20494 = state_20490;
(statearr_20494[(7)] = inst_20467__$1);

return statearr_20494;
})();
if(cljs.core.truth_(inst_20468)){
var statearr_20495_20522 = state_20490__$1;
(statearr_20495_20522[(1)] = (5));

} else {
var statearr_20496_20523 = state_20490__$1;
(statearr_20496_20523[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20491 === (13))){
var state_20490__$1 = state_20490;
var statearr_20497_20524 = state_20490__$1;
(statearr_20497_20524[(2)] = null);

(statearr_20497_20524[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20491 === (6))){
var inst_20467 = (state_20490[(7)]);
var inst_20473 = p.call(null,inst_20467);
var state_20490__$1 = state_20490;
if(cljs.core.truth_(inst_20473)){
var statearr_20498_20525 = state_20490__$1;
(statearr_20498_20525[(1)] = (9));

} else {
var statearr_20499_20526 = state_20490__$1;
(statearr_20499_20526[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20491 === (3))){
var inst_20488 = (state_20490[(2)]);
var state_20490__$1 = state_20490;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20490__$1,inst_20488);
} else {
if((state_val_20491 === (12))){
var state_20490__$1 = state_20490;
var statearr_20500_20527 = state_20490__$1;
(statearr_20500_20527[(2)] = null);

(statearr_20500_20527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20491 === (2))){
var state_20490__$1 = state_20490;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20490__$1,(4),ch);
} else {
if((state_val_20491 === (11))){
var inst_20467 = (state_20490[(7)]);
var inst_20477 = (state_20490[(2)]);
var state_20490__$1 = state_20490;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20490__$1,(8),inst_20477,inst_20467);
} else {
if((state_val_20491 === (9))){
var state_20490__$1 = state_20490;
var statearr_20501_20528 = state_20490__$1;
(statearr_20501_20528[(2)] = tc);

(statearr_20501_20528[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20491 === (5))){
var inst_20470 = cljs.core.async.close_BANG_.call(null,tc);
var inst_20471 = cljs.core.async.close_BANG_.call(null,fc);
var state_20490__$1 = (function (){var statearr_20502 = state_20490;
(statearr_20502[(8)] = inst_20470);

return statearr_20502;
})();
var statearr_20503_20529 = state_20490__$1;
(statearr_20503_20529[(2)] = inst_20471);

(statearr_20503_20529[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20491 === (14))){
var inst_20484 = (state_20490[(2)]);
var state_20490__$1 = state_20490;
var statearr_20504_20530 = state_20490__$1;
(statearr_20504_20530[(2)] = inst_20484);

(statearr_20504_20530[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20491 === (10))){
var state_20490__$1 = state_20490;
var statearr_20505_20531 = state_20490__$1;
(statearr_20505_20531[(2)] = fc);

(statearr_20505_20531[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20491 === (8))){
var inst_20479 = (state_20490[(2)]);
var state_20490__$1 = state_20490;
if(cljs.core.truth_(inst_20479)){
var statearr_20506_20532 = state_20490__$1;
(statearr_20506_20532[(1)] = (12));

} else {
var statearr_20507_20533 = state_20490__$1;
(statearr_20507_20533[(1)] = (13));

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
});})(c__19841__auto___20519,tc,fc))
;
return ((function (switch__19729__auto__,c__19841__auto___20519,tc,fc){
return (function() {
var cljs$core$async$state_machine__19730__auto__ = null;
var cljs$core$async$state_machine__19730__auto____0 = (function (){
var statearr_20511 = [null,null,null,null,null,null,null,null,null];
(statearr_20511[(0)] = cljs$core$async$state_machine__19730__auto__);

(statearr_20511[(1)] = (1));

return statearr_20511;
});
var cljs$core$async$state_machine__19730__auto____1 = (function (state_20490){
while(true){
var ret_value__19731__auto__ = (function (){try{while(true){
var result__19732__auto__ = switch__19729__auto__.call(null,state_20490);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19732__auto__;
}
break;
}
}catch (e20512){if((e20512 instanceof Object)){
var ex__19733__auto__ = e20512;
var statearr_20513_20534 = state_20490;
(statearr_20513_20534[(5)] = ex__19733__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20490);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20512;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20535 = state_20490;
state_20490 = G__20535;
continue;
} else {
return ret_value__19731__auto__;
}
break;
}
});
cljs$core$async$state_machine__19730__auto__ = function(state_20490){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19730__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19730__auto____1.call(this,state_20490);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19730__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19730__auto____0;
cljs$core$async$state_machine__19730__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19730__auto____1;
return cljs$core$async$state_machine__19730__auto__;
})()
;})(switch__19729__auto__,c__19841__auto___20519,tc,fc))
})();
var state__19843__auto__ = (function (){var statearr_20514 = f__19842__auto__.call(null);
(statearr_20514[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19841__auto___20519);

return statearr_20514;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19843__auto__);
});})(c__19841__auto___20519,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__19841__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19841__auto__){
return (function (){
var f__19842__auto__ = (function (){var switch__19729__auto__ = ((function (c__19841__auto__){
return (function (state_20599){
var state_val_20600 = (state_20599[(1)]);
if((state_val_20600 === (7))){
var inst_20595 = (state_20599[(2)]);
var state_20599__$1 = state_20599;
var statearr_20601_20622 = state_20599__$1;
(statearr_20601_20622[(2)] = inst_20595);

(statearr_20601_20622[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20600 === (1))){
var inst_20579 = init;
var state_20599__$1 = (function (){var statearr_20602 = state_20599;
(statearr_20602[(7)] = inst_20579);

return statearr_20602;
})();
var statearr_20603_20623 = state_20599__$1;
(statearr_20603_20623[(2)] = null);

(statearr_20603_20623[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20600 === (4))){
var inst_20582 = (state_20599[(8)]);
var inst_20582__$1 = (state_20599[(2)]);
var inst_20583 = (inst_20582__$1 == null);
var state_20599__$1 = (function (){var statearr_20604 = state_20599;
(statearr_20604[(8)] = inst_20582__$1);

return statearr_20604;
})();
if(cljs.core.truth_(inst_20583)){
var statearr_20605_20624 = state_20599__$1;
(statearr_20605_20624[(1)] = (5));

} else {
var statearr_20606_20625 = state_20599__$1;
(statearr_20606_20625[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20600 === (6))){
var inst_20582 = (state_20599[(8)]);
var inst_20579 = (state_20599[(7)]);
var inst_20586 = (state_20599[(9)]);
var inst_20586__$1 = f.call(null,inst_20579,inst_20582);
var inst_20587 = cljs.core.reduced_QMARK_.call(null,inst_20586__$1);
var state_20599__$1 = (function (){var statearr_20607 = state_20599;
(statearr_20607[(9)] = inst_20586__$1);

return statearr_20607;
})();
if(inst_20587){
var statearr_20608_20626 = state_20599__$1;
(statearr_20608_20626[(1)] = (8));

} else {
var statearr_20609_20627 = state_20599__$1;
(statearr_20609_20627[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20600 === (3))){
var inst_20597 = (state_20599[(2)]);
var state_20599__$1 = state_20599;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20599__$1,inst_20597);
} else {
if((state_val_20600 === (2))){
var state_20599__$1 = state_20599;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20599__$1,(4),ch);
} else {
if((state_val_20600 === (9))){
var inst_20586 = (state_20599[(9)]);
var inst_20579 = inst_20586;
var state_20599__$1 = (function (){var statearr_20610 = state_20599;
(statearr_20610[(7)] = inst_20579);

return statearr_20610;
})();
var statearr_20611_20628 = state_20599__$1;
(statearr_20611_20628[(2)] = null);

(statearr_20611_20628[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20600 === (5))){
var inst_20579 = (state_20599[(7)]);
var state_20599__$1 = state_20599;
var statearr_20612_20629 = state_20599__$1;
(statearr_20612_20629[(2)] = inst_20579);

(statearr_20612_20629[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20600 === (10))){
var inst_20593 = (state_20599[(2)]);
var state_20599__$1 = state_20599;
var statearr_20613_20630 = state_20599__$1;
(statearr_20613_20630[(2)] = inst_20593);

(statearr_20613_20630[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20600 === (8))){
var inst_20586 = (state_20599[(9)]);
var inst_20589 = cljs.core.deref.call(null,inst_20586);
var state_20599__$1 = state_20599;
var statearr_20614_20631 = state_20599__$1;
(statearr_20614_20631[(2)] = inst_20589);

(statearr_20614_20631[(1)] = (10));


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
});})(c__19841__auto__))
;
return ((function (switch__19729__auto__,c__19841__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__19730__auto__ = null;
var cljs$core$async$reduce_$_state_machine__19730__auto____0 = (function (){
var statearr_20618 = [null,null,null,null,null,null,null,null,null,null];
(statearr_20618[(0)] = cljs$core$async$reduce_$_state_machine__19730__auto__);

(statearr_20618[(1)] = (1));

return statearr_20618;
});
var cljs$core$async$reduce_$_state_machine__19730__auto____1 = (function (state_20599){
while(true){
var ret_value__19731__auto__ = (function (){try{while(true){
var result__19732__auto__ = switch__19729__auto__.call(null,state_20599);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19732__auto__;
}
break;
}
}catch (e20619){if((e20619 instanceof Object)){
var ex__19733__auto__ = e20619;
var statearr_20620_20632 = state_20599;
(statearr_20620_20632[(5)] = ex__19733__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20599);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20619;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20633 = state_20599;
state_20599 = G__20633;
continue;
} else {
return ret_value__19731__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19730__auto__ = function(state_20599){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19730__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19730__auto____1.call(this,state_20599);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__19730__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19730__auto____0;
cljs$core$async$reduce_$_state_machine__19730__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19730__auto____1;
return cljs$core$async$reduce_$_state_machine__19730__auto__;
})()
;})(switch__19729__auto__,c__19841__auto__))
})();
var state__19843__auto__ = (function (){var statearr_20621 = f__19842__auto__.call(null);
(statearr_20621[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19841__auto__);

return statearr_20621;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19843__auto__);
});})(c__19841__auto__))
);

return c__19841__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args20634 = [];
var len__17884__auto___20686 = arguments.length;
var i__17885__auto___20687 = (0);
while(true){
if((i__17885__auto___20687 < len__17884__auto___20686)){
args20634.push((arguments[i__17885__auto___20687]));

var G__20688 = (i__17885__auto___20687 + (1));
i__17885__auto___20687 = G__20688;
continue;
} else {
}
break;
}

var G__20636 = args20634.length;
switch (G__20636) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20634.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__19841__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19841__auto__){
return (function (){
var f__19842__auto__ = (function (){var switch__19729__auto__ = ((function (c__19841__auto__){
return (function (state_20661){
var state_val_20662 = (state_20661[(1)]);
if((state_val_20662 === (7))){
var inst_20643 = (state_20661[(2)]);
var state_20661__$1 = state_20661;
var statearr_20663_20690 = state_20661__$1;
(statearr_20663_20690[(2)] = inst_20643);

(statearr_20663_20690[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20662 === (1))){
var inst_20637 = cljs.core.seq.call(null,coll);
var inst_20638 = inst_20637;
var state_20661__$1 = (function (){var statearr_20664 = state_20661;
(statearr_20664[(7)] = inst_20638);

return statearr_20664;
})();
var statearr_20665_20691 = state_20661__$1;
(statearr_20665_20691[(2)] = null);

(statearr_20665_20691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20662 === (4))){
var inst_20638 = (state_20661[(7)]);
var inst_20641 = cljs.core.first.call(null,inst_20638);
var state_20661__$1 = state_20661;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20661__$1,(7),ch,inst_20641);
} else {
if((state_val_20662 === (13))){
var inst_20655 = (state_20661[(2)]);
var state_20661__$1 = state_20661;
var statearr_20666_20692 = state_20661__$1;
(statearr_20666_20692[(2)] = inst_20655);

(statearr_20666_20692[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20662 === (6))){
var inst_20646 = (state_20661[(2)]);
var state_20661__$1 = state_20661;
if(cljs.core.truth_(inst_20646)){
var statearr_20667_20693 = state_20661__$1;
(statearr_20667_20693[(1)] = (8));

} else {
var statearr_20668_20694 = state_20661__$1;
(statearr_20668_20694[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20662 === (3))){
var inst_20659 = (state_20661[(2)]);
var state_20661__$1 = state_20661;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20661__$1,inst_20659);
} else {
if((state_val_20662 === (12))){
var state_20661__$1 = state_20661;
var statearr_20669_20695 = state_20661__$1;
(statearr_20669_20695[(2)] = null);

(statearr_20669_20695[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20662 === (2))){
var inst_20638 = (state_20661[(7)]);
var state_20661__$1 = state_20661;
if(cljs.core.truth_(inst_20638)){
var statearr_20670_20696 = state_20661__$1;
(statearr_20670_20696[(1)] = (4));

} else {
var statearr_20671_20697 = state_20661__$1;
(statearr_20671_20697[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20662 === (11))){
var inst_20652 = cljs.core.async.close_BANG_.call(null,ch);
var state_20661__$1 = state_20661;
var statearr_20672_20698 = state_20661__$1;
(statearr_20672_20698[(2)] = inst_20652);

(statearr_20672_20698[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20662 === (9))){
var state_20661__$1 = state_20661;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20673_20699 = state_20661__$1;
(statearr_20673_20699[(1)] = (11));

} else {
var statearr_20674_20700 = state_20661__$1;
(statearr_20674_20700[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20662 === (5))){
var inst_20638 = (state_20661[(7)]);
var state_20661__$1 = state_20661;
var statearr_20675_20701 = state_20661__$1;
(statearr_20675_20701[(2)] = inst_20638);

(statearr_20675_20701[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20662 === (10))){
var inst_20657 = (state_20661[(2)]);
var state_20661__$1 = state_20661;
var statearr_20676_20702 = state_20661__$1;
(statearr_20676_20702[(2)] = inst_20657);

(statearr_20676_20702[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20662 === (8))){
var inst_20638 = (state_20661[(7)]);
var inst_20648 = cljs.core.next.call(null,inst_20638);
var inst_20638__$1 = inst_20648;
var state_20661__$1 = (function (){var statearr_20677 = state_20661;
(statearr_20677[(7)] = inst_20638__$1);

return statearr_20677;
})();
var statearr_20678_20703 = state_20661__$1;
(statearr_20678_20703[(2)] = null);

(statearr_20678_20703[(1)] = (2));


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
});})(c__19841__auto__))
;
return ((function (switch__19729__auto__,c__19841__auto__){
return (function() {
var cljs$core$async$state_machine__19730__auto__ = null;
var cljs$core$async$state_machine__19730__auto____0 = (function (){
var statearr_20682 = [null,null,null,null,null,null,null,null];
(statearr_20682[(0)] = cljs$core$async$state_machine__19730__auto__);

(statearr_20682[(1)] = (1));

return statearr_20682;
});
var cljs$core$async$state_machine__19730__auto____1 = (function (state_20661){
while(true){
var ret_value__19731__auto__ = (function (){try{while(true){
var result__19732__auto__ = switch__19729__auto__.call(null,state_20661);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19732__auto__;
}
break;
}
}catch (e20683){if((e20683 instanceof Object)){
var ex__19733__auto__ = e20683;
var statearr_20684_20704 = state_20661;
(statearr_20684_20704[(5)] = ex__19733__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20661);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20683;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20705 = state_20661;
state_20661 = G__20705;
continue;
} else {
return ret_value__19731__auto__;
}
break;
}
});
cljs$core$async$state_machine__19730__auto__ = function(state_20661){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19730__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19730__auto____1.call(this,state_20661);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19730__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19730__auto____0;
cljs$core$async$state_machine__19730__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19730__auto____1;
return cljs$core$async$state_machine__19730__auto__;
})()
;})(switch__19729__auto__,c__19841__auto__))
})();
var state__19843__auto__ = (function (){var statearr_20685 = f__19842__auto__.call(null);
(statearr_20685[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19841__auto__);

return statearr_20685;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19843__auto__);
});})(c__19841__auto__))
);

return c__19841__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__17481__auto__ = (((_ == null))?null:_);
var m__17482__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,_);
} else {
var m__17482__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17482__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m,ch);
} else {
var m__17482__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m);
} else {
var m__17482__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async20927 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20927 = (function (mult,ch,cs,meta20928){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta20928 = meta20928;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20927.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_20929,meta20928__$1){
var self__ = this;
var _20929__$1 = this;
return (new cljs.core.async.t_cljs$core$async20927(self__.mult,self__.ch,self__.cs,meta20928__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async20927.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_20929){
var self__ = this;
var _20929__$1 = this;
return self__.meta20928;
});})(cs))
;

cljs.core.async.t_cljs$core$async20927.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async20927.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async20927.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async20927.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async20927.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async20927.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async20927.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta20928","meta20928",-1018950134,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async20927.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20927.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20927";

cljs.core.async.t_cljs$core$async20927.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async20927");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async20927 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async20927(mult__$1,ch__$1,cs__$1,meta20928){
return (new cljs.core.async.t_cljs$core$async20927(mult__$1,ch__$1,cs__$1,meta20928));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async20927(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__19841__auto___21148 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19841__auto___21148,cs,m,dchan,dctr,done){
return (function (){
var f__19842__auto__ = (function (){var switch__19729__auto__ = ((function (c__19841__auto___21148,cs,m,dchan,dctr,done){
return (function (state_21060){
var state_val_21061 = (state_21060[(1)]);
if((state_val_21061 === (7))){
var inst_21056 = (state_21060[(2)]);
var state_21060__$1 = state_21060;
var statearr_21062_21149 = state_21060__$1;
(statearr_21062_21149[(2)] = inst_21056);

(statearr_21062_21149[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21061 === (20))){
var inst_20961 = (state_21060[(7)]);
var inst_20971 = cljs.core.first.call(null,inst_20961);
var inst_20972 = cljs.core.nth.call(null,inst_20971,(0),null);
var inst_20973 = cljs.core.nth.call(null,inst_20971,(1),null);
var state_21060__$1 = (function (){var statearr_21063 = state_21060;
(statearr_21063[(8)] = inst_20972);

return statearr_21063;
})();
if(cljs.core.truth_(inst_20973)){
var statearr_21064_21150 = state_21060__$1;
(statearr_21064_21150[(1)] = (22));

} else {
var statearr_21065_21151 = state_21060__$1;
(statearr_21065_21151[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21061 === (27))){
var inst_21001 = (state_21060[(9)]);
var inst_21003 = (state_21060[(10)]);
var inst_21008 = (state_21060[(11)]);
var inst_20932 = (state_21060[(12)]);
var inst_21008__$1 = cljs.core._nth.call(null,inst_21001,inst_21003);
var inst_21009 = cljs.core.async.put_BANG_.call(null,inst_21008__$1,inst_20932,done);
var state_21060__$1 = (function (){var statearr_21066 = state_21060;
(statearr_21066[(11)] = inst_21008__$1);

return statearr_21066;
})();
if(cljs.core.truth_(inst_21009)){
var statearr_21067_21152 = state_21060__$1;
(statearr_21067_21152[(1)] = (30));

} else {
var statearr_21068_21153 = state_21060__$1;
(statearr_21068_21153[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21061 === (1))){
var state_21060__$1 = state_21060;
var statearr_21069_21154 = state_21060__$1;
(statearr_21069_21154[(2)] = null);

(statearr_21069_21154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21061 === (24))){
var inst_20961 = (state_21060[(7)]);
var inst_20978 = (state_21060[(2)]);
var inst_20979 = cljs.core.next.call(null,inst_20961);
var inst_20941 = inst_20979;
var inst_20942 = null;
var inst_20943 = (0);
var inst_20944 = (0);
var state_21060__$1 = (function (){var statearr_21070 = state_21060;
(statearr_21070[(13)] = inst_20941);

(statearr_21070[(14)] = inst_20942);

(statearr_21070[(15)] = inst_20944);

(statearr_21070[(16)] = inst_20978);

(statearr_21070[(17)] = inst_20943);

return statearr_21070;
})();
var statearr_21071_21155 = state_21060__$1;
(statearr_21071_21155[(2)] = null);

(statearr_21071_21155[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21061 === (39))){
var state_21060__$1 = state_21060;
var statearr_21075_21156 = state_21060__$1;
(statearr_21075_21156[(2)] = null);

(statearr_21075_21156[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21061 === (4))){
var inst_20932 = (state_21060[(12)]);
var inst_20932__$1 = (state_21060[(2)]);
var inst_20933 = (inst_20932__$1 == null);
var state_21060__$1 = (function (){var statearr_21076 = state_21060;
(statearr_21076[(12)] = inst_20932__$1);

return statearr_21076;
})();
if(cljs.core.truth_(inst_20933)){
var statearr_21077_21157 = state_21060__$1;
(statearr_21077_21157[(1)] = (5));

} else {
var statearr_21078_21158 = state_21060__$1;
(statearr_21078_21158[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21061 === (15))){
var inst_20941 = (state_21060[(13)]);
var inst_20942 = (state_21060[(14)]);
var inst_20944 = (state_21060[(15)]);
var inst_20943 = (state_21060[(17)]);
var inst_20957 = (state_21060[(2)]);
var inst_20958 = (inst_20944 + (1));
var tmp21072 = inst_20941;
var tmp21073 = inst_20942;
var tmp21074 = inst_20943;
var inst_20941__$1 = tmp21072;
var inst_20942__$1 = tmp21073;
var inst_20943__$1 = tmp21074;
var inst_20944__$1 = inst_20958;
var state_21060__$1 = (function (){var statearr_21079 = state_21060;
(statearr_21079[(13)] = inst_20941__$1);

(statearr_21079[(18)] = inst_20957);

(statearr_21079[(14)] = inst_20942__$1);

(statearr_21079[(15)] = inst_20944__$1);

(statearr_21079[(17)] = inst_20943__$1);

return statearr_21079;
})();
var statearr_21080_21159 = state_21060__$1;
(statearr_21080_21159[(2)] = null);

(statearr_21080_21159[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21061 === (21))){
var inst_20982 = (state_21060[(2)]);
var state_21060__$1 = state_21060;
var statearr_21084_21160 = state_21060__$1;
(statearr_21084_21160[(2)] = inst_20982);

(statearr_21084_21160[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21061 === (31))){
var inst_21008 = (state_21060[(11)]);
var inst_21012 = done.call(null,null);
var inst_21013 = cljs.core.async.untap_STAR_.call(null,m,inst_21008);
var state_21060__$1 = (function (){var statearr_21085 = state_21060;
(statearr_21085[(19)] = inst_21012);

return statearr_21085;
})();
var statearr_21086_21161 = state_21060__$1;
(statearr_21086_21161[(2)] = inst_21013);

(statearr_21086_21161[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21061 === (32))){
var inst_21002 = (state_21060[(20)]);
var inst_21001 = (state_21060[(9)]);
var inst_21003 = (state_21060[(10)]);
var inst_21000 = (state_21060[(21)]);
var inst_21015 = (state_21060[(2)]);
var inst_21016 = (inst_21003 + (1));
var tmp21081 = inst_21002;
var tmp21082 = inst_21001;
var tmp21083 = inst_21000;
var inst_21000__$1 = tmp21083;
var inst_21001__$1 = tmp21082;
var inst_21002__$1 = tmp21081;
var inst_21003__$1 = inst_21016;
var state_21060__$1 = (function (){var statearr_21087 = state_21060;
(statearr_21087[(20)] = inst_21002__$1);

(statearr_21087[(9)] = inst_21001__$1);

(statearr_21087[(10)] = inst_21003__$1);

(statearr_21087[(22)] = inst_21015);

(statearr_21087[(21)] = inst_21000__$1);

return statearr_21087;
})();
var statearr_21088_21162 = state_21060__$1;
(statearr_21088_21162[(2)] = null);

(statearr_21088_21162[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21061 === (40))){
var inst_21028 = (state_21060[(23)]);
var inst_21032 = done.call(null,null);
var inst_21033 = cljs.core.async.untap_STAR_.call(null,m,inst_21028);
var state_21060__$1 = (function (){var statearr_21089 = state_21060;
(statearr_21089[(24)] = inst_21032);

return statearr_21089;
})();
var statearr_21090_21163 = state_21060__$1;
(statearr_21090_21163[(2)] = inst_21033);

(statearr_21090_21163[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21061 === (33))){
var inst_21019 = (state_21060[(25)]);
var inst_21021 = cljs.core.chunked_seq_QMARK_.call(null,inst_21019);
var state_21060__$1 = state_21060;
if(inst_21021){
var statearr_21091_21164 = state_21060__$1;
(statearr_21091_21164[(1)] = (36));

} else {
var statearr_21092_21165 = state_21060__$1;
(statearr_21092_21165[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21061 === (13))){
var inst_20951 = (state_21060[(26)]);
var inst_20954 = cljs.core.async.close_BANG_.call(null,inst_20951);
var state_21060__$1 = state_21060;
var statearr_21093_21166 = state_21060__$1;
(statearr_21093_21166[(2)] = inst_20954);

(statearr_21093_21166[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21061 === (22))){
var inst_20972 = (state_21060[(8)]);
var inst_20975 = cljs.core.async.close_BANG_.call(null,inst_20972);
var state_21060__$1 = state_21060;
var statearr_21094_21167 = state_21060__$1;
(statearr_21094_21167[(2)] = inst_20975);

(statearr_21094_21167[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21061 === (36))){
var inst_21019 = (state_21060[(25)]);
var inst_21023 = cljs.core.chunk_first.call(null,inst_21019);
var inst_21024 = cljs.core.chunk_rest.call(null,inst_21019);
var inst_21025 = cljs.core.count.call(null,inst_21023);
var inst_21000 = inst_21024;
var inst_21001 = inst_21023;
var inst_21002 = inst_21025;
var inst_21003 = (0);
var state_21060__$1 = (function (){var statearr_21095 = state_21060;
(statearr_21095[(20)] = inst_21002);

(statearr_21095[(9)] = inst_21001);

(statearr_21095[(10)] = inst_21003);

(statearr_21095[(21)] = inst_21000);

return statearr_21095;
})();
var statearr_21096_21168 = state_21060__$1;
(statearr_21096_21168[(2)] = null);

(statearr_21096_21168[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21061 === (41))){
var inst_21019 = (state_21060[(25)]);
var inst_21035 = (state_21060[(2)]);
var inst_21036 = cljs.core.next.call(null,inst_21019);
var inst_21000 = inst_21036;
var inst_21001 = null;
var inst_21002 = (0);
var inst_21003 = (0);
var state_21060__$1 = (function (){var statearr_21097 = state_21060;
(statearr_21097[(20)] = inst_21002);

(statearr_21097[(27)] = inst_21035);

(statearr_21097[(9)] = inst_21001);

(statearr_21097[(10)] = inst_21003);

(statearr_21097[(21)] = inst_21000);

return statearr_21097;
})();
var statearr_21098_21169 = state_21060__$1;
(statearr_21098_21169[(2)] = null);

(statearr_21098_21169[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21061 === (43))){
var state_21060__$1 = state_21060;
var statearr_21099_21170 = state_21060__$1;
(statearr_21099_21170[(2)] = null);

(statearr_21099_21170[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21061 === (29))){
var inst_21044 = (state_21060[(2)]);
var state_21060__$1 = state_21060;
var statearr_21100_21171 = state_21060__$1;
(statearr_21100_21171[(2)] = inst_21044);

(statearr_21100_21171[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21061 === (44))){
var inst_21053 = (state_21060[(2)]);
var state_21060__$1 = (function (){var statearr_21101 = state_21060;
(statearr_21101[(28)] = inst_21053);

return statearr_21101;
})();
var statearr_21102_21172 = state_21060__$1;
(statearr_21102_21172[(2)] = null);

(statearr_21102_21172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21061 === (6))){
var inst_20992 = (state_21060[(29)]);
var inst_20991 = cljs.core.deref.call(null,cs);
var inst_20992__$1 = cljs.core.keys.call(null,inst_20991);
var inst_20993 = cljs.core.count.call(null,inst_20992__$1);
var inst_20994 = cljs.core.reset_BANG_.call(null,dctr,inst_20993);
var inst_20999 = cljs.core.seq.call(null,inst_20992__$1);
var inst_21000 = inst_20999;
var inst_21001 = null;
var inst_21002 = (0);
var inst_21003 = (0);
var state_21060__$1 = (function (){var statearr_21103 = state_21060;
(statearr_21103[(20)] = inst_21002);

(statearr_21103[(9)] = inst_21001);

(statearr_21103[(30)] = inst_20994);

(statearr_21103[(10)] = inst_21003);

(statearr_21103[(29)] = inst_20992__$1);

(statearr_21103[(21)] = inst_21000);

return statearr_21103;
})();
var statearr_21104_21173 = state_21060__$1;
(statearr_21104_21173[(2)] = null);

(statearr_21104_21173[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21061 === (28))){
var inst_21000 = (state_21060[(21)]);
var inst_21019 = (state_21060[(25)]);
var inst_21019__$1 = cljs.core.seq.call(null,inst_21000);
var state_21060__$1 = (function (){var statearr_21105 = state_21060;
(statearr_21105[(25)] = inst_21019__$1);

return statearr_21105;
})();
if(inst_21019__$1){
var statearr_21106_21174 = state_21060__$1;
(statearr_21106_21174[(1)] = (33));

} else {
var statearr_21107_21175 = state_21060__$1;
(statearr_21107_21175[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21061 === (25))){
var inst_21002 = (state_21060[(20)]);
var inst_21003 = (state_21060[(10)]);
var inst_21005 = (inst_21003 < inst_21002);
var inst_21006 = inst_21005;
var state_21060__$1 = state_21060;
if(cljs.core.truth_(inst_21006)){
var statearr_21108_21176 = state_21060__$1;
(statearr_21108_21176[(1)] = (27));

} else {
var statearr_21109_21177 = state_21060__$1;
(statearr_21109_21177[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21061 === (34))){
var state_21060__$1 = state_21060;
var statearr_21110_21178 = state_21060__$1;
(statearr_21110_21178[(2)] = null);

(statearr_21110_21178[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21061 === (17))){
var state_21060__$1 = state_21060;
var statearr_21111_21179 = state_21060__$1;
(statearr_21111_21179[(2)] = null);

(statearr_21111_21179[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21061 === (3))){
var inst_21058 = (state_21060[(2)]);
var state_21060__$1 = state_21060;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21060__$1,inst_21058);
} else {
if((state_val_21061 === (12))){
var inst_20987 = (state_21060[(2)]);
var state_21060__$1 = state_21060;
var statearr_21112_21180 = state_21060__$1;
(statearr_21112_21180[(2)] = inst_20987);

(statearr_21112_21180[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21061 === (2))){
var state_21060__$1 = state_21060;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21060__$1,(4),ch);
} else {
if((state_val_21061 === (23))){
var state_21060__$1 = state_21060;
var statearr_21113_21181 = state_21060__$1;
(statearr_21113_21181[(2)] = null);

(statearr_21113_21181[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21061 === (35))){
var inst_21042 = (state_21060[(2)]);
var state_21060__$1 = state_21060;
var statearr_21114_21182 = state_21060__$1;
(statearr_21114_21182[(2)] = inst_21042);

(statearr_21114_21182[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21061 === (19))){
var inst_20961 = (state_21060[(7)]);
var inst_20965 = cljs.core.chunk_first.call(null,inst_20961);
var inst_20966 = cljs.core.chunk_rest.call(null,inst_20961);
var inst_20967 = cljs.core.count.call(null,inst_20965);
var inst_20941 = inst_20966;
var inst_20942 = inst_20965;
var inst_20943 = inst_20967;
var inst_20944 = (0);
var state_21060__$1 = (function (){var statearr_21115 = state_21060;
(statearr_21115[(13)] = inst_20941);

(statearr_21115[(14)] = inst_20942);

(statearr_21115[(15)] = inst_20944);

(statearr_21115[(17)] = inst_20943);

return statearr_21115;
})();
var statearr_21116_21183 = state_21060__$1;
(statearr_21116_21183[(2)] = null);

(statearr_21116_21183[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21061 === (11))){
var inst_20941 = (state_21060[(13)]);
var inst_20961 = (state_21060[(7)]);
var inst_20961__$1 = cljs.core.seq.call(null,inst_20941);
var state_21060__$1 = (function (){var statearr_21117 = state_21060;
(statearr_21117[(7)] = inst_20961__$1);

return statearr_21117;
})();
if(inst_20961__$1){
var statearr_21118_21184 = state_21060__$1;
(statearr_21118_21184[(1)] = (16));

} else {
var statearr_21119_21185 = state_21060__$1;
(statearr_21119_21185[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21061 === (9))){
var inst_20989 = (state_21060[(2)]);
var state_21060__$1 = state_21060;
var statearr_21120_21186 = state_21060__$1;
(statearr_21120_21186[(2)] = inst_20989);

(statearr_21120_21186[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21061 === (5))){
var inst_20939 = cljs.core.deref.call(null,cs);
var inst_20940 = cljs.core.seq.call(null,inst_20939);
var inst_20941 = inst_20940;
var inst_20942 = null;
var inst_20943 = (0);
var inst_20944 = (0);
var state_21060__$1 = (function (){var statearr_21121 = state_21060;
(statearr_21121[(13)] = inst_20941);

(statearr_21121[(14)] = inst_20942);

(statearr_21121[(15)] = inst_20944);

(statearr_21121[(17)] = inst_20943);

return statearr_21121;
})();
var statearr_21122_21187 = state_21060__$1;
(statearr_21122_21187[(2)] = null);

(statearr_21122_21187[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21061 === (14))){
var state_21060__$1 = state_21060;
var statearr_21123_21188 = state_21060__$1;
(statearr_21123_21188[(2)] = null);

(statearr_21123_21188[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21061 === (45))){
var inst_21050 = (state_21060[(2)]);
var state_21060__$1 = state_21060;
var statearr_21124_21189 = state_21060__$1;
(statearr_21124_21189[(2)] = inst_21050);

(statearr_21124_21189[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21061 === (26))){
var inst_20992 = (state_21060[(29)]);
var inst_21046 = (state_21060[(2)]);
var inst_21047 = cljs.core.seq.call(null,inst_20992);
var state_21060__$1 = (function (){var statearr_21125 = state_21060;
(statearr_21125[(31)] = inst_21046);

return statearr_21125;
})();
if(inst_21047){
var statearr_21126_21190 = state_21060__$1;
(statearr_21126_21190[(1)] = (42));

} else {
var statearr_21127_21191 = state_21060__$1;
(statearr_21127_21191[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21061 === (16))){
var inst_20961 = (state_21060[(7)]);
var inst_20963 = cljs.core.chunked_seq_QMARK_.call(null,inst_20961);
var state_21060__$1 = state_21060;
if(inst_20963){
var statearr_21128_21192 = state_21060__$1;
(statearr_21128_21192[(1)] = (19));

} else {
var statearr_21129_21193 = state_21060__$1;
(statearr_21129_21193[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21061 === (38))){
var inst_21039 = (state_21060[(2)]);
var state_21060__$1 = state_21060;
var statearr_21130_21194 = state_21060__$1;
(statearr_21130_21194[(2)] = inst_21039);

(statearr_21130_21194[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21061 === (30))){
var state_21060__$1 = state_21060;
var statearr_21131_21195 = state_21060__$1;
(statearr_21131_21195[(2)] = null);

(statearr_21131_21195[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21061 === (10))){
var inst_20942 = (state_21060[(14)]);
var inst_20944 = (state_21060[(15)]);
var inst_20950 = cljs.core._nth.call(null,inst_20942,inst_20944);
var inst_20951 = cljs.core.nth.call(null,inst_20950,(0),null);
var inst_20952 = cljs.core.nth.call(null,inst_20950,(1),null);
var state_21060__$1 = (function (){var statearr_21132 = state_21060;
(statearr_21132[(26)] = inst_20951);

return statearr_21132;
})();
if(cljs.core.truth_(inst_20952)){
var statearr_21133_21196 = state_21060__$1;
(statearr_21133_21196[(1)] = (13));

} else {
var statearr_21134_21197 = state_21060__$1;
(statearr_21134_21197[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21061 === (18))){
var inst_20985 = (state_21060[(2)]);
var state_21060__$1 = state_21060;
var statearr_21135_21198 = state_21060__$1;
(statearr_21135_21198[(2)] = inst_20985);

(statearr_21135_21198[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21061 === (42))){
var state_21060__$1 = state_21060;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21060__$1,(45),dchan);
} else {
if((state_val_21061 === (37))){
var inst_21028 = (state_21060[(23)]);
var inst_20932 = (state_21060[(12)]);
var inst_21019 = (state_21060[(25)]);
var inst_21028__$1 = cljs.core.first.call(null,inst_21019);
var inst_21029 = cljs.core.async.put_BANG_.call(null,inst_21028__$1,inst_20932,done);
var state_21060__$1 = (function (){var statearr_21136 = state_21060;
(statearr_21136[(23)] = inst_21028__$1);

return statearr_21136;
})();
if(cljs.core.truth_(inst_21029)){
var statearr_21137_21199 = state_21060__$1;
(statearr_21137_21199[(1)] = (39));

} else {
var statearr_21138_21200 = state_21060__$1;
(statearr_21138_21200[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21061 === (8))){
var inst_20944 = (state_21060[(15)]);
var inst_20943 = (state_21060[(17)]);
var inst_20946 = (inst_20944 < inst_20943);
var inst_20947 = inst_20946;
var state_21060__$1 = state_21060;
if(cljs.core.truth_(inst_20947)){
var statearr_21139_21201 = state_21060__$1;
(statearr_21139_21201[(1)] = (10));

} else {
var statearr_21140_21202 = state_21060__$1;
(statearr_21140_21202[(1)] = (11));

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
});})(c__19841__auto___21148,cs,m,dchan,dctr,done))
;
return ((function (switch__19729__auto__,c__19841__auto___21148,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__19730__auto__ = null;
var cljs$core$async$mult_$_state_machine__19730__auto____0 = (function (){
var statearr_21144 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21144[(0)] = cljs$core$async$mult_$_state_machine__19730__auto__);

(statearr_21144[(1)] = (1));

return statearr_21144;
});
var cljs$core$async$mult_$_state_machine__19730__auto____1 = (function (state_21060){
while(true){
var ret_value__19731__auto__ = (function (){try{while(true){
var result__19732__auto__ = switch__19729__auto__.call(null,state_21060);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19732__auto__;
}
break;
}
}catch (e21145){if((e21145 instanceof Object)){
var ex__19733__auto__ = e21145;
var statearr_21146_21203 = state_21060;
(statearr_21146_21203[(5)] = ex__19733__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21060);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21145;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21204 = state_21060;
state_21060 = G__21204;
continue;
} else {
return ret_value__19731__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19730__auto__ = function(state_21060){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19730__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19730__auto____1.call(this,state_21060);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__19730__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19730__auto____0;
cljs$core$async$mult_$_state_machine__19730__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19730__auto____1;
return cljs$core$async$mult_$_state_machine__19730__auto__;
})()
;})(switch__19729__auto__,c__19841__auto___21148,cs,m,dchan,dctr,done))
})();
var state__19843__auto__ = (function (){var statearr_21147 = f__19842__auto__.call(null);
(statearr_21147[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19841__auto___21148);

return statearr_21147;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19843__auto__);
});})(c__19841__auto___21148,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args21205 = [];
var len__17884__auto___21208 = arguments.length;
var i__17885__auto___21209 = (0);
while(true){
if((i__17885__auto___21209 < len__17884__auto___21208)){
args21205.push((arguments[i__17885__auto___21209]));

var G__21210 = (i__17885__auto___21209 + (1));
i__17885__auto___21209 = G__21210;
continue;
} else {
}
break;
}

var G__21207 = args21205.length;
switch (G__21207) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21205.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m,ch);
} else {
var m__17482__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m,ch);
} else {
var m__17482__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m);
} else {
var m__17482__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m,state_map);
} else {
var m__17482__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m,mode);
} else {
var m__17482__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17891__auto__ = [];
var len__17884__auto___21222 = arguments.length;
var i__17885__auto___21223 = (0);
while(true){
if((i__17885__auto___21223 < len__17884__auto___21222)){
args__17891__auto__.push((arguments[i__17885__auto___21223]));

var G__21224 = (i__17885__auto___21223 + (1));
i__17885__auto___21223 = G__21224;
continue;
} else {
}
break;
}

var argseq__17892__auto__ = ((((3) < args__17891__auto__.length))?(new cljs.core.IndexedSeq(args__17891__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17892__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__21216){
var map__21217 = p__21216;
var map__21217__$1 = ((((!((map__21217 == null)))?((((map__21217.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21217.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21217):map__21217);
var opts = map__21217__$1;
var statearr_21219_21225 = state;
(statearr_21219_21225[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__21217,map__21217__$1,opts){
return (function (val){
var statearr_21220_21226 = state;
(statearr_21220_21226[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__21217,map__21217__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_21221_21227 = state;
(statearr_21221_21227[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq21212){
var G__21213 = cljs.core.first.call(null,seq21212);
var seq21212__$1 = cljs.core.next.call(null,seq21212);
var G__21214 = cljs.core.first.call(null,seq21212__$1);
var seq21212__$2 = cljs.core.next.call(null,seq21212__$1);
var G__21215 = cljs.core.first.call(null,seq21212__$2);
var seq21212__$3 = cljs.core.next.call(null,seq21212__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21213,G__21214,G__21215,seq21212__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async21391 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21391 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta21392){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta21392 = meta21392;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21391.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21393,meta21392__$1){
var self__ = this;
var _21393__$1 = this;
return (new cljs.core.async.t_cljs$core$async21391(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta21392__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21391.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21393){
var self__ = this;
var _21393__$1 = this;
return self__.meta21392;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21391.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async21391.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21391.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async21391.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21391.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21391.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21391.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21391.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21391.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta21392","meta21392",1241058475,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21391.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21391.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21391";

cljs.core.async.t_cljs$core$async21391.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async21391");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async21391 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async21391(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta21392){
return (new cljs.core.async.t_cljs$core$async21391(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta21392));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async21391(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19841__auto___21554 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19841__auto___21554,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19842__auto__ = (function (){var switch__19729__auto__ = ((function (c__19841__auto___21554,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_21491){
var state_val_21492 = (state_21491[(1)]);
if((state_val_21492 === (7))){
var inst_21409 = (state_21491[(2)]);
var state_21491__$1 = state_21491;
var statearr_21493_21555 = state_21491__$1;
(statearr_21493_21555[(2)] = inst_21409);

(statearr_21493_21555[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21492 === (20))){
var inst_21421 = (state_21491[(7)]);
var state_21491__$1 = state_21491;
var statearr_21494_21556 = state_21491__$1;
(statearr_21494_21556[(2)] = inst_21421);

(statearr_21494_21556[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21492 === (27))){
var state_21491__$1 = state_21491;
var statearr_21495_21557 = state_21491__$1;
(statearr_21495_21557[(2)] = null);

(statearr_21495_21557[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21492 === (1))){
var inst_21397 = (state_21491[(8)]);
var inst_21397__$1 = calc_state.call(null);
var inst_21399 = (inst_21397__$1 == null);
var inst_21400 = cljs.core.not.call(null,inst_21399);
var state_21491__$1 = (function (){var statearr_21496 = state_21491;
(statearr_21496[(8)] = inst_21397__$1);

return statearr_21496;
})();
if(inst_21400){
var statearr_21497_21558 = state_21491__$1;
(statearr_21497_21558[(1)] = (2));

} else {
var statearr_21498_21559 = state_21491__$1;
(statearr_21498_21559[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21492 === (24))){
var inst_21465 = (state_21491[(9)]);
var inst_21451 = (state_21491[(10)]);
var inst_21444 = (state_21491[(11)]);
var inst_21465__$1 = inst_21444.call(null,inst_21451);
var state_21491__$1 = (function (){var statearr_21499 = state_21491;
(statearr_21499[(9)] = inst_21465__$1);

return statearr_21499;
})();
if(cljs.core.truth_(inst_21465__$1)){
var statearr_21500_21560 = state_21491__$1;
(statearr_21500_21560[(1)] = (29));

} else {
var statearr_21501_21561 = state_21491__$1;
(statearr_21501_21561[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21492 === (4))){
var inst_21412 = (state_21491[(2)]);
var state_21491__$1 = state_21491;
if(cljs.core.truth_(inst_21412)){
var statearr_21502_21562 = state_21491__$1;
(statearr_21502_21562[(1)] = (8));

} else {
var statearr_21503_21563 = state_21491__$1;
(statearr_21503_21563[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21492 === (15))){
var inst_21438 = (state_21491[(2)]);
var state_21491__$1 = state_21491;
if(cljs.core.truth_(inst_21438)){
var statearr_21504_21564 = state_21491__$1;
(statearr_21504_21564[(1)] = (19));

} else {
var statearr_21505_21565 = state_21491__$1;
(statearr_21505_21565[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21492 === (21))){
var inst_21443 = (state_21491[(12)]);
var inst_21443__$1 = (state_21491[(2)]);
var inst_21444 = cljs.core.get.call(null,inst_21443__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_21445 = cljs.core.get.call(null,inst_21443__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_21446 = cljs.core.get.call(null,inst_21443__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_21491__$1 = (function (){var statearr_21506 = state_21491;
(statearr_21506[(12)] = inst_21443__$1);

(statearr_21506[(13)] = inst_21445);

(statearr_21506[(11)] = inst_21444);

return statearr_21506;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_21491__$1,(22),inst_21446);
} else {
if((state_val_21492 === (31))){
var inst_21473 = (state_21491[(2)]);
var state_21491__$1 = state_21491;
if(cljs.core.truth_(inst_21473)){
var statearr_21507_21566 = state_21491__$1;
(statearr_21507_21566[(1)] = (32));

} else {
var statearr_21508_21567 = state_21491__$1;
(statearr_21508_21567[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21492 === (32))){
var inst_21450 = (state_21491[(14)]);
var state_21491__$1 = state_21491;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21491__$1,(35),out,inst_21450);
} else {
if((state_val_21492 === (33))){
var inst_21443 = (state_21491[(12)]);
var inst_21421 = inst_21443;
var state_21491__$1 = (function (){var statearr_21509 = state_21491;
(statearr_21509[(7)] = inst_21421);

return statearr_21509;
})();
var statearr_21510_21568 = state_21491__$1;
(statearr_21510_21568[(2)] = null);

(statearr_21510_21568[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21492 === (13))){
var inst_21421 = (state_21491[(7)]);
var inst_21428 = inst_21421.cljs$lang$protocol_mask$partition0$;
var inst_21429 = (inst_21428 & (64));
var inst_21430 = inst_21421.cljs$core$ISeq$;
var inst_21431 = (inst_21429) || (inst_21430);
var state_21491__$1 = state_21491;
if(cljs.core.truth_(inst_21431)){
var statearr_21511_21569 = state_21491__$1;
(statearr_21511_21569[(1)] = (16));

} else {
var statearr_21512_21570 = state_21491__$1;
(statearr_21512_21570[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21492 === (22))){
var inst_21450 = (state_21491[(14)]);
var inst_21451 = (state_21491[(10)]);
var inst_21449 = (state_21491[(2)]);
var inst_21450__$1 = cljs.core.nth.call(null,inst_21449,(0),null);
var inst_21451__$1 = cljs.core.nth.call(null,inst_21449,(1),null);
var inst_21452 = (inst_21450__$1 == null);
var inst_21453 = cljs.core._EQ_.call(null,inst_21451__$1,change);
var inst_21454 = (inst_21452) || (inst_21453);
var state_21491__$1 = (function (){var statearr_21513 = state_21491;
(statearr_21513[(14)] = inst_21450__$1);

(statearr_21513[(10)] = inst_21451__$1);

return statearr_21513;
})();
if(cljs.core.truth_(inst_21454)){
var statearr_21514_21571 = state_21491__$1;
(statearr_21514_21571[(1)] = (23));

} else {
var statearr_21515_21572 = state_21491__$1;
(statearr_21515_21572[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21492 === (36))){
var inst_21443 = (state_21491[(12)]);
var inst_21421 = inst_21443;
var state_21491__$1 = (function (){var statearr_21516 = state_21491;
(statearr_21516[(7)] = inst_21421);

return statearr_21516;
})();
var statearr_21517_21573 = state_21491__$1;
(statearr_21517_21573[(2)] = null);

(statearr_21517_21573[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21492 === (29))){
var inst_21465 = (state_21491[(9)]);
var state_21491__$1 = state_21491;
var statearr_21518_21574 = state_21491__$1;
(statearr_21518_21574[(2)] = inst_21465);

(statearr_21518_21574[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21492 === (6))){
var state_21491__$1 = state_21491;
var statearr_21519_21575 = state_21491__$1;
(statearr_21519_21575[(2)] = false);

(statearr_21519_21575[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21492 === (28))){
var inst_21461 = (state_21491[(2)]);
var inst_21462 = calc_state.call(null);
var inst_21421 = inst_21462;
var state_21491__$1 = (function (){var statearr_21520 = state_21491;
(statearr_21520[(7)] = inst_21421);

(statearr_21520[(15)] = inst_21461);

return statearr_21520;
})();
var statearr_21521_21576 = state_21491__$1;
(statearr_21521_21576[(2)] = null);

(statearr_21521_21576[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21492 === (25))){
var inst_21487 = (state_21491[(2)]);
var state_21491__$1 = state_21491;
var statearr_21522_21577 = state_21491__$1;
(statearr_21522_21577[(2)] = inst_21487);

(statearr_21522_21577[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21492 === (34))){
var inst_21485 = (state_21491[(2)]);
var state_21491__$1 = state_21491;
var statearr_21523_21578 = state_21491__$1;
(statearr_21523_21578[(2)] = inst_21485);

(statearr_21523_21578[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21492 === (17))){
var state_21491__$1 = state_21491;
var statearr_21524_21579 = state_21491__$1;
(statearr_21524_21579[(2)] = false);

(statearr_21524_21579[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21492 === (3))){
var state_21491__$1 = state_21491;
var statearr_21525_21580 = state_21491__$1;
(statearr_21525_21580[(2)] = false);

(statearr_21525_21580[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21492 === (12))){
var inst_21489 = (state_21491[(2)]);
var state_21491__$1 = state_21491;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21491__$1,inst_21489);
} else {
if((state_val_21492 === (2))){
var inst_21397 = (state_21491[(8)]);
var inst_21402 = inst_21397.cljs$lang$protocol_mask$partition0$;
var inst_21403 = (inst_21402 & (64));
var inst_21404 = inst_21397.cljs$core$ISeq$;
var inst_21405 = (inst_21403) || (inst_21404);
var state_21491__$1 = state_21491;
if(cljs.core.truth_(inst_21405)){
var statearr_21526_21581 = state_21491__$1;
(statearr_21526_21581[(1)] = (5));

} else {
var statearr_21527_21582 = state_21491__$1;
(statearr_21527_21582[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21492 === (23))){
var inst_21450 = (state_21491[(14)]);
var inst_21456 = (inst_21450 == null);
var state_21491__$1 = state_21491;
if(cljs.core.truth_(inst_21456)){
var statearr_21528_21583 = state_21491__$1;
(statearr_21528_21583[(1)] = (26));

} else {
var statearr_21529_21584 = state_21491__$1;
(statearr_21529_21584[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21492 === (35))){
var inst_21476 = (state_21491[(2)]);
var state_21491__$1 = state_21491;
if(cljs.core.truth_(inst_21476)){
var statearr_21530_21585 = state_21491__$1;
(statearr_21530_21585[(1)] = (36));

} else {
var statearr_21531_21586 = state_21491__$1;
(statearr_21531_21586[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21492 === (19))){
var inst_21421 = (state_21491[(7)]);
var inst_21440 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21421);
var state_21491__$1 = state_21491;
var statearr_21532_21587 = state_21491__$1;
(statearr_21532_21587[(2)] = inst_21440);

(statearr_21532_21587[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21492 === (11))){
var inst_21421 = (state_21491[(7)]);
var inst_21425 = (inst_21421 == null);
var inst_21426 = cljs.core.not.call(null,inst_21425);
var state_21491__$1 = state_21491;
if(inst_21426){
var statearr_21533_21588 = state_21491__$1;
(statearr_21533_21588[(1)] = (13));

} else {
var statearr_21534_21589 = state_21491__$1;
(statearr_21534_21589[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21492 === (9))){
var inst_21397 = (state_21491[(8)]);
var state_21491__$1 = state_21491;
var statearr_21535_21590 = state_21491__$1;
(statearr_21535_21590[(2)] = inst_21397);

(statearr_21535_21590[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21492 === (5))){
var state_21491__$1 = state_21491;
var statearr_21536_21591 = state_21491__$1;
(statearr_21536_21591[(2)] = true);

(statearr_21536_21591[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21492 === (14))){
var state_21491__$1 = state_21491;
var statearr_21537_21592 = state_21491__$1;
(statearr_21537_21592[(2)] = false);

(statearr_21537_21592[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21492 === (26))){
var inst_21451 = (state_21491[(10)]);
var inst_21458 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_21451);
var state_21491__$1 = state_21491;
var statearr_21538_21593 = state_21491__$1;
(statearr_21538_21593[(2)] = inst_21458);

(statearr_21538_21593[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21492 === (16))){
var state_21491__$1 = state_21491;
var statearr_21539_21594 = state_21491__$1;
(statearr_21539_21594[(2)] = true);

(statearr_21539_21594[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21492 === (38))){
var inst_21481 = (state_21491[(2)]);
var state_21491__$1 = state_21491;
var statearr_21540_21595 = state_21491__$1;
(statearr_21540_21595[(2)] = inst_21481);

(statearr_21540_21595[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21492 === (30))){
var inst_21445 = (state_21491[(13)]);
var inst_21451 = (state_21491[(10)]);
var inst_21444 = (state_21491[(11)]);
var inst_21468 = cljs.core.empty_QMARK_.call(null,inst_21444);
var inst_21469 = inst_21445.call(null,inst_21451);
var inst_21470 = cljs.core.not.call(null,inst_21469);
var inst_21471 = (inst_21468) && (inst_21470);
var state_21491__$1 = state_21491;
var statearr_21541_21596 = state_21491__$1;
(statearr_21541_21596[(2)] = inst_21471);

(statearr_21541_21596[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21492 === (10))){
var inst_21397 = (state_21491[(8)]);
var inst_21417 = (state_21491[(2)]);
var inst_21418 = cljs.core.get.call(null,inst_21417,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_21419 = cljs.core.get.call(null,inst_21417,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_21420 = cljs.core.get.call(null,inst_21417,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_21421 = inst_21397;
var state_21491__$1 = (function (){var statearr_21542 = state_21491;
(statearr_21542[(16)] = inst_21418);

(statearr_21542[(17)] = inst_21420);

(statearr_21542[(7)] = inst_21421);

(statearr_21542[(18)] = inst_21419);

return statearr_21542;
})();
var statearr_21543_21597 = state_21491__$1;
(statearr_21543_21597[(2)] = null);

(statearr_21543_21597[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21492 === (18))){
var inst_21435 = (state_21491[(2)]);
var state_21491__$1 = state_21491;
var statearr_21544_21598 = state_21491__$1;
(statearr_21544_21598[(2)] = inst_21435);

(statearr_21544_21598[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21492 === (37))){
var state_21491__$1 = state_21491;
var statearr_21545_21599 = state_21491__$1;
(statearr_21545_21599[(2)] = null);

(statearr_21545_21599[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21492 === (8))){
var inst_21397 = (state_21491[(8)]);
var inst_21414 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21397);
var state_21491__$1 = state_21491;
var statearr_21546_21600 = state_21491__$1;
(statearr_21546_21600[(2)] = inst_21414);

(statearr_21546_21600[(1)] = (10));


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
});})(c__19841__auto___21554,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19729__auto__,c__19841__auto___21554,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__19730__auto__ = null;
var cljs$core$async$mix_$_state_machine__19730__auto____0 = (function (){
var statearr_21550 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21550[(0)] = cljs$core$async$mix_$_state_machine__19730__auto__);

(statearr_21550[(1)] = (1));

return statearr_21550;
});
var cljs$core$async$mix_$_state_machine__19730__auto____1 = (function (state_21491){
while(true){
var ret_value__19731__auto__ = (function (){try{while(true){
var result__19732__auto__ = switch__19729__auto__.call(null,state_21491);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19732__auto__;
}
break;
}
}catch (e21551){if((e21551 instanceof Object)){
var ex__19733__auto__ = e21551;
var statearr_21552_21601 = state_21491;
(statearr_21552_21601[(5)] = ex__19733__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21491);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21551;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21602 = state_21491;
state_21491 = G__21602;
continue;
} else {
return ret_value__19731__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19730__auto__ = function(state_21491){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19730__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19730__auto____1.call(this,state_21491);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__19730__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19730__auto____0;
cljs$core$async$mix_$_state_machine__19730__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19730__auto____1;
return cljs$core$async$mix_$_state_machine__19730__auto__;
})()
;})(switch__19729__auto__,c__19841__auto___21554,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19843__auto__ = (function (){var statearr_21553 = f__19842__auto__.call(null);
(statearr_21553[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19841__auto___21554);

return statearr_21553;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19843__auto__);
});})(c__19841__auto___21554,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__17481__auto__ = (((p == null))?null:p);
var m__17482__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17482__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__17481__auto__ = (((p == null))?null:p);
var m__17482__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,p,v,ch);
} else {
var m__17482__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args21603 = [];
var len__17884__auto___21606 = arguments.length;
var i__17885__auto___21607 = (0);
while(true){
if((i__17885__auto___21607 < len__17884__auto___21606)){
args21603.push((arguments[i__17885__auto___21607]));

var G__21608 = (i__17885__auto___21607 + (1));
i__17885__auto___21607 = G__21608;
continue;
} else {
}
break;
}

var G__21605 = args21603.length;
switch (G__21605) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21603.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17481__auto__ = (((p == null))?null:p);
var m__17482__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,p);
} else {
var m__17482__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__17481__auto__ = (((p == null))?null:p);
var m__17482__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,p,v);
} else {
var m__17482__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args21611 = [];
var len__17884__auto___21736 = arguments.length;
var i__17885__auto___21737 = (0);
while(true){
if((i__17885__auto___21737 < len__17884__auto___21736)){
args21611.push((arguments[i__17885__auto___21737]));

var G__21738 = (i__17885__auto___21737 + (1));
i__17885__auto___21737 = G__21738;
continue;
} else {
}
break;
}

var G__21613 = args21611.length;
switch (G__21613) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21611.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16826__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16826__auto__,mults){
return (function (p1__21610_SHARP_){
if(cljs.core.truth_(p1__21610_SHARP_.call(null,topic))){
return p1__21610_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__21610_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16826__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async21614 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21614 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta21615){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta21615 = meta21615;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21614.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_21616,meta21615__$1){
var self__ = this;
var _21616__$1 = this;
return (new cljs.core.async.t_cljs$core$async21614(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta21615__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21614.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_21616){
var self__ = this;
var _21616__$1 = this;
return self__.meta21615;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21614.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async21614.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21614.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async21614.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21614.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21614.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21614.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21614.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta21615","meta21615",-197523873,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21614.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21614.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21614";

cljs.core.async.t_cljs$core$async21614.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async21614");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async21614 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async21614(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta21615){
return (new cljs.core.async.t_cljs$core$async21614(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta21615));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async21614(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19841__auto___21740 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19841__auto___21740,mults,ensure_mult,p){
return (function (){
var f__19842__auto__ = (function (){var switch__19729__auto__ = ((function (c__19841__auto___21740,mults,ensure_mult,p){
return (function (state_21688){
var state_val_21689 = (state_21688[(1)]);
if((state_val_21689 === (7))){
var inst_21684 = (state_21688[(2)]);
var state_21688__$1 = state_21688;
var statearr_21690_21741 = state_21688__$1;
(statearr_21690_21741[(2)] = inst_21684);

(statearr_21690_21741[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21689 === (20))){
var state_21688__$1 = state_21688;
var statearr_21691_21742 = state_21688__$1;
(statearr_21691_21742[(2)] = null);

(statearr_21691_21742[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21689 === (1))){
var state_21688__$1 = state_21688;
var statearr_21692_21743 = state_21688__$1;
(statearr_21692_21743[(2)] = null);

(statearr_21692_21743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21689 === (24))){
var inst_21667 = (state_21688[(7)]);
var inst_21676 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_21667);
var state_21688__$1 = state_21688;
var statearr_21693_21744 = state_21688__$1;
(statearr_21693_21744[(2)] = inst_21676);

(statearr_21693_21744[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21689 === (4))){
var inst_21619 = (state_21688[(8)]);
var inst_21619__$1 = (state_21688[(2)]);
var inst_21620 = (inst_21619__$1 == null);
var state_21688__$1 = (function (){var statearr_21694 = state_21688;
(statearr_21694[(8)] = inst_21619__$1);

return statearr_21694;
})();
if(cljs.core.truth_(inst_21620)){
var statearr_21695_21745 = state_21688__$1;
(statearr_21695_21745[(1)] = (5));

} else {
var statearr_21696_21746 = state_21688__$1;
(statearr_21696_21746[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21689 === (15))){
var inst_21661 = (state_21688[(2)]);
var state_21688__$1 = state_21688;
var statearr_21697_21747 = state_21688__$1;
(statearr_21697_21747[(2)] = inst_21661);

(statearr_21697_21747[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21689 === (21))){
var inst_21681 = (state_21688[(2)]);
var state_21688__$1 = (function (){var statearr_21698 = state_21688;
(statearr_21698[(9)] = inst_21681);

return statearr_21698;
})();
var statearr_21699_21748 = state_21688__$1;
(statearr_21699_21748[(2)] = null);

(statearr_21699_21748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21689 === (13))){
var inst_21643 = (state_21688[(10)]);
var inst_21645 = cljs.core.chunked_seq_QMARK_.call(null,inst_21643);
var state_21688__$1 = state_21688;
if(inst_21645){
var statearr_21700_21749 = state_21688__$1;
(statearr_21700_21749[(1)] = (16));

} else {
var statearr_21701_21750 = state_21688__$1;
(statearr_21701_21750[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21689 === (22))){
var inst_21673 = (state_21688[(2)]);
var state_21688__$1 = state_21688;
if(cljs.core.truth_(inst_21673)){
var statearr_21702_21751 = state_21688__$1;
(statearr_21702_21751[(1)] = (23));

} else {
var statearr_21703_21752 = state_21688__$1;
(statearr_21703_21752[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21689 === (6))){
var inst_21669 = (state_21688[(11)]);
var inst_21619 = (state_21688[(8)]);
var inst_21667 = (state_21688[(7)]);
var inst_21667__$1 = topic_fn.call(null,inst_21619);
var inst_21668 = cljs.core.deref.call(null,mults);
var inst_21669__$1 = cljs.core.get.call(null,inst_21668,inst_21667__$1);
var state_21688__$1 = (function (){var statearr_21704 = state_21688;
(statearr_21704[(11)] = inst_21669__$1);

(statearr_21704[(7)] = inst_21667__$1);

return statearr_21704;
})();
if(cljs.core.truth_(inst_21669__$1)){
var statearr_21705_21753 = state_21688__$1;
(statearr_21705_21753[(1)] = (19));

} else {
var statearr_21706_21754 = state_21688__$1;
(statearr_21706_21754[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21689 === (25))){
var inst_21678 = (state_21688[(2)]);
var state_21688__$1 = state_21688;
var statearr_21707_21755 = state_21688__$1;
(statearr_21707_21755[(2)] = inst_21678);

(statearr_21707_21755[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21689 === (17))){
var inst_21643 = (state_21688[(10)]);
var inst_21652 = cljs.core.first.call(null,inst_21643);
var inst_21653 = cljs.core.async.muxch_STAR_.call(null,inst_21652);
var inst_21654 = cljs.core.async.close_BANG_.call(null,inst_21653);
var inst_21655 = cljs.core.next.call(null,inst_21643);
var inst_21629 = inst_21655;
var inst_21630 = null;
var inst_21631 = (0);
var inst_21632 = (0);
var state_21688__$1 = (function (){var statearr_21708 = state_21688;
(statearr_21708[(12)] = inst_21654);

(statearr_21708[(13)] = inst_21631);

(statearr_21708[(14)] = inst_21629);

(statearr_21708[(15)] = inst_21632);

(statearr_21708[(16)] = inst_21630);

return statearr_21708;
})();
var statearr_21709_21756 = state_21688__$1;
(statearr_21709_21756[(2)] = null);

(statearr_21709_21756[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21689 === (3))){
var inst_21686 = (state_21688[(2)]);
var state_21688__$1 = state_21688;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21688__$1,inst_21686);
} else {
if((state_val_21689 === (12))){
var inst_21663 = (state_21688[(2)]);
var state_21688__$1 = state_21688;
var statearr_21710_21757 = state_21688__$1;
(statearr_21710_21757[(2)] = inst_21663);

(statearr_21710_21757[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21689 === (2))){
var state_21688__$1 = state_21688;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21688__$1,(4),ch);
} else {
if((state_val_21689 === (23))){
var state_21688__$1 = state_21688;
var statearr_21711_21758 = state_21688__$1;
(statearr_21711_21758[(2)] = null);

(statearr_21711_21758[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21689 === (19))){
var inst_21669 = (state_21688[(11)]);
var inst_21619 = (state_21688[(8)]);
var inst_21671 = cljs.core.async.muxch_STAR_.call(null,inst_21669);
var state_21688__$1 = state_21688;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21688__$1,(22),inst_21671,inst_21619);
} else {
if((state_val_21689 === (11))){
var inst_21643 = (state_21688[(10)]);
var inst_21629 = (state_21688[(14)]);
var inst_21643__$1 = cljs.core.seq.call(null,inst_21629);
var state_21688__$1 = (function (){var statearr_21712 = state_21688;
(statearr_21712[(10)] = inst_21643__$1);

return statearr_21712;
})();
if(inst_21643__$1){
var statearr_21713_21759 = state_21688__$1;
(statearr_21713_21759[(1)] = (13));

} else {
var statearr_21714_21760 = state_21688__$1;
(statearr_21714_21760[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21689 === (9))){
var inst_21665 = (state_21688[(2)]);
var state_21688__$1 = state_21688;
var statearr_21715_21761 = state_21688__$1;
(statearr_21715_21761[(2)] = inst_21665);

(statearr_21715_21761[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21689 === (5))){
var inst_21626 = cljs.core.deref.call(null,mults);
var inst_21627 = cljs.core.vals.call(null,inst_21626);
var inst_21628 = cljs.core.seq.call(null,inst_21627);
var inst_21629 = inst_21628;
var inst_21630 = null;
var inst_21631 = (0);
var inst_21632 = (0);
var state_21688__$1 = (function (){var statearr_21716 = state_21688;
(statearr_21716[(13)] = inst_21631);

(statearr_21716[(14)] = inst_21629);

(statearr_21716[(15)] = inst_21632);

(statearr_21716[(16)] = inst_21630);

return statearr_21716;
})();
var statearr_21717_21762 = state_21688__$1;
(statearr_21717_21762[(2)] = null);

(statearr_21717_21762[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21689 === (14))){
var state_21688__$1 = state_21688;
var statearr_21721_21763 = state_21688__$1;
(statearr_21721_21763[(2)] = null);

(statearr_21721_21763[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21689 === (16))){
var inst_21643 = (state_21688[(10)]);
var inst_21647 = cljs.core.chunk_first.call(null,inst_21643);
var inst_21648 = cljs.core.chunk_rest.call(null,inst_21643);
var inst_21649 = cljs.core.count.call(null,inst_21647);
var inst_21629 = inst_21648;
var inst_21630 = inst_21647;
var inst_21631 = inst_21649;
var inst_21632 = (0);
var state_21688__$1 = (function (){var statearr_21722 = state_21688;
(statearr_21722[(13)] = inst_21631);

(statearr_21722[(14)] = inst_21629);

(statearr_21722[(15)] = inst_21632);

(statearr_21722[(16)] = inst_21630);

return statearr_21722;
})();
var statearr_21723_21764 = state_21688__$1;
(statearr_21723_21764[(2)] = null);

(statearr_21723_21764[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21689 === (10))){
var inst_21631 = (state_21688[(13)]);
var inst_21629 = (state_21688[(14)]);
var inst_21632 = (state_21688[(15)]);
var inst_21630 = (state_21688[(16)]);
var inst_21637 = cljs.core._nth.call(null,inst_21630,inst_21632);
var inst_21638 = cljs.core.async.muxch_STAR_.call(null,inst_21637);
var inst_21639 = cljs.core.async.close_BANG_.call(null,inst_21638);
var inst_21640 = (inst_21632 + (1));
var tmp21718 = inst_21631;
var tmp21719 = inst_21629;
var tmp21720 = inst_21630;
var inst_21629__$1 = tmp21719;
var inst_21630__$1 = tmp21720;
var inst_21631__$1 = tmp21718;
var inst_21632__$1 = inst_21640;
var state_21688__$1 = (function (){var statearr_21724 = state_21688;
(statearr_21724[(13)] = inst_21631__$1);

(statearr_21724[(14)] = inst_21629__$1);

(statearr_21724[(15)] = inst_21632__$1);

(statearr_21724[(16)] = inst_21630__$1);

(statearr_21724[(17)] = inst_21639);

return statearr_21724;
})();
var statearr_21725_21765 = state_21688__$1;
(statearr_21725_21765[(2)] = null);

(statearr_21725_21765[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21689 === (18))){
var inst_21658 = (state_21688[(2)]);
var state_21688__$1 = state_21688;
var statearr_21726_21766 = state_21688__$1;
(statearr_21726_21766[(2)] = inst_21658);

(statearr_21726_21766[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21689 === (8))){
var inst_21631 = (state_21688[(13)]);
var inst_21632 = (state_21688[(15)]);
var inst_21634 = (inst_21632 < inst_21631);
var inst_21635 = inst_21634;
var state_21688__$1 = state_21688;
if(cljs.core.truth_(inst_21635)){
var statearr_21727_21767 = state_21688__$1;
(statearr_21727_21767[(1)] = (10));

} else {
var statearr_21728_21768 = state_21688__$1;
(statearr_21728_21768[(1)] = (11));

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
});})(c__19841__auto___21740,mults,ensure_mult,p))
;
return ((function (switch__19729__auto__,c__19841__auto___21740,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__19730__auto__ = null;
var cljs$core$async$state_machine__19730__auto____0 = (function (){
var statearr_21732 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21732[(0)] = cljs$core$async$state_machine__19730__auto__);

(statearr_21732[(1)] = (1));

return statearr_21732;
});
var cljs$core$async$state_machine__19730__auto____1 = (function (state_21688){
while(true){
var ret_value__19731__auto__ = (function (){try{while(true){
var result__19732__auto__ = switch__19729__auto__.call(null,state_21688);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19732__auto__;
}
break;
}
}catch (e21733){if((e21733 instanceof Object)){
var ex__19733__auto__ = e21733;
var statearr_21734_21769 = state_21688;
(statearr_21734_21769[(5)] = ex__19733__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21688);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21733;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21770 = state_21688;
state_21688 = G__21770;
continue;
} else {
return ret_value__19731__auto__;
}
break;
}
});
cljs$core$async$state_machine__19730__auto__ = function(state_21688){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19730__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19730__auto____1.call(this,state_21688);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19730__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19730__auto____0;
cljs$core$async$state_machine__19730__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19730__auto____1;
return cljs$core$async$state_machine__19730__auto__;
})()
;})(switch__19729__auto__,c__19841__auto___21740,mults,ensure_mult,p))
})();
var state__19843__auto__ = (function (){var statearr_21735 = f__19842__auto__.call(null);
(statearr_21735[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19841__auto___21740);

return statearr_21735;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19843__auto__);
});})(c__19841__auto___21740,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args21771 = [];
var len__17884__auto___21774 = arguments.length;
var i__17885__auto___21775 = (0);
while(true){
if((i__17885__auto___21775 < len__17884__auto___21774)){
args21771.push((arguments[i__17885__auto___21775]));

var G__21776 = (i__17885__auto___21775 + (1));
i__17885__auto___21775 = G__21776;
continue;
} else {
}
break;
}

var G__21773 = args21771.length;
switch (G__21773) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21771.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args21778 = [];
var len__17884__auto___21781 = arguments.length;
var i__17885__auto___21782 = (0);
while(true){
if((i__17885__auto___21782 < len__17884__auto___21781)){
args21778.push((arguments[i__17885__auto___21782]));

var G__21783 = (i__17885__auto___21782 + (1));
i__17885__auto___21782 = G__21783;
continue;
} else {
}
break;
}

var G__21780 = args21778.length;
switch (G__21780) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21778.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args21785 = [];
var len__17884__auto___21856 = arguments.length;
var i__17885__auto___21857 = (0);
while(true){
if((i__17885__auto___21857 < len__17884__auto___21856)){
args21785.push((arguments[i__17885__auto___21857]));

var G__21858 = (i__17885__auto___21857 + (1));
i__17885__auto___21857 = G__21858;
continue;
} else {
}
break;
}

var G__21787 = args21785.length;
switch (G__21787) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21785.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__19841__auto___21860 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19841__auto___21860,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19842__auto__ = (function (){var switch__19729__auto__ = ((function (c__19841__auto___21860,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_21826){
var state_val_21827 = (state_21826[(1)]);
if((state_val_21827 === (7))){
var state_21826__$1 = state_21826;
var statearr_21828_21861 = state_21826__$1;
(statearr_21828_21861[(2)] = null);

(statearr_21828_21861[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21827 === (1))){
var state_21826__$1 = state_21826;
var statearr_21829_21862 = state_21826__$1;
(statearr_21829_21862[(2)] = null);

(statearr_21829_21862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21827 === (4))){
var inst_21790 = (state_21826[(7)]);
var inst_21792 = (inst_21790 < cnt);
var state_21826__$1 = state_21826;
if(cljs.core.truth_(inst_21792)){
var statearr_21830_21863 = state_21826__$1;
(statearr_21830_21863[(1)] = (6));

} else {
var statearr_21831_21864 = state_21826__$1;
(statearr_21831_21864[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21827 === (15))){
var inst_21822 = (state_21826[(2)]);
var state_21826__$1 = state_21826;
var statearr_21832_21865 = state_21826__$1;
(statearr_21832_21865[(2)] = inst_21822);

(statearr_21832_21865[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21827 === (13))){
var inst_21815 = cljs.core.async.close_BANG_.call(null,out);
var state_21826__$1 = state_21826;
var statearr_21833_21866 = state_21826__$1;
(statearr_21833_21866[(2)] = inst_21815);

(statearr_21833_21866[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21827 === (6))){
var state_21826__$1 = state_21826;
var statearr_21834_21867 = state_21826__$1;
(statearr_21834_21867[(2)] = null);

(statearr_21834_21867[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21827 === (3))){
var inst_21824 = (state_21826[(2)]);
var state_21826__$1 = state_21826;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21826__$1,inst_21824);
} else {
if((state_val_21827 === (12))){
var inst_21812 = (state_21826[(8)]);
var inst_21812__$1 = (state_21826[(2)]);
var inst_21813 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_21812__$1);
var state_21826__$1 = (function (){var statearr_21835 = state_21826;
(statearr_21835[(8)] = inst_21812__$1);

return statearr_21835;
})();
if(cljs.core.truth_(inst_21813)){
var statearr_21836_21868 = state_21826__$1;
(statearr_21836_21868[(1)] = (13));

} else {
var statearr_21837_21869 = state_21826__$1;
(statearr_21837_21869[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21827 === (2))){
var inst_21789 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_21790 = (0);
var state_21826__$1 = (function (){var statearr_21838 = state_21826;
(statearr_21838[(7)] = inst_21790);

(statearr_21838[(9)] = inst_21789);

return statearr_21838;
})();
var statearr_21839_21870 = state_21826__$1;
(statearr_21839_21870[(2)] = null);

(statearr_21839_21870[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21827 === (11))){
var inst_21790 = (state_21826[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_21826,(10),Object,null,(9));
var inst_21799 = chs__$1.call(null,inst_21790);
var inst_21800 = done.call(null,inst_21790);
var inst_21801 = cljs.core.async.take_BANG_.call(null,inst_21799,inst_21800);
var state_21826__$1 = state_21826;
var statearr_21840_21871 = state_21826__$1;
(statearr_21840_21871[(2)] = inst_21801);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21826__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21827 === (9))){
var inst_21790 = (state_21826[(7)]);
var inst_21803 = (state_21826[(2)]);
var inst_21804 = (inst_21790 + (1));
var inst_21790__$1 = inst_21804;
var state_21826__$1 = (function (){var statearr_21841 = state_21826;
(statearr_21841[(7)] = inst_21790__$1);

(statearr_21841[(10)] = inst_21803);

return statearr_21841;
})();
var statearr_21842_21872 = state_21826__$1;
(statearr_21842_21872[(2)] = null);

(statearr_21842_21872[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21827 === (5))){
var inst_21810 = (state_21826[(2)]);
var state_21826__$1 = (function (){var statearr_21843 = state_21826;
(statearr_21843[(11)] = inst_21810);

return statearr_21843;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21826__$1,(12),dchan);
} else {
if((state_val_21827 === (14))){
var inst_21812 = (state_21826[(8)]);
var inst_21817 = cljs.core.apply.call(null,f,inst_21812);
var state_21826__$1 = state_21826;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21826__$1,(16),out,inst_21817);
} else {
if((state_val_21827 === (16))){
var inst_21819 = (state_21826[(2)]);
var state_21826__$1 = (function (){var statearr_21844 = state_21826;
(statearr_21844[(12)] = inst_21819);

return statearr_21844;
})();
var statearr_21845_21873 = state_21826__$1;
(statearr_21845_21873[(2)] = null);

(statearr_21845_21873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21827 === (10))){
var inst_21794 = (state_21826[(2)]);
var inst_21795 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_21826__$1 = (function (){var statearr_21846 = state_21826;
(statearr_21846[(13)] = inst_21794);

return statearr_21846;
})();
var statearr_21847_21874 = state_21826__$1;
(statearr_21847_21874[(2)] = inst_21795);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21826__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21827 === (8))){
var inst_21808 = (state_21826[(2)]);
var state_21826__$1 = state_21826;
var statearr_21848_21875 = state_21826__$1;
(statearr_21848_21875[(2)] = inst_21808);

(statearr_21848_21875[(1)] = (5));


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
});})(c__19841__auto___21860,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19729__auto__,c__19841__auto___21860,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__19730__auto__ = null;
var cljs$core$async$state_machine__19730__auto____0 = (function (){
var statearr_21852 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21852[(0)] = cljs$core$async$state_machine__19730__auto__);

(statearr_21852[(1)] = (1));

return statearr_21852;
});
var cljs$core$async$state_machine__19730__auto____1 = (function (state_21826){
while(true){
var ret_value__19731__auto__ = (function (){try{while(true){
var result__19732__auto__ = switch__19729__auto__.call(null,state_21826);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19732__auto__;
}
break;
}
}catch (e21853){if((e21853 instanceof Object)){
var ex__19733__auto__ = e21853;
var statearr_21854_21876 = state_21826;
(statearr_21854_21876[(5)] = ex__19733__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21826);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21853;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21877 = state_21826;
state_21826 = G__21877;
continue;
} else {
return ret_value__19731__auto__;
}
break;
}
});
cljs$core$async$state_machine__19730__auto__ = function(state_21826){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19730__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19730__auto____1.call(this,state_21826);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19730__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19730__auto____0;
cljs$core$async$state_machine__19730__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19730__auto____1;
return cljs$core$async$state_machine__19730__auto__;
})()
;})(switch__19729__auto__,c__19841__auto___21860,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19843__auto__ = (function (){var statearr_21855 = f__19842__auto__.call(null);
(statearr_21855[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19841__auto___21860);

return statearr_21855;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19843__auto__);
});})(c__19841__auto___21860,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args21879 = [];
var len__17884__auto___21935 = arguments.length;
var i__17885__auto___21936 = (0);
while(true){
if((i__17885__auto___21936 < len__17884__auto___21935)){
args21879.push((arguments[i__17885__auto___21936]));

var G__21937 = (i__17885__auto___21936 + (1));
i__17885__auto___21936 = G__21937;
continue;
} else {
}
break;
}

var G__21881 = args21879.length;
switch (G__21881) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21879.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19841__auto___21939 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19841__auto___21939,out){
return (function (){
var f__19842__auto__ = (function (){var switch__19729__auto__ = ((function (c__19841__auto___21939,out){
return (function (state_21911){
var state_val_21912 = (state_21911[(1)]);
if((state_val_21912 === (7))){
var inst_21891 = (state_21911[(7)]);
var inst_21890 = (state_21911[(8)]);
var inst_21890__$1 = (state_21911[(2)]);
var inst_21891__$1 = cljs.core.nth.call(null,inst_21890__$1,(0),null);
var inst_21892 = cljs.core.nth.call(null,inst_21890__$1,(1),null);
var inst_21893 = (inst_21891__$1 == null);
var state_21911__$1 = (function (){var statearr_21913 = state_21911;
(statearr_21913[(7)] = inst_21891__$1);

(statearr_21913[(9)] = inst_21892);

(statearr_21913[(8)] = inst_21890__$1);

return statearr_21913;
})();
if(cljs.core.truth_(inst_21893)){
var statearr_21914_21940 = state_21911__$1;
(statearr_21914_21940[(1)] = (8));

} else {
var statearr_21915_21941 = state_21911__$1;
(statearr_21915_21941[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21912 === (1))){
var inst_21882 = cljs.core.vec.call(null,chs);
var inst_21883 = inst_21882;
var state_21911__$1 = (function (){var statearr_21916 = state_21911;
(statearr_21916[(10)] = inst_21883);

return statearr_21916;
})();
var statearr_21917_21942 = state_21911__$1;
(statearr_21917_21942[(2)] = null);

(statearr_21917_21942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21912 === (4))){
var inst_21883 = (state_21911[(10)]);
var state_21911__$1 = state_21911;
return cljs.core.async.ioc_alts_BANG_.call(null,state_21911__$1,(7),inst_21883);
} else {
if((state_val_21912 === (6))){
var inst_21907 = (state_21911[(2)]);
var state_21911__$1 = state_21911;
var statearr_21918_21943 = state_21911__$1;
(statearr_21918_21943[(2)] = inst_21907);

(statearr_21918_21943[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21912 === (3))){
var inst_21909 = (state_21911[(2)]);
var state_21911__$1 = state_21911;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21911__$1,inst_21909);
} else {
if((state_val_21912 === (2))){
var inst_21883 = (state_21911[(10)]);
var inst_21885 = cljs.core.count.call(null,inst_21883);
var inst_21886 = (inst_21885 > (0));
var state_21911__$1 = state_21911;
if(cljs.core.truth_(inst_21886)){
var statearr_21920_21944 = state_21911__$1;
(statearr_21920_21944[(1)] = (4));

} else {
var statearr_21921_21945 = state_21911__$1;
(statearr_21921_21945[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21912 === (11))){
var inst_21883 = (state_21911[(10)]);
var inst_21900 = (state_21911[(2)]);
var tmp21919 = inst_21883;
var inst_21883__$1 = tmp21919;
var state_21911__$1 = (function (){var statearr_21922 = state_21911;
(statearr_21922[(11)] = inst_21900);

(statearr_21922[(10)] = inst_21883__$1);

return statearr_21922;
})();
var statearr_21923_21946 = state_21911__$1;
(statearr_21923_21946[(2)] = null);

(statearr_21923_21946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21912 === (9))){
var inst_21891 = (state_21911[(7)]);
var state_21911__$1 = state_21911;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21911__$1,(11),out,inst_21891);
} else {
if((state_val_21912 === (5))){
var inst_21905 = cljs.core.async.close_BANG_.call(null,out);
var state_21911__$1 = state_21911;
var statearr_21924_21947 = state_21911__$1;
(statearr_21924_21947[(2)] = inst_21905);

(statearr_21924_21947[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21912 === (10))){
var inst_21903 = (state_21911[(2)]);
var state_21911__$1 = state_21911;
var statearr_21925_21948 = state_21911__$1;
(statearr_21925_21948[(2)] = inst_21903);

(statearr_21925_21948[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21912 === (8))){
var inst_21891 = (state_21911[(7)]);
var inst_21883 = (state_21911[(10)]);
var inst_21892 = (state_21911[(9)]);
var inst_21890 = (state_21911[(8)]);
var inst_21895 = (function (){var cs = inst_21883;
var vec__21888 = inst_21890;
var v = inst_21891;
var c = inst_21892;
return ((function (cs,vec__21888,v,c,inst_21891,inst_21883,inst_21892,inst_21890,state_val_21912,c__19841__auto___21939,out){
return (function (p1__21878_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__21878_SHARP_);
});
;})(cs,vec__21888,v,c,inst_21891,inst_21883,inst_21892,inst_21890,state_val_21912,c__19841__auto___21939,out))
})();
var inst_21896 = cljs.core.filterv.call(null,inst_21895,inst_21883);
var inst_21883__$1 = inst_21896;
var state_21911__$1 = (function (){var statearr_21926 = state_21911;
(statearr_21926[(10)] = inst_21883__$1);

return statearr_21926;
})();
var statearr_21927_21949 = state_21911__$1;
(statearr_21927_21949[(2)] = null);

(statearr_21927_21949[(1)] = (2));


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
});})(c__19841__auto___21939,out))
;
return ((function (switch__19729__auto__,c__19841__auto___21939,out){
return (function() {
var cljs$core$async$state_machine__19730__auto__ = null;
var cljs$core$async$state_machine__19730__auto____0 = (function (){
var statearr_21931 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21931[(0)] = cljs$core$async$state_machine__19730__auto__);

(statearr_21931[(1)] = (1));

return statearr_21931;
});
var cljs$core$async$state_machine__19730__auto____1 = (function (state_21911){
while(true){
var ret_value__19731__auto__ = (function (){try{while(true){
var result__19732__auto__ = switch__19729__auto__.call(null,state_21911);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19732__auto__;
}
break;
}
}catch (e21932){if((e21932 instanceof Object)){
var ex__19733__auto__ = e21932;
var statearr_21933_21950 = state_21911;
(statearr_21933_21950[(5)] = ex__19733__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21911);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21932;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21951 = state_21911;
state_21911 = G__21951;
continue;
} else {
return ret_value__19731__auto__;
}
break;
}
});
cljs$core$async$state_machine__19730__auto__ = function(state_21911){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19730__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19730__auto____1.call(this,state_21911);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19730__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19730__auto____0;
cljs$core$async$state_machine__19730__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19730__auto____1;
return cljs$core$async$state_machine__19730__auto__;
})()
;})(switch__19729__auto__,c__19841__auto___21939,out))
})();
var state__19843__auto__ = (function (){var statearr_21934 = f__19842__auto__.call(null);
(statearr_21934[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19841__auto___21939);

return statearr_21934;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19843__auto__);
});})(c__19841__auto___21939,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args21952 = [];
var len__17884__auto___22001 = arguments.length;
var i__17885__auto___22002 = (0);
while(true){
if((i__17885__auto___22002 < len__17884__auto___22001)){
args21952.push((arguments[i__17885__auto___22002]));

var G__22003 = (i__17885__auto___22002 + (1));
i__17885__auto___22002 = G__22003;
continue;
} else {
}
break;
}

var G__21954 = args21952.length;
switch (G__21954) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21952.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19841__auto___22005 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19841__auto___22005,out){
return (function (){
var f__19842__auto__ = (function (){var switch__19729__auto__ = ((function (c__19841__auto___22005,out){
return (function (state_21978){
var state_val_21979 = (state_21978[(1)]);
if((state_val_21979 === (7))){
var inst_21960 = (state_21978[(7)]);
var inst_21960__$1 = (state_21978[(2)]);
var inst_21961 = (inst_21960__$1 == null);
var inst_21962 = cljs.core.not.call(null,inst_21961);
var state_21978__$1 = (function (){var statearr_21980 = state_21978;
(statearr_21980[(7)] = inst_21960__$1);

return statearr_21980;
})();
if(inst_21962){
var statearr_21981_22006 = state_21978__$1;
(statearr_21981_22006[(1)] = (8));

} else {
var statearr_21982_22007 = state_21978__$1;
(statearr_21982_22007[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21979 === (1))){
var inst_21955 = (0);
var state_21978__$1 = (function (){var statearr_21983 = state_21978;
(statearr_21983[(8)] = inst_21955);

return statearr_21983;
})();
var statearr_21984_22008 = state_21978__$1;
(statearr_21984_22008[(2)] = null);

(statearr_21984_22008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21979 === (4))){
var state_21978__$1 = state_21978;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21978__$1,(7),ch);
} else {
if((state_val_21979 === (6))){
var inst_21973 = (state_21978[(2)]);
var state_21978__$1 = state_21978;
var statearr_21985_22009 = state_21978__$1;
(statearr_21985_22009[(2)] = inst_21973);

(statearr_21985_22009[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21979 === (3))){
var inst_21975 = (state_21978[(2)]);
var inst_21976 = cljs.core.async.close_BANG_.call(null,out);
var state_21978__$1 = (function (){var statearr_21986 = state_21978;
(statearr_21986[(9)] = inst_21975);

return statearr_21986;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21978__$1,inst_21976);
} else {
if((state_val_21979 === (2))){
var inst_21955 = (state_21978[(8)]);
var inst_21957 = (inst_21955 < n);
var state_21978__$1 = state_21978;
if(cljs.core.truth_(inst_21957)){
var statearr_21987_22010 = state_21978__$1;
(statearr_21987_22010[(1)] = (4));

} else {
var statearr_21988_22011 = state_21978__$1;
(statearr_21988_22011[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21979 === (11))){
var inst_21955 = (state_21978[(8)]);
var inst_21965 = (state_21978[(2)]);
var inst_21966 = (inst_21955 + (1));
var inst_21955__$1 = inst_21966;
var state_21978__$1 = (function (){var statearr_21989 = state_21978;
(statearr_21989[(10)] = inst_21965);

(statearr_21989[(8)] = inst_21955__$1);

return statearr_21989;
})();
var statearr_21990_22012 = state_21978__$1;
(statearr_21990_22012[(2)] = null);

(statearr_21990_22012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21979 === (9))){
var state_21978__$1 = state_21978;
var statearr_21991_22013 = state_21978__$1;
(statearr_21991_22013[(2)] = null);

(statearr_21991_22013[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21979 === (5))){
var state_21978__$1 = state_21978;
var statearr_21992_22014 = state_21978__$1;
(statearr_21992_22014[(2)] = null);

(statearr_21992_22014[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21979 === (10))){
var inst_21970 = (state_21978[(2)]);
var state_21978__$1 = state_21978;
var statearr_21993_22015 = state_21978__$1;
(statearr_21993_22015[(2)] = inst_21970);

(statearr_21993_22015[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21979 === (8))){
var inst_21960 = (state_21978[(7)]);
var state_21978__$1 = state_21978;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21978__$1,(11),out,inst_21960);
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
});})(c__19841__auto___22005,out))
;
return ((function (switch__19729__auto__,c__19841__auto___22005,out){
return (function() {
var cljs$core$async$state_machine__19730__auto__ = null;
var cljs$core$async$state_machine__19730__auto____0 = (function (){
var statearr_21997 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21997[(0)] = cljs$core$async$state_machine__19730__auto__);

(statearr_21997[(1)] = (1));

return statearr_21997;
});
var cljs$core$async$state_machine__19730__auto____1 = (function (state_21978){
while(true){
var ret_value__19731__auto__ = (function (){try{while(true){
var result__19732__auto__ = switch__19729__auto__.call(null,state_21978);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19732__auto__;
}
break;
}
}catch (e21998){if((e21998 instanceof Object)){
var ex__19733__auto__ = e21998;
var statearr_21999_22016 = state_21978;
(statearr_21999_22016[(5)] = ex__19733__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21978);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21998;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22017 = state_21978;
state_21978 = G__22017;
continue;
} else {
return ret_value__19731__auto__;
}
break;
}
});
cljs$core$async$state_machine__19730__auto__ = function(state_21978){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19730__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19730__auto____1.call(this,state_21978);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19730__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19730__auto____0;
cljs$core$async$state_machine__19730__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19730__auto____1;
return cljs$core$async$state_machine__19730__auto__;
})()
;})(switch__19729__auto__,c__19841__auto___22005,out))
})();
var state__19843__auto__ = (function (){var statearr_22000 = f__19842__auto__.call(null);
(statearr_22000[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19841__auto___22005);

return statearr_22000;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19843__auto__);
});})(c__19841__auto___22005,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async22025 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22025 = (function (map_LT_,f,ch,meta22026){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta22026 = meta22026;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22025.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22027,meta22026__$1){
var self__ = this;
var _22027__$1 = this;
return (new cljs.core.async.t_cljs$core$async22025(self__.map_LT_,self__.f,self__.ch,meta22026__$1));
});

cljs.core.async.t_cljs$core$async22025.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22027){
var self__ = this;
var _22027__$1 = this;
return self__.meta22026;
});

cljs.core.async.t_cljs$core$async22025.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22025.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22025.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22025.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22025.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async22028 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22028 = (function (map_LT_,f,ch,meta22026,_,fn1,meta22029){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta22026 = meta22026;
this._ = _;
this.fn1 = fn1;
this.meta22029 = meta22029;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22028.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_22030,meta22029__$1){
var self__ = this;
var _22030__$1 = this;
return (new cljs.core.async.t_cljs$core$async22028(self__.map_LT_,self__.f,self__.ch,self__.meta22026,self__._,self__.fn1,meta22029__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async22028.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_22030){
var self__ = this;
var _22030__$1 = this;
return self__.meta22029;
});})(___$1))
;

cljs.core.async.t_cljs$core$async22028.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22028.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async22028.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async22028.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__22018_SHARP_){
return f1.call(null,(((p1__22018_SHARP_ == null))?null:self__.f.call(null,p1__22018_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async22028.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22026","meta22026",-1833228490,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async22025","cljs.core.async/t_cljs$core$async22025",232052057,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta22029","meta22029",-1605277618,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async22028.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22028.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22028";

cljs.core.async.t_cljs$core$async22028.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async22028");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async22028 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async22028(map_LT___$1,f__$1,ch__$1,meta22026__$1,___$2,fn1__$1,meta22029){
return (new cljs.core.async.t_cljs$core$async22028(map_LT___$1,f__$1,ch__$1,meta22026__$1,___$2,fn1__$1,meta22029));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async22028(self__.map_LT_,self__.f,self__.ch,self__.meta22026,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16814__auto__ = ret;
if(cljs.core.truth_(and__16814__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16814__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async22025.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22025.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async22025.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22026","meta22026",-1833228490,null)], null);
});

cljs.core.async.t_cljs$core$async22025.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22025.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22025";

cljs.core.async.t_cljs$core$async22025.cljs$lang$ctorPrWriter = (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async22025");
});

cljs.core.async.__GT_t_cljs$core$async22025 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async22025(map_LT___$1,f__$1,ch__$1,meta22026){
return (new cljs.core.async.t_cljs$core$async22025(map_LT___$1,f__$1,ch__$1,meta22026));
});

}

return (new cljs.core.async.t_cljs$core$async22025(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async22034 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22034 = (function (map_GT_,f,ch,meta22035){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta22035 = meta22035;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22034.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22036,meta22035__$1){
var self__ = this;
var _22036__$1 = this;
return (new cljs.core.async.t_cljs$core$async22034(self__.map_GT_,self__.f,self__.ch,meta22035__$1));
});

cljs.core.async.t_cljs$core$async22034.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22036){
var self__ = this;
var _22036__$1 = this;
return self__.meta22035;
});

cljs.core.async.t_cljs$core$async22034.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22034.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22034.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22034.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async22034.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22034.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async22034.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22035","meta22035",-335437701,null)], null);
});

cljs.core.async.t_cljs$core$async22034.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22034.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22034";

cljs.core.async.t_cljs$core$async22034.cljs$lang$ctorPrWriter = (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async22034");
});

cljs.core.async.__GT_t_cljs$core$async22034 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async22034(map_GT___$1,f__$1,ch__$1,meta22035){
return (new cljs.core.async.t_cljs$core$async22034(map_GT___$1,f__$1,ch__$1,meta22035));
});

}

return (new cljs.core.async.t_cljs$core$async22034(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async22040 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22040 = (function (filter_GT_,p,ch,meta22041){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta22041 = meta22041;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22040.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22042,meta22041__$1){
var self__ = this;
var _22042__$1 = this;
return (new cljs.core.async.t_cljs$core$async22040(self__.filter_GT_,self__.p,self__.ch,meta22041__$1));
});

cljs.core.async.t_cljs$core$async22040.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22042){
var self__ = this;
var _22042__$1 = this;
return self__.meta22041;
});

cljs.core.async.t_cljs$core$async22040.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22040.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22040.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22040.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22040.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async22040.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22040.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async22040.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22041","meta22041",-566915439,null)], null);
});

cljs.core.async.t_cljs$core$async22040.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22040.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22040";

cljs.core.async.t_cljs$core$async22040.cljs$lang$ctorPrWriter = (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async22040");
});

cljs.core.async.__GT_t_cljs$core$async22040 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async22040(filter_GT___$1,p__$1,ch__$1,meta22041){
return (new cljs.core.async.t_cljs$core$async22040(filter_GT___$1,p__$1,ch__$1,meta22041));
});

}

return (new cljs.core.async.t_cljs$core$async22040(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args22043 = [];
var len__17884__auto___22087 = arguments.length;
var i__17885__auto___22088 = (0);
while(true){
if((i__17885__auto___22088 < len__17884__auto___22087)){
args22043.push((arguments[i__17885__auto___22088]));

var G__22089 = (i__17885__auto___22088 + (1));
i__17885__auto___22088 = G__22089;
continue;
} else {
}
break;
}

var G__22045 = args22043.length;
switch (G__22045) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22043.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19841__auto___22091 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19841__auto___22091,out){
return (function (){
var f__19842__auto__ = (function (){var switch__19729__auto__ = ((function (c__19841__auto___22091,out){
return (function (state_22066){
var state_val_22067 = (state_22066[(1)]);
if((state_val_22067 === (7))){
var inst_22062 = (state_22066[(2)]);
var state_22066__$1 = state_22066;
var statearr_22068_22092 = state_22066__$1;
(statearr_22068_22092[(2)] = inst_22062);

(statearr_22068_22092[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22067 === (1))){
var state_22066__$1 = state_22066;
var statearr_22069_22093 = state_22066__$1;
(statearr_22069_22093[(2)] = null);

(statearr_22069_22093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22067 === (4))){
var inst_22048 = (state_22066[(7)]);
var inst_22048__$1 = (state_22066[(2)]);
var inst_22049 = (inst_22048__$1 == null);
var state_22066__$1 = (function (){var statearr_22070 = state_22066;
(statearr_22070[(7)] = inst_22048__$1);

return statearr_22070;
})();
if(cljs.core.truth_(inst_22049)){
var statearr_22071_22094 = state_22066__$1;
(statearr_22071_22094[(1)] = (5));

} else {
var statearr_22072_22095 = state_22066__$1;
(statearr_22072_22095[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22067 === (6))){
var inst_22048 = (state_22066[(7)]);
var inst_22053 = p.call(null,inst_22048);
var state_22066__$1 = state_22066;
if(cljs.core.truth_(inst_22053)){
var statearr_22073_22096 = state_22066__$1;
(statearr_22073_22096[(1)] = (8));

} else {
var statearr_22074_22097 = state_22066__$1;
(statearr_22074_22097[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22067 === (3))){
var inst_22064 = (state_22066[(2)]);
var state_22066__$1 = state_22066;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22066__$1,inst_22064);
} else {
if((state_val_22067 === (2))){
var state_22066__$1 = state_22066;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22066__$1,(4),ch);
} else {
if((state_val_22067 === (11))){
var inst_22056 = (state_22066[(2)]);
var state_22066__$1 = state_22066;
var statearr_22075_22098 = state_22066__$1;
(statearr_22075_22098[(2)] = inst_22056);

(statearr_22075_22098[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22067 === (9))){
var state_22066__$1 = state_22066;
var statearr_22076_22099 = state_22066__$1;
(statearr_22076_22099[(2)] = null);

(statearr_22076_22099[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22067 === (5))){
var inst_22051 = cljs.core.async.close_BANG_.call(null,out);
var state_22066__$1 = state_22066;
var statearr_22077_22100 = state_22066__$1;
(statearr_22077_22100[(2)] = inst_22051);

(statearr_22077_22100[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22067 === (10))){
var inst_22059 = (state_22066[(2)]);
var state_22066__$1 = (function (){var statearr_22078 = state_22066;
(statearr_22078[(8)] = inst_22059);

return statearr_22078;
})();
var statearr_22079_22101 = state_22066__$1;
(statearr_22079_22101[(2)] = null);

(statearr_22079_22101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22067 === (8))){
var inst_22048 = (state_22066[(7)]);
var state_22066__$1 = state_22066;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22066__$1,(11),out,inst_22048);
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
});})(c__19841__auto___22091,out))
;
return ((function (switch__19729__auto__,c__19841__auto___22091,out){
return (function() {
var cljs$core$async$state_machine__19730__auto__ = null;
var cljs$core$async$state_machine__19730__auto____0 = (function (){
var statearr_22083 = [null,null,null,null,null,null,null,null,null];
(statearr_22083[(0)] = cljs$core$async$state_machine__19730__auto__);

(statearr_22083[(1)] = (1));

return statearr_22083;
});
var cljs$core$async$state_machine__19730__auto____1 = (function (state_22066){
while(true){
var ret_value__19731__auto__ = (function (){try{while(true){
var result__19732__auto__ = switch__19729__auto__.call(null,state_22066);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19732__auto__;
}
break;
}
}catch (e22084){if((e22084 instanceof Object)){
var ex__19733__auto__ = e22084;
var statearr_22085_22102 = state_22066;
(statearr_22085_22102[(5)] = ex__19733__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22066);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22084;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22103 = state_22066;
state_22066 = G__22103;
continue;
} else {
return ret_value__19731__auto__;
}
break;
}
});
cljs$core$async$state_machine__19730__auto__ = function(state_22066){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19730__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19730__auto____1.call(this,state_22066);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19730__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19730__auto____0;
cljs$core$async$state_machine__19730__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19730__auto____1;
return cljs$core$async$state_machine__19730__auto__;
})()
;})(switch__19729__auto__,c__19841__auto___22091,out))
})();
var state__19843__auto__ = (function (){var statearr_22086 = f__19842__auto__.call(null);
(statearr_22086[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19841__auto___22091);

return statearr_22086;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19843__auto__);
});})(c__19841__auto___22091,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args22104 = [];
var len__17884__auto___22107 = arguments.length;
var i__17885__auto___22108 = (0);
while(true){
if((i__17885__auto___22108 < len__17884__auto___22107)){
args22104.push((arguments[i__17885__auto___22108]));

var G__22109 = (i__17885__auto___22108 + (1));
i__17885__auto___22108 = G__22109;
continue;
} else {
}
break;
}

var G__22106 = args22104.length;
switch (G__22106) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22104.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__19841__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19841__auto__){
return (function (){
var f__19842__auto__ = (function (){var switch__19729__auto__ = ((function (c__19841__auto__){
return (function (state_22276){
var state_val_22277 = (state_22276[(1)]);
if((state_val_22277 === (7))){
var inst_22272 = (state_22276[(2)]);
var state_22276__$1 = state_22276;
var statearr_22278_22319 = state_22276__$1;
(statearr_22278_22319[(2)] = inst_22272);

(statearr_22278_22319[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22277 === (20))){
var inst_22242 = (state_22276[(7)]);
var inst_22253 = (state_22276[(2)]);
var inst_22254 = cljs.core.next.call(null,inst_22242);
var inst_22228 = inst_22254;
var inst_22229 = null;
var inst_22230 = (0);
var inst_22231 = (0);
var state_22276__$1 = (function (){var statearr_22279 = state_22276;
(statearr_22279[(8)] = inst_22230);

(statearr_22279[(9)] = inst_22231);

(statearr_22279[(10)] = inst_22228);

(statearr_22279[(11)] = inst_22229);

(statearr_22279[(12)] = inst_22253);

return statearr_22279;
})();
var statearr_22280_22320 = state_22276__$1;
(statearr_22280_22320[(2)] = null);

(statearr_22280_22320[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22277 === (1))){
var state_22276__$1 = state_22276;
var statearr_22281_22321 = state_22276__$1;
(statearr_22281_22321[(2)] = null);

(statearr_22281_22321[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22277 === (4))){
var inst_22217 = (state_22276[(13)]);
var inst_22217__$1 = (state_22276[(2)]);
var inst_22218 = (inst_22217__$1 == null);
var state_22276__$1 = (function (){var statearr_22282 = state_22276;
(statearr_22282[(13)] = inst_22217__$1);

return statearr_22282;
})();
if(cljs.core.truth_(inst_22218)){
var statearr_22283_22322 = state_22276__$1;
(statearr_22283_22322[(1)] = (5));

} else {
var statearr_22284_22323 = state_22276__$1;
(statearr_22284_22323[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22277 === (15))){
var state_22276__$1 = state_22276;
var statearr_22288_22324 = state_22276__$1;
(statearr_22288_22324[(2)] = null);

(statearr_22288_22324[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22277 === (21))){
var state_22276__$1 = state_22276;
var statearr_22289_22325 = state_22276__$1;
(statearr_22289_22325[(2)] = null);

(statearr_22289_22325[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22277 === (13))){
var inst_22230 = (state_22276[(8)]);
var inst_22231 = (state_22276[(9)]);
var inst_22228 = (state_22276[(10)]);
var inst_22229 = (state_22276[(11)]);
var inst_22238 = (state_22276[(2)]);
var inst_22239 = (inst_22231 + (1));
var tmp22285 = inst_22230;
var tmp22286 = inst_22228;
var tmp22287 = inst_22229;
var inst_22228__$1 = tmp22286;
var inst_22229__$1 = tmp22287;
var inst_22230__$1 = tmp22285;
var inst_22231__$1 = inst_22239;
var state_22276__$1 = (function (){var statearr_22290 = state_22276;
(statearr_22290[(14)] = inst_22238);

(statearr_22290[(8)] = inst_22230__$1);

(statearr_22290[(9)] = inst_22231__$1);

(statearr_22290[(10)] = inst_22228__$1);

(statearr_22290[(11)] = inst_22229__$1);

return statearr_22290;
})();
var statearr_22291_22326 = state_22276__$1;
(statearr_22291_22326[(2)] = null);

(statearr_22291_22326[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22277 === (22))){
var state_22276__$1 = state_22276;
var statearr_22292_22327 = state_22276__$1;
(statearr_22292_22327[(2)] = null);

(statearr_22292_22327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22277 === (6))){
var inst_22217 = (state_22276[(13)]);
var inst_22226 = f.call(null,inst_22217);
var inst_22227 = cljs.core.seq.call(null,inst_22226);
var inst_22228 = inst_22227;
var inst_22229 = null;
var inst_22230 = (0);
var inst_22231 = (0);
var state_22276__$1 = (function (){var statearr_22293 = state_22276;
(statearr_22293[(8)] = inst_22230);

(statearr_22293[(9)] = inst_22231);

(statearr_22293[(10)] = inst_22228);

(statearr_22293[(11)] = inst_22229);

return statearr_22293;
})();
var statearr_22294_22328 = state_22276__$1;
(statearr_22294_22328[(2)] = null);

(statearr_22294_22328[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22277 === (17))){
var inst_22242 = (state_22276[(7)]);
var inst_22246 = cljs.core.chunk_first.call(null,inst_22242);
var inst_22247 = cljs.core.chunk_rest.call(null,inst_22242);
var inst_22248 = cljs.core.count.call(null,inst_22246);
var inst_22228 = inst_22247;
var inst_22229 = inst_22246;
var inst_22230 = inst_22248;
var inst_22231 = (0);
var state_22276__$1 = (function (){var statearr_22295 = state_22276;
(statearr_22295[(8)] = inst_22230);

(statearr_22295[(9)] = inst_22231);

(statearr_22295[(10)] = inst_22228);

(statearr_22295[(11)] = inst_22229);

return statearr_22295;
})();
var statearr_22296_22329 = state_22276__$1;
(statearr_22296_22329[(2)] = null);

(statearr_22296_22329[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22277 === (3))){
var inst_22274 = (state_22276[(2)]);
var state_22276__$1 = state_22276;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22276__$1,inst_22274);
} else {
if((state_val_22277 === (12))){
var inst_22262 = (state_22276[(2)]);
var state_22276__$1 = state_22276;
var statearr_22297_22330 = state_22276__$1;
(statearr_22297_22330[(2)] = inst_22262);

(statearr_22297_22330[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22277 === (2))){
var state_22276__$1 = state_22276;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22276__$1,(4),in$);
} else {
if((state_val_22277 === (23))){
var inst_22270 = (state_22276[(2)]);
var state_22276__$1 = state_22276;
var statearr_22298_22331 = state_22276__$1;
(statearr_22298_22331[(2)] = inst_22270);

(statearr_22298_22331[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22277 === (19))){
var inst_22257 = (state_22276[(2)]);
var state_22276__$1 = state_22276;
var statearr_22299_22332 = state_22276__$1;
(statearr_22299_22332[(2)] = inst_22257);

(statearr_22299_22332[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22277 === (11))){
var inst_22228 = (state_22276[(10)]);
var inst_22242 = (state_22276[(7)]);
var inst_22242__$1 = cljs.core.seq.call(null,inst_22228);
var state_22276__$1 = (function (){var statearr_22300 = state_22276;
(statearr_22300[(7)] = inst_22242__$1);

return statearr_22300;
})();
if(inst_22242__$1){
var statearr_22301_22333 = state_22276__$1;
(statearr_22301_22333[(1)] = (14));

} else {
var statearr_22302_22334 = state_22276__$1;
(statearr_22302_22334[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22277 === (9))){
var inst_22264 = (state_22276[(2)]);
var inst_22265 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_22276__$1 = (function (){var statearr_22303 = state_22276;
(statearr_22303[(15)] = inst_22264);

return statearr_22303;
})();
if(cljs.core.truth_(inst_22265)){
var statearr_22304_22335 = state_22276__$1;
(statearr_22304_22335[(1)] = (21));

} else {
var statearr_22305_22336 = state_22276__$1;
(statearr_22305_22336[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22277 === (5))){
var inst_22220 = cljs.core.async.close_BANG_.call(null,out);
var state_22276__$1 = state_22276;
var statearr_22306_22337 = state_22276__$1;
(statearr_22306_22337[(2)] = inst_22220);

(statearr_22306_22337[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22277 === (14))){
var inst_22242 = (state_22276[(7)]);
var inst_22244 = cljs.core.chunked_seq_QMARK_.call(null,inst_22242);
var state_22276__$1 = state_22276;
if(inst_22244){
var statearr_22307_22338 = state_22276__$1;
(statearr_22307_22338[(1)] = (17));

} else {
var statearr_22308_22339 = state_22276__$1;
(statearr_22308_22339[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22277 === (16))){
var inst_22260 = (state_22276[(2)]);
var state_22276__$1 = state_22276;
var statearr_22309_22340 = state_22276__$1;
(statearr_22309_22340[(2)] = inst_22260);

(statearr_22309_22340[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22277 === (10))){
var inst_22231 = (state_22276[(9)]);
var inst_22229 = (state_22276[(11)]);
var inst_22236 = cljs.core._nth.call(null,inst_22229,inst_22231);
var state_22276__$1 = state_22276;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22276__$1,(13),out,inst_22236);
} else {
if((state_val_22277 === (18))){
var inst_22242 = (state_22276[(7)]);
var inst_22251 = cljs.core.first.call(null,inst_22242);
var state_22276__$1 = state_22276;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22276__$1,(20),out,inst_22251);
} else {
if((state_val_22277 === (8))){
var inst_22230 = (state_22276[(8)]);
var inst_22231 = (state_22276[(9)]);
var inst_22233 = (inst_22231 < inst_22230);
var inst_22234 = inst_22233;
var state_22276__$1 = state_22276;
if(cljs.core.truth_(inst_22234)){
var statearr_22310_22341 = state_22276__$1;
(statearr_22310_22341[(1)] = (10));

} else {
var statearr_22311_22342 = state_22276__$1;
(statearr_22311_22342[(1)] = (11));

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
});})(c__19841__auto__))
;
return ((function (switch__19729__auto__,c__19841__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__19730__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__19730__auto____0 = (function (){
var statearr_22315 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22315[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19730__auto__);

(statearr_22315[(1)] = (1));

return statearr_22315;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19730__auto____1 = (function (state_22276){
while(true){
var ret_value__19731__auto__ = (function (){try{while(true){
var result__19732__auto__ = switch__19729__auto__.call(null,state_22276);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19732__auto__;
}
break;
}
}catch (e22316){if((e22316 instanceof Object)){
var ex__19733__auto__ = e22316;
var statearr_22317_22343 = state_22276;
(statearr_22317_22343[(5)] = ex__19733__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22276);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22316;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22344 = state_22276;
state_22276 = G__22344;
continue;
} else {
return ret_value__19731__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19730__auto__ = function(state_22276){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19730__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19730__auto____1.call(this,state_22276);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__19730__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19730__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19730__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19730__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19730__auto__;
})()
;})(switch__19729__auto__,c__19841__auto__))
})();
var state__19843__auto__ = (function (){var statearr_22318 = f__19842__auto__.call(null);
(statearr_22318[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19841__auto__);

return statearr_22318;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19843__auto__);
});})(c__19841__auto__))
);

return c__19841__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args22345 = [];
var len__17884__auto___22348 = arguments.length;
var i__17885__auto___22349 = (0);
while(true){
if((i__17885__auto___22349 < len__17884__auto___22348)){
args22345.push((arguments[i__17885__auto___22349]));

var G__22350 = (i__17885__auto___22349 + (1));
i__17885__auto___22349 = G__22350;
continue;
} else {
}
break;
}

var G__22347 = args22345.length;
switch (G__22347) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22345.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args22352 = [];
var len__17884__auto___22355 = arguments.length;
var i__17885__auto___22356 = (0);
while(true){
if((i__17885__auto___22356 < len__17884__auto___22355)){
args22352.push((arguments[i__17885__auto___22356]));

var G__22357 = (i__17885__auto___22356 + (1));
i__17885__auto___22356 = G__22357;
continue;
} else {
}
break;
}

var G__22354 = args22352.length;
switch (G__22354) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22352.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args22359 = [];
var len__17884__auto___22410 = arguments.length;
var i__17885__auto___22411 = (0);
while(true){
if((i__17885__auto___22411 < len__17884__auto___22410)){
args22359.push((arguments[i__17885__auto___22411]));

var G__22412 = (i__17885__auto___22411 + (1));
i__17885__auto___22411 = G__22412;
continue;
} else {
}
break;
}

var G__22361 = args22359.length;
switch (G__22361) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22359.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19841__auto___22414 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19841__auto___22414,out){
return (function (){
var f__19842__auto__ = (function (){var switch__19729__auto__ = ((function (c__19841__auto___22414,out){
return (function (state_22385){
var state_val_22386 = (state_22385[(1)]);
if((state_val_22386 === (7))){
var inst_22380 = (state_22385[(2)]);
var state_22385__$1 = state_22385;
var statearr_22387_22415 = state_22385__$1;
(statearr_22387_22415[(2)] = inst_22380);

(statearr_22387_22415[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22386 === (1))){
var inst_22362 = null;
var state_22385__$1 = (function (){var statearr_22388 = state_22385;
(statearr_22388[(7)] = inst_22362);

return statearr_22388;
})();
var statearr_22389_22416 = state_22385__$1;
(statearr_22389_22416[(2)] = null);

(statearr_22389_22416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22386 === (4))){
var inst_22365 = (state_22385[(8)]);
var inst_22365__$1 = (state_22385[(2)]);
var inst_22366 = (inst_22365__$1 == null);
var inst_22367 = cljs.core.not.call(null,inst_22366);
var state_22385__$1 = (function (){var statearr_22390 = state_22385;
(statearr_22390[(8)] = inst_22365__$1);

return statearr_22390;
})();
if(inst_22367){
var statearr_22391_22417 = state_22385__$1;
(statearr_22391_22417[(1)] = (5));

} else {
var statearr_22392_22418 = state_22385__$1;
(statearr_22392_22418[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22386 === (6))){
var state_22385__$1 = state_22385;
var statearr_22393_22419 = state_22385__$1;
(statearr_22393_22419[(2)] = null);

(statearr_22393_22419[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22386 === (3))){
var inst_22382 = (state_22385[(2)]);
var inst_22383 = cljs.core.async.close_BANG_.call(null,out);
var state_22385__$1 = (function (){var statearr_22394 = state_22385;
(statearr_22394[(9)] = inst_22382);

return statearr_22394;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22385__$1,inst_22383);
} else {
if((state_val_22386 === (2))){
var state_22385__$1 = state_22385;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22385__$1,(4),ch);
} else {
if((state_val_22386 === (11))){
var inst_22365 = (state_22385[(8)]);
var inst_22374 = (state_22385[(2)]);
var inst_22362 = inst_22365;
var state_22385__$1 = (function (){var statearr_22395 = state_22385;
(statearr_22395[(7)] = inst_22362);

(statearr_22395[(10)] = inst_22374);

return statearr_22395;
})();
var statearr_22396_22420 = state_22385__$1;
(statearr_22396_22420[(2)] = null);

(statearr_22396_22420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22386 === (9))){
var inst_22365 = (state_22385[(8)]);
var state_22385__$1 = state_22385;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22385__$1,(11),out,inst_22365);
} else {
if((state_val_22386 === (5))){
var inst_22362 = (state_22385[(7)]);
var inst_22365 = (state_22385[(8)]);
var inst_22369 = cljs.core._EQ_.call(null,inst_22365,inst_22362);
var state_22385__$1 = state_22385;
if(inst_22369){
var statearr_22398_22421 = state_22385__$1;
(statearr_22398_22421[(1)] = (8));

} else {
var statearr_22399_22422 = state_22385__$1;
(statearr_22399_22422[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22386 === (10))){
var inst_22377 = (state_22385[(2)]);
var state_22385__$1 = state_22385;
var statearr_22400_22423 = state_22385__$1;
(statearr_22400_22423[(2)] = inst_22377);

(statearr_22400_22423[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22386 === (8))){
var inst_22362 = (state_22385[(7)]);
var tmp22397 = inst_22362;
var inst_22362__$1 = tmp22397;
var state_22385__$1 = (function (){var statearr_22401 = state_22385;
(statearr_22401[(7)] = inst_22362__$1);

return statearr_22401;
})();
var statearr_22402_22424 = state_22385__$1;
(statearr_22402_22424[(2)] = null);

(statearr_22402_22424[(1)] = (2));


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
});})(c__19841__auto___22414,out))
;
return ((function (switch__19729__auto__,c__19841__auto___22414,out){
return (function() {
var cljs$core$async$state_machine__19730__auto__ = null;
var cljs$core$async$state_machine__19730__auto____0 = (function (){
var statearr_22406 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22406[(0)] = cljs$core$async$state_machine__19730__auto__);

(statearr_22406[(1)] = (1));

return statearr_22406;
});
var cljs$core$async$state_machine__19730__auto____1 = (function (state_22385){
while(true){
var ret_value__19731__auto__ = (function (){try{while(true){
var result__19732__auto__ = switch__19729__auto__.call(null,state_22385);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19732__auto__;
}
break;
}
}catch (e22407){if((e22407 instanceof Object)){
var ex__19733__auto__ = e22407;
var statearr_22408_22425 = state_22385;
(statearr_22408_22425[(5)] = ex__19733__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22385);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22407;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22426 = state_22385;
state_22385 = G__22426;
continue;
} else {
return ret_value__19731__auto__;
}
break;
}
});
cljs$core$async$state_machine__19730__auto__ = function(state_22385){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19730__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19730__auto____1.call(this,state_22385);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19730__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19730__auto____0;
cljs$core$async$state_machine__19730__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19730__auto____1;
return cljs$core$async$state_machine__19730__auto__;
})()
;})(switch__19729__auto__,c__19841__auto___22414,out))
})();
var state__19843__auto__ = (function (){var statearr_22409 = f__19842__auto__.call(null);
(statearr_22409[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19841__auto___22414);

return statearr_22409;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19843__auto__);
});})(c__19841__auto___22414,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args22427 = [];
var len__17884__auto___22497 = arguments.length;
var i__17885__auto___22498 = (0);
while(true){
if((i__17885__auto___22498 < len__17884__auto___22497)){
args22427.push((arguments[i__17885__auto___22498]));

var G__22499 = (i__17885__auto___22498 + (1));
i__17885__auto___22498 = G__22499;
continue;
} else {
}
break;
}

var G__22429 = args22427.length;
switch (G__22429) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22427.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19841__auto___22501 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19841__auto___22501,out){
return (function (){
var f__19842__auto__ = (function (){var switch__19729__auto__ = ((function (c__19841__auto___22501,out){
return (function (state_22467){
var state_val_22468 = (state_22467[(1)]);
if((state_val_22468 === (7))){
var inst_22463 = (state_22467[(2)]);
var state_22467__$1 = state_22467;
var statearr_22469_22502 = state_22467__$1;
(statearr_22469_22502[(2)] = inst_22463);

(statearr_22469_22502[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22468 === (1))){
var inst_22430 = (new Array(n));
var inst_22431 = inst_22430;
var inst_22432 = (0);
var state_22467__$1 = (function (){var statearr_22470 = state_22467;
(statearr_22470[(7)] = inst_22431);

(statearr_22470[(8)] = inst_22432);

return statearr_22470;
})();
var statearr_22471_22503 = state_22467__$1;
(statearr_22471_22503[(2)] = null);

(statearr_22471_22503[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22468 === (4))){
var inst_22435 = (state_22467[(9)]);
var inst_22435__$1 = (state_22467[(2)]);
var inst_22436 = (inst_22435__$1 == null);
var inst_22437 = cljs.core.not.call(null,inst_22436);
var state_22467__$1 = (function (){var statearr_22472 = state_22467;
(statearr_22472[(9)] = inst_22435__$1);

return statearr_22472;
})();
if(inst_22437){
var statearr_22473_22504 = state_22467__$1;
(statearr_22473_22504[(1)] = (5));

} else {
var statearr_22474_22505 = state_22467__$1;
(statearr_22474_22505[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22468 === (15))){
var inst_22457 = (state_22467[(2)]);
var state_22467__$1 = state_22467;
var statearr_22475_22506 = state_22467__$1;
(statearr_22475_22506[(2)] = inst_22457);

(statearr_22475_22506[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22468 === (13))){
var state_22467__$1 = state_22467;
var statearr_22476_22507 = state_22467__$1;
(statearr_22476_22507[(2)] = null);

(statearr_22476_22507[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22468 === (6))){
var inst_22432 = (state_22467[(8)]);
var inst_22453 = (inst_22432 > (0));
var state_22467__$1 = state_22467;
if(cljs.core.truth_(inst_22453)){
var statearr_22477_22508 = state_22467__$1;
(statearr_22477_22508[(1)] = (12));

} else {
var statearr_22478_22509 = state_22467__$1;
(statearr_22478_22509[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22468 === (3))){
var inst_22465 = (state_22467[(2)]);
var state_22467__$1 = state_22467;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22467__$1,inst_22465);
} else {
if((state_val_22468 === (12))){
var inst_22431 = (state_22467[(7)]);
var inst_22455 = cljs.core.vec.call(null,inst_22431);
var state_22467__$1 = state_22467;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22467__$1,(15),out,inst_22455);
} else {
if((state_val_22468 === (2))){
var state_22467__$1 = state_22467;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22467__$1,(4),ch);
} else {
if((state_val_22468 === (11))){
var inst_22447 = (state_22467[(2)]);
var inst_22448 = (new Array(n));
var inst_22431 = inst_22448;
var inst_22432 = (0);
var state_22467__$1 = (function (){var statearr_22479 = state_22467;
(statearr_22479[(10)] = inst_22447);

(statearr_22479[(7)] = inst_22431);

(statearr_22479[(8)] = inst_22432);

return statearr_22479;
})();
var statearr_22480_22510 = state_22467__$1;
(statearr_22480_22510[(2)] = null);

(statearr_22480_22510[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22468 === (9))){
var inst_22431 = (state_22467[(7)]);
var inst_22445 = cljs.core.vec.call(null,inst_22431);
var state_22467__$1 = state_22467;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22467__$1,(11),out,inst_22445);
} else {
if((state_val_22468 === (5))){
var inst_22440 = (state_22467[(11)]);
var inst_22431 = (state_22467[(7)]);
var inst_22435 = (state_22467[(9)]);
var inst_22432 = (state_22467[(8)]);
var inst_22439 = (inst_22431[inst_22432] = inst_22435);
var inst_22440__$1 = (inst_22432 + (1));
var inst_22441 = (inst_22440__$1 < n);
var state_22467__$1 = (function (){var statearr_22481 = state_22467;
(statearr_22481[(12)] = inst_22439);

(statearr_22481[(11)] = inst_22440__$1);

return statearr_22481;
})();
if(cljs.core.truth_(inst_22441)){
var statearr_22482_22511 = state_22467__$1;
(statearr_22482_22511[(1)] = (8));

} else {
var statearr_22483_22512 = state_22467__$1;
(statearr_22483_22512[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22468 === (14))){
var inst_22460 = (state_22467[(2)]);
var inst_22461 = cljs.core.async.close_BANG_.call(null,out);
var state_22467__$1 = (function (){var statearr_22485 = state_22467;
(statearr_22485[(13)] = inst_22460);

return statearr_22485;
})();
var statearr_22486_22513 = state_22467__$1;
(statearr_22486_22513[(2)] = inst_22461);

(statearr_22486_22513[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22468 === (10))){
var inst_22451 = (state_22467[(2)]);
var state_22467__$1 = state_22467;
var statearr_22487_22514 = state_22467__$1;
(statearr_22487_22514[(2)] = inst_22451);

(statearr_22487_22514[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22468 === (8))){
var inst_22440 = (state_22467[(11)]);
var inst_22431 = (state_22467[(7)]);
var tmp22484 = inst_22431;
var inst_22431__$1 = tmp22484;
var inst_22432 = inst_22440;
var state_22467__$1 = (function (){var statearr_22488 = state_22467;
(statearr_22488[(7)] = inst_22431__$1);

(statearr_22488[(8)] = inst_22432);

return statearr_22488;
})();
var statearr_22489_22515 = state_22467__$1;
(statearr_22489_22515[(2)] = null);

(statearr_22489_22515[(1)] = (2));


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
});})(c__19841__auto___22501,out))
;
return ((function (switch__19729__auto__,c__19841__auto___22501,out){
return (function() {
var cljs$core$async$state_machine__19730__auto__ = null;
var cljs$core$async$state_machine__19730__auto____0 = (function (){
var statearr_22493 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22493[(0)] = cljs$core$async$state_machine__19730__auto__);

(statearr_22493[(1)] = (1));

return statearr_22493;
});
var cljs$core$async$state_machine__19730__auto____1 = (function (state_22467){
while(true){
var ret_value__19731__auto__ = (function (){try{while(true){
var result__19732__auto__ = switch__19729__auto__.call(null,state_22467);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19732__auto__;
}
break;
}
}catch (e22494){if((e22494 instanceof Object)){
var ex__19733__auto__ = e22494;
var statearr_22495_22516 = state_22467;
(statearr_22495_22516[(5)] = ex__19733__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22467);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22494;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22517 = state_22467;
state_22467 = G__22517;
continue;
} else {
return ret_value__19731__auto__;
}
break;
}
});
cljs$core$async$state_machine__19730__auto__ = function(state_22467){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19730__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19730__auto____1.call(this,state_22467);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19730__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19730__auto____0;
cljs$core$async$state_machine__19730__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19730__auto____1;
return cljs$core$async$state_machine__19730__auto__;
})()
;})(switch__19729__auto__,c__19841__auto___22501,out))
})();
var state__19843__auto__ = (function (){var statearr_22496 = f__19842__auto__.call(null);
(statearr_22496[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19841__auto___22501);

return statearr_22496;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19843__auto__);
});})(c__19841__auto___22501,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args22518 = [];
var len__17884__auto___22592 = arguments.length;
var i__17885__auto___22593 = (0);
while(true){
if((i__17885__auto___22593 < len__17884__auto___22592)){
args22518.push((arguments[i__17885__auto___22593]));

var G__22594 = (i__17885__auto___22593 + (1));
i__17885__auto___22593 = G__22594;
continue;
} else {
}
break;
}

var G__22520 = args22518.length;
switch (G__22520) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22518.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19841__auto___22596 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19841__auto___22596,out){
return (function (){
var f__19842__auto__ = (function (){var switch__19729__auto__ = ((function (c__19841__auto___22596,out){
return (function (state_22562){
var state_val_22563 = (state_22562[(1)]);
if((state_val_22563 === (7))){
var inst_22558 = (state_22562[(2)]);
var state_22562__$1 = state_22562;
var statearr_22564_22597 = state_22562__$1;
(statearr_22564_22597[(2)] = inst_22558);

(statearr_22564_22597[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22563 === (1))){
var inst_22521 = [];
var inst_22522 = inst_22521;
var inst_22523 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_22562__$1 = (function (){var statearr_22565 = state_22562;
(statearr_22565[(7)] = inst_22523);

(statearr_22565[(8)] = inst_22522);

return statearr_22565;
})();
var statearr_22566_22598 = state_22562__$1;
(statearr_22566_22598[(2)] = null);

(statearr_22566_22598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22563 === (4))){
var inst_22526 = (state_22562[(9)]);
var inst_22526__$1 = (state_22562[(2)]);
var inst_22527 = (inst_22526__$1 == null);
var inst_22528 = cljs.core.not.call(null,inst_22527);
var state_22562__$1 = (function (){var statearr_22567 = state_22562;
(statearr_22567[(9)] = inst_22526__$1);

return statearr_22567;
})();
if(inst_22528){
var statearr_22568_22599 = state_22562__$1;
(statearr_22568_22599[(1)] = (5));

} else {
var statearr_22569_22600 = state_22562__$1;
(statearr_22569_22600[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22563 === (15))){
var inst_22552 = (state_22562[(2)]);
var state_22562__$1 = state_22562;
var statearr_22570_22601 = state_22562__$1;
(statearr_22570_22601[(2)] = inst_22552);

(statearr_22570_22601[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22563 === (13))){
var state_22562__$1 = state_22562;
var statearr_22571_22602 = state_22562__$1;
(statearr_22571_22602[(2)] = null);

(statearr_22571_22602[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22563 === (6))){
var inst_22522 = (state_22562[(8)]);
var inst_22547 = inst_22522.length;
var inst_22548 = (inst_22547 > (0));
var state_22562__$1 = state_22562;
if(cljs.core.truth_(inst_22548)){
var statearr_22572_22603 = state_22562__$1;
(statearr_22572_22603[(1)] = (12));

} else {
var statearr_22573_22604 = state_22562__$1;
(statearr_22573_22604[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22563 === (3))){
var inst_22560 = (state_22562[(2)]);
var state_22562__$1 = state_22562;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22562__$1,inst_22560);
} else {
if((state_val_22563 === (12))){
var inst_22522 = (state_22562[(8)]);
var inst_22550 = cljs.core.vec.call(null,inst_22522);
var state_22562__$1 = state_22562;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22562__$1,(15),out,inst_22550);
} else {
if((state_val_22563 === (2))){
var state_22562__$1 = state_22562;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22562__$1,(4),ch);
} else {
if((state_val_22563 === (11))){
var inst_22526 = (state_22562[(9)]);
var inst_22530 = (state_22562[(10)]);
var inst_22540 = (state_22562[(2)]);
var inst_22541 = [];
var inst_22542 = inst_22541.push(inst_22526);
var inst_22522 = inst_22541;
var inst_22523 = inst_22530;
var state_22562__$1 = (function (){var statearr_22574 = state_22562;
(statearr_22574[(7)] = inst_22523);

(statearr_22574[(11)] = inst_22542);

(statearr_22574[(8)] = inst_22522);

(statearr_22574[(12)] = inst_22540);

return statearr_22574;
})();
var statearr_22575_22605 = state_22562__$1;
(statearr_22575_22605[(2)] = null);

(statearr_22575_22605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22563 === (9))){
var inst_22522 = (state_22562[(8)]);
var inst_22538 = cljs.core.vec.call(null,inst_22522);
var state_22562__$1 = state_22562;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22562__$1,(11),out,inst_22538);
} else {
if((state_val_22563 === (5))){
var inst_22523 = (state_22562[(7)]);
var inst_22526 = (state_22562[(9)]);
var inst_22530 = (state_22562[(10)]);
var inst_22530__$1 = f.call(null,inst_22526);
var inst_22531 = cljs.core._EQ_.call(null,inst_22530__$1,inst_22523);
var inst_22532 = cljs.core.keyword_identical_QMARK_.call(null,inst_22523,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_22533 = (inst_22531) || (inst_22532);
var state_22562__$1 = (function (){var statearr_22576 = state_22562;
(statearr_22576[(10)] = inst_22530__$1);

return statearr_22576;
})();
if(cljs.core.truth_(inst_22533)){
var statearr_22577_22606 = state_22562__$1;
(statearr_22577_22606[(1)] = (8));

} else {
var statearr_22578_22607 = state_22562__$1;
(statearr_22578_22607[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22563 === (14))){
var inst_22555 = (state_22562[(2)]);
var inst_22556 = cljs.core.async.close_BANG_.call(null,out);
var state_22562__$1 = (function (){var statearr_22580 = state_22562;
(statearr_22580[(13)] = inst_22555);

return statearr_22580;
})();
var statearr_22581_22608 = state_22562__$1;
(statearr_22581_22608[(2)] = inst_22556);

(statearr_22581_22608[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22563 === (10))){
var inst_22545 = (state_22562[(2)]);
var state_22562__$1 = state_22562;
var statearr_22582_22609 = state_22562__$1;
(statearr_22582_22609[(2)] = inst_22545);

(statearr_22582_22609[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22563 === (8))){
var inst_22526 = (state_22562[(9)]);
var inst_22522 = (state_22562[(8)]);
var inst_22530 = (state_22562[(10)]);
var inst_22535 = inst_22522.push(inst_22526);
var tmp22579 = inst_22522;
var inst_22522__$1 = tmp22579;
var inst_22523 = inst_22530;
var state_22562__$1 = (function (){var statearr_22583 = state_22562;
(statearr_22583[(7)] = inst_22523);

(statearr_22583[(8)] = inst_22522__$1);

(statearr_22583[(14)] = inst_22535);

return statearr_22583;
})();
var statearr_22584_22610 = state_22562__$1;
(statearr_22584_22610[(2)] = null);

(statearr_22584_22610[(1)] = (2));


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
});})(c__19841__auto___22596,out))
;
return ((function (switch__19729__auto__,c__19841__auto___22596,out){
return (function() {
var cljs$core$async$state_machine__19730__auto__ = null;
var cljs$core$async$state_machine__19730__auto____0 = (function (){
var statearr_22588 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22588[(0)] = cljs$core$async$state_machine__19730__auto__);

(statearr_22588[(1)] = (1));

return statearr_22588;
});
var cljs$core$async$state_machine__19730__auto____1 = (function (state_22562){
while(true){
var ret_value__19731__auto__ = (function (){try{while(true){
var result__19732__auto__ = switch__19729__auto__.call(null,state_22562);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19732__auto__;
}
break;
}
}catch (e22589){if((e22589 instanceof Object)){
var ex__19733__auto__ = e22589;
var statearr_22590_22611 = state_22562;
(statearr_22590_22611[(5)] = ex__19733__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22562);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22589;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22612 = state_22562;
state_22562 = G__22612;
continue;
} else {
return ret_value__19731__auto__;
}
break;
}
});
cljs$core$async$state_machine__19730__auto__ = function(state_22562){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19730__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19730__auto____1.call(this,state_22562);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19730__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19730__auto____0;
cljs$core$async$state_machine__19730__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19730__auto____1;
return cljs$core$async$state_machine__19730__auto__;
})()
;})(switch__19729__auto__,c__19841__auto___22596,out))
})();
var state__19843__auto__ = (function (){var statearr_22591 = f__19842__auto__.call(null);
(statearr_22591[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19841__auto___22596);

return statearr_22591;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19843__auto__);
});})(c__19841__auto___22596,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map