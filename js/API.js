const url = 'http://backinterbancaria.azurewebsites.net/api/dlls';
const urlBancos = 'http://backinterbancaria.azurewebsites.net/api/banco';

//Crea Nuevo Dolar

export const nuevoDolar = async dolar => {
    try{
        await fetch(url, {
            method: 'POST',
            body: JSON.stringify(dolar),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        window.location.href = 'index.html';

    }catch(error){
        console.log(error);
    }

}

//Obtiene Lista de Dolares

export const obtenerDolares = async () => {
    try{
        const resultado = await fetch(url);
        const dolares = await resultado.json();
        return dolares;

    }catch(error){
        console.log(error);
    }
}

//Elimina Registro Dolar
export const EliminarCliente = async id => {
    try{
        await fetch(`${url}/${id}`, {
            method: 'DELETE' 
        })

    }catch(error){
        console.log(error);
    }

}

//Obtener Dolar por Id
export const obtenerDolar = async (id,banco) =>{
    try{
        const res = await fetch(`${url}/${id}/${banco}`);
        const dolar = await res.json();
        return dolar;

    }catch(error){
        console.log(error);
    }
}

//Actualizar Dolar
export const actualizarDolar = async dolar =>{
    console.log(dolar);
    try{
        await fetch(`${url}/${dolar.id}`, {
            method: 'PUT',
            body: JSON.stringify(dolar),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        window.location.href = 'index.html';

    }catch(error){
        console.log(error);
    }
}

//obtener Lista de Bancos

export const consultarBancos = async () => {
    try{
        const resultado = await fetch(urlBancos);
        const bancos = await resultado.json();
        return bancos;

    }catch(error){
        console.log(error);
    }
}