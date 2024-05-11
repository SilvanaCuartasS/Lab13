export const cargaPersonajes = async () => {
    const response = await fetch("https://valorant-api.com/v1/agents"); 
    const info = await response.json();
    
    return info.data;
};

export const personajePorId = async (id) => {
    const personaje = await cargaPersonajes();
  
    for (const item of personaje){
      if(item.uuid === id) {
        return item;
      }
    }
  
    throw new Error ("Personaje no encontrado");
}