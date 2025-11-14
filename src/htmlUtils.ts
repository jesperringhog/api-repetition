import type { Film } from "./models/Film";

export const skapaHtml = (filmer: Film[]) => {
    const app = document.getElementById("app");

    for(let i = 0; i<filmer.length; i++) {
        const rubrik = document.createElement("h2");
        const underRubrik = document.createElement("p");
        const bildContainer = document.createElement("div");
        const bild = document.createElement("img");

        rubrik.innerHTML = filmer[i].Title;
        underRubrik.innerHTML = filmer[i].Year;
        bild.src = filmer[i].Poster;
        bild.alt = filmer[i].Title;

        bildContainer.appendChild(bild);
        app?.appendChild(rubrik);
        app?.appendChild(underRubrik);
        app?.appendChild(bildContainer);
    }
}