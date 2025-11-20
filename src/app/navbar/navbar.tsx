import "./navbar.css"
export default function NavBar(){
    return(
      <header>

      <nav className="navbar">
  <div className="navbar-left">
    <a href="/" className="logo">
      Goji
    </a>
  </div>
  <div className="navbar-right">
  <ul className="nav-links">
      <li>
        <a href="/game">Games</a>
      </li>
      <li>
        <a href="/backlog">BackLog</a>
      </li>
      <li>
        <a href="/bffs">Friends</a>
      </li>
    </ul>
  </div>
</nav>
</header>
    );
}