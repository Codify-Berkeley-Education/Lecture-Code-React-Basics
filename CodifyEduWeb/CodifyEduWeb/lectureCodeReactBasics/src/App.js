// React Basics: Building a Simple Multi-Page Website
// This covers components, props, state, event handling, and basic navigation.

import React, { useState } from 'react';

// Header Component
// Displays the website title at the top.
const Header = ({ title }) => {
  return (
    <header style={{ background: '#222', color: 'white', padding: '15px', textAlign: 'center' }}>
      <h1>{title}</h1>
    </header>
  );
};

// Navigation Component
// Renders navigation buttons to switch between pages.
const Navigation = ({ setPage }) => {
  return (
    <nav style={{ textAlign: 'center', margin: '10px' }}>
      {/* Each button updates state to switch pages */}
      <button onClick={() => setPage('Home')} style={{ margin: '5px' }}>Home</button>
      <button onClick={() => setPage('About')} style={{ margin: '5px' }}>About</button>
      <button onClick={() => setPage('Services')} style={{ margin: '5px' }}>Services</button>
      <button onClick={() => setPage('Contact')} style={{ margin: '5px' }}>Contact</button>
    </nav>
  );
};

// Page Components
// Each function represents a different "page" of the website.
const Home = () => <section><h2>Home</h2><p>Welcome! This is the homepage.</p></section>;
const About = () => <section><h2>About Us</h2><p>We are a company that does things.</p></section>;
const Services = () => <section><h2>Our Services</h2><p>Here’s what we offer.</p></section>;
const Contact = () => <section><h2>Contact</h2><p>Reach out to us here.</p></section>;

// Main Website Component
// Manages which page is displayed using state.
const Website = () => {
  const [page, setPage] = useState('Home'); // Keeps track of the current page.

  return (
    <div>
      <Header title="My React Website" />
      <Navigation setPage={setPage} />
      <main style={{ padding: '20px', textAlign: 'center' }}>
        {/* Shows the correct component based on the state */}
        {page === 'Home' && <Home />}
        {page === 'About' && <About />}
        {page === 'Services' && <Services />}
        {page === 'Contact' && <Contact />}
      </main>
    </div>
  );
};

// Root App Component
// This is the entry point of the React app.
const App = () => {
  return <Website />;
};

export default App;

// What students should learn from this:
// 1. How React breaks a website into components.
// 2. How props allow data to flow between components.
// 3. How state (`useState`) manages navigation between pages.
// 4. How event handlers (`onClick`) allow interaction.
// 5. How conditional rendering (`page === 'Home' && <Home />`) works.

