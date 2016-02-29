Too many ways to do the same, however, I don't like use jQuery as a DOM handler with Angular. Angular-animate also, is little weak and `position absolute, left/right/top/bottom` could be cause performance issues.

So, I am using `Transform` and `Transition` to get the effect.

Also, this article by Paul Irish [Why Moving Elements With Translate() Is Better Than Pos:abs Top/left](http://www.paulirish.com/2012/why-moving-elements-with-translate-is-better-than-posabs-topleft/) ends to convince me that is the best way.