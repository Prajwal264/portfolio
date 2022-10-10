import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import * as styles from "../styles/components/experience.module.scss"

function Experience() {
  return (
    <div className={styles.experience}>
      <div className={styles.company}>
        <div className={styles.companyHeaderWrapper}>
          <StaticImage
            className={styles.image}
            src={`../images/shawacademy.png`}
            width={50}
          />
          <div className={styles.companyInfo}>
            <h4>Shaw Academy</h4>
            <p>Feb 2020 - Oct - 2021</p>
          </div>
        </div>
        <div className={styles.companyBodyWrapper}>
          <p>
            This company has brought the best out of me, When I joined here I
            knew next to nothing. My colleagues and this company as whole has
            shaped me. I've worked on many projects for shaw till now. I might
            not be able to list all of them here. But here are a few that I'd
            like to mention.
          </p>
          <h5>Contributions</h5>
          <ul>
            <li>
              Took up projects for student dashboard in Angular 7 and maintained
              the same.
            </li>
            <li>Worked with hugo in creating the website for shaw</li>
            <li>
              Add member sharing, a project that lets the students to share
              their accounts with three other users.
            </li>
            <li>
              Actively participated in migrating the student dashboard from
              Angular to React
            </li>
            <li>
              Involed in the development and maintainance of the Signup flow.
            </li>
            <li>Development of the new dashboard flow.</li>
            <li>Worked with gatsby.js in creating the website for shaw</li>
            <li>
              Worked on the maintenance and integration of Content Stack (CMS)
            </li>
            <li>
              Acted as a guide to the web team, a team Involed with the
              development and maintainance of the Shaw Academy website.
            </li>
            <li>
              Leaderboards - a project that alots experience points to the lead
              on completion of an action.
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.company}>
        <div className={styles.companyHeaderWrapper}>
          <StaticImage
            className={styles.image}
            src={`../images/unext.png`}
            width={50}
          />
          <div className={styles.companyInfo}>
            <h4>Unext Learning Pvt. Ltd.</h4>
            <p>Oct 2021 - Present</p>
          </div>
        </div>
        <div className={styles.companyBodyWrapper}>
          <p>
            Learnt a lot from this company. There were so many talented
            personals evolved in every architectural decision taken. Everyones
            opinion / inputs were valued, regardless of the role. Started to get
            more backend exposure in this company
          </p>
          <h5>Contributions</h5>
          <ul>
            <li>Worked on building an LMS for enterprised</li>
            <li>
              Intergrated features like Discussion Forum, Module to reuse course
              conten, Video service intergration
            </li>
            <li>
              Lead a team for projects like Kaltura integration, Live
              classrooms, Programming environment
            </li>
            <li>
              Saved the company a huge expenditure by proposing an alternate
              sollution to a deadend problem{" "}
            </li>
            <li>
              Rebuilt the entrie LMS on react as a sideproject. To demostrate
              the team about the performance benefits of using React over
              Angular{" "}
            </li>
            <li>
              Built highly customizable modules like DateTimePicker,
              BottomDrawer Module, XLSX Service, PDF Service etc that are
              actively consumed on different parts of the application
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Experience
