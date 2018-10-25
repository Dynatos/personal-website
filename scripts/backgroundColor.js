
// legacy method, new method is better as far as I know
// export default function returnBackground() {
//   if (window.location.pathname.toLowerCase() === "/runescape") {
//     document.getElementById("html").setAttribute("style", "background: #d4c191");
//   }
//   else {
//     document.getElementById("html").setAttribute("style", "background: none");
//   }
// }

export function removeBackground() {
  const html = document.querySelector("html");
    if (html) {
      html.setAttribute("style", "background: none");
    }
}

export function getBackground() {
  const html = document.querySelector("html");
  if (html) {
    html.setAttribute("style", "background: #d4c191");
  }
}
