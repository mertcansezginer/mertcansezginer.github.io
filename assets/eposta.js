// The contact address is not written in the pages, so address-harvesting bots that read the HTML do not
// find it. Each <a class="eposta"> holds its two halves reversed; this puts them together for people.
// Without JavaScript the link reads "gaztakip [at] gmail.com".
document.querySelectorAll("a.eposta").forEach(function (a) {
  var flip = function (s) { return s.split("").reverse().join(""); };
  var address = flip(a.dataset.k) + "@" + flip(a.dataset.a);
  a.href = "mailto:" + address;
  if (!a.dataset.label) a.textContent = address;
});
