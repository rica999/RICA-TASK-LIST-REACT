import React from "react";

/*CUSTOM HOOK PARA LOCALSTORAGE*/
function useLocalStorage(itemName, initialValue) {

    const [item, setItem] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true); //determina si se está cargando la lista de tareas
    const [error, setError] = React.useState(false); //determina si ocurrió un error con la carga

    React.useEffect(()=>{
        setTimeout(()=>{
            try {
                const localStorageItem = localStorage.getItem(itemName); //obtener la lista de tareas guardadas en el localStorage
                let parseItem;
                if (!localStorageItem) { //en caso no haya ninguna tarea se almacenará un array vacío.
                    parseItem = initialValue;
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                } else {
                    parseItem = JSON.parse(localStorageItem);
                    setItem(parseItem);
                }
                setLoading(false);
            } catch (error) {
                setLoading(false);
                setError(true);
            }
        },2000);
    },[])

    const savedItem = (mewItem) => {
        localStorage.setItem(itemName, JSON.stringify(mewItem));
        setItem(mewItem);
    }

    return {
        item,
        savedItem,
        loading,
        error
    }
}

export {useLocalStorage};