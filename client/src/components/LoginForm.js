import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
function Login({onLoginComplete}) {

  const formSchema = yup.object().shape({
    username: yup.string().required("Must enter a username"),
    password: yup.string().required("Must enter a password").min(5)


  });

  const formik = useFormik({
    initialValues: {
      username: "",
      password: ""
    },
    validationSchema: formSchema,
    onSubmit: (values) => {
      console.log(`The submitted values are ${values}`)
      console.log(`${values.username} ${values.firstName}`)
      fetch("login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values, null, 2),
      }).then((user) => {
        if (user.status == 200) {
          console.log("SUCCESS!!!!!!!!!!!!!!!!!!!!!!")
 
          onLoginComplete(user)
        } else {
          console.log("Big probles with the login")
        }
      });
    },
  });

  return (
    <div>
      <h1>Customer sign up form</h1>
      <form onSubmit={formik.handleSubmit} style={{ margin: "30px" }}>

      <label htmlFor="username">User Name</label>
        <br />
        <input
          id="username"
          name="username"
          onChange={formik.handleChange}
          value={formik.values.username}
        />
        <p style={{ color: "red" }}> {formik.errors.username}</p>

        <label htmlFor="password">Password</label>
        <br />
        <input
          id="password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <p style={{ color: "red" }}> {formik.errors.password}</p>

        <button type="submit">Submit</button>

      </form> 

    </div>
  );
};

export default Login;
