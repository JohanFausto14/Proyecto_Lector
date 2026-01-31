'use client';

import React, { useState } from 'react';
import { Modal } from '../../ui/Modal';
import { AlumnoForm } from './AlumnoForm';

interface AddAlumnoModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSuccess: () => void;
}

export const AddAlumnoModal: React.FC<AddAlumnoModalProps> = ({
    isOpen,
    onClose,
    onSuccess
}) => {
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (data: any) => {
        setIsLoading(true);
        
        try {
            // Aquí iría la llamada al servicio
            console.log('Crear alumno:', data);
            
            // Simular llamada API
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            onSuccess();
            onClose();
        } catch (error) {
            console.error('Error al crear alumno:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title="Agregar Nuevo Alumno"
            size="lg"
        >
            <AlumnoForm
                onSubmit={handleSubmit}
                onCancel={onClose}
                isLoading={isLoading}
            />
        </Modal>
    );
};