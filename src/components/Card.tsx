
import React from 'react';
import styles from './Card.module.css';

interface CardProps {
  title: string;
  text: string;
  image?: string; 
}

const Card: React.FC<CardProps> = ({ title, text, image }) => {
  return (
    <div className={styles.card}>
      {image && <img src={image} alt={title} className={styles.cardImage} />}
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{text}</p>
    </div>
  );
};

export default Card;