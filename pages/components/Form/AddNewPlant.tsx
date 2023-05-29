"use client";
import React from "react";
import { Button } from "semantic-ui-react";
// import { Formik } from "formik";
import { Formik, Form, Field, ErrorMessage } from "formik";
import css from "./AddNewPlant.module.css";

const FormAddNewPlant = () => {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.title) {
          errors.title = "Plant name is required";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form className={css.form}>
          <Field
            className={css.input}
            type="title"
            name="title"
            placeholder="Plant name"
          />
          <ErrorMessage name="title" component="div" />
          <Field
            className={css.input}
            type="streetName"
            name="streetName"
            placeholder="Street name"
          />
          <Field
            className={css.input}
            type="flowers"
            name="flowers"
            placeholder="Flowers"
          />
          <Field
            className={css.input}
            type="dateAcquired"
            name="dateAcquired"
            placeholder="Date acquired"
          />
          <Button size="large" type="submit" disabled={isSubmitting}>
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default FormAddNewPlant;
