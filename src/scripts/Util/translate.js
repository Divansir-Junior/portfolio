// translate.js
import { Translations } from './translations.js';


function translate(lang) {
  const t = Translations[lang];

  if (!t) return console.error(`Tradução para o idioma "${lang}" não encontrada.`);

  document.getElementById("aboutMe").textContent = t.aboutMe;
  document.getElementById("description").textContent = t.description;
  document.getElementById("skillsTitle").textContent = t.mySkills;
  document.getElementById("subTitleSkills").textContent = t.Technologies;
  document.getElementById("projectsTitle").textContent = t.projectsTitle;
  document.getElementById("projectsSubTitle").textContent = t.projectsSubTitle;
  document.getElementById("role").textContent = t.role;
  document.querySelectorAll(".link").forEach(el => {
    el.textContent = t.link;
  });
}

export function translatePT() {
  translate("pt");
}

export function translateEng() {
  translate("en");
}

export function translateEs() {
  translate("es");
}
window.translatePT = translatePT;
window.translateEng = translateEng;
window.translateEs = translateEs;