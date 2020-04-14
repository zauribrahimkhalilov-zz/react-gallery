import React from 'react';
import MobileMenu from './components/basic/MobileMenu';
import Header from './components/basic/Header';
import Router from './components/route/Router';

function App() {
  return (
    <div className="site-wrap">
      <MobileMenu />
      <Header />
      <main className="main-content">
        <div className="container-fluid photos">
          <Router />
        </div>
      </main>
    </div>
  );
}

export default App;
