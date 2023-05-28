"use client";
import React from "react";
import { Formik } from "formik";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import css from "./AddNewPlant.module.css";

const FormAddNewPlant = () => {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validate={() => {
        const errors = {};
        // if (!values.email) {
        //   errors.email = "Required";
        // } else if (
        //   !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        // ) {
        //   errors.email = "Invalid email address";
        // }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {/* {({ isSubmitting }) => (
        <Form className={css.form}>
          <Field className={css.input} type="email" name="email" />
          <ErrorMessage name="email" component="div" />
          <Field className={css.input} type="password" name="password" />
          <ErrorMessage name="password" component="div" />
          <Button size="large" type="submit" disabled={isSubmitting}>
            Submit
          </Button>
        </Form>
      )} */}
    </Formik>
  );
};

export default FormAddNewPlant;
