import { Outlet } from "react-router";
import Footer from "../components/footer/Footer";
import PageHeader from "../components/header/PageHeader";
import React, { useRef } from "react";

function AppLayout() {
  const mainRef = useRef<HTMLElement | null>(null);

  return (
    <div className="app">
      <PageHeader contentRef={mainRef} />
      <main ref={mainRef} id="content">
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
