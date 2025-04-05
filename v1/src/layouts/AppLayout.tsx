import { Outlet } from "react-router";
import Header from "../components/header/Header";

function AppLayout() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <Outlet />
        <div
          id="Announcer"
          role="status"
          aria-live="assertive"
          aria-atomic="true"
          aria-hidden="false"
          className="visuallyHidden"
        >
          You are now in "About" section.
        </div>
      </main>
    </div>
  );
}

export default AppLayout;
