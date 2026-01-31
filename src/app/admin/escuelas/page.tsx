'use client';

import React, { useState } from 'react';
import { AddEscuelaModal } from '../../../components/admin/escuelas/AddEscuelaModal';
import { EscuelaTable } from '../../../components/admin/escuelas/EscuelaTable';
import type { Escuela } from '../../../types/escuela';

export default function EscuelasAdminPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filterEstado, setFilterEstado] = useState<'todos' | 'activa' | 'inactiva' | 'suspendida'>('todos');
    const [showAddModal, setShowAddModal] = useState(false);

    // Datos de ejemplo
    const [escuelas, setEscuelas] = useState<Escuela[]>([
        {
            id: 1,
            nombre: 'Preparatoria Central',
            email: 'contacto@prepcentral.edu',
            telefono: '+52 55 1234 5678',
            direccion: 'Av. Insurgentes Sur 1234',
            ciudad: 'Ciudad de México',
            estado: 'CDMX',
            codigoPostal: '03100',
            nombreDirector: 'Dr. Juan Pérez García',
            emailDirector: 'director@prepcentral.edu',
            totalAlumnos: 450,
            totalProfesores: 32,
            totalGrupos: 18,
            licenciasActivas: 500,
            fechaRegistro: '2024-01-15',
            estado_cuenta: 'activa'
        },
        {
            id: 2,
            nombre: 'Instituto Tecnológico Avanzado',
            email: 'info@tecavanzado.edu',
            telefono: '+52 81 2345 6789',
            direccion: 'Calzada del Valle 567',
            ciudad: 'Monterrey',
            estado: 'Nuevo León',
            codigoPostal: '64000',
            nombreDirector: 'Mtra. María Rodríguez',
            emailDirector: 'mrodriguez@tecavanzado.edu',
            totalAlumnos: 380,
            totalProfesores: 28,
            totalGrupos: 15,
            licenciasActivas: 400,
            fechaRegistro: '2024-02-01',
            estado_cuenta: 'activa'
        },
        {
            id: 3,
            nombre: 'Colegio Guadalajara',
            email: 'contacto@colegiogdl.edu',
            telefono: '+52 33 3456 7890',
            direccion: 'Av. Chapultepec 890',
            ciudad: 'Guadalajara',
            estado: 'Jalisco',
            codigoPostal: '44100',
            nombreDirector: 'Lic. Carlos Hernández',
            emailDirector: 'director@colegiogdl.edu',
            totalAlumnos: 320,
            totalProfesores: 24,
            totalGrupos: 12,
            licenciasActivas: 350,
            fechaRegistro: '2024-01-20',
            estado_cuenta: 'activa'
        },
        {
            id: 4,
            nombre: 'Preparatoria del Norte',
            email: 'info@prepnorte.edu',
            telefono: '+52 55 4567 8901',
            direccion: 'Calle Reforma 234',
            ciudad: 'Toluca',
            estado: 'Estado de México',
            codigoPostal: '50000',
            nombreDirector: 'Dr. Roberto Sánchez',
            emailDirector: 'rsanchez@prepnorte.edu',
            totalAlumnos: 280,
            totalProfesores: 20,
            totalGrupos: 10,
            licenciasActivas: 300,
            fechaRegistro: '2024-02-10',
            estado_cuenta: 'suspendida'
        },
        {
            id: 5,
            nombre: 'Instituto Cultural del Sur',
            email: 'contacto@icsur.edu',
            telefono: '+52 222 5678 9012',
            direccion: 'Blvd. Atlixco 456',
            ciudad: 'Puebla',
            estado: 'Puebla',
            codigoPostal: '72000',
            nombreDirector: 'Mtra. Laura Martínez',
            emailDirector: 'lmartinez@icsur.edu',
            totalAlumnos: 410,
            totalProfesores: 30,
            totalGrupos: 16,
            licenciasActivas: 450,
            fechaRegistro: '2024-01-25',
            estado_cuenta: 'activa'
        }
    ]);

    const filteredEscuelas = escuelas.filter(escuela => {
        const matchSearch = escuela.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          escuela.ciudad.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          escuela.nombreDirector.toLowerCase().includes(searchTerm.toLowerCase());
        const matchEstado = filterEstado === 'todos' || escuela.estado_cuenta === filterEstado;
        return matchSearch && matchEstado;
    });

    // Estadísticas
    const totalEscuelas = escuelas.length;
    const escuelasActivas = escuelas.filter(e => e.estado_cuenta === 'activa').length;
    const totalAlumnos = escuelas.reduce((acc, e) => acc + e.totalAlumnos, 0);
    const totalProfesores = escuelas.reduce((acc, e) => acc + e.totalProfesores, 0);
    const licenciasActivas = escuelas.reduce((acc, e) => acc + e.licenciasActivas, 0);

    const handleAddSuccess = () => {
        console.log('Escuela agregada exitosamente');
        // TODO: Recargar lista de escuelas
    };

    const handleView = (escuela: Escuela) => {
        console.log('Ver escuela:', escuela);
        // TODO: Implementar vista de detalles
    };

    const handleEdit = (escuela: Escuela) => {
        console.log('Editar escuela:', escuela);
        // TODO: Implementar edición
    };

    const handleDelete = (escuela: Escuela) => {
        console.log('Eliminar escuela:', escuela);
        // TODO: Implementar confirmación y eliminación
    };

    const handleToggleStatus = (escuela: Escuela) => {
        console.log('Cambiar estado de escuela:', escuela);
        // TODO: Implementar toggle de estado
    };

    return (
        <div className="min-h-screen bg-[#f5f5f5] p-4 md:p-8">
            <div className="max-w-7xl mx-auto space-y-6 animate-fade-in">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-4xl font-playfair font-bold text-[#2b1b17] mb-2">
                        Panel de Administración
                    </h1>
                    <p className="text-[#5d4037] text-lg font-lora">
                        Gestión de Instituciones Educativas
                    </p>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-6">
                    <div className="bg-gradient-to-br from-white to-[#faf8f5] rounded-xl p-6 shadow-md border border-[#e3dac9]/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                        <div className="flex items-center gap-4">
                            <div className="p-3.5 rounded-xl bg-gradient-to-br from-[#d4af37]/10 to-[#d4af37]/5 shadow-sm">
                                <svg className="w-7 h-7 text-[#d4af37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                                </svg>
                            </div>
                            <div>
                                <p className="text-xs font-bold uppercase tracking-wider text-[#a1887f] mb-1">Total Escuelas</p>
                                <h3 className="text-3xl font-playfair font-bold text-[#2b1b17]">{totalEscuelas}</h3>
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
                                <p className="text-xs font-bold uppercase tracking-wider text-[#a1887f] mb-1">Activas</p>
                                <h3 className="text-3xl font-playfair font-bold text-[#2b1b17]">{escuelasActivas}</h3>
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
                                <h3 className="text-3xl font-playfair font-bold text-[#2b1b17]">{totalAlumnos.toLocaleString()}</h3>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-white to-[#faf8f5] rounded-xl p-6 shadow-md border border-[#e3dac9]/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                        <div className="flex items-center gap-4">
                            <div className="p-3.5 rounded-xl bg-gradient-to-br from-purple-500/10 to-purple-500/5 shadow-sm">
                                <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                </svg>
                            </div>
                            <div>
                                <p className="text-xs font-bold uppercase tracking-wider text-[#a1887f] mb-1">Profesores</p>
                                <h3 className="text-3xl font-playfair font-bold text-[#2b1b17]">{totalProfesores}</h3>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-white to-[#faf8f5] rounded-xl p-6 shadow-md border border-[#e3dac9]/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                        <div className="flex items-center gap-4">
                            <div className="p-3.5 rounded-xl bg-gradient-to-br from-indigo-500/10 to-indigo-500/5 shadow-sm">
                                <svg className="w-7 h-7 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"></path>
                                </svg>
                            </div>
                            <div>
                                <p className="text-xs font-bold uppercase tracking-wider text-[#a1887f] mb-1">Licencias</p>
                                <h3 className="text-3xl font-playfair font-bold text-[#2b1b17]">{licenciasActivas.toLocaleString()}</h3>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Search and Filters */}
                <div className="bg-white rounded-xl p-4 md:p-6 shadow-lg border border-[#e3dac9]/50">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                        <div>
                            <h3 className="font-playfair text-2xl font-bold text-[#2b1b17] flex items-center gap-2">
                                Gestión de Escuelas
                                <span className="px-2.5 py-0.5 bg-[#d4af37]/10 text-[#d4af37] text-sm font-sans rounded-full">
                                    {filteredEscuelas.length}
                                </span>
                            </h3>
                            <p className="text-sm text-[#8d6e3f] mt-1">Administra las instituciones educativas</p>
                        </div>

                        <div className="flex gap-2 w-full md:w-auto">
                            <div className="relative flex-1 md:w-80">
                                <input
                                    type="text"
                                    placeholder="Buscar por nombre, ciudad o director..."
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
                                Nueva Escuela
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
                            Todas
                        </button>
                        <button
                            onClick={() => setFilterEstado('activa')}
                            className={`px-4 py-2 rounded-lg text-sm font-bold transition-all duration-300 ${
                                filterEstado === 'activa'
                                    ? 'bg-emerald-500 text-white shadow-md'
                                    : 'bg-[#fbf8f1] text-[#5d4037] hover:bg-[#e3dac9]'
                            }`}
                        >
                            Activas
                        </button>
                        <button
                            onClick={() => setFilterEstado('suspendida')}
                            className={`px-4 py-2 rounded-lg text-sm font-bold transition-all duration-300 ${
                                filterEstado === 'suspendida'
                                    ? 'bg-red-500 text-white shadow-md'
                                    : 'bg-[#fbf8f1] text-[#5d4037] hover:bg-[#e3dac9]'
                            }`}
                        >
                            Suspendidas
                        </button>
                        <button
                            onClick={() => setFilterEstado('inactiva')}
                            className={`px-4 py-2 rounded-lg text-sm font-bold transition-all duration-300 ${
                                filterEstado === 'inactiva'
                                    ? 'bg-gray-500 text-white shadow-md'
                                    : 'bg-[#fbf8f1] text-[#5d4037] hover:bg-[#e3dac9]'
                            }`}
                        >
                            Inactivas
                        </button>
                    </div>
                </div>

                {/* Escuelas Table */}
                <div className="bg-white rounded-xl shadow-lg border border-[#e3dac9]/50 overflow-hidden">
                    <EscuelaTable
                        escuelas={filteredEscuelas}
                        onView={handleView}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                        onToggleStatus={handleToggleStatus}
                    />
                </div>

                {/* Add Escuela Modal */}
                <AddEscuelaModal
                    isOpen={showAddModal}
                    onClose={() => setShowAddModal(false)}
                    onSuccess={handleAddSuccess}
                />
            </div>
        </div>
    );
}