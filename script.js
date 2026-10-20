/*
  REGOLE
  - Continua quello che hai iniziato stamani in classe.
  - Niente eventi (li vediamo domani): chiama le funzioni dalla console o all'avvio.
  - Solo const/let, mai var. Solo querySelector/querySelectorAll per il DOM.
*/

/* SCRIVI QUI LE TUE FUNZIONI:
   1. Crea aggiungiTask per accettare priorita - done
   2. Aggiungi bottone Elimina su ogni task - done
   6. evidenzia(indice) / togliEvidenza(indice) -- contorno della task, una a caso --
   7. data automatica nel task -- odierna -- done
   8. contaPerPriorita()
   -- non va toccato html --
*/

const bottoneAggiungi = document.querySelector("#bottone-aggiungi");
const valoreTask = document.querySelector("#nuovo-task");
const lista = document.querySelector("#lista-task");
const d = new Date();
const todayDate = d.toLocaleDateString("it-IT", { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit", second: "2-digit" });
const contatore = document.querySelector("#contatore");

const aggiungiTask = (testo, priorita) => {

  if (testo !== "") {
    const nuovoLi = document.createElement("li");

    const spanPriorita = document.createElement("span");
    spanPriorita.className = "badge";
    spanPriorita.textContent = priorita;


    const spanTesto = document.createElement("span");
    spanTesto.textContent = testo;


    const spanData = document.createElement("span");
    spanData.textContent = todayDate;


    const bottoneElimina = document.createElement("button");
    bottoneElimina.textContent = "Elimina";
    bottoneElimina.setAttribute("data-id", Date.now());

    nuovoLi.appendChild(spanTesto);
    nuovoLi.appendChild(spanPriorita);
    nuovoLi.appendChild(spanData);
    nuovoLi.appendChild(bottoneElimina);

    lista.appendChild(nuovoLi);
  }
};

aggiungiTask("Pagare le bollette", "Alta");
aggiungiTask("Studiare JavaScript", "Media");
aggiungiTask("Comprare il pane", "Bassa");
aggiungiTask("Chiamare il dentista", "Alta");
aggiungiTask("Riposarsi", "Alta");

const modificaTask = (indice, nuovoTesto) => {
  const elementiLi = document.querySelectorAll("#lista-task li");

  if (elementiLi[indice]) {
    const primoSpan = elementiLi[indice].querySelector("span");
    if (primoSpan) {
      primoSpan.textContent = nuovoTesto;
    }
  }
};

const aggiornaContatore = () => {
  contatore.textContent = lista.children.length;
};
aggiornaContatore();

const contaPerPriorita = (prioritaCercata) => {
    const elementiLi = document.querySelectorAll("#lista-task li");
    let cont = 0;

    for (let i = 0; i < elementiLi.length; i++) {
        const badge = elementiLi[i].querySelector(".badge");
        if (badge && badge.textContent.toLowerCase() === prioritaCercata.toLowerCase()) {
            cont++;
        }
    }

    return cont;
};

console.log(contaPerPriorita("alta"))
console.log(contaPerPriorita("media"))
console.log(contaPerPriorita("bassa"))