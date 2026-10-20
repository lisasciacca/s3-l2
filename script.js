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
   8. contaPerPriorita() -done-
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
    const nuovoDiv = document.createElement("div");

    const spanPriorita = document.createElement("span");
    spanPriorita.className = "badge";
    spanPriorita.textContent = priorita;


    const spanTesto = document.createElement("span");
    spanTesto.textContent = testo;

    nuovoDiv.className = "divData";

    const spanData = document.createElement("span");
    spanData.className = "data";
    spanData.textContent = todayDate;


    const bottoneElimina = document.createElement("button");
    bottoneElimina.textContent = "Elimina";

    nuovoLi.appendChild(spanTesto);
    nuovoLi.appendChild(spanPriorita);
    nuovoDiv.appendChild(spanData);
    nuovoDiv.appendChild(bottoneElimina);
    nuovoLi.appendChild(nuovoDiv);
    

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


const classePriorita = () => {
    const elementiLi = document.querySelectorAll("#lista-task li");
    let cont = 0;

    for (let i = 0; i < elementiLi.length; i++) {
        const badge = elementiLi[i].querySelector(".badge");
        
        if (badge) {
            switch (badge.textContent.toLowerCase()) {
                case "alta":
                    elementiLi[i].className = "priorita-alta";
                    cont++;
                    break;
                case "media":
                    elementiLi[i].className = "priorita-media";
                    cont++;
                    break;
                case "bassa":
                    elementiLi[i].className = "priorita-bassa";
                    cont++;
                    break;
            }
        }
    }
};

classePriorita()