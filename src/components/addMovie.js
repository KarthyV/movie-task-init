import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";

const formValidationSchema = yup.object({
  name: yup.string().required("Why not tell the Movie name? 😉"),
  rating: yup
    .number()
    .typeError("Must be a number")
    .required("Please Give a Rating 😉")
    .min(0, "Must start from 0 😄")
    .max(10, "Below 10 😅"),
  image: yup
    .string()
    .required("Please provide image link 😉")
    .min(4, "Must ne greater than 4 letters😄"),
  description: yup
    .string()
    .required("Please provide the summary 😉")
    .min(20, "Must be of 20 letters 😄"),
  trailer: yup
    .string()
    .required("Please provide trailer link 😉")
    .min(4, "Must be of  4 letters😄"),
});

const AddMovie = (props) => {
  const navigate = useNavigate();

  const { handleSubmit, values, handleChange, handleBlur, errors, touched } =
    useFormik({
      initialValues: {
        name: "",
        rating: "",
        description: "",
        image: "",
        trailer: "",
      },
      validationSchema: formValidationSchema,
      onSubmit: (values) => {
        props.onAdd(values);
        navigate("/");
      },
    });

  return (
    <div className="addMovie">
      <form action="#" onSubmit={handleSubmit} className="ui form">
        <div className={`field ${errors.name && touched.name ? "error" : ""}`}>
          <label>Movie Name</label>
          <input
            name="name"
            onChange={handleChange}
            value={values.name}
            type="text"
            placeholder="Enter movie name"
            onBlur={handleBlur}
          />

          {errors.name && touched.name ? (
            <div className="ui error message">
              <p>{errors.name}</p>
            </div>
          ) : (
            ""
          )}
        </div>
        <div
          className={`field ${errors.rating && touched.rating ? "error" : ""}`}
        >
          <label>Give Rating</label>
          <input
            name="rating"
            onChange={handleChange}
            value={values.rating}
            type="text"
            placeholder="Enter the Rating"
            onBlur={handleBlur}
          />

          {errors.rating && touched.rating ? (
            <div className="ui error message">
              <p>{errors.rating}</p>
            </div>
          ) : (
            ""
          )}
        </div>
        <div
          className={`field ${errors.image && touched.image ? "error" : ""}`}
        >
          <label>Poster Link</label>
          <input
            name="image"
            onChange={handleChange}
            value={values.image}
            type="text"
            placeholder="Paste poster link here"
            onBlur={handleBlur}
          />
          {errors.image && touched.image ? (
            <div className="ui error message">
              <p>{errors.image}</p>
            </div>
          ) : (
            ""
          )}
        </div>

        <div
          className={`field ${
            errors.description && touched.description ? "error" : ""
          }`}
        >
          <label>About Movie</label>
          <input
            name="description"
            onChange={handleChange}
            value={values.description}
            type="text"
            placeholder="description"
            onBlur={handleBlur}
          />
          {errors.description && touched.description ? (
            <div className="ui error message">
              <p>{errors.description}</p>
            </div>
          ) : (
            ""
          )}
        </div>
        <div
          className={`field ${
            errors.trailer && touched.trailer ? "error" : ""
          }`}
        >
          <label>Trailer Link</label>
          <input
            name="trailer"
            onChange={handleChange}
            value={values.trailer}
            type="text"
            placeholder="Trailer Link"
            onBlur={handleBlur}
          />
          {errors.trailer && touched.trailer ? (
            <div className="ui error message">
              <p>{errors.trailer}</p>
            </div>
          ) : (
            ""
          )}
        </div>
        <button className="ui  black button" type="submit">
          Add Movie
        </button>
      </form>
    </div>
  );
};

export default AddMovie;
