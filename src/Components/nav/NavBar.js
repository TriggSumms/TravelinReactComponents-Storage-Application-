import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = (props) => {
    return (
        <header>
            <Link className="nav-link" to="/"><h1 className="site-title">T-Rig's Resusable Components</h1></Link>
            <br />


            <nav>
                <ul className="container">
                    <li className="navbar__item active">
                        {/* <Link className="nav-link" to="/">Component Library</Link> */}
                    </li>
                    <li className="navbar__item">
                        <Link className="nav-link" to="/thermometer">Lil Thermometer</Link>
                    </li>
                    <li className="navbar__item">
                        <Link className="nav-link" to="/calculator">Lil Calculator</Link>
                    </li>
                    <li className="navbar__item">
                        <Link className="nav-link" to="/shoppinglist">Lil ShoppingList</Link>
                    </li>
                    <li className="navbar__item">
                        <Link className="nav-link" to="/quizzer">Lil Trigg Quiz</Link>
                    </li>
                    <li className="navbar__item">
                        <Link className="nav-link" to="/ToDoFullComp">A Lil To Do List'r</Link>
                    </li>
                    <li className="navbar__item">
                        <Link className="nav-link" to="/weatherApp">Weather App</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}