import './App.css';
import styled from "@emotion/styled";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LoginPage } from "./component/LoginPage";
import React from 'react';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
`;

function App() {
  return (
      <Container>
        <Router>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
            </Routes>
        </Router>
      </Container>
  );
}

export default App;
