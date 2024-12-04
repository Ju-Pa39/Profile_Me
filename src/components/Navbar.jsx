// import { useState } from 'react';
// import { Link } from 'react-router-dom';

// export const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

  
//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav className="fixed inset-x-0 top-0 z-50 bg-white shadow-sm w-full flex px-4 md:px-8 h-20 items-center">
//       <div className="w-full flex justify-between items-center">
       
//         <div>
//           <Link to="/" className="text-xl font-bold">Logo</Link>
//         </div>

        
//         <div className="md:hidden">
//           <button onClick={toggleMenu} className="text-2xl">
//             {isMenuOpen ? 'X' : '☰'}
//           </button>
//         </div>

       
//         <div className={`hidden md:flex gap-8 ml-10`}>
//           <Link to="/" className="hover:text-blue-500">Home</Link>
//           <Link to="/about" className="hover:text-blue-500">Skills</Link>
//           <Link to="/services" className="hover:text-blue-500">Projects</Link>
//           <Link to="/contact" className="hover:text-blue-500">Contact</Link>
//         </div>
//       </div>

      
//       <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-white absolute top-0 left-0 right-0 p-6 shadow-lg`}>
//         <Link to="/" className="block py-2 text-lg hover:text-blue-500">Home</Link>
//         <Link to="/about" className="block py-2 text-lg hover:text-blue-500">Skills</Link>
//         <Link to="/services" className="block py-2 text-lg hover:text-blue-500">Projects</Link>
//         <Link to="/contact" className="block py-2 text-lg hover:text-blue-500">Contact</Link>
//       </div>
//     </nav>
//   );
// };

import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Navbar = ({ toggleDarkMode, darkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-white dark:bg-gray-900 shadow-sm w-full flex px-4 md:px-8 h-20 items-center">
      <div className="w-full flex justify-between items-center">
        {/* Logo */}
        <div>
          <Link to="/" className="text-xl font-bold text-black dark:text-white">
            Logo
          </Link>
        </div>

        {/* Hamburger menu for mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl text-black dark:text-white">
            {isMenuOpen ? 'X' : '☰'}
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex gap-8 ml-10">
          <Link to="/" className="hover:text-blue-500 text-black dark:text-white">Home</Link>
          <Link to="/about" className="hover:text-blue-500 text-black dark:text-white">Skills</Link>
          <Link to="/services" className="hover:text-blue-500 text-black dark:text-white">Projects</Link>
          <Link to="/contact" className="hover:text-blue-500 text-black dark:text-white">Contact</Link>
        </div>

        {/* Dark Mode Toggle */}
        <div className="ml-auto">
          <button
            onClick={toggleDarkMode}
            className="bg-gray-200 dark:bg-gray-800 text-black dark:text-white px-4 py-2 rounded-md"
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-white dark:bg-gray-900 absolute top-0 left-0 right-0 p-6 shadow-lg`}>
        <Link to="/" className="block py-2 text-lg hover:text-blue-500 text-black dark:text-white">Home</Link>
        <Link to="/about" className="block py-2 text-lg hover:text-blue-500 text-black dark:text-white">Skills</Link>
        <Link to="/services" className="block py-2 text-lg hover:text-blue-500 text-black dark:text-white">Projects</Link>
        <Link to="/contact" className="block py-2 text-lg hover:text-blue-500 text-black dark:text-white">Contact</Link>
      </div>
    </nav>
  );
};
