import {personajePorId} from "./utils.js"

const render =async () => {

    
    const params = new URLSearchParams(window.location.search);
    const id =params.get("id");
    const personaje = await personajePorId(id);

    const headTitle= document.querySelector("#headTitle");
    headTitle.textContent=`${personaje.displayName} Character`;

    const secPersonaje = document.querySelector(".Personaje");
    secPersonaje.classList.add("personaje");

    const btn = document.createElement("button");
    btn.src="#";
    btn.textContent="Back to the Cards";
    btn.classList.add("btn");
    secPersonaje.appendChild(btn);

    btn.addEventListener("click", () => {
        window.location.href = `.\index.html`;  
      });

    const card= document.createElement("div");
    card.classList.add("card");

    const divPersoIma= document.createElement("div");

    const imgPersonaje = document.createElement("div");
    const img = document.createElement("img");
    img.src=personaje.bustPortrait;
    img.alt=personaje.displayName;
    imgPersonaje.appendChild(img);
    imgPersonaje.classList.add("divImg");
    img.classList.add("img")

    divPersoIma.appendChild(imgPersonaje);
    card.appendChild(divPersoIma)
    secPersonaje.appendChild(card);

    const divPersoTxt = document.createElement("div");
    divPersoTxt.classList.add("texto")

        const title = document.createElement("H1");
        title.textContent=personaje.displayName;


        const subTitle= document.createElement("p");
        subTitle.textContent=personaje.description;
        subTitle.classList.add("p");

        const rolTitle = document.createElement("H1");
        rolTitle.textContent="Role:";
        rolTitle.classList.add("H1");

        const rolSubtitle= document.createElement("p");
        rolSubtitle.classList.add("p");
        rolSubtitle.textContent=personaje.role.description;

        divPersoTxt.appendChild(title);
        divPersoTxt.appendChild(subTitle);
        divPersoTxt.appendChild(rolTitle);
        divPersoTxt.appendChild(rolSubtitle);
        card.appendChild(divPersoTxt);
        secPersonaje.appendChild(card);

}
document.addEventListener("DOMContentLoaded", render);