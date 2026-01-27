'use client';

import React from 'react';
import styles from './styles.module.css';

interface TarjetaLibroProps {
    title: string;
    author: string;
    coverColor: string;
    progress: number;
    onClick?: () => void;
}

export const TarjetaLibro: React.FC<TarjetaLibroProps> = ({ title, author, coverColor, progress, onClick }) => {
    return (
        <div className={`${styles.bookCard} group relative flex flex-col`} onClick={onClick}>
            <div className={styles.bookCover} style={{ backgroundColor: coverColor }}>
                <div className={styles.bookSpineEffect}></div>

                {/* Book Title on Cover */}
                <div className="text-center px-4 relative z-10">
                    <h3 className="text-white font-playfair font-bold text-lg drop-shadow-md line-clamp-3">
                        {title}
                    </h3>
                </div>

                <div className={styles.bookOverlay}>
                    <button className={`${styles.readBtn} shadow-lg`}>
                        {progress > 0 ? 'Continuar' : 'Leer'}
                    </button>
                </div>
            </div>

            <div className={`${styles.bookInfo} flex-1 flex flex-col`}>
                <h3 className={`${styles.bookTitle} text-base line-clamp-1`}>{title}</h3>
                <p className={`${styles.bookAuthor} text-xs line-clamp-1 mb-2`}>{author}</p>

                <div className="mt-auto">
                    <div className={styles.progressBar}>
                        <div
                            className={styles.progressFill} style={{ width: `${progress}%` }}>
                        </div>
                    </div>
                    <p className={styles.progressText}>
                        {progress}% completado
                    </p>
                </div>
            </div>
        </div>
    );
};
