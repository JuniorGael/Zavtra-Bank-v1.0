import{g}from"./abs-svg-path-8eaf02d6.js";import{c as m}from"./hsl-to-rgb-for-reals-282984f4.js";var p=m;function t(r,e){return r>e?e:r}function n(r,e){return r<e?e:r}function x(r){for(r=t(r,1e7),r=n(r,-1e7);r<0;)r+=360;for(;r>359;)r-=360;return r}function h(r,e,o){r=x(r),e=n(t(e,100),0),o=n(t(o,100),0),e/=100,o/=100;var c=p(r,e,o);return"#"+c.map(function(f){return(256+f).toString(16).substr(-2)}).join("")}var s=h;const i=g(s);export{i as h};