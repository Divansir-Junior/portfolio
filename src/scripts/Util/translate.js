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
  document.getElementById("desc2").textContent = t.desc2;
  document.getElementById("desc3").textContent = t.desc3;
  document.getElementById("desc4").textContent = t.desc4;
  document.querySelector(".footer-text").textContent = t.footerText;
  document.getElementById("roleWeb").textContent = t.roleWeb;
  document.getElementById("roleBackEnd").textContent = t.roleBackEnd;
  document.querySelectorAll(".roleFullStack").forEach(el => {
    el.textContent = t.roleFullStack;
  });
  
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