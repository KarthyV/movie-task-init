import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";

const formValidationSchema = yup.object({
  name: yup.string().required("Why not tell the Movie name? 😉"),
  rating: yup
    .string()
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
  // const [movieDetails, setMovieDetails] = useState({
  //   name: "",
  //   rating: "",
  //   description: "",
  //   image: "",
  //   trailer: "",
  // });

  // function handleChange(event) {
  //   const { name, value } = event.target;

  //   setMovieDetails((prevDetails) => {
  //     return {
  //       ...prevDetails,
  //       [name]: value,
  //     };
  //   });
  // }

  // function onSubmit(event) {
  //   event.preventDefault();
  //   if (
  //     !movieDetails.name ||
  //     !movieDetails.rating ||
  //     !movieDetails.description ||
  //     !movieDetails.image ||
  //     !movieDetails.trailer
  //   ) {
  //     alert("Please enter all the required details");
  //   } else {
  //     props.onAdd(movieDetails);
  //     setMovieDetails({
  //       name: "",
  //       rating: "",
  //       description: "",
  //       image: "",
  //       trailer: "",
  //     });
  //     navigate("/");
  //   }
  // }
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
        console.log("Form values", values);
      },
    });

  return (
    <div className="addMovie">
      <form action="#" onSubmit={handleSubmit} className="ui form">
        <div className="field">
          <label>Movie Name</label>
          <input
            name="name"
            onChange={handleChange}
            value={values.name}
            type="text"
            placeholder="Enter movie name"
            onBlur={handleBlur}
          />
          {errors.name && touched.name ? errors.name : ""}
        </div>
        <div className="field">
          <label>Give Rating</label>
          <input
            name="rating"
            onChange={handleChange}
            value={values.rating}
            type="text"
            placeholder="Enter the Rating"
            onBlur={handleBlur}
          />
          {errors.rating && touched.rating ? errors.rating : ""}
        </div>
        <div className="field">
          <label>Poster Link</label>
          <input
            name="image"
            onChange={handleChange}
            value={values.image}
            type="text"
            placeholder="Paste poster link here"
            onBlur={handleBlur}
          />
          {errors.image && touched.image ? errors.image : ""}
        </div>

        <div className="field">
          <label>About Movie</label>
          <input
            name="description"
            onChange={handleChange}
            value={values.description}
            type="text"
            placeholder="description"
            onBlur={handleBlur}
          />
          {errors.description && touched.description ? errors.description : ""}
        </div>
        <div className="field">
          <label>Trailer Link</label>
          <input
            name="trailer"
            onChange={handleChange}
            value={values.trailer}
            type="text"
            placeholder="Trailer Link"
            onBlur={handleBlur}
          />
          {errors.trailer && touched.trailer ? errors.trailer : ""}
        </div>
        <button className="ui  black button" type="submit">
          Add Movie
        </button>
      </form>
    </div>
  );
};

export default AddMovie;
