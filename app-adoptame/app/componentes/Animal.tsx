interface AnimalProps {
    imagen: string;
    nombre: string;
    descripcion: string;
}

const Animal: React.FC<AnimalProps> = ({ imagen, nombre, descripcion }) => {
  return (

    <div className="bg-[#E0DDDD] text-white min-h-130 rounded hover:scale-105">
        <img src={imagen} alt={nombre}/>
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-2 text-black">{nombre}</h1>
            <p className="text-black mb-4">{descripcion}</p>
            <button>
                favorito_icono
            </button>
        </div>
    </div>
  );
};

export default Animal;