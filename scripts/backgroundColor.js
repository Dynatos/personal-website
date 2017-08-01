export default function returnBackground() {
  if (window.location.pathname.toLowerCase() === "/runescape") {
    document.getElementById("html").setAttribute("style", "background: #d4c191");
  }
  else {
    document.getElementById("html").setAttribute("style", "background: none");
  }
}
