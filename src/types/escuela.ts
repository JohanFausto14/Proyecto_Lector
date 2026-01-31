export interface Escuela {
    id: number;
    nombre: string;
    email: string;
    telefono: string;
    direccion: string;
    ciudad: string;
    estado: string;
    codigoPostal: string;
    nombreDirector: string;
    emailDirector: string;
    totalAlumnos: number;
    totalProfesores: number;
    totalGrupos: number;
    licenciasActivas: number;
    fechaRegistro: string;
    estado_cuenta: 'activa' | 'inactiva' | 'suspendida';
    logo?: string;
}

export interface CreateEscuelaDTO {
    nombre: string;
    email: string;
    telefono: string;
    direccion: string;
    ciudad: string;
    estado: string;
    codigoPostal: string;
    nombreDirector: string;
    emailDirector: string;
}

export interface UpdateEscuelaDTO extends Partial<CreateEscuelaDTO> {
    id: number;
}

export interface EscuelaStats {
    totalEscuelas: number;
    escuelasActivas: number;
    totalAlumnos: number;
    totalProfesores: number;
    licenciasActivas: number;
    promedioAlumnosPorEscuela: number;
}