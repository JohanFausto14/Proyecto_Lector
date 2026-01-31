'use client';

import React, { useState } from 'react';

interface Compra {
    id: number;
    tipo: 'licencia' | 'libro';
    nombre: string;
    cantidad: number;
    precioUnitario: number;
    total: number;
    fecha: string;
    estado: 'activa' | 'vencida' | 'pendiente';
    vigencia?: string;
    asignadoA?: string;
}

export default function ComprasPage() {
    const [activeTab, setActiveTab] = useState<'todas' | 'licencias' | 'libros'>('todas');
    const [searchTerm, setSearchTerm] = useState('');
    const [showPurchaseModal, setShowPurchaseModal] = useState(false);

    const compras: Compra[] = [
        { id: 1, tipo: 'licencia', nombre: 'Licencia Premium - Biblioteca Digital', cantidad: 50, precioUnitario: 299, total: 14950, fecha: '2024-01-15', estado: 'activa', vigencia: '2024-12-31', asignadoA: 'Grupo 3-A' },
        { id: 2, tipo: 'libro', nombre: 'El Quijote - Edición Anotada', cantidad: 30, precioUnitario: 450, total: 13500, fecha: '2024-01-20', estado: 'activa', asignadoA: 'Todos los grupos' },
        { id: 3, tipo: 'licencia', nombre: 'Licencia Básica - Acceso Individual', cantidad: 100, precioUnitario: 199, total: 19900, fecha: '2024-02-01', estado: 'activa', vigencia: '2024-11-30' },
        { id: 4, tipo: 'libro', nombre: 'Cien Años de Soledad', cantidad: 25, precioUnitario: 380, total: 9500, fecha: '2024-02-10', estado: 'activa', asignadoA: 'Grupo 3-B' },
        { id: 5, tipo: 'licencia', nombre: 'Licencia Institucional - Acceso Completo', cantidad: 10, precioUnitario: 1500, total: 15000, fecha: '2023-12-01', estado: 'vencida', vigencia: '2024-01-31' },
        { id: 6, tipo: 'libro', nombre: 'La Metamorfosis', cantidad: 40, precioUnitario: 280, total: 11200, fecha: '2024-01-25', estado: 'pendiente', asignadoA: 'Pendiente de asignar' },
    ];

    const filteredCompras = compras.filter(compra => {
        const matchSearch = compra.nombre.toLowerCase().includes(searchTerm.toLowerCase());
        const matchTab = activeTab === 'todas' || compra.tipo === activeTab.slice(0, -1);
        return matchSearch && matchTab;
    });

    const totalGastado = compras.reduce((acc, c) => acc + c.total, 0);
    const licenciasActivas = compras.filter(c => c.tipo === 'licencia' && c.estado === 'activa').length;
    const librosComprados = compras.filter(c => c.tipo === 'libro').reduce((acc, c) => acc + c.cantidad, 0);

    return (
        <div className="space-y-6 animate-fade-in">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
                <div className="bg-gradient-to-br from-white to-[#faf8f5] rounded-xl p-6 shadow-md border border-[#e3dac9]/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-center gap-4">
                        <div className="p-3.5 rounded-xl bg-gradient-to-br from-[#d4af37]/10 to-[#d4af37]/5 shadow-sm">
                            <svg className="w-7 h-7 text-[#d4af37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        </div>
                        <div>
                            <p className="text-xs font-bold uppercase tracking-wider text-[#a1887f] mb-1">Total Invertido</p>
                            <h3 className="text-3xl font-playfair font-bold text-[#2b1b17]">${totalGastado.toLocaleString()}</h3>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-white to-[#faf8f5] rounded-xl p-6 shadow-md border border-[#e3dac9]/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-center gap-4">
                        <div className="p-3.5 rounded-xl bg-gradient-to-br from-blue-500/10 to-blue-500/5 shadow-sm">
                            <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"></path>
                            </svg>
                        </div>
                        <div>
                            <p className="text-xs font-bold uppercase tracking-wider text-[#a1887f] mb-1">Licencias Activas</p>
                            <h3 className="text-3xl font-playfair font-bold text-[#2b1b17]">{licenciasActivas}</h3>
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
                            <p className="text-xs font-bold uppercase tracking-wider text-[#a1887f] mb-1">Libros Comprados</p>
                            <h3 className="text-3xl font-playfair font-bold text-[#2b1b17]">{librosComprados}</h3>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-white to-[#faf8f5] rounded-xl p-6 shadow-md border border-[#e3dac9]/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-center gap-4">
                        <div className="p-3.5 rounded-xl bg-gradient-to-br from-purple-500/10 to-purple-500/5 shadow-sm">
                            <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                            </svg>
                        </div>
                        <div>
                            <p className="text-xs font-bold uppercase tracking-wider text-[#a1887f] mb-1">Total Compras</p>
                            <h3 className="text-3xl font-playfair font-bold text-[#2b1b17]">{compras.length}</h3>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tabs and Search */}
            <div className="bg-white rounded-xl shadow-lg border border-[#e3dac9]/50 overflow-hidden">
                <div className="border-b border-[#e3dac9]">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 md:p-6 gap-4">
                        <nav className="flex space-x-2 md:space-x-6">
                            {(['todas', 'licencias', 'libros'] as const).map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`pb-2 px-1 border-b-2 font-bold text-sm md:text-base transition-colors capitalize ${
                                        activeTab === tab
                                            ? 'border-[#d4af37] text-[#d4af37]'
                                            : 'border-transparent text-[#8d6e3f] hover:text-[#5d4037] hover:border-[#e3dac9]'
                                    }`}
                                >
                                    {tab === 'todas' ? 'Todas las Compras' : tab}
                                </button>
                            ))}
                        </nav>

                        <div className="flex gap-2 w-full md:w-auto">
                            <div className="relative flex-1 md:w-80">
                                <input
                                    type="text"
                                    placeholder="Buscar compra..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-11 pr-4 py-3 rounded-xl border-2 border-[#e3dac9] bg-white focus:outline-none focus:border-[#d4af37] focus:ring-4 focus:ring-[#d4af37]/10 font-lora text-sm transition-all duration-300"
                                />
                                <svg className="w-5 h-5 text-[#a1887f] absolute left-4 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                </svg>
                            </div>

                            <button 
                                onClick={() => setShowPurchaseModal(true)}
                                className="px-6 py-3 bg-gradient-to-r from-[#2b1b17] to-[#3e2723] text-[#f0e6d2] rounded-xl font-bold hover:from-[#3e2723] hover:to-[#4e342e] shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 whitespace-nowrap"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                                </svg>
                                Nueva Compra
                            </button>
                        </div>
                    </div>
                </div>

                {/* Compras Table */}
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gradient-to-r from-[#fbf8f1] to-[#f0e6d2]">
                            <tr>
                                <th className="px-6 py-4 text-left text-xs font-bold text-[#2b1b17] uppercase tracking-wider">Tipo</th>
                                <th className="px-6 py-4 text-left text-xs font-bold text-[#2b1b17] uppercase tracking-wider">Producto</th>
                                <th className="px-6 py-4 text-left text-xs font-bold text-[#2b1b17] uppercase tracking-wider">Cantidad</th>
                                <th className="px-6 py-4 text-left text-xs font-bold text-[#2b1b17] uppercase tracking-wider">Precio Unit.</th>
                                <th className="px-6 py-4 text-left text-xs font-bold text-[#2b1b17] uppercase tracking-wider">Total</th>
                                <th className="px-6 py-4 text-left text-xs font-bold text-[#2b1b17] uppercase tracking-wider">Fecha</th>
                                <th className="px-6 py-4 text-left text-xs font-bold text-[#2b1b17] uppercase tracking-wider">Estado</th>
                                <th className="px-6 py-4 text-left text-xs font-bold text-[#2b1b17] uppercase tracking-wider">Acciones</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#e3dac9]">
                            {filteredCompras.map((compra) => (
                                <tr key={compra.id} className="hover:bg-[#fbf8f1] transition-colors duration-200">
                                    <td className="px-6 py-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                                            compra.tipo === 'licencia'
                                                ? 'bg-blue-100 text-blue-700'
                                                : 'bg-purple-100 text-purple-700'
                                        }`}>
                                            {compra.tipo === 'licencia' ? '🎫 Licencia' : '📚 Libro'}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div>
                                            <div className="font-playfair font-bold text-[#2b1b17]">{compra.nombre}</div>
                                            {compra.asignadoA && (
                                                <div className="text-xs text-[#8d6e3f] flex items-center gap-1 mt-1">
                                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                                    </svg>
                                                    {compra.asignadoA}
                                                </div>
                                            )}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="font-bold text-[#2b1b17]">{compra.cantidad}</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="text-[#5d4037]">${compra.precioUnitario.toLocaleString()}</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="font-bold text-[#d4af37] text-lg">${compra.total.toLocaleString()}</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="text-sm text-[#5d4037]">
                                            {new Date(compra.fecha).toLocaleDateString('es-MX', { 
                                                year: 'numeric', 
                                                month: 'short', 
                                                day: 'numeric' 
                                            })}
                                        </div>
                                        {compra.vigencia && (
                                            <div className="text-xs text-[#8d6e3f] flex items-center gap-1 mt-1">
                                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                Vence: {new Date(compra.vigencia).toLocaleDateString('es-MX', { 
                                                    year: 'numeric', 
                                                    month: 'short', 
                                                    day: 'numeric' 
                                                })}
                                            </div>
                                        )}
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                                            compra.estado === 'activa'
                                                ? 'bg-emerald-100 text-emerald-700'
                                                : compra.estado === 'vencida'
                                                ? 'bg-red-100 text-red-700'
                                                : 'bg-yellow-100 text-yellow-700'
                                        }`}>
                                            {compra.estado === 'activa' ? '✓ Activa' : compra.estado === 'vencida' ? '✗ Vencida' : '⏳ Pendiente'}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2">
                                            <button className="p-2 hover:bg-[#d4af37]/10 rounded-lg transition-colors duration-200 group">
                                                <svg className="w-5 h-5 text-[#8d6e3f] group-hover:text-[#d4af37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                                                </svg>
                                            </button>
                                            <button className="p-2 hover:bg-blue-50 rounded-lg transition-colors duration-200 group">
                                                <svg className="w-5 h-5 text-[#8d6e3f] group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {filteredCompras.length === 0 && (
                    <div className="text-center py-12">
                        <div className="w-20 h-20 bg-[#fbf8f1] rounded-full mx-auto mb-4 flex items-center justify-center">
                            <svg className="w-10 h-10 text-[#a1887f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                            </svg>
                        </div>
                        <h3 className="font-playfair text-xl font-bold text-[#2b1b17] mb-2">No se encontraron compras</h3>
                        <p className="text-[#8d6e3f]">Intenta con otros términos de búsqueda o cambia de pestaña</p>
                    </div>
                )}
            </div>
        </div>
    );
}