import React from 'react';
import Navigation from './Navigation';

function Header () {


    return (
        <div>
        <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet" />

        <header className="border-b p-3 flex justify-between items-center">

            <span className="font-bold">
                LP
            </span>
            <Navigation />
        </header>
        </div>
    )
}

export default Header;
