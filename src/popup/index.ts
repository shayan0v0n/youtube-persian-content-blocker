import App from "../pages/app.svelte";

const target = document.getElementById("app") as HTMLDivElement;

function render() {
  new App({ target });
}

document.addEventListener("DOMContentLoaded", render);
