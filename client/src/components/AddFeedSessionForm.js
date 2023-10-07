import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";


function AddFeedSessionForm({horseId, onSubmit, title, route }) {

  const formSchema = yup.object().shape({
    alfalfa_flakes : yup.number().notRequired(),
    grass_hay_flakes : yup.number().notRequired(),
    grain_pounds : yup.number().notRequired(),
    grain_type : yup.string().notRequired(),
    feed_notes : yup.string().notRequired(),
    
  });

  const formik = useFormik({
    initialValues: {
      alfalfa_flakes: 0,
      grass_hay_flakes: 0,
      grain_pounds: 0,    
      grain_type: "",
      feed_notes : ""
    },
    validationSchema: formSchema,
    onSubmit: (values) => {     
      console.log("Submission complete!!!")
       
      console.log("Launching the post")
      fetch(`${route}/${horseId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values, null, 2),
      }).then((return_data) => {
        if (return_data.ok) {
          return_data.json().then((newHorse) => {
            // For some reason the json parsing didn't work.  But we can
            // fix it as shown below
            console.log(`new_horse id = ${newHorse.id}`)
            let horseString = JSON.stringify(newHorse)
            console.log(horseString)
            let horseObject = JSON.parse(horseString)
            console.log(horseObject.name)
            onSubmit(horseObject)
            
          })
        } else {
          return_data.json().then((fail_data) => {
            alert(`Eat submission failed - ${fail_data.error}`)
          })
        }
      })
    }, 
  });

  return (
    <div>
      <h1>{title}</h1>
      <form onSubmit={formik.handleSubmit} style={{ margin: "30px" }}>

      <label htmlFor="alfalfa_flakes">Alfalfa Flakes</label>
        <br />
        <input
          id="alfalfa_flakes"
          alfalfa_flakes="alfalfa_flakes"
          onChange={formik.handleChange}
          value={formik.values.alfalfa_flakes}
        />
        <p style={{ color: "red" }}> {formik.errors.alfalfa_flakes}</p>

        <label htmlFor="grass_hay_flakes">Grass Hay Flakes</label>
        <br />
        <input
          id="grass_hay_flakes"
          name="grass_hay_flakes"
          onChange={formik.handleChange}
          value={formik.values.grass_hay_flakes}
        />
        <p style={{ color: "red" }}> {formik.errors.grass_hay_flakes}</p>

        <label htmlFor="grain_pounds">Pounds of Grain</label>
        <br />
        <input
          id="grain_pounds"
          name="grain_pounds"
          onChange={formik.handleChange}
          value={formik.values.grain_pounds}
        />
        <p style={{ color: "red" }}> {formik.errors.grain_pounds}</p>

        <label htmlFor="grain_type">Grain Type</label>
        <br />
        <input
          id="grain_type"
          name="grain_type"
          onChange={formik.handleChange}
          value={formik.values.grain_type}
        />
        <p style={{ color: "red" }}> {formik.errors.grain_type}</p>

        <label htmlFor="feed_notes">Feed Notes</label>
        <br />
        <input
          id="feed_notes"
          name="feed_notes"
          onChange={formik.handleChange}
          value={formik.values.feed_notes}
        />
        <p style={{ color: "red" }}> {formik.errors.feed_notes}</p>

        <button type="submit">Submit</button>

      </form> 

    </div>
  );
};

export default AddFeedSessionForm;