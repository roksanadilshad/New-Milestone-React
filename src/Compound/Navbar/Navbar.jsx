import React, { useState } from 'react';
import Links from './links';
import { MenuIcon, X } from 'lucide-react';


const navigationData = [
  {
    id: 1,
    name: "Home",
    path: "/"
  },
  {
    id: 2,
    name: "Products",
    path: "/products"
  },
  {
    id: 3,
    name: "About",
    path: "/about"
  },
  {
    id: 4,
    name: "Blog",
    path: "/blog"
  },
  {
    id: 5,
    name: "Contact",
    path: "/contact"
  }
];
const links =  navigationData.map(link  =>  <Links link={link} key={link.id}/>);

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <nav className='flex justify-between mx-10'>
            <span className='flex' onClick={() => setMenuOpen(!menuOpen)
            }>
            { menuOpen ? <X className='lg:hidden'/> :  <MenuIcon className='lg:hidden'/>}
           <ul className={`lg:hidden absolute duration-5000 ${menuOpen ? "top-6" : "-top-64" } bg-blue-400 rounded-2xl p-2`}>
            {links}
           </ul>
            <h3>My Website</h3>
            </span>
           <ul className='flex'>
            {
               links
                // navigationData.map(link  => <li>
                //     <a href={link.path}>{link.name}</a>
                //     </li> )
            }
           </ul>
        </nav>
    );
};

export default Navbar;