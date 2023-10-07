import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
function AddHorseForm() {

  const formSchema = yup.object().shape({
    name: yup.string().required("Must enter a name"),
    vet_name : yup.string().required("Must enter a veterinarian name"),
    vet_number : yup.string().required().max(12),
    care_notes : yup.string().notRequired(),
    photo_url : yup.string().notRequired(),
    
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      vet_name: "",
      vet_number: "",    
      care_notes: "",
      photo_url : ""
    },
    validationSchema: formSchema,
    onSubmit: (values) => {
        console.log("Submission complete!!!")
       /*
      fetch("login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values, null, 2),
      }).then((return_data) => {
        if (return_data.ok) {
          return_data.json().then((user) => {
            // For some reason the json parsing didn't work.  But we can
            // fix it as shown below
            let userString = JSON.stringify(user)
            let userObject = JSON.parse(userString)
            onLoginComplete(userObject)
          })
        } else {
          return_data.json().then((fail_data) => {
            alert(`Login Failed - ${fail_data.error}`)
          })
        }
      }) */
    }, 
  });

  return (
    <div>
      <h1>Horse Data Form</h1>
      <form onSubmit={formik.handleSubmit} style={{ margin: "30px" }}>

      <label htmlFor="name">Horse's Name</label>
        <br />
        <input
          id="name"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <p style={{ color: "red" }}> {formik.errors.name}</p>

        <label htmlFor="vet_name">Veterinarian's Name</label>
        <br />
        <input
          id="vet_name"
          name="vet_name"
          onChange={formik.handleChange}
          value={formik.values.vet_name}
        />
        <p style={{ color: "red" }}> {formik.errors.vet_name}</p>

        <label htmlFor="vet_number">Veterinarian's Phone Number</label>
        <br />
        <input
          id="vet_number"
          name="vet_number"
          onChange={formik.handleChange}
          value={formik.values.vet_number}
        />
        <p style={{ color: "red" }}> {formik.errors.vet_number}</p>

        <label htmlFor="care_notes">General Care Notes</label>
        <br />
        <textarea
          id="care_notes"
          name="care_notes"
          onChange={formik.handleChange}
          value={formik.values.care_notes}
        />
        <p style={{ color: "red" }}> {formik.errors.care_notes}</p>

        <label htmlFor="photo_url">Photo URL</label>
        <br />
        <input
          id="photo_url"
          name="photo_url"
          onChange={formik.handleChange}
          value={formik.values.photo_url}
        />
        <p style={{ color: "red" }}> {formik.errors.photo_url}</p>

        <button type="submit">Submit</button>

      </form> 

    </div>
  );
};

export default AddHorseForm;