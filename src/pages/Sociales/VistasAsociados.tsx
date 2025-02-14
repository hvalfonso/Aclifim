import GestionDatosSociales from './GestionDatosSociales'; // Asegúrate de que la importación sea correcta

const VistaAsociados = () => {
    const idAsociado = 123; // Obtén el idAsociado de alguna manera (por ejemplo, de una API o un estado)

    return (
        <div>
            <GestionDatosSociales idAsociado={idAsociado} />
        
        </div>
    );
};

export default VistaAsociados;
