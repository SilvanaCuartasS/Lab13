import { cargaPersonajes } from "./utils.js";

const render = async () => {
    const respuesta = await cargaPersonajes();
  
    const Personaje = document.querySelector(".Personaje");
    Personaje.classList.add("personaje");
  
    for (const item of respuesta) {
      const card = document.createElement("div");
      card.classList.add("card");
  
      const divPersoIma = document.createElement("div");
      const imgPersonaje = document.createElement("div");
  
      const img = document.createElement("img");
      img.src = item.displayIcon;
      img.alt = item.displayName;
      imgPersonaje.appendChild(img);
      divPersoIma.classList.add("img");
  
      divPersoIma.addEventListener("click", () => {
        window.location.href = `./detail.html?id=${item.uuid}`;
      });
  
      divPersoIma.appendChild(imgPersonaje);
      card.appendChild(divPersoIma);
      Personaje.appendChild(card);
  
      const divPersoTxt = document.createElement("div");
      divPersoTxt.classList.add("texto");
  
      const title = document.createElement("H1");
      title.textContent = item.displayName;
  
      const subTitle = document.createElement("p");
      subTitle.textContent = item.description;
      subTitle.classList.add("p");
  
      divPersoTxt.appendChild(title);
      divPersoTxt.appendChild(subTitle);
      card.appendChild(divPersoTxt);
      Personaje.appendChild(card);
  
      const divBtnIcon = document.createElement("div");
      divBtnIcon.classList.add("contenedorbtn");
  
      const btn = document.createElement("button");
      btn.src = "#";
      btn.textContent = "See details";
      btn.classList.add("btn");
  
      btn.addEventListener("click", () => {
        window.location.href = `./details.html?id=${item.uuid}`;
      });
  
      const basurita = document.createElement("img");
      basurita.src = "IMG/trash3.svg";
      basurita.alt = "trash";
      basurita.classList.add("basura");
  
      divBtnIcon.appendChild(btn);
      divPersoTxt.appendChild(divBtnIcon);
      card.appendChild(divPersoTxt);
      Personaje.appendChild(card);
      divBtnIcon.appendChild(basurita);
      divPersoTxt.appendChild(divBtnIcon);
      card.appendChild(divPersoTxt);
      Personaje.appendChild(card);
  
      basurita.addEventListener("click", () => {
        card.remove();
      });
    }
  };

document.addEventListener("DOMContentLoaded", render);