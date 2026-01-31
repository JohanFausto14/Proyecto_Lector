'use client';

import React, { useState } from 'react';
import { Input } from '../../ui/Input';
import { Button } from '../../ui/Button';
import type { CreateEscuelaDTO } from '../../../types/escuela';

interface EscuelaFormData extends CreateEscuelaDTO {}

interface EscuelaFormProps {
    initialData?: Partial<EscuelaFormData>;
    onSubmit: (data: EscuelaFormData) => void;
    onCancel: () => void;
    isLoading?: boolean;
}

export const EscuelaForm: React.FC<EscuelaFormProps> = ({
    initialData,
    onSubmit,
    onCancel,
    isLoading = false
}) => {
    const [formData, setFormData] = useState<EscuelaFormData>(
        initialData as EscuelaFormData || {
            nombre: '',
            email: '',
            telefono: '',
            direccion: '',
            ciudad: '',
            estado: '',
            codigoPostal: '',
            nombreDirector: '',
            emailDirector: ''
        }
    );

    const [errors, setErrors] = useState<Partial<Record<keyof EscuelaFormData, string>>>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        
        if (errors[name as keyof EscuelaFormData]) {
            setErrors(prev => ({
                ...prev,
                [name]: undefined
            }));
        }
    };

    const validate = (): boolean => {
        const newErrors: Partial<Record<keyof EscuelaFormData, string>> = {};

        if (!formData.nombre.trim()) newErrors.nombre = 'El nombre es requerido';
        if (!formData.email.trim()) {
            newErrors.email = 'El email es requerido';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Email inválido';
        }
        if (!formData.telefono.trim()) newErrors.telefono = 'El teléfono es requerido';
        if (!formData.direccion.trim()) newErrors.direccion = 'La dirección es requerida';
        if (!formData.ciudad.trim()) newErrors.ciudad = 'La ciudad es requerida';
        if (!formData.estado.trim()) newErrors.estado = 'El estado es requerido';
        if (!formData.codigoPostal.trim()) newErrors.codigoPostal = 'El código postal es requerido';
        if (!formData.nombreDirector.trim()) newErrors.nombreDirector = 'El nombre del director es requerido';
        if (!formData.emailDirector.trim()) {
            newErrors.emailDirector = 'El email del director es requerido';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.emailDirector)) {
            newErrors.emailDirector = 'Email del director inválido';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (validate()) {
            onSubmit(formData);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {/* Información de la Escuela */}
            <div>
                <h3 className="text-lg font-playfair font-bold text-[#2b1b17] mb-4 flex items-center gap-2">
                    <div className="w-1 h-6 bg-gradient-to-b from-[#d4af37] to-[#c19a2e] rounded-full"></div>
                    Información de la Institución
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                        <Input
                            label="Nombre de la Escuela"
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                            placeholder="Ej: Preparatoria Central"
                            error={errors.nombre}
                            required
                            icon={
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                                </svg>
                            }
                        />
                    </div>

                    <Input
                        label="Correo Institucional"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Ej: contacto@preparatoria.edu"
                        error={errors.email}
                        required
                        icon={
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                            </svg>
                        }
                    />

                    <Input
                        label="Teléfono"
                        name="telefono"
                        type="tel"
                        value={formData.telefono}
                        onChange={handleChange}
                        placeholder="Ej: +52 55 1234 5678"
                        error={errors.telefono}
                        required
                        icon={
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                            </svg>
                        }
                    />
                </div>
            </div>

            {/* Dirección */}
            <div>
                <h3 className="text-lg font-playfair font-bold text-[#2b1b17] mb-4 flex items-center gap-2">
                    <div className="w-1 h-6 bg-gradient-to-b from-[#d4af37] to-[#c19a2e] rounded-full"></div>
                    Dirección
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                        <Input
                            label="Dirección Completa"
                            name="direccion"
                            value={formData.direccion}
                            onChange={handleChange}
                            placeholder="Ej: Av. Insurgentes Sur 1234"
                            error={errors.direccion}
                            required
                            icon={
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                </svg>
                            }
                        />
                    </div>

                    <Input
                        label="Ciudad"
                        name="ciudad"
                        value={formData.ciudad}
                        onChange={handleChange}
                        placeholder="Ej: Ciudad de México"
                        error={errors.ciudad}
                        required
                        icon={
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                            </svg>
                        }
                    />

                    <div className="w-full">
                        <label className="block text-sm font-bold text-[#2b1b17] mb-2">
                            Estado
                            <span className="text-red-500 ml-1">*</span>
                        </label>
                        <div className="relative">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#a1887f]">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
                                </svg>
                            </div>
                            <select
                                name="estado"
                                value={formData.estado}
                                onChange={handleChange}
                                required
                                className={`w-full pl-12 pr-4 py-3 rounded-xl border-2 bg-white font-lora text-sm transition-all duration-300 focus:outline-none ${
                                    errors.estado 
                                        ? 'border-red-500 focus:border-red-500 focus:ring-4 focus:ring-red-500/10' 
                                        : 'border-[#e3dac9] focus:border-[#d4af37] focus:ring-4 focus:ring-[#d4af37]/10'
                                }`}
                            >
                                <option value="">Selecciona un estado</option>
                                <option value="CDMX">Ciudad de México</option>
                                <option value="Estado de México">Estado de México</option>
                                <option value="Jalisco">Jalisco</option>
                                <option value="Nuevo León">Nuevo León</option>
                                <option value="Puebla">Puebla</option>
                                <option value="Guanajuato">Guanajuato</option>
                                <option value="Veracruz">Veracruz</option>
                                <option value="Otro">Otro</option>
                            </select>
                        </div>
                        {errors.estado && (
                            <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                                {errors.estado}
                            </p>
                        )}
                    </div>

                    <Input
                        label="Código Postal"
                        name="codigoPostal"
                        value={formData.codigoPostal}
                        onChange={handleChange}
                        placeholder="Ej: 01234"
                        error={errors.codigoPostal}
                        required
                        icon={
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                            </svg>
                        }
                    />
                </div>
            </div>

            {/* Información del Director */}
            <div>
                <h3 className="text-lg font-playfair font-bold text-[#2b1b17] mb-4 flex items-center gap-2">
                    <div className="w-1 h-6 bg-gradient-to-b from-[#d4af37] to-[#c19a2e] rounded-full"></div>
                    Datos del Director
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                        label="Nombre del Director"
                        name="nombreDirector"
                        value={formData.nombreDirector}
                        onChange={handleChange}
                        placeholder="Ej: Dr. Juan Pérez"
                        error={errors.nombreDirector}
                        required
                        icon={
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                            </svg>
                        }
                    />

                    <Input
                        label="Email del Director"
                        name="emailDirector"
                        type="email"
                        value={formData.emailDirector}
                        onChange={handleChange}
                        placeholder="Ej: director@preparatoria.edu"
                        error={errors.emailDirector}
                        required
                        icon={
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                            </svg>
                        }
                    />
                </div>
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-3 pt-6 border-t border-[#e3dac9]">
                <Button
                    type="button"
                    variant="outline"
                    onClick={onCancel}
                    disabled={isLoading}
                >
                    Cancelar
                </Button>
                <Button
                    type="submit"
                    variant="primary"
                    disabled={isLoading}
                    icon={
                        isLoading ? (
                            <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                        ) : (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                        )
                    }
                >
                    {isLoading ? 'Guardando...' : initialData ? 'Actualizar Escuela' : 'Crear Escuela'}
                </Button>
            </div>
        </form>
    );
};