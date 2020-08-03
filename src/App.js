import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./containers/ui-components/Header";
import Footer from "./containers/ui-components/Footer";
import Routes from "./Router/routes";
import styled from "styled-components";

const MainLayout = styled.div`
  height: 100vh;
`;

function App() {
  return (
    <MainLayout>
      <Header />
      <div className="full-height-flex">
        <Routes />
      </div>
      <Footer />
    </MainLayout>
  );
}

export default App;
