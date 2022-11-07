const tache = document.getElementById('task');
const search = document.getElementById('search');
const formAddTask = document.querySelector('.add');
const main = document.querySelector('.content');

let tasks = [];

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

const updatePage = () =>{
    const progressBar= document.getElementById('bar');
    document.getElementById('tasks-total').textContent = tasks.length;
    document.getElementById('tasks-finie').textContent = completed();
    document.getElementById('tasks-restante').textContent = tasks.length - completed();

    const percentage = (completed() * 100 / tasks.length) || 0;
    progressBar.style.width = `${percentage}%`;
}


const generateTemplate = () => {
    const html = `
        <div class="card mb-1">
            <div class="card-body d-flex">
                <div class="input-group">
                    <input type="checkbox" class="me-2">
                    <b>${tache.value}</b>
                </div>
                <div class="btn-group">
                    <button class="btn btn-warning"><i class="bi bi-pen"></i></button>
                    <button class="btn btn-danger delete"><i class="bi bi-trash"></i></button>
                </div>
            </div>
        </div>   
    `;
    main.innerHTML += html;
}

const completed = () => {
    let nombre = 0;
    document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
        if (checkbox.checked) {
            nombre++;
            console.log(nombre);
        }
    });
    return nombre;
};

main.addEventListener('click', (e) =>{
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
});