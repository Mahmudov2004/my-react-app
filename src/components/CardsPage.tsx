
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import CardList from '../../components/CardList';

const CardsPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const limit = parseInt(searchParams.get('limit') || '10', 10); 

  return (
    <section>
      <h1>Все карточки</h1>
      <p>Показано: {limit}</p>
      <CardList limit={limit} />
    </section>
  );
};

export default CardsPage;