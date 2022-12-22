import React, { Component } from "react";
import { Link } from "react-router-dom";

class Menu extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <Link class="navbar-brand" to='/'><img src="./th.jpg" alt="logo" width="70"/></Link>
                    
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav ms-autos">
                            <li class="nav-item">
                                <Link class="nav-link active"  to="/PageInicio">Inicio</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/PageSesion">Iniciar sesion</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="PageUsuarios">usuarios</Link>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown link
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }

}

export default Menu;
