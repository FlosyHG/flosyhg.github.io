// src/App.tsx

import React from 'react';
import './App.css';
import NavbarComponent from './Navbar'; // Importing updated Navbar
import ImageCarousel from './ImageCarousel'; // Importing Image Carousel


const App: React.FC = () => {
    return (
        <>
            <NavbarComponent />
            <div style={{ marginTop: "50px" }}> {/* Adjust based on navbar height */}
                <ImageCarousel />
            </div>

            {/* <section id="services" style={{ textAlign: "center", padding: "20px" }}>
                <h2>Serviciile Noastre</h2>
                <ReactMarkdown>{markdownContent}</ReactMarkdown>
            </section> */}

            {/* Additional sections (About, Contact) can be added similarly. */}

            {/* Footer can also be added here if desired */}
        </>
    );
}

export default App;