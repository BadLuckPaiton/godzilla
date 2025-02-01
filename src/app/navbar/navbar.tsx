import './navbar.css';

export default function NavBar(){
    return(
      <nav className="navbar">
  <div className="navbar-left">
    <a href="/" className="logo">
      Goji
    </a>
  </div>
  <div className="navbar-right">
  <ul className="nav-links">
      <li>
        <a href="/products">Games</a>
      </li>
      <li>
        <a href="/about">BackLog</a>
      </li>
      <li>
        <a href="/contact">Friends</a>
      </li>
    </ul>
  </div>
</nav>
    );
}