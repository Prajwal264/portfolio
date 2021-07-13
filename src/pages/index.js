import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import * as React from "react"
import Layout from "../components/layout";
import * as styles from '../styles/pages/homepage.module.scss';

const IndexPage = () => (
  <Layout>
    <div className={styles.homepage}>
      <div className={styles.bio}>
        <div className={styles.detailsContainer}>
          <h3 className={styles.header}>Hi,</h3>
          <p>I'm Prajwal, a self taught Front end developer and an aspiring Full stack developer. I've worked on many projects on web, you can check them out <Link to="/projects/">here</Link>.
          <br />
            <br />Software engineering has been my muse since childhood. Even though I've taken the path less trodden, it hasn't stopped me from moving ahead, towards the fulfillment of my goals.
        </p>
        </div>
      </div>
      <StaticImage className={styles.image} width={350} placeholder="blurred" src="../images/peek.png" alt="peek" />
    </div>
  </Layout>
)

export default IndexPage
