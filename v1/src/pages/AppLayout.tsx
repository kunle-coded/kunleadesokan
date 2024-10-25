import { Outlet } from 'react-router-dom';

function AppLayout() {
  return (
    <div>
      <h1>Routed TS React App</h1>

      <Outlet />
    </div>
  );
}

export default AppLayout;
