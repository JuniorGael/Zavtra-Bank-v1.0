import{g as qa}from"./abs-svg-path-8eaf02d6.js";function Nt(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}var Ot=Nt;const on=qa(Ot);var j={},Ee={};(function(e){var i=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";function a(n,_){return Object.prototype.hasOwnProperty.call(n,_)}e.assign=function(n){for(var _=Array.prototype.slice.call(arguments,1);_.length;){var l=_.shift();if(l){if(typeof l!="object")throw new TypeError(l+"must be non-object");for(var o in l)a(l,o)&&(n[o]=l[o])}}return n},e.shrinkBuf=function(n,_){return n.length===_?n:n.subarray?n.subarray(0,_):(n.length=_,n)};var t={arraySet:function(n,_,l,o,f){if(_.subarray&&n.subarray){n.set(_.subarray(l,l+o),f);return}for(var h=0;h<o;h++)n[f+h]=_[l+h]},flattenChunks:function(n){var _,l,o,f,h,p;for(o=0,_=0,l=n.length;_<l;_++)o+=n[_].length;for(p=new Uint8Array(o),f=0,_=0,l=n.length;_<l;_++)h=n[_],p.set(h,f),f+=h.length;return p}},r={arraySet:function(n,_,l,o,f){for(var h=0;h<o;h++)n[f+h]=_[l+h]},flattenChunks:function(n){return[].concat.apply([],n)}};e.setTyped=function(n){n?(e.Buf8=Uint8Array,e.Buf16=Uint16Array,e.Buf32=Int32Array,e.assign(e,t)):(e.Buf8=Array,e.Buf16=Array,e.Buf32=Array,e.assign(e,r))},e.setTyped(i)})(Ee);var oe={},It=Ee,Zt=4,oa=0,va=1,Lt=2;function ve(e){for(var i=e.length;--i>=0;)e[i]=0}var Ct=0,Ja=1,Mt=2,Bt=3,$t=258,ra=29,Se=256,ke=Se+1+ra,de=30,fa=19,Qa=2*ke+1,ae=15,Ue=16,Ft=7,la=256,et=16,at=17,tt=18,ea=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],Ze=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],Ht=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],it=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],Ut=512,G=new Array((ke+2)*2);ve(G);var ge=new Array(de*2);ve(ge);var pe=new Array(Ut);ve(pe);var se=new Array($t-Bt+1);ve(se);var _a=new Array(ra);ve(_a);var Be=new Array(de);ve(Be);function Pe(e,i,a,t,r){this.static_tree=e,this.extra_bits=i,this.extra_base=a,this.elems=t,this.max_length=r,this.has_stree=e&&e.length}var nt,rt,ft;function Ke(e,i){this.dyn_tree=e,this.max_code=0,this.stat_desc=i}function lt(e){return e<256?pe[e]:pe[256+(e>>>7)]}function xe(e,i){e.pending_buf[e.pending++]=i&255,e.pending_buf[e.pending++]=i>>>8&255}function Z(e,i,a){e.bi_valid>Ue-a?(e.bi_buf|=i<<e.bi_valid&65535,xe(e,e.bi_buf),e.bi_buf=i>>Ue-e.bi_valid,e.bi_valid+=a-Ue):(e.bi_buf|=i<<e.bi_valid&65535,e.bi_valid+=a)}function P(e,i,a){Z(e,a[i*2],a[i*2+1])}function _t(e,i){var a=0;do a|=e&1,e>>>=1,a<<=1;while(--i>0);return a>>>1}function Pt(e){e.bi_valid===16?(xe(e,e.bi_buf),e.bi_buf=0,e.bi_valid=0):e.bi_valid>=8&&(e.pending_buf[e.pending++]=e.bi_buf&255,e.bi_buf>>=8,e.bi_valid-=8)}function Kt(e,i){var a=i.dyn_tree,t=i.max_code,r=i.stat_desc.static_tree,n=i.stat_desc.has_stree,_=i.stat_desc.extra_bits,l=i.stat_desc.extra_base,o=i.stat_desc.max_length,f,h,p,v,d,b,c=0;for(v=0;v<=ae;v++)e.bl_count[v]=0;for(a[e.heap[e.heap_max]*2+1]=0,f=e.heap_max+1;f<Qa;f++)h=e.heap[f],v=a[a[h*2+1]*2+1]+1,v>o&&(v=o,c++),a[h*2+1]=v,!(h>t)&&(e.bl_count[v]++,d=0,h>=l&&(d=_[h-l]),b=a[h*2],e.opt_len+=b*(v+d),n&&(e.static_len+=b*(r[h*2+1]+d)));if(c!==0){do{for(v=o-1;e.bl_count[v]===0;)v--;e.bl_count[v]--,e.bl_count[v+1]+=2,e.bl_count[o]--,c-=2}while(c>0);for(v=o;v!==0;v--)for(h=e.bl_count[v];h!==0;)p=e.heap[--f],!(p>t)&&(a[p*2+1]!==v&&(e.opt_len+=(v-a[p*2+1])*a[p*2],a[p*2+1]=v),h--)}}function ht(e,i,a){var t=new Array(ae+1),r=0,n,_;for(n=1;n<=ae;n++)t[n]=r=r+a[n-1]<<1;for(_=0;_<=i;_++){var l=e[_*2+1];l!==0&&(e[_*2]=_t(t[l]++,l))}}function Xt(){var e,i,a,t,r,n=new Array(ae+1);for(a=0,t=0;t<ra-1;t++)for(_a[t]=a,e=0;e<1<<ea[t];e++)se[a++]=t;for(se[a-1]=t,r=0,t=0;t<16;t++)for(Be[t]=r,e=0;e<1<<Ze[t];e++)pe[r++]=t;for(r>>=7;t<de;t++)for(Be[t]=r<<7,e=0;e<1<<Ze[t]-7;e++)pe[256+r++]=t;for(i=0;i<=ae;i++)n[i]=0;for(e=0;e<=143;)G[e*2+1]=8,e++,n[8]++;for(;e<=255;)G[e*2+1]=9,e++,n[9]++;for(;e<=279;)G[e*2+1]=7,e++,n[7]++;for(;e<=287;)G[e*2+1]=8,e++,n[8]++;for(ht(G,ke+1,n),e=0;e<de;e++)ge[e*2+1]=5,ge[e*2]=_t(e,5);nt=new Pe(G,ea,Se+1,ke,ae),rt=new Pe(ge,Ze,0,de,ae),ft=new Pe(new Array(0),Ht,0,fa,Ft)}function dt(e){var i;for(i=0;i<ke;i++)e.dyn_ltree[i*2]=0;for(i=0;i<de;i++)e.dyn_dtree[i*2]=0;for(i=0;i<fa;i++)e.bl_tree[i*2]=0;e.dyn_ltree[la*2]=1,e.opt_len=e.static_len=0,e.last_lit=e.matches=0}function ot(e){e.bi_valid>8?xe(e,e.bi_buf):e.bi_valid>0&&(e.pending_buf[e.pending++]=e.bi_buf),e.bi_buf=0,e.bi_valid=0}function Yt(e,i,a,t){ot(e),t&&(xe(e,a),xe(e,~a)),It.arraySet(e.pending_buf,e.window,i,a,e.pending),e.pending+=a}function ua(e,i,a,t){var r=i*2,n=a*2;return e[r]<e[n]||e[r]===e[n]&&t[i]<=t[a]}function Xe(e,i,a){for(var t=e.heap[a],r=a<<1;r<=e.heap_len&&(r<e.heap_len&&ua(i,e.heap[r+1],e.heap[r],e.depth)&&r++,!ua(i,t,e.heap[r],e.depth));)e.heap[a]=e.heap[r],a=r,r<<=1;e.heap[a]=t}function ca(e,i,a){var t,r,n=0,_,l;if(e.last_lit!==0)do t=e.pending_buf[e.d_buf+n*2]<<8|e.pending_buf[e.d_buf+n*2+1],r=e.pending_buf[e.l_buf+n],n++,t===0?P(e,r,i):(_=se[r],P(e,_+Se+1,i),l=ea[_],l!==0&&(r-=_a[_],Z(e,r,l)),t--,_=lt(t),P(e,_,a),l=Ze[_],l!==0&&(t-=Be[_],Z(e,t,l)));while(n<e.last_lit);P(e,la,i)}function aa(e,i){var a=i.dyn_tree,t=i.stat_desc.static_tree,r=i.stat_desc.has_stree,n=i.stat_desc.elems,_,l,o=-1,f;for(e.heap_len=0,e.heap_max=Qa,_=0;_<n;_++)a[_*2]!==0?(e.heap[++e.heap_len]=o=_,e.depth[_]=0):a[_*2+1]=0;for(;e.heap_len<2;)f=e.heap[++e.heap_len]=o<2?++o:0,a[f*2]=1,e.depth[f]=0,e.opt_len--,r&&(e.static_len-=t[f*2+1]);for(i.max_code=o,_=e.heap_len>>1;_>=1;_--)Xe(e,a,_);f=n;do _=e.heap[1],e.heap[1]=e.heap[e.heap_len--],Xe(e,a,1),l=e.heap[1],e.heap[--e.heap_max]=_,e.heap[--e.heap_max]=l,a[f*2]=a[_*2]+a[l*2],e.depth[f]=(e.depth[_]>=e.depth[l]?e.depth[_]:e.depth[l])+1,a[_*2+1]=a[l*2+1]=f,e.heap[1]=f++,Xe(e,a,1);while(e.heap_len>=2);e.heap[--e.heap_max]=e.heap[1],Kt(e,i),ht(a,o,e.bl_count)}function ba(e,i,a){var t,r=-1,n,_=i[0*2+1],l=0,o=7,f=4;for(_===0&&(o=138,f=3),i[(a+1)*2+1]=65535,t=0;t<=a;t++)n=_,_=i[(t+1)*2+1],!(++l<o&&n===_)&&(l<f?e.bl_tree[n*2]+=l:n!==0?(n!==r&&e.bl_tree[n*2]++,e.bl_tree[et*2]++):l<=10?e.bl_tree[at*2]++:e.bl_tree[tt*2]++,l=0,r=n,_===0?(o=138,f=3):n===_?(o=6,f=3):(o=7,f=4))}function ga(e,i,a){var t,r=-1,n,_=i[0*2+1],l=0,o=7,f=4;for(_===0&&(o=138,f=3),t=0;t<=a;t++)if(n=_,_=i[(t+1)*2+1],!(++l<o&&n===_)){if(l<f)do P(e,n,e.bl_tree);while(--l!==0);else n!==0?(n!==r&&(P(e,n,e.bl_tree),l--),P(e,et,e.bl_tree),Z(e,l-3,2)):l<=10?(P(e,at,e.bl_tree),Z(e,l-3,3)):(P(e,tt,e.bl_tree),Z(e,l-11,7));l=0,r=n,_===0?(o=138,f=3):n===_?(o=6,f=3):(o=7,f=4)}}function Gt(e){var i;for(ba(e,e.dyn_ltree,e.l_desc.max_code),ba(e,e.dyn_dtree,e.d_desc.max_code),aa(e,e.bl_desc),i=fa-1;i>=3&&e.bl_tree[it[i]*2+1]===0;i--);return e.opt_len+=3*(i+1)+5+5+4,i}function jt(e,i,a,t){var r;for(Z(e,i-257,5),Z(e,a-1,5),Z(e,t-4,4),r=0;r<t;r++)Z(e,e.bl_tree[it[r]*2+1],3);ga(e,e.dyn_ltree,i-1),ga(e,e.dyn_dtree,a-1)}function Wt(e){var i=4093624447,a;for(a=0;a<=31;a++,i>>>=1)if(i&1&&e.dyn_ltree[a*2]!==0)return oa;if(e.dyn_ltree[9*2]!==0||e.dyn_ltree[10*2]!==0||e.dyn_ltree[13*2]!==0)return va;for(a=32;a<Se;a++)if(e.dyn_ltree[a*2]!==0)return va;return oa}var wa=!1;function Vt(e){wa||(Xt(),wa=!0),e.l_desc=new Ke(e.dyn_ltree,nt),e.d_desc=new Ke(e.dyn_dtree,rt),e.bl_desc=new Ke(e.bl_tree,ft),e.bi_buf=0,e.bi_valid=0,dt(e)}function vt(e,i,a,t){Z(e,(Ct<<1)+(t?1:0),3),Yt(e,i,a,!0)}function qt(e){Z(e,Ja<<1,3),P(e,la,G),Pt(e)}function Jt(e,i,a,t){var r,n,_=0;e.level>0?(e.strm.data_type===Lt&&(e.strm.data_type=Wt(e)),aa(e,e.l_desc),aa(e,e.d_desc),_=Gt(e),r=e.opt_len+3+7>>>3,n=e.static_len+3+7>>>3,n<=r&&(r=n)):r=n=a+5,a+4<=r&&i!==-1?vt(e,i,a,t):e.strategy===Zt||n===r?(Z(e,(Ja<<1)+(t?1:0),3),ca(e,G,ge)):(Z(e,(Mt<<1)+(t?1:0),3),jt(e,e.l_desc.max_code+1,e.d_desc.max_code+1,_+1),ca(e,e.dyn_ltree,e.dyn_dtree)),dt(e),t&&ot(e)}function Qt(e,i,a){return e.pending_buf[e.d_buf+e.last_lit*2]=i>>>8&255,e.pending_buf[e.d_buf+e.last_lit*2+1]=i&255,e.pending_buf[e.l_buf+e.last_lit]=a&255,e.last_lit++,i===0?e.dyn_ltree[a*2]++:(e.matches++,i--,e.dyn_ltree[(se[a]+Se+1)*2]++,e.dyn_dtree[lt(i)*2]++),e.last_lit===e.lit_bufsize-1}oe._tr_init=Vt;oe._tr_stored_block=vt;oe._tr_flush_block=Jt;oe._tr_tally=Qt;oe._tr_align=qt;function ei(e,i,a,t){for(var r=e&65535|0,n=e>>>16&65535|0,_=0;a!==0;){_=a>2e3?2e3:a,a-=_;do r=r+i[t++]|0,n=n+r|0;while(--_);r%=65521,n%=65521}return r|n<<16|0}var ut=ei;function ai(){for(var e,i=[],a=0;a<256;a++){e=a;for(var t=0;t<8;t++)e=e&1?3988292384^e>>>1:e>>>1;i[a]=e}return i}var ti=ai();function ii(e,i,a,t){var r=ti,n=t+a;e^=-1;for(var _=t;_<n;_++)e=e>>>8^r[(e^i[_])&255];return e^-1}var ct=ii,ni={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"},I=Ee,C=oe,bt=ut,W=ct,ri=ni,fe=0,fi=1,li=3,ee=4,ka=5,K=0,pa=1,M=-2,_i=-3,Ye=-5,hi=-1,di=1,Re=2,oi=3,vi=4,ui=0,ci=2,Fe=8,bi=9,gi=15,wi=8,ki=29,pi=256,ta=pi+1+ki,si=30,xi=19,Ei=2*ta+1,Si=15,E=3,J=258,F=J+E+1,zi=32,He=42,ia=69,Le=73,Ce=91,Me=103,te=113,be=666,N=1,ze=2,ie=3,ue=4,Ti=3;function Q(e,i){return e.msg=ri[i],i}function sa(e){return(e<<1)-(e>4?9:0)}function q(e){for(var i=e.length;--i>=0;)e[i]=0}function V(e){var i=e.state,a=i.pending;a>e.avail_out&&(a=e.avail_out),a!==0&&(I.arraySet(e.output,i.pending_buf,i.pending_out,a,e.next_out),e.next_out+=a,i.pending_out+=a,e.total_out+=a,e.avail_out-=a,i.pending-=a,i.pending===0&&(i.pending_out=0))}function O(e,i){C._tr_flush_block(e,e.block_start>=0?e.block_start:-1,e.strstart-e.block_start,i),e.block_start=e.strstart,V(e.strm)}function T(e,i){e.pending_buf[e.pending++]=i}function ce(e,i){e.pending_buf[e.pending++]=i>>>8&255,e.pending_buf[e.pending++]=i&255}function mi(e,i,a,t){var r=e.avail_in;return r>t&&(r=t),r===0?0:(e.avail_in-=r,I.arraySet(i,e.input,e.next_in,r,a),e.state.wrap===1?e.adler=bt(e.adler,i,r,a):e.state.wrap===2&&(e.adler=W(e.adler,i,r,a)),e.next_in+=r,e.total_in+=r,r)}function gt(e,i){var a=e.max_chain_length,t=e.strstart,r,n,_=e.prev_length,l=e.nice_match,o=e.strstart>e.w_size-F?e.strstart-(e.w_size-F):0,f=e.window,h=e.w_mask,p=e.prev,v=e.strstart+J,d=f[t+_-1],b=f[t+_];e.prev_length>=e.good_match&&(a>>=2),l>e.lookahead&&(l=e.lookahead);do if(r=i,!(f[r+_]!==b||f[r+_-1]!==d||f[r]!==f[t]||f[++r]!==f[t+1])){t+=2,r++;do;while(f[++t]===f[++r]&&f[++t]===f[++r]&&f[++t]===f[++r]&&f[++t]===f[++r]&&f[++t]===f[++r]&&f[++t]===f[++r]&&f[++t]===f[++r]&&f[++t]===f[++r]&&t<v);if(n=J-(v-t),t=v-J,n>_){if(e.match_start=i,_=n,n>=l)break;d=f[t+_-1],b=f[t+_]}}while((i=p[i&h])>o&&--a!==0);return _<=e.lookahead?_:e.lookahead}function ne(e){var i=e.w_size,a,t,r,n,_;do{if(n=e.window_size-e.lookahead-e.strstart,e.strstart>=i+(i-F)){I.arraySet(e.window,e.window,i,i,0),e.match_start-=i,e.strstart-=i,e.block_start-=i,t=e.hash_size,a=t;do r=e.head[--a],e.head[a]=r>=i?r-i:0;while(--t);t=i,a=t;do r=e.prev[--a],e.prev[a]=r>=i?r-i:0;while(--t);n+=i}if(e.strm.avail_in===0)break;if(t=mi(e.strm,e.window,e.strstart+e.lookahead,n),e.lookahead+=t,e.lookahead+e.insert>=E)for(_=e.strstart-e.insert,e.ins_h=e.window[_],e.ins_h=(e.ins_h<<e.hash_shift^e.window[_+1])&e.hash_mask;e.insert&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[_+E-1])&e.hash_mask,e.prev[_&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=_,_++,e.insert--,!(e.lookahead+e.insert<E)););}while(e.lookahead<F&&e.strm.avail_in!==0)}function yi(e,i){var a=65535;for(a>e.pending_buf_size-5&&(a=e.pending_buf_size-5);;){if(e.lookahead<=1){if(ne(e),e.lookahead===0&&i===fe)return N;if(e.lookahead===0)break}e.strstart+=e.lookahead,e.lookahead=0;var t=e.block_start+a;if((e.strstart===0||e.strstart>=t)&&(e.lookahead=e.strstart-t,e.strstart=t,O(e,!1),e.strm.avail_out===0)||e.strstart-e.block_start>=e.w_size-F&&(O(e,!1),e.strm.avail_out===0))return N}return e.insert=0,i===ee?(O(e,!0),e.strm.avail_out===0?ie:ue):(e.strstart>e.block_start&&(O(e,!1),e.strm.avail_out===0),N)}function Ge(e,i){for(var a,t;;){if(e.lookahead<F){if(ne(e),e.lookahead<F&&i===fe)return N;if(e.lookahead===0)break}if(a=0,e.lookahead>=E&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+E-1])&e.hash_mask,a=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),a!==0&&e.strstart-a<=e.w_size-F&&(e.match_length=gt(e,a)),e.match_length>=E)if(t=C._tr_tally(e,e.strstart-e.match_start,e.match_length-E),e.lookahead-=e.match_length,e.match_length<=e.max_lazy_match&&e.lookahead>=E){e.match_length--;do e.strstart++,e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+E-1])&e.hash_mask,a=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart;while(--e.match_length!==0);e.strstart++}else e.strstart+=e.match_length,e.match_length=0,e.ins_h=e.window[e.strstart],e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+1])&e.hash_mask;else t=C._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++;if(t&&(O(e,!1),e.strm.avail_out===0))return N}return e.insert=e.strstart<E-1?e.strstart:E-1,i===ee?(O(e,!0),e.strm.avail_out===0?ie:ue):e.last_lit&&(O(e,!1),e.strm.avail_out===0)?N:ze}function le(e,i){for(var a,t,r;;){if(e.lookahead<F){if(ne(e),e.lookahead<F&&i===fe)return N;if(e.lookahead===0)break}if(a=0,e.lookahead>=E&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+E-1])&e.hash_mask,a=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),e.prev_length=e.match_length,e.prev_match=e.match_start,e.match_length=E-1,a!==0&&e.prev_length<e.max_lazy_match&&e.strstart-a<=e.w_size-F&&(e.match_length=gt(e,a),e.match_length<=5&&(e.strategy===di||e.match_length===E&&e.strstart-e.match_start>4096)&&(e.match_length=E-1)),e.prev_length>=E&&e.match_length<=e.prev_length){r=e.strstart+e.lookahead-E,t=C._tr_tally(e,e.strstart-1-e.prev_match,e.prev_length-E),e.lookahead-=e.prev_length-1,e.prev_length-=2;do++e.strstart<=r&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+E-1])&e.hash_mask,a=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart);while(--e.prev_length!==0);if(e.match_available=0,e.match_length=E-1,e.strstart++,t&&(O(e,!1),e.strm.avail_out===0))return N}else if(e.match_available){if(t=C._tr_tally(e,0,e.window[e.strstart-1]),t&&O(e,!1),e.strstart++,e.lookahead--,e.strm.avail_out===0)return N}else e.match_available=1,e.strstart++,e.lookahead--}return e.match_available&&(t=C._tr_tally(e,0,e.window[e.strstart-1]),e.match_available=0),e.insert=e.strstart<E-1?e.strstart:E-1,i===ee?(O(e,!0),e.strm.avail_out===0?ie:ue):e.last_lit&&(O(e,!1),e.strm.avail_out===0)?N:ze}function Ai(e,i){for(var a,t,r,n,_=e.window;;){if(e.lookahead<=J){if(ne(e),e.lookahead<=J&&i===fe)return N;if(e.lookahead===0)break}if(e.match_length=0,e.lookahead>=E&&e.strstart>0&&(r=e.strstart-1,t=_[r],t===_[++r]&&t===_[++r]&&t===_[++r])){n=e.strstart+J;do;while(t===_[++r]&&t===_[++r]&&t===_[++r]&&t===_[++r]&&t===_[++r]&&t===_[++r]&&t===_[++r]&&t===_[++r]&&r<n);e.match_length=J-(n-r),e.match_length>e.lookahead&&(e.match_length=e.lookahead)}if(e.match_length>=E?(a=C._tr_tally(e,1,e.match_length-E),e.lookahead-=e.match_length,e.strstart+=e.match_length,e.match_length=0):(a=C._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++),a&&(O(e,!1),e.strm.avail_out===0))return N}return e.insert=0,i===ee?(O(e,!0),e.strm.avail_out===0?ie:ue):e.last_lit&&(O(e,!1),e.strm.avail_out===0)?N:ze}function Ri(e,i){for(var a;;){if(e.lookahead===0&&(ne(e),e.lookahead===0)){if(i===fe)return N;break}if(e.match_length=0,a=C._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++,a&&(O(e,!1),e.strm.avail_out===0))return N}return e.insert=0,i===ee?(O(e,!0),e.strm.avail_out===0?ie:ue):e.last_lit&&(O(e,!1),e.strm.avail_out===0)?N:ze}function H(e,i,a,t,r){this.good_length=e,this.max_lazy=i,this.nice_length=a,this.max_chain=t,this.func=r}var he;he=[new H(0,0,0,0,yi),new H(4,4,8,4,Ge),new H(4,5,16,8,Ge),new H(4,6,32,32,Ge),new H(4,4,16,16,le),new H(8,16,32,32,le),new H(8,16,128,128,le),new H(8,32,128,256,le),new H(32,128,258,1024,le),new H(32,258,258,4096,le)];function Di(e){e.window_size=2*e.w_size,q(e.head),e.max_lazy_match=he[e.level].max_lazy,e.good_match=he[e.level].good_length,e.nice_match=he[e.level].nice_length,e.max_chain_length=he[e.level].max_chain,e.strstart=0,e.block_start=0,e.lookahead=0,e.insert=0,e.match_length=e.prev_length=E-1,e.match_available=0,e.ins_h=0}function Ni(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=Fe,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new I.Buf16(Ei*2),this.dyn_dtree=new I.Buf16((2*si+1)*2),this.bl_tree=new I.Buf16((2*xi+1)*2),q(this.dyn_ltree),q(this.dyn_dtree),q(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new I.Buf16(Si+1),this.heap=new I.Buf16(2*ta+1),q(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new I.Buf16(2*ta+1),q(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function wt(e){var i;return!e||!e.state?Q(e,M):(e.total_in=e.total_out=0,e.data_type=ci,i=e.state,i.pending=0,i.pending_out=0,i.wrap<0&&(i.wrap=-i.wrap),i.status=i.wrap?He:te,e.adler=i.wrap===2?0:1,i.last_flush=fe,C._tr_init(i),K)}function kt(e){var i=wt(e);return i===K&&Di(e.state),i}function Oi(e,i){return!e||!e.state||e.state.wrap!==2?M:(e.state.gzhead=i,K)}function pt(e,i,a,t,r,n){if(!e)return M;var _=1;if(i===hi&&(i=6),t<0?(_=0,t=-t):t>15&&(_=2,t-=16),r<1||r>bi||a!==Fe||t<8||t>15||i<0||i>9||n<0||n>vi)return Q(e,M);t===8&&(t=9);var l=new Ni;return e.state=l,l.strm=e,l.wrap=_,l.gzhead=null,l.w_bits=t,l.w_size=1<<l.w_bits,l.w_mask=l.w_size-1,l.hash_bits=r+7,l.hash_size=1<<l.hash_bits,l.hash_mask=l.hash_size-1,l.hash_shift=~~((l.hash_bits+E-1)/E),l.window=new I.Buf8(l.w_size*2),l.head=new I.Buf16(l.hash_size),l.prev=new I.Buf16(l.w_size),l.lit_bufsize=1<<r+6,l.pending_buf_size=l.lit_bufsize*4,l.pending_buf=new I.Buf8(l.pending_buf_size),l.d_buf=1*l.lit_bufsize,l.l_buf=(1+2)*l.lit_bufsize,l.level=i,l.strategy=n,l.method=a,kt(e)}function Ii(e,i){return pt(e,i,Fe,gi,wi,ui)}function Zi(e,i){var a,t,r,n;if(!e||!e.state||i>ka||i<0)return e?Q(e,M):M;if(t=e.state,!e.output||!e.input&&e.avail_in!==0||t.status===be&&i!==ee)return Q(e,e.avail_out===0?Ye:M);if(t.strm=e,a=t.last_flush,t.last_flush=i,t.status===He)if(t.wrap===2)e.adler=0,T(t,31),T(t,139),T(t,8),t.gzhead?(T(t,(t.gzhead.text?1:0)+(t.gzhead.hcrc?2:0)+(t.gzhead.extra?4:0)+(t.gzhead.name?8:0)+(t.gzhead.comment?16:0)),T(t,t.gzhead.time&255),T(t,t.gzhead.time>>8&255),T(t,t.gzhead.time>>16&255),T(t,t.gzhead.time>>24&255),T(t,t.level===9?2:t.strategy>=Re||t.level<2?4:0),T(t,t.gzhead.os&255),t.gzhead.extra&&t.gzhead.extra.length&&(T(t,t.gzhead.extra.length&255),T(t,t.gzhead.extra.length>>8&255)),t.gzhead.hcrc&&(e.adler=W(e.adler,t.pending_buf,t.pending,0)),t.gzindex=0,t.status=ia):(T(t,0),T(t,0),T(t,0),T(t,0),T(t,0),T(t,t.level===9?2:t.strategy>=Re||t.level<2?4:0),T(t,Ti),t.status=te);else{var _=Fe+(t.w_bits-8<<4)<<8,l=-1;t.strategy>=Re||t.level<2?l=0:t.level<6?l=1:t.level===6?l=2:l=3,_|=l<<6,t.strstart!==0&&(_|=zi),_+=31-_%31,t.status=te,ce(t,_),t.strstart!==0&&(ce(t,e.adler>>>16),ce(t,e.adler&65535)),e.adler=1}if(t.status===ia)if(t.gzhead.extra){for(r=t.pending;t.gzindex<(t.gzhead.extra.length&65535)&&!(t.pending===t.pending_buf_size&&(t.gzhead.hcrc&&t.pending>r&&(e.adler=W(e.adler,t.pending_buf,t.pending-r,r)),V(e),r=t.pending,t.pending===t.pending_buf_size));)T(t,t.gzhead.extra[t.gzindex]&255),t.gzindex++;t.gzhead.hcrc&&t.pending>r&&(e.adler=W(e.adler,t.pending_buf,t.pending-r,r)),t.gzindex===t.gzhead.extra.length&&(t.gzindex=0,t.status=Le)}else t.status=Le;if(t.status===Le)if(t.gzhead.name){r=t.pending;do{if(t.pending===t.pending_buf_size&&(t.gzhead.hcrc&&t.pending>r&&(e.adler=W(e.adler,t.pending_buf,t.pending-r,r)),V(e),r=t.pending,t.pending===t.pending_buf_size)){n=1;break}t.gzindex<t.gzhead.name.length?n=t.gzhead.name.charCodeAt(t.gzindex++)&255:n=0,T(t,n)}while(n!==0);t.gzhead.hcrc&&t.pending>r&&(e.adler=W(e.adler,t.pending_buf,t.pending-r,r)),n===0&&(t.gzindex=0,t.status=Ce)}else t.status=Ce;if(t.status===Ce)if(t.gzhead.comment){r=t.pending;do{if(t.pending===t.pending_buf_size&&(t.gzhead.hcrc&&t.pending>r&&(e.adler=W(e.adler,t.pending_buf,t.pending-r,r)),V(e),r=t.pending,t.pending===t.pending_buf_size)){n=1;break}t.gzindex<t.gzhead.comment.length?n=t.gzhead.comment.charCodeAt(t.gzindex++)&255:n=0,T(t,n)}while(n!==0);t.gzhead.hcrc&&t.pending>r&&(e.adler=W(e.adler,t.pending_buf,t.pending-r,r)),n===0&&(t.status=Me)}else t.status=Me;if(t.status===Me&&(t.gzhead.hcrc?(t.pending+2>t.pending_buf_size&&V(e),t.pending+2<=t.pending_buf_size&&(T(t,e.adler&255),T(t,e.adler>>8&255),e.adler=0,t.status=te)):t.status=te),t.pending!==0){if(V(e),e.avail_out===0)return t.last_flush=-1,K}else if(e.avail_in===0&&sa(i)<=sa(a)&&i!==ee)return Q(e,Ye);if(t.status===be&&e.avail_in!==0)return Q(e,Ye);if(e.avail_in!==0||t.lookahead!==0||i!==fe&&t.status!==be){var o=t.strategy===Re?Ri(t,i):t.strategy===oi?Ai(t,i):he[t.level].func(t,i);if((o===ie||o===ue)&&(t.status=be),o===N||o===ie)return e.avail_out===0&&(t.last_flush=-1),K;if(o===ze&&(i===fi?C._tr_align(t):i!==ka&&(C._tr_stored_block(t,0,0,!1),i===li&&(q(t.head),t.lookahead===0&&(t.strstart=0,t.block_start=0,t.insert=0))),V(e),e.avail_out===0))return t.last_flush=-1,K}return i!==ee?K:t.wrap<=0?pa:(t.wrap===2?(T(t,e.adler&255),T(t,e.adler>>8&255),T(t,e.adler>>16&255),T(t,e.adler>>24&255),T(t,e.total_in&255),T(t,e.total_in>>8&255),T(t,e.total_in>>16&255),T(t,e.total_in>>24&255)):(ce(t,e.adler>>>16),ce(t,e.adler&65535)),V(e),t.wrap>0&&(t.wrap=-t.wrap),t.pending!==0?K:pa)}function Li(e){var i;return!e||!e.state?M:(i=e.state.status,i!==He&&i!==ia&&i!==Le&&i!==Ce&&i!==Me&&i!==te&&i!==be?Q(e,M):(e.state=null,i===te?Q(e,_i):K))}function Ci(e,i){var a=i.length,t,r,n,_,l,o,f,h;if(!e||!e.state||(t=e.state,_=t.wrap,_===2||_===1&&t.status!==He||t.lookahead))return M;for(_===1&&(e.adler=bt(e.adler,i,a,0)),t.wrap=0,a>=t.w_size&&(_===0&&(q(t.head),t.strstart=0,t.block_start=0,t.insert=0),h=new I.Buf8(t.w_size),I.arraySet(h,i,a-t.w_size,t.w_size,0),i=h,a=t.w_size),l=e.avail_in,o=e.next_in,f=e.input,e.avail_in=a,e.next_in=0,e.input=i,ne(t);t.lookahead>=E;){r=t.strstart,n=t.lookahead-(E-1);do t.ins_h=(t.ins_h<<t.hash_shift^t.window[r+E-1])&t.hash_mask,t.prev[r&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=r,r++;while(--n);t.strstart=r,t.lookahead=E-1,ne(t)}return t.strstart+=t.lookahead,t.block_start=t.strstart,t.insert=t.lookahead,t.lookahead=0,t.match_length=t.prev_length=E-1,t.match_available=0,e.next_in=o,e.input=f,e.avail_in=l,t.wrap=_,K}j.deflateInit=Ii;j.deflateInit2=pt;j.deflateReset=kt;j.deflateResetKeep=wt;j.deflateSetHeader=Oi;j.deflate=Zi;j.deflateEnd=Li;j.deflateSetDictionary=Ci;j.deflateInfo="pako deflate (from Nodeca project)";var X={},De=30,Mi=12,Bi=function(i,a){var t,r,n,_,l,o,f,h,p,v,d,b,c,x,g,y,A,s,u,m,S,w,z,D,k;t=i.state,r=i.next_in,D=i.input,n=r+(i.avail_in-5),_=i.next_out,k=i.output,l=_-(a-i.avail_out),o=_+(i.avail_out-257),f=t.dmax,h=t.wsize,p=t.whave,v=t.wnext,d=t.window,b=t.hold,c=t.bits,x=t.lencode,g=t.distcode,y=(1<<t.lenbits)-1,A=(1<<t.distbits)-1;e:do{c<15&&(b+=D[r++]<<c,c+=8,b+=D[r++]<<c,c+=8),s=x[b&y];a:for(;;){if(u=s>>>24,b>>>=u,c-=u,u=s>>>16&255,u===0)k[_++]=s&65535;else if(u&16){m=s&65535,u&=15,u&&(c<u&&(b+=D[r++]<<c,c+=8),m+=b&(1<<u)-1,b>>>=u,c-=u),c<15&&(b+=D[r++]<<c,c+=8,b+=D[r++]<<c,c+=8),s=g[b&A];t:for(;;){if(u=s>>>24,b>>>=u,c-=u,u=s>>>16&255,u&16){if(S=s&65535,u&=15,c<u&&(b+=D[r++]<<c,c+=8,c<u&&(b+=D[r++]<<c,c+=8)),S+=b&(1<<u)-1,S>f){i.msg="invalid distance too far back",t.mode=De;break e}if(b>>>=u,c-=u,u=_-l,S>u){if(u=S-u,u>p&&t.sane){i.msg="invalid distance too far back",t.mode=De;break e}if(w=0,z=d,v===0){if(w+=h-u,u<m){m-=u;do k[_++]=d[w++];while(--u);w=_-S,z=k}}else if(v<u){if(w+=h+v-u,u-=v,u<m){m-=u;do k[_++]=d[w++];while(--u);if(w=0,v<m){u=v,m-=u;do k[_++]=d[w++];while(--u);w=_-S,z=k}}}else if(w+=v-u,u<m){m-=u;do k[_++]=d[w++];while(--u);w=_-S,z=k}for(;m>2;)k[_++]=z[w++],k[_++]=z[w++],k[_++]=z[w++],m-=3;m&&(k[_++]=z[w++],m>1&&(k[_++]=z[w++]))}else{w=_-S;do k[_++]=k[w++],k[_++]=k[w++],k[_++]=k[w++],m-=3;while(m>2);m&&(k[_++]=k[w++],m>1&&(k[_++]=k[w++]))}}else if(u&64){i.msg="invalid distance code",t.mode=De;break e}else{s=g[(s&65535)+(b&(1<<u)-1)];continue t}break}}else if(u&64)if(u&32){t.mode=Mi;break e}else{i.msg="invalid literal/length code",t.mode=De;break e}else{s=x[(s&65535)+(b&(1<<u)-1)];continue a}break}}while(r<n&&_<o);m=c>>3,r-=m,c-=m<<3,b&=(1<<c)-1,i.next_in=r,i.next_out=_,i.avail_in=r<n?5+(n-r):5-(r-n),i.avail_out=_<o?257+(o-_):257-(_-o),t.hold=b,t.bits=c},xa=Ee,_e=15,Ea=852,Sa=592,za=0,je=1,Ta=2,$i=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],Fi=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],Hi=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],Ui=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64],Pi=function(i,a,t,r,n,_,l,o){var f=o.bits,h=0,p=0,v=0,d=0,b=0,c=0,x=0,g=0,y=0,A=0,s,u,m,S,w,z=null,D=0,k,$=new xa.Buf16(_e+1),Te=new xa.Buf16(_e+1),me=null,ha=0,da,ye,Ae;for(h=0;h<=_e;h++)$[h]=0;for(p=0;p<r;p++)$[a[t+p]]++;for(b=f,d=_e;d>=1&&$[d]===0;d--);if(b>d&&(b=d),d===0)return n[_++]=1<<24|64<<16|0,n[_++]=1<<24|64<<16|0,o.bits=1,0;for(v=1;v<d&&$[v]===0;v++);for(b<v&&(b=v),g=1,h=1;h<=_e;h++)if(g<<=1,g-=$[h],g<0)return-1;if(g>0&&(i===za||d!==1))return-1;for(Te[1]=0,h=1;h<_e;h++)Te[h+1]=Te[h]+$[h];for(p=0;p<r;p++)a[t+p]!==0&&(l[Te[a[t+p]]++]=p);if(i===za?(z=me=l,k=19):i===je?(z=$i,D-=257,me=Fi,ha-=257,k=256):(z=Hi,me=Ui,k=-1),A=0,p=0,h=v,w=_,c=b,x=0,m=-1,y=1<<b,S=y-1,i===je&&y>Ea||i===Ta&&y>Sa)return 1;for(;;){da=h-x,l[p]<k?(ye=0,Ae=l[p]):l[p]>k?(ye=me[ha+l[p]],Ae=z[D+l[p]]):(ye=32+64,Ae=0),s=1<<h-x,u=1<<c,v=u;do u-=s,n[w+(A>>x)+u]=da<<24|ye<<16|Ae|0;while(u!==0);for(s=1<<h-1;A&s;)s>>=1;if(s!==0?(A&=s-1,A+=s):A=0,p++,--$[h]===0){if(h===d)break;h=a[t+l[p]]}if(h>b&&(A&S)!==m){for(x===0&&(x=b),w+=v,c=h-x,g=1<<c;c+x<d&&(g-=$[c+x],!(g<=0));)c++,g<<=1;if(y+=1<<c,i===je&&y>Ea||i===Ta&&y>Sa)return 1;m=A&S,n[m]=b<<24|c<<16|w-_|0}}return A!==0&&(n[w+A]=h-x<<24|64<<16|0),o.bits=b,0},L=Ee,na=ut,U=ct,Ki=Bi,we=Pi,Xi=0,st=1,xt=2,ma=4,Yi=5,Ne=6,re=0,Gi=1,ji=2,B=-2,Et=-3,St=-4,Wi=-5,ya=8,zt=1,Aa=2,Ra=3,Da=4,Na=5,Oa=6,Ia=7,Za=8,La=9,Ca=10,$e=11,Y=12,We=13,Ma=14,Ve=15,Ba=16,$a=17,Fa=18,Ha=19,Oe=20,Ie=21,Ua=22,Pa=23,Ka=24,Xa=25,Ya=26,qe=27,Ga=28,ja=29,R=30,Tt=31,Vi=32,qi=852,Ji=592,Qi=15,en=Qi;function Wa(e){return(e>>>24&255)+(e>>>8&65280)+((e&65280)<<8)+((e&255)<<24)}function an(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new L.Buf16(320),this.work=new L.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function mt(e){var i;return!e||!e.state?B:(i=e.state,e.total_in=e.total_out=i.total=0,e.msg="",i.wrap&&(e.adler=i.wrap&1),i.mode=zt,i.last=0,i.havedict=0,i.dmax=32768,i.head=null,i.hold=0,i.bits=0,i.lencode=i.lendyn=new L.Buf32(qi),i.distcode=i.distdyn=new L.Buf32(Ji),i.sane=1,i.back=-1,re)}function yt(e){var i;return!e||!e.state?B:(i=e.state,i.wsize=0,i.whave=0,i.wnext=0,mt(e))}function At(e,i){var a,t;return!e||!e.state||(t=e.state,i<0?(a=0,i=-i):(a=(i>>4)+1,i<48&&(i&=15)),i&&(i<8||i>15))?B:(t.window!==null&&t.wbits!==i&&(t.window=null),t.wrap=a,t.wbits=i,yt(e))}function Rt(e,i){var a,t;return e?(t=new an,e.state=t,t.window=null,a=At(e,i),a!==re&&(e.state=null),a):B}function tn(e){return Rt(e,en)}var Va=!0,Je,Qe;function nn(e){if(Va){var i;for(Je=new L.Buf32(512),Qe=new L.Buf32(32),i=0;i<144;)e.lens[i++]=8;for(;i<256;)e.lens[i++]=9;for(;i<280;)e.lens[i++]=7;for(;i<288;)e.lens[i++]=8;for(we(st,e.lens,0,288,Je,0,e.work,{bits:9}),i=0;i<32;)e.lens[i++]=5;we(xt,e.lens,0,32,Qe,0,e.work,{bits:5}),Va=!1}e.lencode=Je,e.lenbits=9,e.distcode=Qe,e.distbits=5}function Dt(e,i,a,t){var r,n=e.state;return n.window===null&&(n.wsize=1<<n.wbits,n.wnext=0,n.whave=0,n.window=new L.Buf8(n.wsize)),t>=n.wsize?(L.arraySet(n.window,i,a-n.wsize,n.wsize,0),n.wnext=0,n.whave=n.wsize):(r=n.wsize-n.wnext,r>t&&(r=t),L.arraySet(n.window,i,a-t,r,n.wnext),t-=r,t?(L.arraySet(n.window,i,a-t,t,0),n.wnext=t,n.whave=n.wsize):(n.wnext+=r,n.wnext===n.wsize&&(n.wnext=0),n.whave<n.wsize&&(n.whave+=r))),0}function rn(e,i){var a,t,r,n,_,l,o,f,h,p,v,d,b,c,x=0,g,y,A,s,u,m,S,w,z=new L.Buf8(4),D,k,$=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!e||!e.state||!e.output||!e.input&&e.avail_in!==0)return B;a=e.state,a.mode===Y&&(a.mode=We),_=e.next_out,r=e.output,o=e.avail_out,n=e.next_in,t=e.input,l=e.avail_in,f=a.hold,h=a.bits,p=l,v=o,w=re;e:for(;;)switch(a.mode){case zt:if(a.wrap===0){a.mode=We;break}for(;h<16;){if(l===0)break e;l--,f+=t[n++]<<h,h+=8}if(a.wrap&2&&f===35615){a.check=0,z[0]=f&255,z[1]=f>>>8&255,a.check=U(a.check,z,2,0),f=0,h=0,a.mode=Aa;break}if(a.flags=0,a.head&&(a.head.done=!1),!(a.wrap&1)||(((f&255)<<8)+(f>>8))%31){e.msg="incorrect header check",a.mode=R;break}if((f&15)!==ya){e.msg="unknown compression method",a.mode=R;break}if(f>>>=4,h-=4,S=(f&15)+8,a.wbits===0)a.wbits=S;else if(S>a.wbits){e.msg="invalid window size",a.mode=R;break}a.dmax=1<<S,e.adler=a.check=1,a.mode=f&512?Ca:Y,f=0,h=0;break;case Aa:for(;h<16;){if(l===0)break e;l--,f+=t[n++]<<h,h+=8}if(a.flags=f,(a.flags&255)!==ya){e.msg="unknown compression method",a.mode=R;break}if(a.flags&57344){e.msg="unknown header flags set",a.mode=R;break}a.head&&(a.head.text=f>>8&1),a.flags&512&&(z[0]=f&255,z[1]=f>>>8&255,a.check=U(a.check,z,2,0)),f=0,h=0,a.mode=Ra;case Ra:for(;h<32;){if(l===0)break e;l--,f+=t[n++]<<h,h+=8}a.head&&(a.head.time=f),a.flags&512&&(z[0]=f&255,z[1]=f>>>8&255,z[2]=f>>>16&255,z[3]=f>>>24&255,a.check=U(a.check,z,4,0)),f=0,h=0,a.mode=Da;case Da:for(;h<16;){if(l===0)break e;l--,f+=t[n++]<<h,h+=8}a.head&&(a.head.xflags=f&255,a.head.os=f>>8),a.flags&512&&(z[0]=f&255,z[1]=f>>>8&255,a.check=U(a.check,z,2,0)),f=0,h=0,a.mode=Na;case Na:if(a.flags&1024){for(;h<16;){if(l===0)break e;l--,f+=t[n++]<<h,h+=8}a.length=f,a.head&&(a.head.extra_len=f),a.flags&512&&(z[0]=f&255,z[1]=f>>>8&255,a.check=U(a.check,z,2,0)),f=0,h=0}else a.head&&(a.head.extra=null);a.mode=Oa;case Oa:if(a.flags&1024&&(d=a.length,d>l&&(d=l),d&&(a.head&&(S=a.head.extra_len-a.length,a.head.extra||(a.head.extra=new Array(a.head.extra_len)),L.arraySet(a.head.extra,t,n,d,S)),a.flags&512&&(a.check=U(a.check,t,d,n)),l-=d,n+=d,a.length-=d),a.length))break e;a.length=0,a.mode=Ia;case Ia:if(a.flags&2048){if(l===0)break e;d=0;do S=t[n+d++],a.head&&S&&a.length<65536&&(a.head.name+=String.fromCharCode(S));while(S&&d<l);if(a.flags&512&&(a.check=U(a.check,t,d,n)),l-=d,n+=d,S)break e}else a.head&&(a.head.name=null);a.length=0,a.mode=Za;case Za:if(a.flags&4096){if(l===0)break e;d=0;do S=t[n+d++],a.head&&S&&a.length<65536&&(a.head.comment+=String.fromCharCode(S));while(S&&d<l);if(a.flags&512&&(a.check=U(a.check,t,d,n)),l-=d,n+=d,S)break e}else a.head&&(a.head.comment=null);a.mode=La;case La:if(a.flags&512){for(;h<16;){if(l===0)break e;l--,f+=t[n++]<<h,h+=8}if(f!==(a.check&65535)){e.msg="header crc mismatch",a.mode=R;break}f=0,h=0}a.head&&(a.head.hcrc=a.flags>>9&1,a.head.done=!0),e.adler=a.check=0,a.mode=Y;break;case Ca:for(;h<32;){if(l===0)break e;l--,f+=t[n++]<<h,h+=8}e.adler=a.check=Wa(f),f=0,h=0,a.mode=$e;case $e:if(a.havedict===0)return e.next_out=_,e.avail_out=o,e.next_in=n,e.avail_in=l,a.hold=f,a.bits=h,ji;e.adler=a.check=1,a.mode=Y;case Y:if(i===Yi||i===Ne)break e;case We:if(a.last){f>>>=h&7,h-=h&7,a.mode=qe;break}for(;h<3;){if(l===0)break e;l--,f+=t[n++]<<h,h+=8}switch(a.last=f&1,f>>>=1,h-=1,f&3){case 0:a.mode=Ma;break;case 1:if(nn(a),a.mode=Oe,i===Ne){f>>>=2,h-=2;break e}break;case 2:a.mode=$a;break;case 3:e.msg="invalid block type",a.mode=R}f>>>=2,h-=2;break;case Ma:for(f>>>=h&7,h-=h&7;h<32;){if(l===0)break e;l--,f+=t[n++]<<h,h+=8}if((f&65535)!==(f>>>16^65535)){e.msg="invalid stored block lengths",a.mode=R;break}if(a.length=f&65535,f=0,h=0,a.mode=Ve,i===Ne)break e;case Ve:a.mode=Ba;case Ba:if(d=a.length,d){if(d>l&&(d=l),d>o&&(d=o),d===0)break e;L.arraySet(r,t,n,d,_),l-=d,n+=d,o-=d,_+=d,a.length-=d;break}a.mode=Y;break;case $a:for(;h<14;){if(l===0)break e;l--,f+=t[n++]<<h,h+=8}if(a.nlen=(f&31)+257,f>>>=5,h-=5,a.ndist=(f&31)+1,f>>>=5,h-=5,a.ncode=(f&15)+4,f>>>=4,h-=4,a.nlen>286||a.ndist>30){e.msg="too many length or distance symbols",a.mode=R;break}a.have=0,a.mode=Fa;case Fa:for(;a.have<a.ncode;){for(;h<3;){if(l===0)break e;l--,f+=t[n++]<<h,h+=8}a.lens[$[a.have++]]=f&7,f>>>=3,h-=3}for(;a.have<19;)a.lens[$[a.have++]]=0;if(a.lencode=a.lendyn,a.lenbits=7,D={bits:a.lenbits},w=we(Xi,a.lens,0,19,a.lencode,0,a.work,D),a.lenbits=D.bits,w){e.msg="invalid code lengths set",a.mode=R;break}a.have=0,a.mode=Ha;case Ha:for(;a.have<a.nlen+a.ndist;){for(;x=a.lencode[f&(1<<a.lenbits)-1],g=x>>>24,y=x>>>16&255,A=x&65535,!(g<=h);){if(l===0)break e;l--,f+=t[n++]<<h,h+=8}if(A<16)f>>>=g,h-=g,a.lens[a.have++]=A;else{if(A===16){for(k=g+2;h<k;){if(l===0)break e;l--,f+=t[n++]<<h,h+=8}if(f>>>=g,h-=g,a.have===0){e.msg="invalid bit length repeat",a.mode=R;break}S=a.lens[a.have-1],d=3+(f&3),f>>>=2,h-=2}else if(A===17){for(k=g+3;h<k;){if(l===0)break e;l--,f+=t[n++]<<h,h+=8}f>>>=g,h-=g,S=0,d=3+(f&7),f>>>=3,h-=3}else{for(k=g+7;h<k;){if(l===0)break e;l--,f+=t[n++]<<h,h+=8}f>>>=g,h-=g,S=0,d=11+(f&127),f>>>=7,h-=7}if(a.have+d>a.nlen+a.ndist){e.msg="invalid bit length repeat",a.mode=R;break}for(;d--;)a.lens[a.have++]=S}}if(a.mode===R)break;if(a.lens[256]===0){e.msg="invalid code -- missing end-of-block",a.mode=R;break}if(a.lenbits=9,D={bits:a.lenbits},w=we(st,a.lens,0,a.nlen,a.lencode,0,a.work,D),a.lenbits=D.bits,w){e.msg="invalid literal/lengths set",a.mode=R;break}if(a.distbits=6,a.distcode=a.distdyn,D={bits:a.distbits},w=we(xt,a.lens,a.nlen,a.ndist,a.distcode,0,a.work,D),a.distbits=D.bits,w){e.msg="invalid distances set",a.mode=R;break}if(a.mode=Oe,i===Ne)break e;case Oe:a.mode=Ie;case Ie:if(l>=6&&o>=258){e.next_out=_,e.avail_out=o,e.next_in=n,e.avail_in=l,a.hold=f,a.bits=h,Ki(e,v),_=e.next_out,r=e.output,o=e.avail_out,n=e.next_in,t=e.input,l=e.avail_in,f=a.hold,h=a.bits,a.mode===Y&&(a.back=-1);break}for(a.back=0;x=a.lencode[f&(1<<a.lenbits)-1],g=x>>>24,y=x>>>16&255,A=x&65535,!(g<=h);){if(l===0)break e;l--,f+=t[n++]<<h,h+=8}if(y&&!(y&240)){for(s=g,u=y,m=A;x=a.lencode[m+((f&(1<<s+u)-1)>>s)],g=x>>>24,y=x>>>16&255,A=x&65535,!(s+g<=h);){if(l===0)break e;l--,f+=t[n++]<<h,h+=8}f>>>=s,h-=s,a.back+=s}if(f>>>=g,h-=g,a.back+=g,a.length=A,y===0){a.mode=Ya;break}if(y&32){a.back=-1,a.mode=Y;break}if(y&64){e.msg="invalid literal/length code",a.mode=R;break}a.extra=y&15,a.mode=Ua;case Ua:if(a.extra){for(k=a.extra;h<k;){if(l===0)break e;l--,f+=t[n++]<<h,h+=8}a.length+=f&(1<<a.extra)-1,f>>>=a.extra,h-=a.extra,a.back+=a.extra}a.was=a.length,a.mode=Pa;case Pa:for(;x=a.distcode[f&(1<<a.distbits)-1],g=x>>>24,y=x>>>16&255,A=x&65535,!(g<=h);){if(l===0)break e;l--,f+=t[n++]<<h,h+=8}if(!(y&240)){for(s=g,u=y,m=A;x=a.distcode[m+((f&(1<<s+u)-1)>>s)],g=x>>>24,y=x>>>16&255,A=x&65535,!(s+g<=h);){if(l===0)break e;l--,f+=t[n++]<<h,h+=8}f>>>=s,h-=s,a.back+=s}if(f>>>=g,h-=g,a.back+=g,y&64){e.msg="invalid distance code",a.mode=R;break}a.offset=A,a.extra=y&15,a.mode=Ka;case Ka:if(a.extra){for(k=a.extra;h<k;){if(l===0)break e;l--,f+=t[n++]<<h,h+=8}a.offset+=f&(1<<a.extra)-1,f>>>=a.extra,h-=a.extra,a.back+=a.extra}if(a.offset>a.dmax){e.msg="invalid distance too far back",a.mode=R;break}a.mode=Xa;case Xa:if(o===0)break e;if(d=v-o,a.offset>d){if(d=a.offset-d,d>a.whave&&a.sane){e.msg="invalid distance too far back",a.mode=R;break}d>a.wnext?(d-=a.wnext,b=a.wsize-d):b=a.wnext-d,d>a.length&&(d=a.length),c=a.window}else c=r,b=_-a.offset,d=a.length;d>o&&(d=o),o-=d,a.length-=d;do r[_++]=c[b++];while(--d);a.length===0&&(a.mode=Ie);break;case Ya:if(o===0)break e;r[_++]=a.length,o--,a.mode=Ie;break;case qe:if(a.wrap){for(;h<32;){if(l===0)break e;l--,f|=t[n++]<<h,h+=8}if(v-=o,e.total_out+=v,a.total+=v,v&&(e.adler=a.check=a.flags?U(a.check,r,v,_-v):na(a.check,r,v,_-v)),v=o,(a.flags?f:Wa(f))!==a.check){e.msg="incorrect data check",a.mode=R;break}f=0,h=0}a.mode=Ga;case Ga:if(a.wrap&&a.flags){for(;h<32;){if(l===0)break e;l--,f+=t[n++]<<h,h+=8}if(f!==(a.total&4294967295)){e.msg="incorrect length check",a.mode=R;break}f=0,h=0}a.mode=ja;case ja:w=Gi;break e;case R:w=Et;break e;case Tt:return St;case Vi:default:return B}return e.next_out=_,e.avail_out=o,e.next_in=n,e.avail_in=l,a.hold=f,a.bits=h,(a.wsize||v!==e.avail_out&&a.mode<R&&(a.mode<qe||i!==ma))&&Dt(e,e.output,e.next_out,v-e.avail_out),p-=e.avail_in,v-=e.avail_out,e.total_in+=p,e.total_out+=v,a.total+=v,a.wrap&&v&&(e.adler=a.check=a.flags?U(a.check,r,v,e.next_out-v):na(a.check,r,v,e.next_out-v)),e.data_type=a.bits+(a.last?64:0)+(a.mode===Y?128:0)+(a.mode===Oe||a.mode===Ve?256:0),(p===0&&v===0||i===ma)&&w===re&&(w=Wi),w}function fn(e){if(!e||!e.state)return B;var i=e.state;return i.window&&(i.window=null),e.state=null,re}function ln(e,i){var a;return!e||!e.state||(a=e.state,!(a.wrap&2))?B:(a.head=i,i.done=!1,re)}function _n(e,i){var a=i.length,t,r,n;return!e||!e.state||(t=e.state,t.wrap!==0&&t.mode!==$e)?B:t.mode===$e&&(r=1,r=na(r,i,a,0),r!==t.check)?Et:(n=Dt(e,i,a,a),n?(t.mode=Tt,St):(t.havedict=1,re))}X.inflateReset=yt;X.inflateReset2=At;X.inflateResetKeep=mt;X.inflateInit=tn;X.inflateInit2=Rt;X.inflate=rn;X.inflateEnd=fn;X.inflateGetHeader=ln;X.inflateSetDictionary=_n;X.inflateInfo="pako inflate (from Nodeca project)";var hn={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8};const vn=qa(hn);export{on as a,j as d,X as i,vn as r};
