import React from 'react';
import * as styles from '../styles/components/education.module.scss';
import { StaticImage } from 'gatsby-plugin-image'

function Education() {
  return (
    <div className={styles.education}>
      <div className={styles.institutionList}>
        <div className={styles.institute}>
          <StaticImage src="../images/niit.png" placeholder="blurred" />
          <p className={styles.instituteName}>
            NIIT
          </p>
          <p className={styles.courseName}>
            Full Stack Software Development with Java Specialization
          </p>
          <p className={styles.span}>
            Sept 2019 - Feb 2020
          </p>
        </div>
        <div className={styles.institute}>
          <StaticImage src="../images/nitte.jfif" placeholder="blurred" />
          <p className={styles.instituteName}>
            NITTE
          </p>
          <p className={styles.courseName}>
            Bachelor in Engineering - Mechanical
          </p>
          <p className={styles.span}>
            2015 - 2019
          </p>
        </div>
        <div className={styles.institute}>
          <StaticImage src="../images/mahesh.png" placeholder="blurred" />
          <p className={styles.instituteName}>
            Mahesh PU College
          </p>
          <p className={styles.courseName}>
            Pre University of Science
          </p>
          <p className={styles.span}>
            2013 - 2015
          </p>
        </div>
      </div>
    </div>
  )
}

export default Education
