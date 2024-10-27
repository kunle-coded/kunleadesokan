import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';

function AppLayout() {
  return (
    <div className="app">
      <header className="header">
        <Header />
      </header>

      <main className="main">
        <Outlet />
      </main>

      <footer className="footer">
        <p>&copy; 2024 - footer here</p>
      </footer>
    </div>
  );
}

export default AppLayout;
