import { Formik, Field, Form, FormikHelpers } from "formik";
import "./ContactPage.css";
import * as Yup from "yup";
import YupPassword from "yup-password";
import {ProductService} from "./ProductService";
YupPassword(Yup);


export interface userValues {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const userInputs = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short")
    .max(50, "Too Long")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short")
    .max(50, "Too Long")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().password().min(6, "To Short").required("Required"),
});

export default function ContactPage() {

  return (
    <Formik
      initialValues={{
        id: 0,
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      }}
      validationSchema={userInputs}
      onSubmit={(
        values: userValues,
        { setSubmitting }: FormikHelpers<userValues>
      ) => {
        setTimeout(() => {
          ProductService.postUserData(values)
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 500);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <div className="row">
            <div className="col-lg-3"></div>
            <div className="col-lg-6 signUpField">
              <h1 className="title">Sign Up</h1>
              <div className="row">
                <label htmlFor="firstName">Vorname: </label>
                <Field
                  id="firstName"
                  name="firstName"
                  placeholder="John"
                  className="alignFields"
                />
                {errors.firstName && touched.firstName ? (
                  <div>{errors.firstName}</div>
                ) : null}
              </div>

              <div className="row">
                <label htmlFor="lastName">Nachname</label>
                <Field
                  id="lastName"
                  name="lastName"
                  placeholder="Doe"
                  className="alignFields"
                />
                {errors.lastName && touched.lastName ? (
                  <div>{errors.lastName}</div>
                ) : null}
              </div>

              <div className="row">
                <label htmlFor="email">Email</label>
                <Field
                  id="email"
                  name="email"
                  placeholder="john@acme.com"
                  type="email"
                  className="alignFields"
                />
                {errors.email && touched.email ? (
                  <div>{errors.email}</div>
                ) : null}
              </div>

              <div className="row">
                <label htmlFor="password">Passwort</label>
                <Field
                  id="password"
                  name="password"
                  placeholder="Passwort: "
                  className="alignFields"
                  type="password"
                />
                {errors.password && touched.password ? (
                  <div>{errors.password}</div>
                ) : null}
              </div>
              <div className="row">
                <button type="submit" className="button">
                  Commit
                </button>
              </div>
            </div>
            <div className="col-lg-3"></div>
          </div>
        </Form>
      )}
    </Formik>
  );
}
