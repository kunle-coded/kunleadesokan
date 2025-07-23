import { Outlet } from "react-router";
import Footer from "../components/footer/Footer";
import PageHeader from "../components/header/PageHeader";

function AppLayout() {
  return (
    <div className="app">
      <PageHeader />
      <main>
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
      <Footer />
    </div>
  );
}

export default AppLayout;
