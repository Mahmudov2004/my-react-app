
import React, { useState, useEffect } from 'react';
import Card from '../Card';
import styles from './CardList.module.css';

interface Post {
  id: number;
  title: string;
  body: string;
}

interface CardListProps {
  limit?: number;
}

const CardList: React.FC<CardListProps> = ({ limit = 10 }) => {
  const [cards, setCards] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`)
      .then((response) => {
        if (!response.ok) throw new Error('Ошибка загрузки данных');
        return response.json();
      })
      .then((data) => {
        setCards(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [limit]);

  if (loading) return <div className={styles.loading}>Загрузка...</div>;
  if (error) return <div className={styles.error}>Ошибка: {error}</div>;

  return (
    <div className={styles.cardList}>
      {cards.map((card) => (
        <Card key={card.id} title={card.title} text={card.body} />
      ))}
    </div>
  );
};

export default CardList;