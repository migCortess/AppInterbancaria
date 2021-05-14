import {obtenerDolares,EliminarCliente} from './API.js';

(function(){
    const listado = document.querySelector('#listado-Dolares');

    document.addEventListener('DOMContentLoaded', mostrarDolares);

    listado.addEventListener('click', confirmarEliminar);

    function confirmarEliminar(e){
        if(e.target.classList.contains('eliminar')){
            const dolarId = parseInt(e.target.dataset.dolar);
            console.log(dolarId);
            const confirmar = confirm("¿Deseas Elimiar Este Registro?");
            if(confirmar){
                EliminarCliente(dolarId);
            }
        }
    }

    async function mostrarDolares(){
        
        const dolares = await obtenerDolares();

        dolares.forEach(dolar => {
            const { id,
                    banco, 
                    dolarCompra, 
                    dolarVenta,
                    dolarCompra24,
                    dolarVenta24,
                    dolarCompra48,
                    dolarVenta48,
                    tipoDolar,
                    fecha
                } = dolar;
            const row = document.createElement('tr');

            row.innerHTML += `
            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <p class="text-sm text-gray-700 font-bold"> ${banco} </p>
                <p class="text-sm text-gray-700"> ${tipoDolar} </p>
                <p class="text-sm text-blue-700"> ${fecha} </p>
            </td>
            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <p class="text-sm text-green-700"> $${dolarCompra} </p>
            </td>
            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <p class="text-sm text-red-700"> $${dolarVenta} </p>
            </td>
            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <p class="text-sm text-green-700"> $${dolarCompra24} </p>
            </td>
            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <p class="text-sm text-red-700"> $${dolarVenta24} </p>
            </td>
            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <p class="text-sm text-green-700"> $${dolarCompra48} </p>
            </td>
            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <p class="text-sm text-red-700"> $${dolarVenta48}</p>
            </td>
            <td class="px-2 py-1 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
                <a href="editar-dolar.html?id=${id}/?banco=${banco}" class=" inline-block px-6 py-4 rounded-full shadow-sm font-medium transition duration-200 ease-in-out transform hover:scale-105 bg-green-600 hover:bg-green-200 text-gray-100 hover:text-blue-600 mr-5"> Editar </a>
            </td>
            <td class="px-2 py-1 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
                <a href="index.html" data-dolar="${id}" class="text-gray-100 hover:text-red-600 eliminar inline-block px-6 py-4 rounded-full shadow-sm font-medium transition duration-200 ease-in-out transform hover:scale-105 bg-red-600 hover:bg-red-200 mr-5">Eliminar</a>
            </td>
            `
            listado.appendChild(row);
            
        });

    }

})();