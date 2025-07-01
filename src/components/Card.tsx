import Link from 'next/link';
import React from 'react';
import styles from '../styles/Card.module.css';

interface Character {
    id: number;
    name: string;
    image: string;
    status: string;
}

const Card: React.FC<{ character: Character }> = ({ character }) => {
    return (
        <Link href={`/character/${character.id}`} passHref>
            <div className={styles.card} style={{ cursor: 'pointer' }}>
                <img src={character.image} alt={character.name} className={styles.image} />
                <h2 className={styles.name}>{character.name}</h2>
                <p className={styles.status}>{character.status}</p>
            </div>
        </Link>
    );
};

export default Card;