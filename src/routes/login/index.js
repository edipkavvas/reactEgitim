import React from "react";
import * as yup from "yup";
import { Formik } from "formik";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import * as Actions from "../../states/actions/counter";
import "./style.css";

const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap"
  },
  textfield: {
    marginLeft: 50,
    width: 200
  },
  button: {
    marginLeft: 50,
    marginTop: 30,
    width: 200
  }
});

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
        <h1 className="header-style">Welcome To Login Page</h1>
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
              isSubmitting,
              classes = this.props.classes
            } = props;

            return (
              <form onSubmit={handleSubmit} className={classes.root}>
                <TextField
                  className={classes.textfield}
                  label="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={touched.email && errors.email}
                  margin="normal"
                  error={touched.email && !!errors.email}
                  autoComplete="off"
                />
                <TextField
                  className={classes.textfield}
                  label="password"
                  name="password"
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={touched.password && errors.password}
                  margin="normal"
                  error={touched.password && !!errors.password}
                />
                <Button
                  className={classes.button}
                  type="submit"
                  disabled={isSubmitting}
                  variant="contained"
                  color="primary"
                >
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

export default withStyles(styles)(LoginPage);
