import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import * as styles from "../styles/components/skills.module.scss"

function Skills() {
  return (
    <div className={styles.skillsWrapper}>
      <section>
        <h4 className={styles.sectionHeading}>Languages</h4>
        <div className={styles.skillCardsWrapper}>
          <div className={styles.card}>
            <StaticImage
              className={styles.image}
              placeholder="blurred"
              width={50}
              src={`../images/javascript.png`}
            />
            <h5>Javascript</h5>
          </div>
          <div className={styles.card}>
            <StaticImage
              className={styles.image}
              placeholder="blurred"
              width={50}
              src={`../images/python.png`}
            />
            <h5>Python</h5>
          </div>
          <div className={styles.card}>
            <StaticImage
              className={styles.image}
              placeholder="blurred"
              width={50}
              src={`../images/java.png`}
            />
            <h5>Java</h5>
          </div>
          <div className={styles.card}>
            <StaticImage
              className={styles.image}
              placeholder="blurred"
              width={50}
              src={`../images/cpp.png`}
            />
            <h5>C++</h5>
          </div>
          <div className={styles.card}>
            <StaticImage
              className={styles.image}
              placeholder="blurred"
              width={50}
              src={`../images/lua-lang.png`}
            />
            <h5>Lua</h5>
          </div>
        </div>
      </section>
      <section>
        <h4 className={styles.sectionHeading}>Frameworks & Libraries</h4>
        <div className={styles.skillCardsWrapper}>
          <div className={styles.card}>
            <StaticImage
              className={styles.image}
              placeholder="blurred"
              width={50}
              src={`../images/react.png`}
            />
            <h5>React</h5>
          </div>
          <div className={styles.card}>
            <StaticImage
              className={styles.image}
              placeholder="blurred"
              width={50}
              src={`../images/angular.png`}
            />
            <h5>Angular</h5>
          </div>
          <div className={styles.card}>
            <StaticImage
              className={styles.image}
              placeholder="blurred"
              width={50}
              src={`../images/vue.png`}
            />
            <h5>Vue</h5>
          </div>
          <div className={styles.card}>
            <StaticImage
              className={styles.image}
              placeholder="blurred"
              width={50}
              src={`../images/gatsby-icon.png`}
            />
            <h5>Gatsby</h5>
          </div>
          <div className={styles.card}>
            <StaticImage
              className={styles.image}
              placeholder="blurred"
              width={50}
              src={`../images/nextjs.png`}
            />
            <h5>Next.js</h5>
          </div>
          <div className={styles.card}>
            <StaticImage
              className={styles.image}
              placeholder="blurred"
              width={50}
              src={`../images/jquery.png`}
            />
            <h5>jQuery</h5>
          </div>
          <div className={styles.card}>
            <StaticImage
              className={styles.image}
              placeholder="blurred"
              width={50}
              src={`../images/nodejs.png`}
            />
            <h5>Node.js</h5>
          </div>
          <div className={styles.card}>
            <StaticImage
              className={styles.image}
              placeholder="blurred"
              width={50}
              src={`../images/graphql.png`}
            />
            <h5>Graphql</h5>
          </div>
          <div className={styles.card}>
            <StaticImage
              className={styles.image}
              placeholder="blurred"
              width={50}
              src={`../images/nestjs.png`}
            />
            <h5>Nest.js</h5>
          </div>
          <div className={styles.card}>
            <StaticImage
              className={styles.image}
              placeholder="blurred"
              width={50}
              src={`../images/sveltejs.png`}
            />
            <h5>Svelte.js</h5>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Skills
