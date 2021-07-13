import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import * as styles from '../styles/components/sidebar.module.scss';

function SideBar() {
  return (
    <div className={styles.sideBar}>
      <div className={styles.projectNameWrapper}>
        <p className={styles.projectName}>Portfolio.</p>
      </div>
      <div className={styles.profilePicWrapper}>
        <StaticImage src="../images/profile.jpg" placeholder="blurred" alt="profile" />
      </div>
      <nav className={styles.navigationPanel}>
        <Link to="/" activeClassName={styles.active}>Home</Link>
        <Link to="/about" activeClassName={styles.active}>About me</Link>
        <Link to="/projects" activeClassName={styles.active}>Projects</Link>
        <Link to="/contact" activeClassName={styles.active}>Contact</Link>
      </nav>
    </div>
  )
}

export default SideBar
