import { ErrorMessage, Field, Form, Formik } from "formik"

const initialValues = {
  yourName: "",
  yourLastname: "",
  yourEmail: "",
  yourPhone: "",
  yourCompany: "",
  yourMessage: "",
}

const onSubmit = (values: any) => {
  console.log(values)
  // Add your form submission logic here
}

const ContactForm = () => (
  <Formik initialValues={initialValues} onSubmit={onSubmit}>
    <Form
      action="/#wpcf7-f2947-o1"
      method="post"
      className="wpcf7-form init"
      aria-label="Contact form"
      data-status="init"
      data-hs-cf-bound="true"
    >
      <p>
        <label>
          <span>Name *</span>
          <br />
          <Field
            size="40"
            className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
            aria-required="true"
            aria-invalid="false"
            type="text"
            name="yourName"
          />
          <ErrorMessage name="yourName" component="div" />
        </label>
      </p>
      <p>
        <label>
          <span>Last name *</span>
          <br />
          <Field
            size="40"
            className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
            aria-required="true"
            aria-invalid="false"
            type="text"
            name="yourLastname"
          />
          <ErrorMessage name="yourLastname" component="div" />
        </label>
      </p>
      <p>
        <label>
          <span>Email *</span>
          <br />
          <Field
            size="40"
            className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"
            aria-required="true"
            aria-invalid="false"
            type="email"
            name="yourEmail"
          />
          <ErrorMessage name="yourEmail" component="div" />
        </label>
      </p>
      <p>
        <label>
          <span>Phone</span>
          <br />
          <Field
            size="40"
            className="wpcf7-form-control wpcf7-text"
            aria-invalid="false"
            type="text"
            name="yourPhone"
          />
          <ErrorMessage name="yourPhone" component="div" />
        </label>
      </p>
      <p>
        <label>
          <span>Company</span>
          <br />
          <Field
            size="40"
            className="wpcf7-form-control wpcf7-text"
            aria-invalid="false"
            type="text"
            name="yourCompany"
          />
          <ErrorMessage name="yourCompany" component="div" />
        </label>
      </p>
      <p>
        <label>
          <span>Message *</span>
          <br />
          <Field
            cols="40"
            rows="10"
            className="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required"
            aria-required="true"
            aria-invalid="false"
            as="textarea"
            name="yourMessage"
          />
          <ErrorMessage name="yourMessage" component="div" />
        </label>
      </p>
      <p className="submit-field">
        <Field
          className="wpcf7-form-control has-spinner wpcf7-submit"
          type="submit"
          value="Enviar"
        />
        <span className="wpcf7-spinner" />
      </p>
    </Form>
  </Formik>
)

export default ContactForm
