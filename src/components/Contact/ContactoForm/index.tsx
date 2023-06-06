import React, { useState } from "react"

import { ContactFormStyles } from "./ContactFormStyles"

const ContactForm = () => {
  const wpUrl =
    process.env.NEXT_PUBLIC_WORDPRESS_URL ??
    "https://dev-learningwell-wp.pantheonsite.io"

  const [formSubmissionError, setFormSubmissionError] = useState(false)

  const formSubmissionHandler = async (event: any) => {
    event.preventDefault()

    const formElement = event.target
    const { action, method } = formElement
    const formData = new FormData(formElement)

    try {
      const response = await fetch(action, {
        method,
        body: formData,
      })

      if (response.ok) {
        const responseData = await response.json()
        console.log("response", response)
        console.log("responseData", responseData)
      } else {
        setFormSubmissionError(true)
        // Handle the case when there are validation errors
      }
    } catch (error) {
      setFormSubmissionError(true)
      // Handle the case when there's a problem with the request
    }
  }

  return (
    <ContactFormStyles>
      <form
        action={`${wpUrl}/wp-json/contact-form-7/v1/contact-forms/238/feedback`}
        method="post"
        onSubmit={formSubmissionHandler}
      >
        <label htmlFor="first-name">First Name*</label>
        <input id="first-name" type="text" name="first-name" required />

        <label htmlFor="last-name">Last Name*</label>
        <input id="last-name" type="text" name="last-name" required />

        <label htmlFor="your-email">Email*</label>
        <input id="your-email" type="email" name="your-email" required />

        <label htmlFor="your-subject">Subject*</label>
        <select id="your-subject" name="your-subject" required>
          <option value="">Choose an option</option>
          <option value="Submissions">Submissions</option>
          <option value="Careers">Careers</option>
          <option value="Questions">Questions</option>
          <option value="Other">Other</option>
        </select>

        <label htmlFor="your-message">Message*</label>
        <textarea id="your-message" name="your-message" required />

        <button type="submit">Submit</button>
      </form>
    </ContactFormStyles>
  )
}

export default ContactForm
