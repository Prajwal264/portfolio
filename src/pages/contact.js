import * as React from "react"
import Layout from "../components/layout"
import * as styles from "../styles/pages/contact.module.scss"
import emailjs from "emailjs-com"
import toast from "react-hot-toast"

const Contact = () => {
  const submitForm = e => {
    e.preventDefault()
    const emailPromise = emailjs
      .sendForm(
        process.env.EMAIL_JS_SERVICE_ID,
        process.env.EMAIL_JS_TEMPLATE_ID,
        e.target,
        process.env.EMAIL_JS_USER_ID
      )
      .then(
        result => {
          console.log(result.text)
        },
        error => {
          console.log(error.text)
        }
      )
    toast.promise(emailPromise, {
      loading: "Loading",
      success: "Message sent successfully",
      error: "Error sending message",
    })
  }
  return (
    <Layout>
      <div className={styles.contact}>
        <h3 className={styles.heading}>Contact</h3>
        <p className={styles.info}>
          Hey
          <span aria-label="hi" role="img">
            👋
          </span>
          , Lets get in touch
        </p>
        <form onSubmit={submitForm}>
          <div className={styles.inputGroup}>
            <label htmlFor="name" required>
              Name
            </label>
            <input type="text" id="name" name="user_name" />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="user_email" required />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="number">Contact Number</label>
            <input type="text" id="number" name="contact_number" required />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="reason">Reason of Contact</label>
            <input type="text" id="reason" />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="message" required>
              Message
            </label>
            <textarea type="text" id="message" name="message" />
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </Layout>
  )
}

export default Contact
