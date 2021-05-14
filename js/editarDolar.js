import {obtenerDolar, actualizarDolar} from './API.js';
import {mostrarAlerta,validar} from './funciones.js';

(function(){

    //Formulario
    const bancoInput = document.querySelector('#banco');
    const tipoDolarInput = document.querySelector('#tipoDolar');
    const compraInput = document.querySelector('#compra');
    const ventaInput = document.querySelector('#venta');
    const compra24Input = document.querySelector('#compra24');
    const venta24Input = document.querySelector('#venta24');
    const compra48Input = document.querySelector('#compra48');
    const venta48Input = document.querySelector('#venta48');
    const IdInput = document.querySelector('#id');

    document.addEventListener('DOMContentLoaded', async () =>{
        const parametrosURL = new URLSearchParams(window.location.search);

        const idDolar = parseInt( parametrosURL.get('id'));
        const bancoPosicion = parametrosURL.get('id').indexOf('=');
        const banco = parametrosURL.get('id').substr(bancoPosicion + 1);

        const dolar = await obtenerDolar(idDolar,banco);
        
        mostrarDolar(dolar[0]);

        //enviar formulario
        const formulario = document.querySelector('#formulario');
        formulario.addEventListener('submit', validarDolar);


    });



    function mostrarDolar(dolar){
        const { banco,dolarCompra,dolarCompra24,dolarVenta,dolarCompra48,dolarVenta24,dolarVenta48,fecha,id,tipoDolar} = dolar;

        bancoInput.value = banco;
        tipoDolarInput.value = tipoDolar;
        compraInput.value = dolarCompra;
        ventaInput.value = dolarVenta;
        compra24Input.value = dolarCompra24;
        venta24Input.value = dolarVenta24;
        compra48Input.value = dolarCompra48;
        venta48Input.value = dolarVenta48;
        IdInput.value = id;

    };

    function validarDolar(e){
        e.preventDefault();

        const dolar = {
            banco: bancoInput.value,
            tipoDolar: tipoDolarInput.value,
            compra: compraInput.value,
            venta: ventaInput.value,
            compra24: compra24Input.value,
            venta24: venta24Input.value,
            compra48: compra48Input.value,
            venta48: venta48Input.value,
            id: parseInt(IdInput.value)

        }

        if(validar(dolar)){
            mostrarAlerta('todos los campos son obligatorios');
            return;
        }

        //Reescribir Objeto
        actualizarDolar(dolar);
    }

})();