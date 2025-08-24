import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { useState, useEffect } from 'react';
import logo from '../assets/Logos/Logo3.png';
import { navLinks } from '../Constants';
import { close, menu } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [handleToggle, setHandleToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-primary shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt="Website Logo"
            className="object-contain w-14 h-14 rounded-full"
          />
          <p className="text-white text-[18px] font-normal cursor-pointer flex">
            Ujjwal Pandey &nbsp;
            <span className="lg:block hidden"> | Software Developer</span>
          </p>
        </Link>

        {/* Desktop nav */}
        <ul className="list-none sm:flex hidden flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? 'text-green-500' : 'text-white'
              } hover:text-green-700 cursor-pointer font-medium`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile nav */}
        <div className="flex sm:hidden relative">
          <img
            src={handleToggle ? close : menu}
            alt="menu"
            className="cursor-pointer h-7 w-7"
            onClick={() => setHandleToggle(!handleToggle)}
          />
          {handleToggle && (
            <div className="absolute top-[2rem] right-0 bg-slate-700 rounded-md p-2">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? 'text-green-300' : 'text-white'
                  } hover:text-teal-500 cursor-pointer font-medium list-none p-2`}
                  onClick={() => {
                    setActive(link.title);
                    setHandleToggle(false);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
