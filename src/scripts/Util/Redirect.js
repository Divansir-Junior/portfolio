document.addEventListener("DOMContentLoaded", () => {
  const linkMap = {
    link1: "https://github.com/Divansir-Junior/LojaDeSapatos",
    link2: "https://github.com/Divansir-Junior/Full-Stack-TODO",
    link3: "https://github.com/Divansir-Junior/Coffzin",
    link4: "https://github.com/Divansir-Junior/Check-ur-space-day"
  };

  document.querySelectorAll(".link").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const id = link.id;

      if (linkMap[id]) {
        window.location.href = linkMap[id];
        // ou window.open(linkMap[id], "_blank"); se quiser abrir nova aba
      } else {
        console.warn(`Nenhuma URL mapeada para o ID: ${id}`);
      }
    });
  });
});
