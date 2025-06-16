
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <section style={{ textAlign: 'center' }}>
      <h1 style={{ fontSize: '3rem', color: 'red' }}>404 — Страница не найдена</h1>
      <p>Запрашиваемая страница не существует.</p>
      <Link to="/">← Вернуться на главную</Link>
    </section>
  );
};

export default NotFoundPage;