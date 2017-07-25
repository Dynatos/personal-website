export default function returnBackground() {
  if (window.location.href === "http://localhost:3000/runescape") {
    document.getElementById("html").setAttribute("style", "background: #d4c191");
  }
  else {
    document.getElementById("html").setAttribute("style", "background: none");
  }
}
