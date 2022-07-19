import React, { useState } from "react";

import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import ContactMe from "./pages/ContactMe";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Header from "./Header";

export default function PortfolioPage() {
  const [displayedPage, setDisplayedPage] = useState("Home");

  const renderPage = () => {
    if (displayedPage === "Home") {
      return <Home />;
    }
    if (displayedPage === "AboutMe") {
      return <AboutMe />;
    }
    if (displayedPage === "Portfolio") {
      return <Portfolio />;
    }
    if (displayedPage === "ContactMe") {
      return <ContactMe />;
    }
    return <Resume />;
  };

  const pageSwapHandler = (page) => setDisplayedPage(page);

  return (
    <div>
      <Header displayedPage={displayedPage} pageSwapHandler={pageSwapHandler} />
      {renderPage()}
    </div>
  );
}
