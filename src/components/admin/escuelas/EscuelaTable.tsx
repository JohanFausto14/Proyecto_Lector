'use client';

import React from 'react';
import type { Escuela } from '../../../types/escuela';

interface EscuelaTableProps {
    escuelas: Escuela[];
    onView: (escuela: Escuela) => void;
    onEdit: (escuela: Escuela) => void;
    onDelete: (escuela: Escuela) => void;
    onToggleStatus: (escuela: Escuela) => void;
}

export const EscuelaTable: React.FC<EscuelaTableProps> = ({
    escuelas,
    onView,
    onEdit,
    onDelete,
    onToggleStatus
}) => {
    if (escuelas.length === 0) {
        return (
            <div className="text-center py-12">
                <div className="w-20 h-20 bg-[#fbf8f1] rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-10 h-10 text-[#a1887f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                    </svg>
                </div>
                <h3 className="font-playfair text-xl font-bold text-[#2b1b17] mb-2">No se encontraron escuelas</h3>
                <p className="text-[#8d6e3f]">Intenta con otros términos de búsqueda o filtros</p>
            </div>
        );
    }

    return (
        <div className="overflow-x-auto">
            <table className="w-full">
                <thead className="bg-gradient-to-r from-[#fbf8f1] to-[#f0e6d2]">
                    <tr>
                        <th className="px-6 py-4 text-left text-xs font-bold text-[#2b1b17] uppercase tracking-wider">Escuela</th>
                        <th className="px-6 py-4 text-left text-xs font-bold text-[#2b1b17] uppercase tracking-wider">Director</th>
                        <th className="px-6 py-4 text-left text-xs font-bold text-[#2b1b17] uppercase tracking-wider">Ubicación</th>
                        <th className="px-6 py-4 text-left text-xs font-bold text-[#2b1b17] uppercase tracking-wider">Estadísticas</th>
                        <th className="px-6 py-4 text-left text-xs font-bold text-[#2b1b17] uppercase tracking-wider">Estado</th>
                        <th className="px-6 py-4 text-left text-xs font-bold text-[#2b1b17] uppercase tracking-wider">Acciones</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-[#e3dac9]">
                    {escuelas.map((escuela) => (
                        <tr key={escuela.id} className="hover:bg-[#fbf8f1] transition-colors duration-200">
                            <td className="px-6 py-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#d4af37] to-[#c19a2e] flex items-center justify-center text-white font-bold text-lg shadow-md">
                                        {escuela.nombre.charAt(0)}
                                    </div>
                                    <div>
                                        <div className="font-playfair font-bold text-[#2b1b17] text-base">{escuela.nombre}</div>
                                        <div className="text-sm text-[#8d6e3f] flex items-center gap-1">
                                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                            </svg>
                                            {escuela.email}
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <div>
                                    <div className="font-medium text-[#2b1b17]">{escuela.nombreDirector}</div>
                                    <div className="text-sm text-[#8d6e3f]">{escuela.emailDirector}</div>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <div className="text-sm">
                                    <div className="font-medium text-[#2b1b17] flex items-center gap-1">
                                        <svg className="w-4 h-4 text-[#d4af37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                        </svg>
                                        {escuela.ciudad}
                                    </div>
                                    <div className="text-[#8d6e3f]">{escuela.estado}</div>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex gap-4">
                                    <div className="text-center">
                                        <div className="text-xs text-[#a1887f] font-bold uppercase">Alumnos</div>
                                        <div className="text-lg font-playfair font-bold text-blue-600">{escuela.totalAlumnos}</div>
                                    </div>
                                    <div className="text-center border-l border-r border-[#e3dac9] px-4">
                                        <div className="text-xs text-[#a1887f] font-bold uppercase">Profesores</div>
                                        <div className="text-lg font-playfair font-bold text-purple-600">{escuela.totalProfesores}</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-xs text-[#a1887f] font-bold uppercase">Grupos</div>
                                        <div className="text-lg font-playfair font-bold text-emerald-600">{escuela.totalGrupos}</div>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <button
                                    onClick={() => onToggleStatus(escuela)}
                                    className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-300 ${
                                        escuela.estado_cuenta === 'activa'
                                            ? 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200'
                                            : escuela.estado_cuenta === 'suspendida'
                                            ? 'bg-red-100 text-red-700 hover:bg-red-200'
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                                >
                                    {escuela.estado_cuenta === 'activa' ? '✓ Activa' : 
                                     escuela.estado_cuenta === 'suspendida' ? '✗ Suspendida' : 
                                     '○ Inactiva'}
                                </button>
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex items-center gap-2">
                                    <button 
                                        onClick={() => onView(escuela)}
                                        className="p-2 hover:bg-[#d4af37]/10 rounded-lg transition-colors duration-200 group"
                                        title="Ver detalles"
                                    >
                                        <svg className="w-5 h-5 text-[#8d6e3f] group-hover:text-[#d4af37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                                        </svg>
                                    </button>
                                    <button 
                                        onClick={() => onEdit(escuela)}
                                        className="p-2 hover:bg-blue-50 rounded-lg transition-colors duration-200 group"
                                        title="Editar"
                                    >
                                        <svg className="w-5 h-5 text-[#8d6e3f] group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                                        </svg>
                                    </button>
                                    <button 
                                        onClick={() => onDelete(escuela)}
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