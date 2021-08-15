/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import GbiBridged from "./backgroud-image"
import "../styles/_utils/_global.scss"
import SideBar from "./sidebar"
import * as styles from "../styles/components/layout.module.scss"

const Layout = ({ children }) => {
  return (
    <>
      <GbiBridged>
        <main className={styles.main}>
          <div className={styles.container}>
            <div className={styles.flexWrapper}>
              <SideBar />
              {children}
            </div>
          </div>
        </main>
      </GbiBridged>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
