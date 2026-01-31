'use client';

import React, { useState } from 'react';
import { Modal } from '../../ui/Modal';
import { EscuelaForm } from './EscuelaForm';

interface AddEscuelaModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSuccess: () => void;
}

export const AddEscuelaModal: React.FC<AddEscuelaModalProps> = ({
    isOpen,
    onClose,
    onSuccess
}) => {
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (data: any) => {
        setIsLoading(true);
        
        try {
            console.log('Crear escuela:', data);
            
            // Simular llamada API
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            onSuccess();
            onClose();
        } catch (error) {
            console.error('Error al crear escuela:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title="Registrar Nueva Escuela"
            size="xl"
        >
            <EscuelaForm
                onSubmit={handleSubmit}
                onCancel={onClose}
                isLoading={isLoading}
            />
        </Modal>
    );
};