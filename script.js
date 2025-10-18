/* ---------- Adat: players tömb (tömb példa), sessionStorage támogatással ---------- */
let players = [
  { name: "Dani", goals: 5 },
  { name: "Peti", goals: 2 },
  { name: "Gabi", goals: 4 }
];

// Ha van sessionStorage-ban lista, töltsük be
const sessionPlayers = sessionStorage.getItem("players");
if (sessionPlayers) {
  players = JSON.parse(sessionPlayers);
}

/* ---------- Mentés sessionStorage-be ---------- */
function savePlayers() {
  sessionStorage.setItem("players", JSON.stringify(players));
}

/* ---------- 1) addPlayer(name, goals) - paraméteres függvény ---------- */
function addPlayer(name, goals) {
  if (!name || name.trim() === "" || isNaN(goals)) return false;
  const g = Number(goals);
  if (g < 0) return false;

  // Duplikáció ellenőrzése
  const exists = players.some(p => p.name.toLowerCase() === name.trim().toLowerCase());
  if (exists) return false;

  players.push({ name: name.trim(), goals: g });
  savePlayers(); // <<< mentés sessionStorage-be
  return true;
}

/* ---------- 2) totalGoals() - összegzés ---------- */
function totalGoals() {
  let sum = 0;
  for (let i = 0; i < players.length; i++) {
    sum += players[i].goals;
  }
  return sum;
}

/* ---------- 3) averageGoals(arr) - átlag számítás ---------- */
function averageGoals(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return 0;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i].goals;
  }
  return sum / arr.length;
}

/* ---------- 4) findPlayerByName(name) - keresés ---------- */
function findPlayerByName(name) {
  if (!name) return null;
  const q = name.toLowerCase();
  for (let i = 0; i < players.length; i++) {
    if (players[i].name.toLowerCase().includes(q)) {
      return players[i];
    }
  }
  return null;
}

/* ---------- 5) getMaxMin() - maximum / minimum ---------- */
function getMaxMin() {
  if (players.length === 0) return null;
  let max = players[0];
  let min = players[0];
  for (let i = 1; i < players.length; i++) {
    if (players[i].goals > max.goals) max = players[i];
    if (players[i].goals < min.goals) min = players[i];
  }
  return { max, min };
}

/* ---------- Megjelenítő segédfüggvény: renderTeamList() ---------- */
function renderTeamList() {
  const ul = document.getElementById("teamList");
  if (!ul) return;
  ul.innerHTML = "";
  for (let i = 0; i < players.length; i++) {
    const li = document.createElement("li");
    li.textContent = `${players[i].name} — ${players[i].goals} gól`;
    ul.appendChild(li);
  }
}

/* ---------- DOM események összekötése ---------- */
document.addEventListener("DOMContentLoaded", () => {
  renderTeamList();

  // index.html elemei
  const searchBtn = document.getElementById("searchBtn");
  if (searchBtn) {
    searchBtn.addEventListener("click", () => {
      const q = document.getElementById("searchInput").value;
      const found = findPlayerByName(q);
      const out = document.getElementById("searchResult");
      out.textContent = found ? `Talált: ${found.name} — ${found.goals} gól` : "Nincs találat";
    });
  }

  const sumBtn = document.getElementById("sumBtn");
  if (sumBtn) {
    sumBtn.addEventListener("click", () => {
      const a = Number(document.getElementById("num1").value);
      const b = Number(document.getElementById("num2").value);
      const out = document.getElementById("sumResult");
      if (isNaN(a) || isNaN(b)) {
        out.textContent = "Adj meg két számot!";
        return;
      }
      out.textContent = `Összeg: ${a + b}`;
    });
  }

  // csapatok.html elemei
  const refreshBtn = document.getElementById("refreshBtn");
  if (refreshBtn) refreshBtn.addEventListener("click", renderTeamList);

  const addBtn = document.getElementById("addPlayerBtn");
  if (addBtn) {
    addBtn.addEventListener("click", () => {
      const name = document.getElementById("newPlayerName").value;
      const goals = document.getElementById("newPlayerGoals").value;
      const ok = addPlayer(name, goals);
      const out = document.getElementById("addResult");
      if (ok) {
        renderTeamList();
        out.textContent = "Sikeresen hozzáadva.";
      } else {
        out.textContent = "Hiba: ellenőrizd a nevet és a gól számát (>=0), vagy a játékos már létezik.";
      }
    });
  }

  // statisztika.html elemei
  const totalBtn = document.getElementById("totalBtn");
  if (totalBtn) {
    totalBtn.addEventListener("click", () => {
      const out = document.getElementById("totalResult");
      out.textContent = `Összes gól: ${totalGoals()}`;
    });
  }

  const avgBtn = document.getElementById("avgBtn");
  if (avgBtn) {
    avgBtn.addEventListener("click", () => {
      const out = document.getElementById("avgResult");
      out.textContent = `Átlaggól: ${averageGoals(players).toFixed(2)}`;
    });
  }

  const maxMinBtn = document.getElementById("maxMinBtn");
  if (maxMinBtn) {
    maxMinBtn.addEventListener("click", () => {
      const mm = getMaxMin();
      const out = document.getElementById("maxMinResult");
      if (mm) out.textContent = `Legtöbb: ${mm.max.name} (${mm.max.goals}), Legkevesebb: ${mm.min.name} (${mm.min.goals})`;
    });
  }
});
