    
    interface Persona {
        nombreCompleto: string;
        edad:number;
        direccion: Direccion;
    } 

    interface Direccion {
        pais:string;
        casaNo:number;
    }


export const ObjetosLiterales = () => {

    const persona:Persona = {
        nombreCompleto: 'Hernán',
        edad: 21,
        direccion: {
            pais: 'Argentina',
            casaNo: 1189
        }
    }

    return (
        <>
            <h3>Objetos Literales</h3>
            <pre>
                {
                    JSON.stringify( persona,null,2)
                }
            </pre>
        </>
    )
}
