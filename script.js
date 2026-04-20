let lots = [];

function ajouterLot() {
  let id = document.getElementById("lotId").value;
  let pf = document.getElementById("pf").value;
  let emballage = document.getElementById("emballage").value;

  let lot = {
    id,
    pf,
    emballage,
    status: "en cours"
  };

  lots.push(lot);
  afficherLots();
  updateDashboard();
}

function afficherLots() {
  let liste = document.getElementById("listeLots");
  liste.innerHTML = "";

  lots.forEach((l, index) => {
    liste.innerHTML += `
      <li>
        Lot ${l.id} - PF: ${l.pf} - Emb: ${l.emballage}
        <button onclick="valider(${index})">✔</button>
        <button onclick="bloquer(${index})">❌</button>
      </li>
    `;
  });
}

function valider(i) {
  lots[i].status = "conforme";
  afficherLots();
  updateDashboard();
}

function bloquer(i) {
  lots[i].status = "non conforme";
  afficherLots();
  updateDashboard();
}

function updateDashboard() {
  document.getElementById("totalLots").innerText = lots.length;
  document.getElementById("okLots").innerText = lots.filter(l => l.status === "conforme").length;
  document.getElementById("badLots").innerText = lots.filter(l => l.status === "non conforme").length;
}
