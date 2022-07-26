import React, { useState } from "react";

import AboutMe from "../pages/AboutMe";
import ContactMe from "../pages/ContactMe";
import Portfolio from "../pages/Portfolio";
import Resume from "../pages/Resume";
import Header from "./Header";
import Footer from "./Footer";

export default function PortfolioPage() {
  const [displayedPage, setDisplayedPage] = useState("AboutMe");

  const renderPage = () => {
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
    <div className="d-flex flex-column min-vh-100">
      <Header displayedPage={displayedPage} pageSwapHandler={pageSwapHandler} />
      {renderPage()}
      <Footer />
    </div>
  );
}
