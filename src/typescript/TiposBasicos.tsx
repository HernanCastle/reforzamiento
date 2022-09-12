

export const TiposBasicos = () => {

    const nombre: string  = "Juan";
    const edad: number    = 30;
    const estaActivo: boolean = false;

    const poderes: string[] = ['Velocidad','Volar','Respirar en el agua'];//

    
    return (
        <>
        <h3>Tipos Básicos</h3>
        {nombre},{edad},{(estaActivo) ? 'activo' : 'inactivo'}
        <br />
        {poderes.join(', ')}
        </>
    )
}
