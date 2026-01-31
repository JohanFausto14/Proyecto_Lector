'use client';

import React, { useState } from 'react';
import { AddAlumnoModal } from '../../../components/escuela/alumnos/AddAlumnoModal';
import { AlumnoTable } from '../../../components/escuela/alumnos/AlumnoTable';

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

export default function AlumnosPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filterEstado, setFilterEstado] = useState<'todos' | 'activo' | 'inactivo'>('todos');
    const [showAddModal, setShowAddModal] = useState(false);

    // Datos de ejemplo
    const [alumnos, setAlumnos] = useState<Alumno[]>([
        { id: 1, nombre: 'Ana García López', email: 'ana.garcia@escuela.edu', grupo: '3-A', librosActivos: 5, progreso: 78, estado: 'activo', fechaRegistro: '2024-01-15' },
        { id: 2, nombre: 'Carlos Mendoza', email: 'carlos.mendoza@escuela.edu', grupo: '3-A', librosActivos: 3, progreso: 45, estado: 'activo', fechaRegistro: '2024-01-20' },
        { id: 3, nombre: 'María Rodríguez', email: 'maria.rodriguez@escuela.edu', grupo: '3-B', librosActivos: 7, progreso: 92, estado: 'activo', fechaRegistro: '2024-02-01' },
        { id: 4, nombre: 'José Hernández', email: 'jose.hernandez@escuela.edu', grupo: '3-B', librosActivos: 2, progreso: 34, estado: 'inactivo', fechaRegistro: '2024-01-18' },
        { id: 5, nombre: 'Laura Martínez', email: 'laura.martinez@escuela.edu', grupo: '3-C', librosActivos: 6, progreso: 67, estado: 'activo', fechaRegistro: '2024-02-10' },
        { id: 6, nombre: 'Pedro Sánchez', email: 'pedro.sanchez@escuela.edu', grupo: '2-A', librosActivos: 4, progreso: 55, estado: 'activo', fechaRegistro: '2024-01-25' },
    ]);

    const filteredAlumnos = alumnos.filter(alumno => {
        const matchSearch = alumno.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          alumno.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          alumno.grupo.toLowerCase().includes(searchTerm.toLowerCase());
        const matchEstado = filterEstado === 'todos' || alumno.estado === filterEstado;
        return matchSearch && matchEstado;
    });

    const totalActivos = alumnos.filter(a => a.estado === 'activo').length;
    const promedioProgreso = Math.round(alumnos.reduce((acc, a) => acc + a.progreso, 0) / alumnos.length);

    const handleAddSuccess = () => {
        // Aquí podrías refrescar los datos desde el servidor
        console.log('Alumno agregado exitosamente');
        // TODO: Recargar lista de alumnos
    };

    const handleView = (alumno: Alumno) => {
        console.log('Ver alumno:', alumno);
        // TODO: Implementar vista de detalles
    };

    const handleEdit = (alumno: Alumno) => {
        console.log('Editar alumno:', alumno);
        // TODO: Implementar edición
    };

    const handleDelete = (alumno: Alumno) => {
        console.log('Eliminar alumno:', alumno);
        // TODO: Implementar confirmación y eliminación
    };

    return (
        <div className="space-y-6 animate-fade-in">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
                <div className="bg-gradient-to-br from-white to-[#faf8f5] rounded-xl p-6 shadow-md border border-[#e3dac9]/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-center gap-4">
                        <div className="p-3.5 rounded-xl bg-gradient-to-br from-blue-500/10 to-blue-500/5 shadow-sm">
                            <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                            </svg>
                        </div>
                        <div>
                            <p className="text-xs font-bold uppercase tracking-wider text-[#a1887f] mb-1">Total Alumnos</p>
                            <h3 className="text-3xl font-playfair font-bold text-[#2b1b17]">{alumnos.length}</h3>
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
                        <div className="p-3.5 rounded-xl bg-gradient-to-br from-[#d4af37]/10 to-[#d4af37]/5 shadow-sm">
                            <svg className="w-7 h-7 text-[#d4af37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                            </svg>
                        </div>
                        <div>
                            <p className="text-xs font-bold uppercase tracking-wider text-[#a1887f] mb-1">Libros Totales</p>
                            <h3 className="text-3xl font-playfair font-bold text-[#2b1b17]">
                                {alumnos.reduce((acc, a) => acc + a.librosActivos, 0)}
                            </h3>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-white to-[#faf8f5] rounded-xl p-6 shadow-md border border-[#e3dac9]/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-center gap-4">
                        <div className="p-3.5 rounded-xl bg-gradient-to-br from-purple-500/10 to-purple-500/5 shadow-sm">
                            <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                            </svg>
                        </div>
                        <div>
                            <p className="text-xs font-bold uppercase tracking-wider text-[#a1887f] mb-1">Progreso Promedio</p>
                            <h3 className="text-3xl font-playfair font-bold text-[#2b1b17]">{promedioProgreso}%</h3>
                        </div>
                    </div>
                </div>
            </div>

            {/* Search and Filters */}
            <div className="bg-white rounded-xl p-4 md:p-6 shadow-lg border border-[#e3dac9]/50">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                        <h3 className="font-playfair text-2xl font-bold text-[#2b1b17] flex items-center gap-2">
                            Gestión de Alumnos
                            <span className="px-2.5 py-0.5 bg-[#d4af37]/10 text-[#d4af37] text-sm font-sans rounded-full">
                                {filteredAlumnos.length}
                            </span>
                        </h3>
                        <p className="text-sm text-[#8d6e3f] mt-1">Administra y monitorea a tus estudiantes</p>
                    </div>

                    <div className="flex gap-2 w-full md:w-auto">
                        <div className="relative flex-1 md:w-80">
                            <input
                                type="text"
                                placeholder="Buscar por nombre, email o grupo..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-11 pr-4 py-3 rounded-xl border-2 border-[#e3dac9] bg-white focus:outline-none focus:border-[#d4af37] focus:ring-4 focus:ring-[#d4af37]/10 font-lora text-sm transition-all duration-300"
                            />
                            <svg className="w-5 h-5 text-[#a1887f] absolute left-4 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                            {searchTerm && (
                                <button
                                    onClick={() => setSearchTerm('')}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#a1887f] hover:text-[#2b1b17] transition-colors"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                    </svg>
                                </button>
                            )}
                        </div>

                        <button 
                            onClick={() => setShowAddModal(true)}
                            className="px-6 py-3 bg-gradient-to-r from-[#2b1b17] to-[#3e2723] text-[#f0e6d2] rounded-xl font-bold hover:from-[#3e2723] hover:to-[#4e342e] shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 whitespace-nowrap hover:-translate-y-0.5 active:translate-y-0"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                            </svg>
                            Nuevo Alumno
                        </button>
                    </div>
                </div>

                {/* Filter Buttons */}
                <div className="flex gap-3 mt-6">
                    <button
                        onClick={() => setFilterEstado('todos')}
                        className={`px-4 py-2 rounded-lg text-sm font-bold transition-all duration-300 ${
                            filterEstado === 'todos'
                                ? 'bg-[#d4af37] text-[#2b1b17] shadow-md'
                                : 'bg-[#fbf8f1] text-[#5d4037] hover:bg-[#e3dac9]'
                        }`}
                    >
                        Todos
                    </button>
                    <button
                        onClick={() => setFilterEstado('activo')}
                        className={`px-4 py-2 rounded-lg text-sm font-bold transition-all duration-300 ${
                            filterEstado === 'activo'
                                ? 'bg-emerald-500 text-white shadow-md'
                                : 'bg-[#fbf8f1] text-[#5d4037] hover:bg-[#e3dac9]'
                        }`}
                    >
                        Activos
                    </button>
                    <button
                        onClick={() => setFilterEstado('inactivo')}
                        className={`px-4 py-2 rounded-lg text-sm font-bold transition-all duration-300 ${
                            filterEstado === 'inactivo'
                                ? 'bg-gray-500 text-white shadow-md'
                                : 'bg-[#fbf8f1] text-[#5d4037] hover:bg-[#e3dac9]'
                        }`}
                    >
                        Inactivos
                    </button>
                </div>
            </div>

            {/* Alumnos Table */}
            <div className="bg-white rounded-xl shadow-lg border border-[#e3dac9]/50 overflow-hidden">
                <AlumnoTable
                    alumnos={filteredAlumnos}
                    onView={handleView}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                />
            </div>

            {/* Add Alumno Modal */}
            <AddAlumnoModal
                isOpen={showAddModal}
                onClose={() => setShowAddModal(false)}
                onSuccess={handleAddSuccess}
            />
        </div>
    );
}