'use client';

import React from 'react';
import type { Libro } from '../../data/libros';
import styles from './styles.module.css';

interface DetalleProductoProps {
    libro: Libro | null;
    isOpen: boolean;
    onClose: () => void;
}

export const DetalleProducto: React.FC<DetalleProductoProps> = ({ libro, isOpen, onClose }) => {
    if (!isOpen || !libro) return null;

    return (
        <div className={`${styles.modalOverlay} z-[100]`}>
            <div className={`${styles.modalContent} flex flex-col md:flex-row max-h-[90vh] md:max-h-[32rem] max-w-4xl w-full bg-[#fbf8f1] rounded-2xl shadow-2xl relative overflow-hidden`}>
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-20 p-2 bg-black/10 rounded-full hover:bg-black/20 text-[#5d4037] transition-colors"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>

                {/* Left: 3D Book Presentation */}
                <div className="w-full md:w-1/3 bg-[#e3dac9]/30 flex flex-col items-center justify-center p-8 relative">
                    <div
                        className={`${styles.modalBook3d} w-40 h-60 shadow-2xl rounded-r-lg border-l-4 border-white/20 transform hover:scale-105 transition-transform duration-500`}
                        style={{ backgroundColor: libro.coverColor }}
                    >
                        <div className="h-full flex items-center justify-center p-4 text-center">
                            <h3 className="text-white font-playfair font-bold text-xl drop-shadow-md">{libro.title}</h3>
                        </div>
                    </div>
                </div>

                {/* Right: Details */}
                <div className="flex-1 p-8 overflow-y-auto">
                    <span className={`${styles.publisherTag} inline-block px-2 py-1 bg-[#d4af37]/10 text-[#d4af37] text-[10px] font-bold uppercase tracking-wider rounded mb-4`}>
                        {libro.publisher} • {libro.year}
                    </span>

                    <h2 className={`${styles.detailTitle} text-3xl font-playfair font-bold text-[#2b1b17] mb-2 leading-tight`}>
                        {libro.title}
                    </h2>
                    <p className={`${styles.detailAuthor} text-[#8d6e3f] italic text-lg mb-6`}>
                        por {libro.author}
                    </p>

                    <div className={`${styles.detailStats} flex gap-8 py-4 border-y border-[#e3dac9] mb-8`}>
                        <div>
                            <p className={`${styles.detailStatLabel} text-xs font-bold text-[#a1887f] uppercase tracking-wider mb-1`}>Páginas</p>
                            <p className={`${styles.detailStatValue} font-playfair font-bold text-xl text-[#2b1b17]`}>{libro.pages}</p>
                        </div>
                        <div>
                            <p className={`${styles.detailStatLabel} text-xs font-bold text-[#a1887f] uppercase tracking-wider mb-1`}>Idioma</p>
                            <p className={`${styles.detailStatValue} font-playfair font-bold text-xl text-[#2b1b17]`}>Español</p>
                        </div>
                        <div>
                            <p className={`${styles.detailStatLabel} text-xs font-bold text-[#a1887f] uppercase tracking-wider mb-1`}>Formato</p>
                            <p className={`${styles.detailStatValue} font-playfair font-bold text-xl text-[#2b1b17]`}>Digital</p>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h4 className={`${styles.detailSynopsisTitle} font-bold text-[#2b1b17] mb-2`}>Sinopsis</h4>
                        <p className={`${styles.detailSynopsisText} text-[#5d4037] text-sm leading-relaxed mb-4`}>
                            {libro.synopsis}
                        </p>
                    </div>

                    <div className="flex gap-3 mt-auto">
                        {libro.owned ? (
                            <button className="flex-1 bg-[#81c784] text-white py-4 rounded-lg font-playfair font-bold uppercase tracking-widest hover:brightness-110 shadow-lg transition-all">
                                {libro.progress > 0 ? 'Continuar Lectura' : 'Leer Ahora'}
                            </button>
                        ) : (
                            <button className="flex-1 bg-[#2b1b17] text-[#f0e6d2] py-4 rounded-lg font-playfair font-bold uppercase tracking-widest hover:bg-[#3e2723] hover:-translate-y-1 transition-all shadow-lg flex items-center justify-center gap-2">
                                <span>Comprar Ahora</span>
                                <span className="bg-[#d4af37] text-[#2b1b17] text-xs px-2 py-1 rounded font-sans font-bold">
                                    {libro.price === 0 ? 'GRATIS' : `$${libro.price}`}
                                </span>
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
