'use client';

import React from 'react';
import { libros } from '../../data/libros'; // Using our data
import type { Libro } from '../../data/libros';

interface TiendaProps {
    onSelectBook?: (book: Libro) => void;
}

const Tienda: React.FC<TiendaProps> = ({ onSelectBook }) => {

    // We use 'libros' as the store catalog
    const storeBooks = libros;

    return (
        <div className="animate-fade-in space-y-8 md:space-y-12">

            {/* Hero Banner */}
            <div className="relative w-full aspect-[4/1] md:aspect-[5/1] bg-[#2b1b17] rounded-xl overflow-hidden shadow-lg flex items-center px-8 md:px-16">
                <div
                    className="absolute inset-0 opacity-10"
                    style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')" }}
                ></div>
                <div className="relative z-10 max-w-lg">
                    <h2 className="text-[#d4af37] font-playfair text-2xl md:text-3xl font-bold mb-2">Bienvenido a la Librería</h2>
                    <p className="text-[#f0e6d2] font-lora text-sm md:text-base">Descubre las últimas ediciones y material exclusivo para tu carrera.</p>
                </div>
                <div className="absolute right-0 bottom-0 h-full w-1/2 bg-gradient-to-l from-[#d4af37]/10 to-transparent"></div>
            </div>

            {/* Search Bar */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <h3 className="font-playfair text-xl font-bold text-[#2b1b17] self-start md:self-center">Catálogo Completo</h3>

                <div className="flex gap-2 w-full md:w-auto">
                    <div className="relative flex-1 md:w-64">
                        <input
                            type="text"
                            placeholder="Buscar título, autor..."
                            className="w-full pl-10 pr-4 py-2 rounded-lg border border-[#e3dac9] bg-white focus:outline-none focus:border-[#d4af37] font-lora text-sm"
                        />
                        <svg className="w-4 h-4 text-[#a1887f] absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <button className="px-4 py-2 bg-[#fbf8f1] border border-[#e3dac9] rounded-lg text-[#5d4037] hover:bg-[#e3dac9] transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path></svg>
                    </button>
                </div>
            </div>

            {/* Store Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
                {storeBooks.map(book => (
                    <div
                        key={book.id}
                        className="bg-white rounded-lg p-3 md:p-4 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group border border-transparent hover:border-[#d4af37]/30 flex flex-col h-full"
                        onClick={() => onSelectBook?.(book)}
                    >

                        {/* Cover */}
                        <div
                            className="relative aspect-[2/3] mb-4 rounded shadow-md overflow-hidden bg-gray-100"
                            style={{ backgroundColor: book.coverColor }}
                        >
                            <div className="absolute inset-0 bg-black/10 mix-blend-overlay"></div>
                            {/* Title on Cover */}
                            <div className="absolute inset-0 flex items-center justify-center p-2 text-center text-white font-playfair font-bold text-sm md:text-base opacity-90">
                                {book.title}
                            </div>
                            {book.owned && (
                                <div className="absolute top-2 right-2 bg-[#81c784] text-white text-[8px] md:text-[10px] uppercase font-bold px-2 py-1 rounded-full shadow-sm">
                                    Adquirido
                                </div>
                            )}
                        </div>

                        {/* Info */}
                        <h4 className="font-playfair font-bold text-[#2b1b17] leading-tight mb-1 text-sm md:text-base line-clamp-2">
                            {book.title}
                        </h4>
                        <p className="font-lora text-xs text-[#8d6e3f] mb-3 truncate">{book.author}</p>

                        <div className="flex justify-between items-center mt-auto pt-2 border-t border-gray-100">
                            <span className="font-bold text-[#2b1b17] text-sm md:text-base">
                                {book.price === 0 ? 'Gratis' : `$${book.price}`}
                            </span>
                            <button className="w-8 h-8 rounded-full bg-[#fbf8f1] hover:bg-[#2b1b17] text-[#2b1b17] hover:text-[#d4af37] flex items-center justify-center transition-colors">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Tienda;
