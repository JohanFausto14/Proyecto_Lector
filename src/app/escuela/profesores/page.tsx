'use client';

import React, { useState } from 'react';

interface Profesor {
    id: number;
    nombre: string;
    email: string;
    especialidad: string;
    gruposAsignados: string[];
    alumnosTotales: number;
    estado: 'activo' | 'inactivo';
    telefono: string;
}

export default function ProfesoresPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [showAddModal, setShowAddModal] = useState(false);

    const profesores: Profesor[] = [
        { id: 1, nombre: 'Prof. Juan García', email: 'juan.garcia@escuela.edu', especialidad: 'Literatura', gruposAsignados: ['3-A', '3-B'], alumnosTotales: 53, estado: 'activo', telefono: '+52 55 1234 5678' },
        { id: 2, nombre: 'Prof. María Martínez', email: 'maria.martinez@escuela.edu', especialidad: 'Matemáticas', gruposAsignados: ['2-A', '2-B'], alumnosTotales: 57, estado: 'activo', telefono: '+52 55 2345 6789' },
        { id: 3, nombre: 'Prof. Carlos López', email: 'carlos.lopez@escuela.edu', especialidad: 'Historia', gruposAsignados: ['3-C'], alumnosTotales: 28, estado: 'activo', telefono: '+52 55 3456 7890' },
        { id: 4, nombre: 'Prof. Ana Hernández', email: 'ana.hernandez@escuela.edu', especialidad: 'Ciencias', gruposAsignados: ['1-A', '1-B'], alumnosTotales: 62, estado: 'activo', telefono: '+52 55 4567 8901' },
        { id: 5, nombre: 'Prof. Roberto Ramírez', email: 'roberto.ramirez@escuela.edu', especialidad: 'Inglés', gruposAsignados: ['2-C'], alumnosTotales: 30, estado: 'inactivo', telefono: '+52 55 5678 9012' },
    ];

    const filteredProfesores = profesores.filter(profesor =>
        profesor.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
        profesor.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        profesor.especialidad.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const totalActivos = profesores.filter(p => p.estado === 'activo').length;
    const totalAlumnosAtendidos = profesores.reduce((acc, p) => acc + p.alumnosTotales, 0);

    return (
        <div className="space-y-6 animate-fade-in">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
                <div className="bg-gradient-to-br from-white to-[#faf8f5] rounded-xl p-6 shadow-md border border-[#e3dac9]/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-center gap-4">
                        <div className="p-3.5 rounded-xl bg-gradient-to-br from-indigo-500/10 to-indigo-500/5 shadow-sm">
                            <svg className="w-7 h-7 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                            </svg>
                        </div>
                        <div>
                            <p className="text-xs font-bold uppercase tracking-wider text-[#a1887f] mb-1">Total Profesores</p>
                            <h3 className="text-3xl font-playfair font-bold text-[#2b1b17]">{profesores.length}</h3>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-white to-[#faf8f5] rounded-xl p-6 shadow-md border border-[#e3dac9]/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-center gap-4">
                        <div className="p-3.5 rounded-xl bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 shadow-sm">
                            <svg className="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        </div>
                        <div>
                            <p className="text-xs font-bold uppercase tracking-wider text-[#a1887f] mb-1">Activos</p>
                            <h3 className="text-3xl font-playfair font-bold text-[#2b1b17]">{totalActivos}</h3>
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
                            <p className="text-xs font-bold uppercase tracking-wider text-[#a1887f] mb-1">Alumnos Atendidos</p>
                            <h3 className="text-3xl font-playfair font-bold text-[#2b1b17]">{totalAlumnosAtendidos}</h3>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-white to-[#faf8f5] rounded-xl p-6 shadow-md border border-[#e3dac9]/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-center gap-4">
                        <div className="p-3.5 rounded-xl bg-gradient-to-br from-purple-500/10 to-purple-500/5 shadow-sm">
                            <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                            </svg>
                        </div>
                        <div>
                            <p className="text-xs font-bold uppercase tracking-wider text-[#a1887f] mb-1">Grupos Asignados</p>
                            <h3 className="text-3xl font-playfair font-bold text-[#2b1b17]">
                                {profesores.reduce((acc, p) => acc + p.gruposAsignados.length, 0)}
                            </h3>
                        </div>
                    </div>
                </div>
            </div>

            {/* Search and Actions */}
            <div className="bg-white rounded-xl p-4 md:p-6 shadow-lg border border-[#e3dac9]/50">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                        <h3 className="font-playfair text-2xl font-bold text-[#2b1b17] flex items-center gap-2">
                            Gestión de Profesores
                            <span className="px-2.5 py-0.5 bg-[#d4af37]/10 text-[#d4af37] text-sm font-sans rounded-full">
                                {filteredProfesores.length}
                            </span>
                        </h3>
                        <p className="text-sm text-[#8d6e3f] mt-1">Administra el personal docente</p>
                    </div>

                    <div className="flex gap-2 w-full md:w-auto">
                        <div className="relative flex-1 md:w-80">
                            <input
                                type="text"
                                placeholder="Buscar profesor..."
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
                            Nuevo Profesor
                        </button>
                    </div>
                </div>
            </div>

            {/* Profesores Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProfesores.map((profesor) => (
                    <div key={profesor.id} className="group bg-gradient-to-br from-white to-[#faf8f5] rounded-xl p-6 shadow-md hover:shadow-2xl border border-[#e3dac9]/50 hover:border-[#d4af37]/30 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                        {/* Hover glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/0 via-[#d4af37]/0 to-[#d4af37]/0 group-hover:from-[#d4af37]/5 group-hover:via-transparent group-hover:to-[#d4af37]/5 transition-all duration-500 rounded-xl"></div>

                        <div className="relative z-10">
                            {/* Header */}
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                                        {profesor.nombre.split(' ')[1].charAt(0)}
                                    </div>
                                    <div>
                                        <h4 className="font-playfair font-bold text-lg text-[#2b1b17] group-hover:text-[#d4af37] transition-colors">
                                            {profesor.nombre}
                                        </h4>
                                        <p className="text-xs text-[#8d6e3f] font-lora italic">{profesor.especialidad}</p>
                                    </div>
                                </div>
                                <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                                    profesor.estado === 'activo'
                                        ? 'bg-emerald-100 text-emerald-700'
                                        : 'bg-gray-100 text-gray-700'
                                }`}>
                                    {profesor.estado === 'activo' ? 'Activo' : 'Inactivo'}
                                </span>
                            </div>

                            {/* Contact Info */}
                            <div className="space-y-2 mb-4 pb-4 border-b border-[#e3dac9]">
                                <div className="flex items-center gap-2 text-sm text-[#5d4037]">
                                    <svg className="w-4 h-4 text-[#d4af37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                    </svg>
                                    <span className="truncate">{profesor.email}</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-[#5d4037]">
                                    <svg className="w-4 h-4 text-[#d4af37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                    </svg>
                                    <span>{profesor.telefono}</span>
                                </div>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-2 gap-4 mb-4">
                                <div className="bg-blue-50 rounded-lg p-3 text-center">
                                    <p className="text-xs text-blue-600 font-bold uppercase tracking-wider mb-1">Grupos</p>
                                    <p className="text-2xl font-playfair font-bold text-blue-700">{profesor.gruposAsignados.length}</p>
                                </div>
                                <div className="bg-purple-50 rounded-lg p-3 text-center">
                                    <p className="text-xs text-purple-600 font-bold uppercase tracking-wider mb-1">Alumnos</p>
                                    <p className="text-2xl font-playfair font-bold text-purple-700">{profesor.alumnosTotales}</p>
                                </div>
                            </div>

                            {/* Grupos Asignados */}
                            <div className="mb-4">
                                <p className="text-xs font-bold text-[#a1887f] uppercase tracking-wider mb-2">Grupos Asignados</p>
                                <div className="flex flex-wrap gap-2">
                                    {profesor.gruposAsignados.map((grupo, idx) => (
                                        <span key={idx} className="px-3 py-1 bg-gradient-to-r from-[#d4af37]/10 to-[#d4af37]/5 text-[#2b1b17] text-xs font-bold rounded-full border border-[#d4af37]/20">
                                            {grupo}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="flex gap-2 pt-4 border-t border-[#e3dac9]">
                                <button className="flex-1 px-4 py-2 bg-white border-2 border-[#e3dac9] hover:border-[#d4af37] hover:bg-[#fbf8f1] text-[#2b1b17] rounded-lg font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                                    </svg>
                                    Ver
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

            {filteredProfesores.length === 0 && (
                <div className="bg-white rounded-xl p-12 text-center shadow-lg border border-[#e3dac9]/50">
                    <div className="w-20 h-20 bg-[#fbf8f1] rounded-full mx-auto mb-4 flex items-center justify-center">
                        <svg className="w-10 h-10 text-[#a1887f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                    </div>
                    <h3 className="font-playfair text-xl font-bold text-[#2b1b17] mb-2">No se encontraron profesores</h3>
                    <p className="text-[#8d6e3f]">Intenta con otros términos de búsqueda</p>
                </div>
            )}
        </div>
    );
}