import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
function Signup ({onLoginComplete}) {

    const formSchema = yup.object().shape({
        username: yup.string().required("Must enter a username"),
        email: yup.string().email("Invalid email").required("Must enter email"),
        firstName: yup.string().required("Must enter a first name").max(15),
        lastName: yup.string().required("Must enter a last name."),
        phone: yup.string().required("Must enter a phone number").max(12),
        address1: yup.string().required("Must enter an address"),
        address2: yup.string().notRequired(),
        city: yup.string().required("Must enter a city"),
        state: yup.string().required("Must enter a state"),
        zip: yup.string().required("Must enter a zip code").min(5).max(5),
        password: yup.string().required("Must enter a password").min(5)


    });

    const formik = useFormik({
        initialValues: {
            username: "",
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            address1: "",
            address2: "",
            city: "",
            state: "",
            zip: "",
            password: ""
        },
        validationSchema: formSchema,
        onSubmit: (values) => {
        console.log(`The submitted values are ${values}`)
        console.log(`${values.username} ${values.firstName}`)
        fetch("signup", {
            method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values, null, 2),
            }).then((user) => {
                if (user.status == 200) {
                    
                    onLoginComplete(user)
                } else {
                    console.log("No Sign Up!")
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


            <label htmlFor="firstName">First Name</label>
            <br />
            <input
                id="firstName"
                name="firstName"
                onChange={formik.handleChange}
                value={formik.values.firstName}
            />
            <p style={{ color: "red" }}> {formik.errors.firstName}</p>
     

            <label htmlFor="lastName">Last Name</label>
            <br />
            <input
                id="lastName"
                name="lastName"
                onChange={formik.handleChange}
                value={formik.values.lastName}
            />
            <p style={{ color: "red" }}> {formik.errors.lastName}</p>


            <label htmlFor="email">Email Address</label>
            <br />
            <input
                id="email"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
            />
            <p style={{ color: "red" }}> {formik.errors.email}</p>

            <label htmlFor="phone">Phone</label>
            <br />
            <input
                id="phone"
                name="phone"
                onChange={formik.handleChange}
                value={formik.values.phone}
            />
            <p style={{ color: "red" }}> {formik.errors.phone}</p>

            <label htmlFor="address1">Address1</label>
            <br />
            <input
                id="address1"
                name="address1"
                onChange={formik.handleChange}
                value={formik.values.address1}
            />
            <p style={{ color: "red" }}> {formik.errors.address1}</p>

            <label htmlFor="address1">Address2</label>
            <br />
            <input
                id="address2"
                name="address2"
                onChange={formik.handleChange}
                value={formik.values.address2}
            />
            <p style={{ color: "red" }}> {formik.errors.address2}</p>

 
            <label htmlFor="city">City</label>
            <br />
            <input
                id="city"
                name="city"
                onChange={formik.handleChange}
                value={formik.values.city}
            />
            <p style={{ color: "red" }}> {formik.errors.city}</p>

            <label htmlFor="state">State</label>
            <br />
            <input
                id="state"
                name="state"
                onChange={formik.handleChange}
                value={formik.values.state}
            />
            <p style={{ color: "red" }}> {formik.errors.state}</p>

            <label htmlFor="zip">Zip</label>
            <br />
            <input
                id="zip"
                name="zip"
                onChange={formik.handleChange}
                value={formik.values.zip}
            />
            <p style={{ color: "red" }}> {formik.errors.zip}</p>
 
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

export default Signup;