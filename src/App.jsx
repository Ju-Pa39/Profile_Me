// import { useState } from 'react';
// import { BrowserRouter } from 'react-router-dom'; // นำเข้า BrowserRouter
// import { Navbar } from './components/Navbar';
// import { Home } from './components/Home';
// import Skills from './components/Skills';
// import { Projects } from './components/Projects';
// import Contact from './components/Contact';
// import Footer from './components/Footer';

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <BrowserRouter> 
//       <Navbar />
//       <Home/>
//       <Skills/>
//       <Projects/>
//       <Contact/>
//       <Footer/>
//     </BrowserRouter>
//   );
// }

// export default App;


import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom'; // นำเข้า BrowserRouter
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import Skills from './components/Skills';
import { Projects } from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <BrowserRouter>
        {/* Pass toggleDarkMode and darkMode state as props to Navbar */}
        <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
          <Home />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
