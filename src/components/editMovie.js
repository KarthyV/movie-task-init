import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { API } from "../data/api";
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

const EditMovie = (props) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movieDetails, setMovieDetails] = useState({
    name: "",
    rating: "",
    description: "",
    image: "",
    trailer: "",
  });

  useEffect(() => {
    fetch(`${API}/${id}`)
      .then((response) => response.json())
      .then((data) =>
        setMovieDetails({
          name: data.name,
          rating: data.rating,
          description: data.description,
          image: data.image,
          trailer: data.trailer,
        })
      );
  }, []);

  const { handleSubmit, values, handleChange, handleBlur, errors, touched } =
    useFormik({
      initialValues: {
        name: movieDetails.name,
        rating: movieDetails.rating,
        description: movieDetails.description,
        image: movieDetails.image,
        trailer: movieDetails.trailer,
      },
      enableReinitialize: true,
      validationSchema: formValidationSchema,
      onSubmit: (values) => {
        props.onSave(values, id);
        navigate("/");
      },
    });

  return (
    <div className="editMovie">
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

        <button className="ui green button" type="submit">
          Save
        </button>
        <button
          onClick={() => navigate(-1)}
          className="ui negative button"
          type="submit"
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditMovie;
