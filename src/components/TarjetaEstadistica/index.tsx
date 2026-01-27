'use client';

import React from 'react';

interface TarjetaEstadisticaProps {
    label: string;
    value: string;
    subtext?: string;
    children?: React.ReactNode;
}

export const TarjetaEstadistica: React.FC<TarjetaEstadisticaProps> = ({ label, value, subtext, children }) => {
    return (
        <div className="bg-white rounded-xl shadow-md border border-[#e3dac9] p-4 md:p-6 flex items-start gap-4">
            <div className="p-3 rounded-full bg-[#fbd431]/10 text-[#d4af37]">
                {children || (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                    </svg>
                )}
            </div>
            <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#a1887f] mb-1">{label}</p>
                <h3 className="text-2xl font-playfair font-bold text-[#2b1b17] mb-1">{value}</h3>
                {subtext && <p className="text-xs text-[#8d6e3f] italic font-lora">{subtext}</p>}
            </div>
        </div>
    );
};
