'use client';

import React, { useState } from 'react';

interface Grupo {
    id: number;
    nombre: string;
    grado: string;
    profesor: string;
    totalAlumnos: number;
    promedioGeneral: number;
    librosAsignados: number;
    horario: string;
    aula: string;
}

export default function GruposPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filterGrado, setFilterGrado] = useState<'todos' | '1' | '2' | '3'>('todos');
    const [showAddModal, setShowAddModal] = useState(false);

    const grupos: Grupo[] = [
        { id: 1, nombre: '3-A', grado: '3', profesor: 'Prof. Juan García', totalAlumnos: 28, promedioGeneral: 8.9, librosAsignados: 12, horario: 'Lun-Vie 7:00-13:00', aula: 'A-301' },
        { id: 2, nombre: '3-B', grado: '3', profesor: 'Prof. María Martínez', totalAlumnos: 25, promedioGeneral: 8.5, librosAsignados: 10, horario: 'Lun-Vie 7:00-13:00', aula: 'A-302' },
        { id: 3, nombre: '3-C', grado: '3', profesor: 'Prof. Carlos López', totalAlumnos: 27, promedioGeneral: 8.7, librosAsignados: 11, horario: 'Lun-Vie 13:00-19:00', aula: 'A-303' },
        { id: 4, nombre: '2-A', grado: '2', profesor: 'Prof. Ana Hernández', totalAlumnos: 30, promedioGeneral: 8.3, librosAsignados: 8, horario: 'Lun-Vie 7:00-13:00', aula: 'B-201' },
        { id: 5, nombre: '2-B', grado: '2', profesor: 'Prof. Roberto Ramírez', totalAlumnos: 27, promedioGeneral: 8.6, librosAsignados: 9, horario: 'Lun-Vie 13:00-19:00', aula: 'B-202' },
        { id: 6, nombre: '1-A', grado: '1', profesor: 'Prof. Laura Díaz', totalAlumnos: 32, promedioGeneral: 8.4, librosAsignados: 7, horario: 'Lun-Vie 7:00-13:00', aula: 'C-101' },
        { id: 7, nombre: '1-B', grado: '1', profesor: 'Prof. Pedro Torres', totalAlumnos: 30, promedioGeneral: 8.2, librosAsignados: 7, horario: 'Lun-Vie 13:00-19:00', aula: 'C-102' },
    ];

    const filteredGrupos = grupos.filter(grupo => {
        const matchSearch = grupo.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          grupo.profesor.toLowerCase().includes(searchTerm.toLowerCase());
        const matchGrado = filterGrado === 'todos' || grupo.grado === filterGrado;
        return matchSearch && matchGrado;
    });

    const totalAlumnos = grupos.reduce((acc, g) => acc + g.totalAlumnos, 0);
    const promedioGlobal = (grupos.reduce((acc, g) => acc + g.promedioGeneral, 0) / grupos.length).toFixed(1);

    return (
        <div className="space-y-6 animate-fade-in">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
                <div className="bg-gradient-to-br from-white to-[#faf8f5] rounded-xl p-6 shadow-md border border-[#e3dac9]/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-center gap-4">
                        <div className="p-3.5 rounded-xl bg-gradient-to-br from-purple-500/10 to-purple-500/5 shadow-sm">
                            <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                            </svg>
                        </div>
                        <div>
                            <p className="text-xs font-bold uppercase tracking-wider text-[#a1887f] mb-1">Total Grupos</p>
                            <h3 className="text-3xl font-playfair font-bold text-[#2b1b17]">{grupos.length}</h3>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-white to-[#faf8f5] rounded-xl p-6 shadow-md border border-[#e3dac9]/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-center gap-4">
                        <div className="p-3.5 rounded-xl bg-gradient-to-br from-blue-500/10 to-blue-500/5 shadow-sm">
                            <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                            </svg>
                        </div>
                        <div>
                            <p className="text-xs font-bold uppercase tracking-wider text-[#a1887f] mb-1">Total Alumnos</p>
                            <h3 className="text-3xl font-playfair font-bold text-[#2b1b17]">{totalAlumnos}</h3>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-white to-[#faf8f5] rounded-xl p-6 shadow-md border border-[#e3dac9]/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-center gap-4">
                        <div className="p-3.5 rounded-xl bg-gradient-to-br from-[#d4af37]/10 to-[#d4af37]/5 shadow-sm">
                            <svg className="w-7 h-7 text-[#d4af37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                            </svg>
                        </div>
                        <div>
                            <p className="text-xs font-bold uppercase tracking-wider text-[#a1887f] mb-1">Promedio Global</p>
                            <h3 className="text-3xl font-playfair font-bold text-[#2b1b17]">{promedioGlobal}</h3>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-white to-[#faf8f5] rounded-xl p-6 shadow-md border border-[#e3dac9]/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-center gap-4">
                        <div className="p-3.5 rounded-xl bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 shadow-sm">
                            <svg className="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                            </svg>
                        </div>
                        <div>
                            <p className="text-xs font-bold uppercase tracking-wider text-[#a1887f] mb-1">Libros Asignados</p>
                            <h3 className="text-3xl font-playfair font-bold text-[#2b1b17]">
                                {grupos.reduce((acc, g) => acc + g.librosAsignados, 0)}
                            </h3>
                        </div>
                    </div>
                </div>
            </div>

            {/* Search and Filters */}
            <div className="bg-white rounded-xl p-4 md:p-6 shadow-lg border border-[#e3dac9]/50">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                        <h3 className="font-playfair text-2xl font-bold text-[#2b1b17] flex items-center gap-2">
                            Gestión de Grupos
                            <span className="px-2.5 py-0.5 bg-[#d4af37]/10 text-[#d4af37] text-sm font-sans rounded-full">
                                {filteredGrupos.length}
                            </span>
                        </h3>
                        <p className="text-sm text-[#8d6e3f] mt-1">Administra los grupos y asignaciones</p>
                    </div>

                    <div className="flex gap-2 w-full md:w-auto">
                        <div className="relative flex-1 md:w-80">
                            <input
                                type="text"
                                placeholder="Buscar grupo o profesor..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-11 pr-4 py-3 rounded-xl border-2 border-[#e3dac9] bg-white focus:outline-none focus:border-[#d4af37] focus:ring-4 focus:ring-[#d4af37]/10 font-lora text-sm transition-all duration-300"
                            />
                            <svg className="w-5 h-5 text-[#a1887f] absolute left-4 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                        </div>

                        <button 
                            onClick={() => setShowAddModal(true)}
                            className="px-6 py-3 bg-gradient-to-r from-[#2b1b17] to-[#3e2723] text-[#f0e6d2] rounded-xl font-bold hover:from-[#3e2723] hover:to-[#4e342e] shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 whitespace-nowrap"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                            </svg>
                            Nuevo Grupo
                        </button>
                    </div>
                </div>

                {/* Filter Buttons */}
                <div className="flex gap-3 mt-6">
                    <button
                        onClick={() => setFilterGrado('todos')}
                        className={`px-4 py-2 rounded-lg text-sm font-bold transition-all duration-300 ${
                            filterGrado === 'todos'
                                ? 'bg-[#d4af37] text-[#2b1b17] shadow-md'
                                : 'bg-[#fbf8f1] text-[#5d4037] hover:bg-[#e3dac9]'
                        }`}
                    >
                        Todos los Grados
                    </button>
                    <button
                        onClick={() => setFilterGrado('1')}
                        className={`px-4 py-2 rounded-lg text-sm font-bold transition-all duration-300 ${
                            filterGrado === '1'
                                ? 'bg-blue-500 text-white shadow-md'
                                : 'bg-[#fbf8f1] text-[#5d4037] hover:bg-[#e3dac9]'
                        }`}
                    >
                        1er Grado
                    </button>
                    <button
                        onClick={() => setFilterGrado('2')}
                        className={`px-4 py-2 rounded-lg text-sm font-bold transition-all duration-300 ${
                            filterGrado === '2'
                                ? 'bg-purple-500 text-white shadow-md'
                                : 'bg-[#fbf8f1] text-[#5d4037] hover:bg-[#e3dac9]'
                        }`}
                    >
                        2do Grado
                    </button>
                    <button
                        onClick={() => setFilterGrado('3')}
                        className={`px-4 py-2 rounded-lg text-sm font-bold transition-all duration-300 ${
                            filterGrado === '3'
                                ? 'bg-emerald-500 text-white shadow-md'
                                : 'bg-[#fbf8f1] text-[#5d4037] hover:bg-[#e3dac9]'
                        }`}
                    >
                        3er Grado
                    </button>
                </div>
            </div>

            {/* Grupos Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredGrupos.map((grupo) => (
                    <div key={grupo.id} className="group bg-gradient-to-br from-white to-[#faf8f5] rounded-xl p-6 shadow-md hover:shadow-2xl border border-[#e3dac9]/50 hover:border-[#d4af37]/30 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                        {/* Hover glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/0 via-[#d4af37]/0 to-[#d4af37]/0 group-hover:from-[#d4af37]/5 group-hover:via-transparent group-hover:to-[#d4af37]/5 transition-all duration-500 rounded-xl"></div>

                        <div className="relative z-10">
                            {/* Header */}
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <div className={`w-16 h-16 rounded-xl flex items-center justify-center text-white font-bold text-2xl shadow-lg ${
                                        grupo.grado === '1' ? 'bg-gradient-to-br from-blue-500 to-blue-600' :
                                        grupo.grado === '2' ? 'bg-gradient-to-br from-purple-500 to-purple-600' :
                                        'bg-gradient-to-br from-emerald-500 to-emerald-600'
                                    }`}>
                                        {grupo.nombre}
                                    </div>
                                    <div>
                                        <h4 className="font-playfair font-bold text-xl text-[#2b1b17] group-hover:text-[#d4af37] transition-colors">
                                            Grupo {grupo.nombre}
                                        </h4>
                                        <p className="text-xs text-[#8d6e3f]">{grupo.aula}</p>
                                    </div>
                                </div>
                                <div className="bg-gradient-to-br from-[#d4af37] to-[#c19a2e] text-white rounded-full w-14 h-14 flex items-center justify-center font-bold text-lg shadow-lg">
                                    {grupo.promedioGeneral}
                                </div>
                            </div>

                            {/* Profesor */}
                            <div className="mb-4 pb-4 border-b border-[#e3dac9]">
                                <p className="text-xs font-bold text-[#a1887f] uppercase tracking-wider mb-1">Profesor Titular</p>
                                <div className="flex items-center gap-2">
                                    <svg className="w-4 h-4 text-[#d4af37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                    </svg>
                                    <p className="font-lora text-[#2b1b17] font-medium">{grupo.profesor}</p>
                                </div>
                            </div>

                            {/* Stats Grid */}
                            <div className="grid grid-cols-3 gap-3 mb-4">
                                <div className="bg-blue-50 rounded-lg p-3 text-center">
                                    <svg className="w-5 h-5 text-blue-600 mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                                    </svg>
                                    <p className="text-xs text-blue-600 font-bold mb-1">Alumnos</p>
                                    <p className="text-lg font-playfair font-bold text-blue-700">{grupo.totalAlumnos}</p>
                                </div>
                                <div className="bg-purple-50 rounded-lg p-3 text-center">
                                    <svg className="w-5 h-5 text-purple-600 mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                                    </svg>
                                    <p className="text-xs text-purple-600 font-bold mb-1">Libros</p>
                                    <p className="text-lg font-playfair font-bold text-purple-700">{grupo.librosAsignados}</p>
                                </div>
                                <div className="bg-emerald-50 rounded-lg p-3 text-center">
                                    <svg className="w-5 h-5 text-emerald-600 mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                                    </svg>
                                    <p className="text-xs text-emerald-600 font-bold mb-1">Promedio</p>
                                    <p className="text-lg font-playfair font-bold text-emerald-700">{grupo.promedioGeneral}</p>
                                </div>
                            </div>

                            {/* Horario */}
                            <div className="mb-4">
                                <div className="flex items-center gap-2 text-sm text-[#5d4037] bg-[#fbf8f1] rounded-lg p-3">
                                    <svg className="w-4 h-4 text-[#d4af37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                    <span className="font-medium">{grupo.horario}</span>
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="flex gap-2 pt-4 border-t border-[#e3dac9]">
                                <button className="flex-1 px-4 py-2 bg-white border-2 border-[#e3dac9] hover:border-[#d4af37] hover:bg-[#fbf8f1] text-[#2b1b17] rounded-lg font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                                    </svg>
                                    Ver Detalles
                                </button>
                                <button className="flex-1 px-4 py-2 bg-gradient-to-r from-[#d4af37] to-[#c19a2e] text-[#2b1b17] rounded-lg font-bold text-sm hover:from-[#c19a2e] hover:to-[#b08a28] transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                                    </svg>
                                    Editar
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {filteredGrupos.length === 0 && (
                <div className="bg-white rounded-xl p-12 text-center shadow-lg border border-[#e3dac9]/50">
                    <div className="w-20 h-20 bg-[#fbf8f1] rounded-full mx-auto mb-4 flex items-center justify-center">
                        <svg className="w-10 h-10 text-[#a1887f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                        </svg>
                    </div>
                    <h3 className="font-playfair text-xl font-bold text-[#2b1b17] mb-2">No se encontraron grupos</h3>
                    <p className="text-[#8d6e3f]">Intenta con otros términos de búsqueda o filtros</p>
                </div>
            )}
        </div>
    );
}