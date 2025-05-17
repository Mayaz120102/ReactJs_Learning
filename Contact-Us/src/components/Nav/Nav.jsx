import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className="logo">
        <img src="/images/logo.png" alt="logo" />
      </div>
      <ul>
        <li>Home</li>
        <li>Contactus</li>
        <li>About</li>
      </ul>
    </nav>
  );
};

export default Nav;
