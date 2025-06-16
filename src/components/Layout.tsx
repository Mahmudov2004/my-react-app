
import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <header style={{ padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Jobly</Link>
        <nav>
          <Link to="/cards" style={{ margin: '0 1rem' }}>Карточки</Link>
        </nav>
      </header>

      <main style={{ padding: '2rem' }}>
        <Outlet />
      </main>

      <footer style={{ textAlign: 'center', padding: '1rem', background: '#f0f0f0' }}>
        &copy; 2025 Jobly.co | Все права защищены.
      </footer>
    </>
  );
};

export default Layout;