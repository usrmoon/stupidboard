var keyboard = document.getElementById("keyboard");
var textarea = document.getElementById("textarea");
var layout = [";", ",", ".", "p", "y", "f", "g", "c", "r", "l", "a", "o", "e", "u", "i", "d", "h", "t", "n", "s", "'", "q", "j", "k", "x", "b", "m", "w", "v", "z", "\"", ":", "<", ">", "/", "\\"]
for (i = 0; i < layout.length; i++) {
  keyboard.innerHTML += "<button class=key id=" + "\"" + layout[i] + "\"" + "onclick=" + "\"document.getElementById('textarea').innerHTML +=" + "'" + layout[i] + "'" + "\"" + ">" + layout[i] + "</button>"
  if ((i + 1) % 12 == 0 && i != 0) {
    keyboard.innerHTML += "<br>"
  }
}
