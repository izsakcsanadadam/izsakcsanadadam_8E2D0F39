# Dokumentáció

## Téma (Miről szól a weboldal?)
A weboldal egy rövid, tanuló jellegű focis bemutató: csapatok és játékosok listáját mutatja be, egyszerű statisztikákkal (összeg, átlag, max/min), valamint keresési és beviteli funkciókkal. Cél: a webfejlesztés és alapprogramozási tételek gyakorlása.

## Használt technológiák
- HTML5 — oldalak szerkezete (index.html, teams.html, stats.html)
- CSS — megjelenés (`style.css`)
- JavaScript — működés (`script.js`), DOM-kezelés, tömbműveletek

## Fájlok és rövid leírásuk
- `index.html` — Kezdőlap, gyors keresés és egyszerű aritmetikai példa.
- `teams.html` — Csapatok oldal: játékoslista betöltése, új játékos hozzáadása.
- `stats.html` — Statisztikák: átlag, maximum/minimum gólok.
- `style.css` — Oldalak stílusa, sötét téma alapértelmezett.
- `script.js` — Minden JS logika: tömb, ciklus, függvények, eseménykezelők.

## JavaScript függvények (rövid)
- `addPlayer(name, goals)` — paraméteres; új játékost ad a `players` tömbhöz. (Vissza: boolean)
- `totalGoals()` — végigmegy a `players` tömbön és összeadja a gólszámokat (összegzés).
- `averageGoals(arr)` — paraméterként tömböt vár; visszaadja az átlagos gólértéket.
- `findPlayerByName(name)` — paraméteres keresés; visszaadja a találat objektumot vagy `null`-t.
- `toggleTheme()` — logikai elágazással témaváltás.
- `getMaxMin()` — megkeresi a legtöbb és legkevesebb gólos játékost (max/min tétel).
- `renderTeamList()` — DOM-ba kiírja a játékosokat.

## Mely programozási tételek alkalmazva?
- **Összegzés:** `totalGoals()` és `averageGoals()` (összegzés a reduce/ciklus használatával).
- **Keresés:** `findPlayerByName()` (lineáris keresés).

## Követelmények ellenőrzése (hogyan teljesül):
1. **Legalább 3 oldal** — index.html, teams.html, stats.html ✅
2. **Legalább 4 JS függvény** — addPlayer, totalGoals, averageGoals, findPlayerByName, getMaxMin, toggleTheme, renderTeamList (több is van) ✅
3. **Kell szerepeljen:** aritmetikai műveletek (összeg, átlag), logikai műveletek (`if`-ek), elágazás (`if`), tömb (`players`), ciklus (`for`) és függvények — mind megtalálható ✅
4. **Programozási tétel alkalmazva** — összegzés + keresés + max/min ✅

## AI használat dokumentáció (ha használtál AI-t)
**Prompt (példa):**
> "Készíts nekem egy 3 oldalas HTML/CSS/JS projektet fociról, ami tartalmaz legalább 4 JS függvényt (egy paraméteres is), használ tömböt, ciklust, elágazást, logikai és aritmetikai műveleteket, és alkalmazza legalább az összegzés vagy keresés tételét. Add meg a teljes fájlstruktúrát és dokumentációt is."

**AI output (röviden):**
- Generált egy komplett vázat: `index.html`, `teams.html`, `stats.html`, `style.css`, `script.js`, valamint `dokumentacio.md`. (A pontos kód megtalálható a repo-ban.)
