import React from 'react';
import Links from './links';


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

const Navbar = () => {
    return (
        <nav>
           <ul className='flex'>
            {
                navigationData.map(link  =>  <Links link={link} key={link.id}/>)
                // navigationData.map(link  => <li>
                //     <a href={link.path}>{link.name}</a>
                //     </li> )
            }
           </ul>
        </nav>
    );
};

export default Navbar;