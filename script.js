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
const selettoreProp = document.querySelector("#selettorePriorita");



const aggiungiTask = () => {
  const testo = valoreTask.value.trim();

  if (testo !== "") {
    const nuovoTaskObj = {
      check: false,
      titoloTask: testo,
      priorita: selettoreProp.value,
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
    
    if (task.check) {
      nuovoLi.classList.add("done");
    } else {
      nuovoLi.classList.add("active");
    }

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
    bottoneElimina.setAttribute("data-index", index);
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

  aggiornaContatore();
  
};

const aggiornaContatore = () => {
  const taskVisibili = document.querySelectorAll("#lista-task li:not(.hide)");
  contatore.textContent = taskVisibili.length;
};

lista.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    e.preventDefault();
    const index = e.target.getAttribute("data-index");
    myTask.splice(index, 1);
    aggiornaContatore();
    aggiungiTask();
  }
});

if (bottoneAggiungi) {
  bottoneAggiungi.addEventListener("click", aggiungiTask);
}

// Gestione dei bottoni di filtro
if (bottoneTutti) {
  bottoneTutti.addEventListener("click", (e) => {
    e.preventDefault();
    const elementiLi = document.querySelectorAll("#lista-task li");
    elementiLi.forEach(li => {
      li.classList.remove("hide");
    });
     aggiornaContatore();
  });
}

if (bottoneAttivi) {
  bottoneAttivi.addEventListener("click", (e) => {
    e.preventDefault();
    const elementiLi = document.querySelectorAll("#lista-task li");
    elementiLi.forEach(li => {
      if (li.classList.contains("done")) {
        li.classList.add("hide");
      } else {
        li.classList.remove("hide");
      }
    });
     aggiornaContatore();
  });
}

if (bottoneCompletati) {
  bottoneCompletati.addEventListener('click', (e) => {
    e.preventDefault();
    const elementiLi = document.querySelectorAll("#lista-task li");
    elementiLi.forEach(li => {
      if (li.classList.contains("done")) {
        li.classList.remove("hide");
      } else {
        li.classList.add("hide");
      }
    });
     aggiornaContatore();
  });
}

aggiornaContatore();
aggiungiTask();