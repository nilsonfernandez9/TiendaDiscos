document.getElementById('formTask').addEventListener('submit', saveTask)

//? Añadir discos mediante formulario

function saveTask(e){

    let nombre = document.getElementById('nombre').value;
    let precio = document.getElementById('precio').value;
    let año = document.getElementById('año').value;

    const disco = {
        nombre,
        precio,
        año,
    };

    if (localStorage.getItem('discos')===null){
        let discos = [];
        discos.push(disco);
        localStorage.setItem('discos', JSON.stringify(discos));
    }else{
        let discos = JSON.parse(localStorage.getItem('discos'));
        discos.push(disco);
        localStorage.setItem('discos', JSON.stringify(discos));
    }

    getDiscos();
    document.getElementById('formTask').reset();
    e.preventDefault();
}
//? funcion para mostrar los datos agregados en la pantalla

function getDiscos() {
    let discos = JSON.parse(localStorage.getItem('discos'));
    let vistaDiscos = document.getElementById('listaDiscos');

    vistaDiscos.innerHTML = '';

    for(let i = 0; i < discos.length; i++) {
        let nombre = discos[i].nombre;
        let precio = discos[i].precio;
        let año = discos[i].año;

        vistaDiscos.innerHTML += `<div class="card mb-2">
            <div class="card-body">
                <p>${nombre} - ${precio} - ${año}</p>
                <a class="btn btn-danger" onclick="eliminarDisco('${nombre}')">
                    Borrar
                </a>
            </div>       
        </div>`
    }
}

//? funcion para eliminar disco segun el nombre agregado
function eliminarDisco(nombre){
   let discos = JSON.parse(localStorage.getItem('discos'));
   for(let i = 0; i< discos.length; i++) {
       if (discos[i].nombre == nombre){
           discos.splice(i, 1);
       }
   }
   localStorage.setItem('discos', JSON.stringify(discos))
   getDiscos();
}

//? buscar disco segun el nombre agregado
class BuscarDisco {
    constructor(){
        this.lista = []
    }
    agregar(saveTask){
        this.lista.push(saveTask)
    }
    buscar(nombre){
        var listaaux = this.lista
        for (let i=0;i<listaaux.length;i++){
            if(nombre=== listaaux[i].nombre){
                return listaaux[i]
            }
        }
        alert("No se encontro el disco que buscas")
    }
}
getDiscos();
