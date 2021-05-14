import {mostrarAlerta, validar} from './funciones.js';
import {nuevoDolar, consultarBancos} from './API.js';

(function() {
    const bancoSelect = document.querySelector('#banco');

    document.addEventListener('DOMContentLoaded', async () =>{
        const bancos= await consultarBancos();
        selectBancos(bancos);
    });

    function selectBancos(bancos){
        bancos.forEach(banco =>{
            const {nombreBanco} = banco;

            const option = document.createElement('option');
            option.value = nombreBanco;
            option.textContent = nombreBanco;
            bancoSelect.appendChild(option);
        })

    }



    const formulario = document.querySelector('#formulario');
    formulario.addEventListener('submit', validarDolar);

    function validarDolar(e) {
        e.preventDefault();

        const banco = document.querySelector('#banco').value;
        const tipoDolar = document.querySelector('#tipoDolar').value;
        const compra = document.querySelector('#compra').value;
        const venta = document.querySelector('#venta').value;
        const compra24 = document.querySelector('#compra24').value;
        const venta24 = document.querySelector('#venta24').value;
        const compra48 = document.querySelector('#compra48').value;
        const venta48 = document.querySelector('#venta48').value;

        const dolar = {
            banco,
            tipoDolar,
            compra,
            venta,
            compra24,
            venta24,
            compra48,
            venta48

        }

        if(validar(dolar)){
            mostrarAlerta('todos los campos son obligatorios');
            return;
        }

        nuevoDolar(dolar);

    }

})();