import React from 'react';
import Card from './Card';
import styles from '../styles/CardList.module.css';

interface Character {
  id: number;
  name: string;
  image: string;
  status: string;
}

interface CardListProps {
  characters: Character[];
}

const CardList: React.FC<CardListProps> = ({ characters }) => {
  return (
    <div className={styles.cardList}>
      {characters.map(character => (
        <Card key={character.id} character={character} />
      ))}
    </div>
  );
};

export default CardList;