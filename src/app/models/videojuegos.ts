
export enum VideojuegoEstado{
  Disponible = "Disponible",
  Agotado = "Agotado"
}

//creamos una interfaz de videojuegos
export interface Videojuego{
  id: number;
  titulo: string;
  imagen: string;
  estado: VideojuegoEstado;
  precioVenta: number;
  cliente: string;
  vendedor: string;
}

export const listaVideoJuegosTonotas: Videojuego[] = [
  {
    id: 1,
    titulo: "Bioshock Infinite",
    imagen:"bioshock.jpg",
    estado: VideojuegoEstado.Disponible,
    precioVenta: 40,
    cliente: "cuatrolitro",
    vendedor:"Alexis Suarez",
  },
  {
    id: 2,
    titulo: "The Legend of Zelda: Ocarina of Time",
    imagen:"zelda.jpg",
    estado: VideojuegoEstado.Disponible,
    precioVenta: 40,
    cliente: "cuatrolitro",
    vendedor:"Alexis Suarez",
  },
  {
    id: 3,
    titulo: "Hollow Knight",
    imagen:"hollow.jpg",
    estado: VideojuegoEstado.Disponible,
    precioVenta: 40,
    cliente: "cuatrolitro",
    vendedor:"Alexis Suarez",
  },
  {
    id: 4,
    titulo: "Blasphemous",
    imagen:"blasphemous.jpg",
    estado: VideojuegoEstado.Disponible,
    precioVenta: 40,
    cliente: "cuatrolitro",
    vendedor:"Alexis Suarez",
  },
  {
    id: 5,
    titulo: "Resident Evil 4",
    imagen:"resident.jpg",
    estado: VideojuegoEstado.Disponible,
    precioVenta: 40,
    cliente: "cuatrolitro",
    vendedor:"Alexis Suarez",
  },
  {
    id: 6,
    titulo: "Pokemon: Heart Gold",
    imagen:"pokemon.jpg",
    estado: VideojuegoEstado.Disponible,
    precioVenta: 40,
    cliente: "cuatrolitro",
    vendedor:"Alexis Suarez",
  },
  {
    id: 7,
    titulo: "Minecraft",
    imagen:"minecraft.jpg",
    estado: VideojuegoEstado.Disponible,
    precioVenta: 40,
    cliente: "cuatrolitro",
    vendedor:"Alexis Suarez",
  },
  {
    id: 8,
    titulo: "God of war: Ragnarok",
    imagen:"godofwar.jpg",
    estado: VideojuegoEstado.Disponible,
    precioVenta: 40,
    cliente: "cuatrolitro",
    vendedor:"Alexis Suarez",
  },
  {
    id: 9,
    titulo: "Guacameele 1 y 2",
    imagen:"guacameele.jpg",
    estado: VideojuegoEstado.Disponible,
    precioVenta: 40,
    cliente: "cuatrolitro",
    vendedor:"Alexis Suarez",
  },
  {
    id: 10,
    titulo: "Hollow Knight: Silksong",
    imagen:"bioshock.jpg",
    estado: VideojuegoEstado.Disponible,
    precioVenta: 40,
    cliente: "cuatrolitro",
    vendedor:"Alexis Suarez",
  },
  {
    id: 11,
    titulo: "Fornite",
    imagen:"fornite.jpg",
    estado: VideojuegoEstado.Disponible,
    precioVenta: 40,
    cliente: "cuatrolitro",
    vendedor:"Alexis Suarez",
  },
]
