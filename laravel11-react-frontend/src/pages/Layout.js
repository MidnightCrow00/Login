import React from 'react'
import { useContext } from "react";
import { Link, Outlet } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext'


export default function Layout() {
    const {logout} = useContext(AuthContext)
  return (
    <div className="App">
    <header className="App-header">
      <h1>
        Bejelentkezés és Regisztráció
      </h1>
    </header>
    <nav>
        <ul class="nav">
            <li class="nav-item">
                <Link to="/" class="nav-link">Kezdőlap</Link>
            </li>
            <li class="nav-item">
                <Link to="/login" class="nav-link" >Bejelentkezés</Link>
            </li>
            <li class="nav-item">
                <Link to="/register" class="nav-link">Regisztráció</Link>
            </li>
            <li class="nav-item">
                <Link to="/logout" onClick={()=>{logout()}} class="nav-link" >Kijelentkezés</Link>
            </li>
        </ul>
        <Outlet />
        <footer>@Minden jog fenttartva!</footer>
    </nav>
  </div>
  )
}
