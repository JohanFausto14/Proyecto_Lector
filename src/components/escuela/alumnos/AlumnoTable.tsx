'use client';

import React from 'react';

interface Alumno {
    id: number;
    nombre: string;
    email: string;
    grupo: string;
    librosActivos: number;
    progreso: number;
    estado: 'activo' | 'inactivo';
    fechaRegistro: string;
}

interface AlumnoTableProps {
    alumnos: Alumno[];
    onView: (alumno: Alumno) => void;
    onEdit: (alumno: Alumno) => void;
    onDelete: (alumno: Alumno) => void;
}

export const AlumnoTable: React.FC<AlumnoTableProps> = ({
    alumnos,
    onView,
    onEdit,
    onDelete
}) => {
    if (alumnos.length === 0) {
        return (
            <div className="text-center py-12">
                <div className="w-20 h-20 bg-[#fbf8f1] rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-10 h-10 text-[#a1887f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                    </svg>
                </div>
                <h3 className="font-playfair text-xl font-bold text-[#2b1b17] mb-2">No se encontraron alumnos</h3>
                <p className="text-[#8d6e3f]">Intenta con otros términos de búsqueda o filtros</p>
            </div>
        );
    }

    return (
        <div className="overflow-x-auto">
            <table className="w-full">
                <thead className="bg-gradient-to-r from-[#fbf8f1] to-[#f0e6d2]">
                    <tr>
                        <th className="px-6 py-4 text-left text-xs font-bold text-[#2b1b17] uppercase tracking-wider">Alumno</th>
                        <th className="px-6 py-4 text-left text-xs font-bold text-[#2b1b17] uppercase tracking-wider">Grupo</th>
                        <th className="px-6 py-4 text-left text-xs font-bold text-[#2b1b17] uppercase tracking-wider">Libros</th>
                        <th className="px-6 py-4 text-left text-xs font-bold text-[#2b1b17] uppercase tracking-wider">Progreso</th>
                        <th className="px-6 py-4 text-left text-xs font-bold text-[#2b1b17] uppercase tracking-wider">Estado</th>
                        <th className="px-6 py-4 text-left text-xs font-bold text-[#2b1b17] uppercase tracking-wider">Acciones</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-[#e3dac9]">
                    {alumnos.map((alumno) => (
                        <tr key={alumno.id} className="hover:bg-[#fbf8f1] transition-colors duration-200">
                            <td className="px-6 py-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#d4af37] to-[#c19a2e] flex items-center justify-center text-white font-bold shadow-md">
                                        {alumno.nombre.charAt(0)}
                                    </div>
                                    <div>
                                        <div className="font-playfair font-bold text-[#2b1b17]">{alumno.nombre}</div>
                                        <div className="text-sm text-[#8d6e3f]">{alumno.email}</div>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-bold">
                                    {alumno.grupo}
                                </span>
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex items-center gap-2">
                                    <svg className="w-4 h-4 text-[#d4af37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                                    </svg>
                                    <span className="font-bold text-[#2b1b17]">{alumno.librosActivos}</span>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex items-center gap-3">
                                    <div className="flex-1 max-w-[120px]">
                                        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-gradient-to-r from-[#d4af37] to-[#c19a2e] rounded-full transition-all duration-500"
                                                style={{ width: `${alumno.progreso}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                    <span className="text-sm font-bold text-[#2b1b17] min-w-[45px]">{alumno.progreso}%</span>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                                    alumno.estado === 'activo'
                                        ? 'bg-emerald-100 text-emerald-700'
                                        : 'bg-gray-100 text-gray-700'
                                }`}>
                                    {alumno.estado === 'activo' ? 'Activo' : 'Inactivo'}
                                </span>
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex items-center gap-2">
                                    <button 
                                        onClick={() => onView(alumno)}
                                        className="p-2 hover:bg-[#d4af37]/10 rounded-lg transition-colors duration-200 group"
                                        title="Ver detalles"
                                    >
                                        <svg className="w-5 h-5 text-[#8d6e3f] group-hover:text-[#d4af37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                                        </svg>
                                    </button>
                                    <button 
                                        onClick={() => onEdit(alumno)}
                                        className="p-2 hover:bg-blue-50 rounded-lg transition-colors duration-200 group"
                                        title="Editar"
                                    >
                                        <svg className="w-5 h-5 text-[#8d6e3f] group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                                        </svg>
                                    </button>
                                    <button 
                                        onClick={() => onDelete(alumno)}
                                        className="p-2 hover:bg-red-50 rounded-lg transition-colors duration-200 group"
                                        title="Eliminar"
                                    >
                                        <svg className="w-5 h-5 text-[#8d6e3f] group-hover:text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                                        </svg>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};