import React from 'react'
import { Link } from "react-router-dom"

function NavigationMenu(props){
    return (
        <div>
            <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet" />

            <div className="font-bold py-3">
                LP 
             </div>
            <ul>
                <li>
                    <Link 
                        to="/" 
                        className="text-blue-500 py-3 border-t border-b block"
                        onClick={props.closeMenu}
                        >
                            Home
                      </Link>
                </li>
                <li>
                    <Link 
                        to="/audio-books" 
                        className="text-blue-500 py-3 border-b block"
                        onClick={props.closeMenu}
                         >
                             Audio Books
                        </Link>
                </li>
                <li>
                    <Link 
                        to="/tools" 
                        className="text-blue-500 py-3 border-b block"
                        onClick={props.closeMenu}
                         >
                             Tools
                        </Link>
                </li>
            </ul>
        </div>
    )   
}

export default NavigationMenu;