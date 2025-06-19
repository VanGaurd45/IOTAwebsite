import React from 'react';
import './Projects.css';

const Projects = () => {
    return (
        <div className="pagebody">
            <header className="header">
                <h1>IOTA <br />Jadavpur University </h1>
                <nav>
                    <a href="#home">HOME</a>
                    <a href="#events">EVENTS</a>
                    <a href="#resources">RESOURCE</a>
                    <a href="#projects">PROJECTS</a>
                    <a href="#about">ABOUT</a>
                </nav>
            </header>

            <div className="container">
                <h2>CURIOSITY PROJECTS AND HANDS ON</h2>
                <p className="subtitle">LET'S PUSH IT TO NEXT STAGE</p>

                <h3 className="events-title">RECENT EVENTS</h3>
                <div className="event-box-container left">
                    <div className="event-box">
                        <img
                            src="https://plus.unsplash.com/premium_photo-1690571200236-0f9098fc6ca9?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="event1"
                            className="event-img1"
                        />
                        <div className="event-overlay o1">
                            <span>#1</span>
                            <p>Waste Detection and Management</p>
                            <button>Learn More</button>
                        </div>
                    </div>
                </div>

                <div className="event-box-container right">
                    <div className="event-box">
                        <img
                            src="https://images.unsplash.com/photo-1541873676-a18131494184?q=80&w=2036&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="event2"
                            className="event-img2"
                        />
                        <div className="event-overlay o2">
                            <span>#2</span>
                            <p>Rover, Home Automation</p>
                            <button>Learn More</button>
                        </div>
                    </div>
                </div>


                <div className="gallery-wrapper">
                    <div className="gallery-scroll">
                        <img src="https://images.unsplash.com/photo-1494022299300-899b96e49893?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXN0cm9uYXV0fGVufDB8fDB8fHww" alt="gallery1" />
                        <img src="https://images.unsplash.com/photo-1529788295308-1eace6f67388?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="gallery2" />
                        <img src="https://images.unsplash.com/photo-1494022299300-899b96e49893?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXN0cm9uYXV0fGVufDB8fDB8fHww" alt="gallery3" />
                        <img src="https://images.unsplash.com/photo-1538370965046-79c0d6907d47?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z2FsYXh5fGVufDB8fDB8fHww" alt="gallery4" />
                        <img src="https://images.unsplash.com/photo-1611462985358-60d3498e0364?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGFzdHJvbmF1dHxlbnwwfHwwfHx8MA%3D%3D" alt="gallery5" />
                        <img src="https://images.unsplash.com/photo-1494022299300-899b96e49893?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXN0cm9uYXV0fGVufDB8fDB8fHww" alt="gallery1" />
                        <img src="https://images.unsplash.com/photo-1529788295308-1eace6f67388?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="gallery2" />
                        <img src="https://images.unsplash.com/photo-1494022299300-899b96e49893?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXN0cm9uYXV0fGVufDB8fDB8fHww" alt="gallery3" />
                        <img src="https://images.unsplash.com/photo-1538370965046-79c0d6907d47?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z2FsYXh5fGVufDB8fDB8fHww" alt="gallery4" />
                        <img src="https://images.unsplash.com/photo-1611462985358-60d3498e0364?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGFzdHJvbmF1dHxlbnwwfHwwfHx8MA%3D%3D" alt="gallery5" />
                    </div>
                </div>

                <footer>
                    <p>"THE INTERNET OF THINGS WILL AUGMENT YOUR BRAIN"</p>
                    <div className="nav">
                        <a href="#">Home</a>
                        <a href="#">About Us</a>
                        <a href="#">Contact</a>
                    </div>
                    <div className="foot">
                        
                        <div className="social-icons">
                            <p>Follow us </p>
                            <a href="https://www.instagram.com/iota_ju?igsh=MWo0YXlzOXJ3MHp6bA==" target="_blank" rel="noopener noreferrer">
                                <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg" alt="Instagram" />
                            </a>
                            <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
                                <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg" alt="Facebook" />
                            </a>
                            <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                                <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg" alt="LinkedIn" />
                            </a>
                        </div>

                        <div className="map-container">
                            <iframe
                                title="Jadavpur University Map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.4362872510785!2d88.36860497507938!3d22.498867279552353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02713b4630fb55%3A0x34db0a9e9912b0a2!2sJadavpur%20University!5e0!3m2!1sen!2sin!4v1718717412807!5m2!1sen!2sin"
                                width="100%"
                                height="200"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                        <p> &#9993;iotajuofficial@gmail.com</p>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Projects;
