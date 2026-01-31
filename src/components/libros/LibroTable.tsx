'use client';

import React from 'react';
import { Libro } from '../../data/libros';

interface LibroTableProps {
    libros: Libro[];
    onView: (libro: Libro) => void;
    onEdit: (libro: Libro) => void;
    onDelete: (libro: Libro) => void;
    onAssign: (libro: Libro) => void;
}

export const LibroTable: React.FC<LibroTableProps> = ({
    libros,
    onView,
    onEdit,
    onDelete,
    onAssign,
}) => {
    if (libros.length === 0) {
        return (
            <div className="text-center py-12">
                <div className="w-20 h-20 bg-[#fbf8f1] rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-10 h-10 text-[#a1887f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C6.5 6.253 2 10.998 2 17s4.5 10.747 10 10.747c5.5 0 10-4.998 10-10.747 0-6.002-4.5-10.747-10-10.747z"></path>
                    </svg>
                </div>
                <h3 className="font-playfair text-xl font-bold text-[#2b1b17] mb-2">No se encontraron libros</h3>
                <p className="text-[#8d6e3f]">Intenta con otros términos de búsqueda o carga un nuevo libro</p>
            </div>
        );
    }

    return (
        <div className="overflow-x-auto">
            <table className="w-full">
                <thead className="bg-gradient-to-r from-[#fbf8f1] to-[#f0e6d2]">
                    <tr>
                        <th className="px-6 py-4 text-left text-xs font-bold text-[#2b1b17] uppercase tracking-wider">Título</th>
                        <th className="px-6 py-4 text-left text-xs font-bold text-[#2b1b17] uppercase tracking-wider">Autor</th>
                        <th className="px-6 py-4 text-left text-xs font-bold text-[#2b1b17] uppercase tracking-wider">Año</th>
                        <th className="px-6 py-4 text-left text-xs font-bold text-[#2b1b17] uppercase tracking-wider">Páginas</th>
                        <th className="px-6 py-4 text-left text-xs font-bold text-[#2b1b17] uppercase tracking-wider">Editorial</th>
                        <th className="px-6 py-4 text-left text-xs font-bold text-[#2b1b17] uppercase tracking-wider">Precio</th>
                        <th className="px-6 py-4 text-center text-xs font-bold text-[#2b1b17] uppercase tracking-wider">Acciones</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-[#e3dac9]">
                    {libros.map((libro) => (
                        <tr key={libro.id} className="hover:bg-[#f9f7f4] transition-colors">
                            <td className="px-6 py-4">
                                <div className="flex items-center gap-3">
                                    <div
                                        className="w-10 h-12 rounded flex-shrink-0"
                                        style={{ backgroundColor: libro.coverColor }}
                                    />
                                    <span className="font-semibold text-[#2b1b17] hover:text-[#d4af37] cursor-pointer transition-colors" onClick={() => onView(libro)}>
                                        {libro.title}
                                    </span>
                                </div>
                            </td>
                            <td className="px-6 py-4 text-[#5d4037]">{libro.author}</td>
                            <td className="px-6 py-4 text-[#5d4037]">{libro.year}</td>
                            <td className="px-6 py-4 text-[#5d4037]">{libro.pages}</td>
                            <td className="px-6 py-4 text-[#5d4037] text-sm">{libro.publisher}</td>
                            <td className="px-6 py-4">
                                <span className="bg-[#d4af37]/10 text-[#d4af37] px-3 py-1 rounded-full text-sm font-semibold">
                                    {libro.price === 0 ? 'Gratis' : `$${libro.price}`}
                                </span>
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex justify-center gap-2">
                                    <button
                                        onClick={() => onView(libro)}
                                        className="p-2 hover:bg-blue-100 rounded-lg transition-colors text-blue-600"
                                        title="Ver"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                                        </svg>
                                    </button>
                                    <button
                                        onClick={() => onEdit(libro)}
                                        className="p-2 hover:bg-yellow-100 rounded-lg transition-colors text-yellow-600"
                                        title="Editar"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                                        </svg>
                                    </button>
                                    <button
                                        onClick={() => onAssign(libro)}
                                        className="p-2 hover:bg-green-100 rounded-lg transition-colors text-green-600"
                                        title="Asignar a escuela"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                                        </svg>
                                    </button>
                                    <button
                                        onClick={() => onDelete(libro)}
                                        className="p-2 hover:bg-red-100 rounded-lg transition-colors text-red-600"
                                        title="Eliminar"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
