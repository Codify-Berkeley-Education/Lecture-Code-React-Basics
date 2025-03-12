import { useState } from 'react';

// Define TypeScript types for the props expected by the Header component.
type HeaderProps = {
    title: string; // Expected to be a string that represents the title of the website.
};

/**
 * Header Component
 * Renders the website's header with a dynamically set title.
 *
 * Props:
 * - title: string - The title to display in the header.
 */
const Header = ({ title }: HeaderProps) => {
    return (
        <header style={{ background: '#222', color: 'white', padding: '15px', textAlign: 'center' }}>
            <h1>{title}</h1>
        </header>
    );
};

// Define TypeScript types for the props expected by the Navigation component.
type NavigationProps = {
    setPage: (page: string) => void; // Function to set the current page state in the Website component.
};

/**
 * Navigation Component
 * Renders navigation buttons that allow the user to switch between different pages.
 *
 * Props:
 * - setPage: (page: string) => void - Function to change the current page displayed.
 */
const Navigation = ({ setPage }: NavigationProps) => {
    return (
        <nav style={{ textAlign: 'center', margin: '10px' }}>
            <button onClick={() => setPage('Home')} style={{ margin: '5px' }}>Home</button>
            <button onClick={() => setPage('About')} style={{ margin: '5px' }}>About</button>
            <button onClick={() => setPage('Services')} style={{ margin: '5px' }}>Services</button>
            <button onClick={() => setPage('Contact')} style={{ margin: '5px' }}>Contact</button>
        </nav>
    );
};

// Define components for each page of the website. Each component represents a single page.

/**
 * Home Component
 * Represents the Home page of the website.
 */
const Home = () => <section><h2>Home</h2><p>Welcome! This is the homepage.</p></section>;

/**
 * About Component
 * Represents the About Us page of the website.
 */
const About = () => <section><h2>About Us</h2><p>We are a company that does things.</p></section>;

/**
 * Services Component
 * Represents the Services page of the website.
 */
const Services = () => <section><h2>Our Services</h2><p>Here’s what we offer.</p></section>;

/**
 * Contact Component
 * Represents the Contact page of the website.
 */
const Contact = () => <section><h2>Contact</h2><p>Reach out to us here.</p></section>;

/**
 * Website Component
 * Manages the state of the current page and handles the rendering of the entire website.
 */
const Website = () => {
    const [page, setPage] = useState('Home'); // State to keep track of which page is currently active.

    return (
        <div>
            <Header title="My React Website" />
            <Navigation setPage={setPage} />
            <main style={{ padding: '20px', textAlign: 'center' }}>
                {/* Conditional rendering based on the current page state. */}
                {page === 'Home' && <Home />}
                {page === 'About' && <About />}
                {page === 'Services' && <Services />}
                {page === 'Contact' && <Contact />}
            </main>
        </div>
    );
};

/**
 * App Component
 * The root component that encompasses the entire React application.
 */
const App = () => {
    return <Website />;
};

export default App;
