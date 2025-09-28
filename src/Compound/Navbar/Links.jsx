import React from 'react';

const Links = ({link}) => {
    return (
       
            <li className='mr-10'>
            <a href={link.path}>{link.name}</a>
        </li>
        
    );
};

export default Links;