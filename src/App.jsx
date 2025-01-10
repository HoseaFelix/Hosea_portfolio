import React from "react";
import Navbar from "./Sections/Navbar.jsx";
import Hero from "./Sections/hero.jsx"
import About from "./Sections/About.jsx";
import Projects from "./Sections/projects.jsx";
import Clients from "./Sections/client.jsx"
import Contact from "./Sections/contact.jsx";
import Footer from "./Sections/footer.jsx";
import Experience from "./Sections/experience.jsx";


const App=()=>{
    return(
        <main className="max-w-7xl mx-auto">
            {/*<p className="text-white">hello</p>*/}
            <Navbar/>
            <Hero/>
            <About/>
            <Projects/>
            <Clients/>
            <Experience/>
            <Contact/>
            <Footer/>
        </main>
    )
}

export default App