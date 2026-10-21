/*
REGOLE
- Le risposte vanno scritte in JavaScript sotto questi commenti.
- Pattern fondamentale: stato -> render() -> eventi.
  Tutto cio' che vedi a schermo dipende dallo stato.
  Gli eventi modificano lo stato e poi chiamano render().
- Apri index.html nel browser. Apri la console (DevTools) per gli errori.
- Cerca su MDN solo i concetti dichiarati come "cerca tu":
  localStorage, Blob/URL.createObjectURL, FileReader.
  Tutto il resto e' stato visto in settimana.
- Niente AI per generare codice. Niente template scaricati.
*/


/* STATO
   - una variabile per il filtro corrente
   - una variabile per l'ordinamento corrente
   - una variabile per la stringa di ricerca corrente
*/

/* RENDER()
   Una sola funzione che ridipinge la lista. A ogni chiamata:
   1) parte dall'array completo,
   2) filtra,
   3) ordina,
   4) svuota il container DOM,
   5) ricrea gli elementi DOM per gli oggetti risultanti.
   Aggiorna anche conteggi e statistiche.
   Salva lo stato in localStorage in fondo a render() (cerca tu come funziona).
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* FORM CON VALIDAZIONE
   addEventListener("submit") sul form.
   event.preventDefault().
   Leggi i valori con .value.trim().
   Se uno dei campi obbligatori e' vuoto, mostra errore e return.
   Altrimenti push allo stato, form.reset(), render().
   Id univoco con Date.now().
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* INTERAZIONI BASE — eliminare, modificare, contare
   - Elimina: filter per id, render(). Event delegation sul container.
   - Modifica in-place: button "Modifica". Al click il testo diventa <input>,
     si conferma con Invio o blur.
   - Conteggi dinamici dentro render().
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* RICERCA, FILTRO, ORDINAMENTO
   - Ricerca live: <input> con event "input". Salva in stato e render().
   - Filtro: <select> con event "change". Salva in stato e render().
   - Ordinamento: due button (o select). Salva in stato e render().
   I tre si compongono dentro render() in fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* NOTIFICHE TEMPORANEE
   Funzione notifica(testo) che imposta il testo del <div id="notifica">,
   lo mostra (display: block), poi dopo 3000ms (setTimeout) lo nasconde.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* TEMA CHIARO/SCURO
   Un button che chiama document.body.classList.toggle("dark").
   In CSS scrivi le regole opposte (es. body.dark { background: #111; ... }).
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* PERSISTENZA — localStorage (cerca tu su MDN)
   - In fondo a render(), salva lo stato:
       localStorage.setItem("dati", JSON.stringify(stato));
   - All'avvio, prima della prima render(), carica:
       const salvato = localStorage.getItem("dati");
       if (salvato) stato = JSON.parse(salvato);
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* RIORDINO ↑ ↓
   Due button su ogni elemento. Click su ↑ scambia con il precedente nell'array,
   ↓ con il successivo. Event delegation. Poi render().
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* ESPORTAZIONE / IMPORTAZIONE JSON (cerca tu su MDN)
   - Esporta: crea un Blob con JSON.stringify(stato), genera un URL con
     URL.createObjectURL e simula il click su un <a download>.
   - Importa: <input type="file"> + FileReader per leggere il contenuto come
     testo, JSON.parse, sostituisci lo stato, render().
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* STATISTICHE GRAFICHE
   Almeno due indicatori: contatori grandi e/o barre orizzontali
   (<div> con width: X% in base al dato). Aggiorna dentro render().
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* MULTI-VISTA — lista / card / tabella
   Una variabile globale "vista" che render() legge per decidere quale HTML
   produrre. Tre button cambiano "vista" e chiamano render().
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* CATEGORIE
   Aggiungi un campo categoria nello schema. Nel form un <select> per sceglierla.
   In render(), raggruppa con reduce in { categoria: [elementi] } e disegna un
   header per categoria con sotto la lista di quella categoria.
*/


