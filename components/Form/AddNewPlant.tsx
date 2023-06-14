"use client";
import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import { useRouter } from "next/navigation";
import { IAddPlant, addPlant } from "@/services/plants";
import Button from "../Button/Button";
import { formData } from "@/services/formData";

import css from "./Form.module.css";

const validation = Yup.object().shape({
  daysBetweenWatering: Yup.number().typeError("Must be a number"),
  daysBetweenFertilizing: Yup.number().typeError("Must be a number"),
  title: Yup.string().required("Plant name is required"),
});

const FormAddNewPlant = () => {
  const { push } = useRouter();

  const initialValues = {};

  formData.fields.forEach((field) => {
    //@ts-ignore
    initialValues[field.name] = "";
  });

  return (
    <Formik
      //@ts-ignore
      initialValues={initialValues}
      validationSchema={validation}
      onSubmit={async (values: IAddPlant) => {
        await addPlant(values);
        push(`/plants?title=${values.title}`);
      }}
    >
      {({ errors, touched, isValid }) => (
        <Form className={css.form}>
          {formData.fields.map((field, i) => (
            <>
              <Field
                key={i}
                className={css.input}
                type={field}
                name={field.name}
                placeholder={field.displayName}
              />
              {/* @ts-ignore */}
              {field.validation && errors[field.name] && touched[field.name] ? (
                // @ts-ignore
                <div className={css.error}>{errors[field.name]}</div>
              ) : null}
            </>
          ))}
          <div className={css.button}>
            <Button buttonText="Save" disabled={!isValid} submit />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default FormAddNewPlant;
