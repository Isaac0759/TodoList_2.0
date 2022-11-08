const tache = document.getElementById('task');
const search = document.getElementById('search');
const formAddTask = document.querySelector('.add');
const main = document.querySelector('.list-group');

let tasks = [];

// Au soumission du formulaire
formAddTask.addEventListener('submit', (e) => {
    e.preventDefault();
    let valeurTache = tache.value;
    if (valeurTache != "") {
        tasks.push(valeurTache);
        generateTemplate();
        updatePage();

        tache.value = "";
    }
    else{
        alert("Vous devez saisir une tache");
    }
    
});


// Fonction de mise ajout de la page
const updatePage = () =>{
    const progressBar= document.getElementById('bar');
    document.getElementById('tasks-total').textContent = tasks.length;
    document.getElementById('tasks-finie').textContent = completed();
    document.getElementById('tasks-restante').textContent = tasks.length - completed();

    const percentage = (completed() * 100 / tasks.length) || 0;
    progressBar.style.width = `${percentage}%`;
    supprimer();

};

//MAJ

const maj = () =>{
    document.querySelectorAll('input[type="checkbox"]').forEach((check)=>{
        check.addEventListener('click',(e)=>{
            updatePage();
        })
    })
}

// Fonction qui genere les taches sur le dom
const generateTemplate = () => {
    const html = `
            <label class="list-group-item d-flex gap-3">
              <input class="form-check-input flex-shrink-0" type="checkbox" style="font-size: 1.375em;">
              <span class="pt-1 form-checked-content">
                <strong>${tache.value}</strong>
              </span>
              <i class="ms-auto btn btn-danger delete bi bi-trash"></i>
            </label>
    `;
    main.innerHTML += html;
    maj();
}


//Fonction qui determine le nombre de tache terminé
const completed = () => {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked')
    return checkboxes.length;
};

//Fonction qui permet de supprimer une tache
const supprimer = ()=>{
    main.addEventListener('click', (e) =>{
        if (e.target.classList.contains('bi-trash')) {
            e.target.parentElement.remove();
        }
    });

}

//Fonction Recherche
