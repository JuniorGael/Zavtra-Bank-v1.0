import{g as E}from"./abs-svg-path-8eaf02d6.js";var p=Array.isArray,v=Object.keys,g=Object.prototype.hasOwnProperty,y=typeof Element<"u";function i(r,e){if(r===e)return!0;if(r&&e&&typeof r=="object"&&typeof e=="object"){var o=p(r),n=p(e),t,f,s;if(o&&n){if(f=r.length,f!=e.length)return!1;for(t=f;t--!==0;)if(!i(r[t],e[t]))return!1;return!0}if(o!=n)return!1;var u=r instanceof Date,c=e instanceof Date;if(u!=c)return!1;if(u&&c)return r.getTime()==e.getTime();var l=r instanceof RegExp,m=e instanceof RegExp;if(l!=m)return!1;if(l&&m)return r.toString()==e.toString();var a=v(r);if(f=a.length,f!==v(e).length)return!1;for(t=f;t--!==0;)if(!g.call(e,a[t]))return!1;if(y&&r instanceof Element&&e instanceof Element)return r===e;for(t=f;t--!==0;)if(s=a[t],!(s==="_owner"&&r.$$typeof)&&!i(r[s],e[s]))return!1;return!0}return r!==r&&e!==e}var h=function(e,o){try{return i(e,o)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||n.number===-2146828260)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}};const w=E(h);export{w as i};
