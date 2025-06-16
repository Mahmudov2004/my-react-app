// /src/pages/HomePage/HomePage.tsx
import React from 'react';
import CardList from '../../components/CardList';

const HomePage: React.FC = () => {
  return (
    <section>
      <h1>Главная страница</h1>
      <h2>Популярные карточки</h2>
      <CardList limit={3} />
    </section>
  );
};

export default HomePage;