import React from "react";
import * as yup from "yup";
import { Formik } from "formik";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import * as Actions from "../../states/actions/counter";
import "./style.css";

const LoginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Eposta adresinizi kontrol edin.")
    .required("Eposta zorunlu alandır."),
  password: yup
    .string()
    .min(6, "Şifre uzunluğu en az 6 karakter olmalıdır.")
    .required("Şifre zorunlu alandır.")
});

class LoginPage extends React.Component {
  handleSubmit = (values, props) => {
    if (props) {
      props.setSubmitting(false);
      props.resetForm();
      props.setFieldTouched();
    }

    Actions.denemeServiceCall(values).then(response => {
      if (response) {
        this.props.history.push("/master");
      } else {
        console.log("Service fail döndü");
      }
    });
  };

  render() {
    return (
      <div>
        <h1>Welcome To Login Page</h1>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values, props) => this.handleSubmit(values, props)}
          validationSchema={LoginSchema}
        >
          {props => {
            const {
              values,
              touched,
              errors,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting
            } = props;
            return (
              <form onSubmit={handleSubmit}>
                <TextField
                  label="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={touched.email && errors.email}
                  margin="normal"
                  error={touched.email && errors.email}
                />
                <br />
                <TextField
                  label="password"
                  name="password"
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={touched.password && errors.password}
                  margin="normal"
                  error={touched.password && errors.password}
                />
                <br />
                <Button type="submit" disabled={isSubmitting}>
                  Submit
                </Button>
              </form>
            );
          }}
        </Formik>
      </div>
    );
  }
}

export default LoginPage;
