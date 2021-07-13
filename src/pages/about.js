import * as React from "react"
import { Nav, Tab } from 'react-bootstrap';
import Education from '../components/education';
import Experience from '../components/experience';
import Layout from "../components/layout";
import Skills from '../components/skills';
import * as styles from '../styles/pages/about.module.scss';

const About = () => (
  <Layout>
    <div className={styles.about}>
      <h3 className={styles.heading}>About me</h3>
      <div className={styles.tabContainer}>
        <Tab.Container defaultActiveKey="skills">
          <div className={styles.navSwitcher}>
            <Nav>
              <Nav.Item>
                <Nav.Link eventKey="skills">
                  Skills
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="experience">
                  Experience
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="education">
                  Education
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
          <Tab.Content>
            <Tab.Pane eventKey="skills">
              <Skills />
            </Tab.Pane>
            <Tab.Pane eventKey="experience">
              <Experience />
            </Tab.Pane>
            <Tab.Pane eventKey="education">
              <Education />
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    </div>
  </Layout>
)

export default About
