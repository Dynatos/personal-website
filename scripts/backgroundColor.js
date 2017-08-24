
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
  document.getElementById("html").setAttribute("style", "background: none");
}

export function getBackground() {
  document.getElementById("html").setAttribute("style", "background: #d4c191");
}
