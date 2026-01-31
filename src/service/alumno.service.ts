// services/alumno.service.ts

export interface Alumno {
    id: number;
    nombre: string;
    email: string;
    grupo: string;
    librosActivos: number;
    progreso: number;
    estado: 'activo' | 'inactivo';
    fechaRegistro: string;
    telefono?: string;
    fechaNacimiento?: string;
}

export interface CreateAlumnoDTO {
    nombre: string;
    email: string;
    grupo: string;
    telefono: string;
    fechaNacimiento: string;
}

export interface UpdateAlumnoDTO extends Partial<CreateAlumnoDTO> {
    id: number;
}

// Servicio placeholder - aquí irán las llamadas reales a la API
export class AlumnoService {
    private static baseUrl = '/api/alumnos'; // URL de tu API

    static async getAll(): Promise<Alumno[]> {
        // TODO: Implementar llamada real a la API
        // const response = await fetch(this.baseUrl);
        // return response.json();
        
        console.log('AlumnoService.getAll() - Placeholder');
        return [];
    }

    static async getById(id: number): Promise<Alumno | null> {
        // TODO: Implementar llamada real a la API
        // const response = await fetch(`${this.baseUrl}/${id}`);
        // return response.json();
        
        console.log(`AlumnoService.getById(${id}) - Placeholder`);
        return null;
    }

    static async create(data: CreateAlumnoDTO): Promise<Alumno> {
        // TODO: Implementar llamada real a la API
        // const response = await fetch(this.baseUrl, {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(data)
        // });
        // return response.json();
        
        console.log('AlumnoService.create() - Placeholder', data);
        return {
            id: Date.now(),
            ...data,
            librosActivos: 0,
            progreso: 0,
            estado: 'activo',
            fechaRegistro: new Date().toISOString()
        };
    }

    static async update(data: UpdateAlumnoDTO): Promise<Alumno> {
        // TODO: Implementar llamada real a la API
        // const response = await fetch(`${this.baseUrl}/${data.id}`, {
        //     method: 'PUT',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(data)
        // });
        // return response.json();
        
        console.log('AlumnoService.update() - Placeholder', data);
        return data as Alumno;
    }

    static async delete(id: number): Promise<void> {
        // TODO: Implementar llamada real a la API
        // await fetch(`${this.baseUrl}/${id}`, {
        //     method: 'DELETE'
        // });
        
        console.log(`AlumnoService.delete(${id}) - Placeholder`);
    }
}