const d = new Date();
const todayDate = d.toLocaleDateString("it-IT", { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit", second: "2-digit" });

const myTask = [
  {
    check: false,
    titoloTask: 'Pagare le bollette',
    priorita: 'alta',
    data: todayDate,
  },
  {
    check: false,
    titoloTask: 'Studiare JavaScript',
    priorita: 'media',
    data: todayDate,
  },
  {
    check: false,
    titoloTask: 'Comprare il pane',
    priorita: 'bassa',
    data: todayDate,
  },
  {
    check: false,
    titoloTask: 'Chiamare il dentista',
    priorita: 'alta',
    data: todayDate,
  },
  {
    check: false,
    titoloTask: 'Riposarsi',
    priorita: 'bassa',
    data: todayDate,
  },
  {
    check: false,
    titoloTask: 'Spritz Time',
    priorita: 'alta',
    data: todayDate,
  },
];

const bottoneAggiungi = document.querySelector("#bottone-aggiungi");
const bottoneTutti = document.querySelector("#bottone-tutti");
const bottoneAttivi = document.querySelector("#bottone-attivi");
const bottoneCompletati = document.querySelector("#bottone-completati");
const valoreTask = document.querySelector("#nuovo-task");
const lista = document.querySelector("#lista-task");
const contatore = document.querySelector("#contatore");

const aggiornaContatore = () => {
  contatore.textContent = myTask.length;
};

const aggiungiTask = () => {
  const testo = valoreTask.value.trim();

  if (testo !== "") {
    const nuovoTaskObj = {
      titoloTask: testo,
      priorita: "media",
      data: new Date().toLocaleDateString("it-IT", { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit", second: "2-digit" })
    };

    myTask.push(nuovoTaskObj);
    valoreTask.value = "";
    aggiornaContatore();
  }

  lista.textContent = "";

  myTask.forEach((task, index) => {

    const checkStatus = document.createElement("input");
    checkStatus.type = "checkbox";
    checkStatus.checked = task.check;

    const nuovoLi = document.createElement("li");
    nuovoLi.classList.add(`priorita-${task.priorita}`);

    const taskDiv = document.createElement("div");
    taskDiv.className = "divTask";

    const spanPriorita = document.createElement("span");
    spanPriorita.className = "badge";
    spanPriorita.textContent = task.priorita;

    const textSpan = document.createElement('span');
    textSpan.textContent = task.titoloTask;

    checkStatus.addEventListener('click', (e) => {
  task.check = e.target.checked;
  if (task.check === false) {
    nuovoLi.classList.remove("done")
    nuovoLi.classList.add("active");
  } else {
    nuovoLi.classList.add("done")
    nuovoLi.classList.remove("active");
  }
});

    const btnDiv = document.createElement("div");
    btnDiv.className = "divData";

    const spanData = document.createElement("span");
    spanData.className = "data";
    spanData.textContent = task.data;

    const bottoneElimina = document.createElement("button");
    bottoneElimina.textContent = "Elimina";
    bottoneElimina.setAttribute(index, -1);
    bottoneElimina.type = "button";

    nuovoLi.appendChild(textSpan);
    nuovoLi.appendChild(spanPriorita);
    btnDiv.appendChild(spanData);
    btnDiv.appendChild(bottoneElimina);
    taskDiv.appendChild(checkStatus);
    nuovoLi.appendChild(btnDiv);
    nuovoLi.appendChild(taskDiv);

    lista.appendChild(nuovoLi);
  });
};

lista.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    e.preventDefault();
    const index = e.target.getAttributeNames()[0];
    myTask.splice(index, 1);
    aggiornaContatore();
    aggiungiTask();
  }
});

if (bottoneAggiungi) {
  bottoneAggiungi.addEventListener("click", aggiungiTask);
}

/* const filtraCompletati = () => {
  lista.textContent = "";
  myTask.forEach(() => {
    if (myTask.check.class === "done")
      const listaDone = myTask;
    else
      const listaActive = myTask;
});
}

bottoneCompletati.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    listaDone = myTask;
    aggiornaContatore();
    aggiungiTask();
  }
}); */


aggiornaContatore();
aggiungiTask();

/*const contaPerPriorita = (prioritaCercata) => {
  const elementiLi = document.querySelectorAll("#lista-task li");
  let cont = 0;

  for (let i = 0; i < elementiLi.length; i++) {
    const badge = elementiLi[i].querySelector(".badge");
    if (badge && badge.textContent.toLowerCase() === prioritaCercata.toLowerCase()) {
      cont++;
    }
  }

  return cont;
};*/


/*const modificaTask = (indice, nuovoTesto) => {
  const elementiLi = document.querySelectorAll("#lista-task li");

  if (elementiLi[indice]) {
    const primoSpan = elementiLi[indice].querySelector("span");
    if (primoSpan) {
      primoSpan.textContent = nuovoTesto;
    }
  }
};*/

/* nuovoLi.appendChild(textSpan);
    nuovoLi.appendChild(spanPriorita);
    btnDiv.appendChild(spanData);
    btnDiv.appendChild(bottoneElimina);
    taskDiv.appendChild(checkStatus);
    nuovoLi.appendChild(btnDiv);
    nuovoLi.appendChild(taskDiv); */