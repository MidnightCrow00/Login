import React from 'react'
import { Link, Outlet } from 'react-router-dom'


export default function Layout() {
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
                <Link to="/" class="nav-link" href="#">Kezdőlap</Link>
            </li>
            <li class="nav-item">
                <Link to="/login" class="nav-link" href="#">Bejelentkezés</Link>
            </li>
            <li class="nav-item">
                <Link to="/register" class="nav-link" href="#">Regisztráció</Link>
            </li>
        </ul>
        <Outlet />
        <footer>@Minden jog fenttartva!</footer>
    </nav>
  </div>
  )
}
