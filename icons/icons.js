/*

This isn't maintained,
I suggest looking at:
https://simpleicons.org/

Thanks for all the
comments, suggestions
and contributions ❤️

*/
const $ = s => document.querySelectorAll(s)
const on = (ev, el, cb) =>
  el.addEventListener(ev, e => cb(e, el))
// $('.email').forEach(el =>
//   on('click', el, e => e.preventDefault())
// )