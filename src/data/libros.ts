export interface Libro {
    id: number;
    title: string;
    author: string;
    coverColor: string;
    progress: number;
    owned: boolean;
    year: number;
    pages: number;
    publisher: string;
    price: number;
    synopsis: string;
    sample: string;
}

export const libros: Libro[] = [
    {
        id: 1,
        title: "El Quijote",
        author: "Miguel de Cervantes",
        coverColor: "#e63946",
        progress: 45,
        owned: true,
        year: 1605,
        pages: 863,
        publisher: "Editorial Clásica",
        price: 0,
        synopsis: "La ingeniosa historia del hidalgo Don Quijote de la Mancha y su fiel escudero Sancho Panza.",
        sample: "En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero..."
    },
    {
        id: 2,
        title: "Cien Años de Soledad",
        author: "Gabriel G. Márquez",
        coverColor: "#f4a261",
        progress: 10,
        owned: true,
        year: 1967,
        pages: 417,
        publisher: "Sudamericana",
        price: 15,
        synopsis: "La historia de la familia Buendía en el pueblo ficticio de Macondo a lo largo de siete generaciones.",
        sample: "Muchos años después, frente al pelotón de fusilamiento, el coronel Aureliano Buendía había de recordar aquella tarde remota..."
    },
    {
        id: 3,
        title: "1984",
        author: "George Orwell",
        coverColor: "#264653",
        progress: 0,
        owned: false,
        year: 1949,
        pages: 328,
        publisher: "Secker & Warburg",
        price: 12,
        synopsis: "Una novela distópica social de ciencia ficción y precaución.",
        sample: "Era un día luminoso y frío de abril y los relojes daban las trece..."
    },
    {
        id: 4,
        title: "Orgullo y Prejuicio",
        author: "Jane Austen",
        coverColor: "#2a9d8f",
        progress: 100,
        owned: true,
        year: 1813,
        pages: 432,
        publisher: "T. Egerton",
        price: 0,
        synopsis: "Una novela romántica de modales.",
        sample: "Es una verdad mundialmente reconocida que un hombre soltero, poseedor de una gran fortuna, necesita una esposa."
    },
    {
        id: 5,
        title: "Fahrenheit 451",
        author: "Ray Bradbury",
        coverColor: "#e76f51",
        progress: 0,
        owned: false,
        year: 1953,
        pages: 249,
        publisher: "Ballantine Books",
        price: 10,
        synopsis: "Un futuro en el que los libros están prohibidos y los 'bomberos' queman cualquiera que se encuentre.",
        sample: "Era un placer quemar."
    }
];
