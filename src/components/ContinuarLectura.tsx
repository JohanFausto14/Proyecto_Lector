import React from 'react';

export const ContinuarLectura: React.FC = () => {
    return (
        <div className="relative w-full h-64 bg-[#2b1b17] rounded-2xl overflow-hidden shadow-2xl flex items-center p-8 md:p-12 text-[#f0e6d2]">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-20 pointer-events-none"
                style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/leather.png')" }}>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-lg">
                <span className="inline-block px-3 py-1 mb-4 text-[10px] font-bold tracking-[0.2em] uppercase text-[#2b1b17] bg-[#d4af37] rounded-full">
                    Lectura Actual
                </span>
                <h2 className="text-2xl md:text-4xl font-playfair font-bold mb-2 leading-tight">
                    El Quijote
                </h2>
                <p className="text-[#a1887f] font-lora italic mb-6">Capítulo 4: De lo que le sucedió a nuestro caballero...</p>

                <div className="flex items-center gap-6">
                    <button className="px-6 py-3 bg-[#f0e6d2] text-[#2b1b17] font-bold font-playfair uppercase tracking-wider rounded-sm shadow-lg hover:bg-[#d4af37] hover:scale-105 transition-all">
                        Continuar
                    </button>
                    <div className="flex flex-col">
                        <span className="text-xs text-[#a1887f] uppercase tracking-widest mb-1">Progreso</span>
                        <div className="w-32 h-1 bg-[#4e342e] rounded-full overflow-hidden">
                            <div className="h-full bg-[#d4af37] w-[45%]"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Book Cover (Right side) */}
            <div className="absolute -right-12 -bottom-12 w-64 h-80 bg-[#3e2723] rounded-lg shadow-2xl transform rotate-[-12deg] border border-[#4e342e] hidden md:block">
                <div className="absolute inset-4 border border-[#d4af37]/30 rounded"></div>
            </div>
        </div>
    );
};
