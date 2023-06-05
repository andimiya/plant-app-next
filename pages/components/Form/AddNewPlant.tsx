"use client";
import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import { IAddPlant, addPlant } from "@/lib/plants";
import Button from "../Button/Button";

import css from "./Form.module.css";

const validation = Yup.object().shape({
  daysBetweenWatering: Yup.number().typeError("Must be a number"),
  daysBetweenFertilizing: Yup.number().typeError("Must be a number"),
  title: Yup.string().required("Plant name is required"),
});

const FormAddNewPlant = () => {
  const { push } = useRouter();

  return (
    <Formik
      initialValues={{
        title: "",
        streetName: "",
        flowers: "",
        dateAcquired: "",
        sunlight: "",
        temp: "",
        humidity: "",
        soilMix: "",
        wateringConditions: "",
        daysBetweenWatering: 0,
        fertilizerPlan: "",
        daysBetweenFertilizing: 0,
        plantingTime: "",
        pruning: "",
        harvestTime: "",
        propogation: "",
        pestsDiseases: "",
        notes: "",
      }}
      validationSchema={validation}
      onSubmit={async (values: IAddPlant) => {
        await addPlant(values);
        push(`/plants/${values.title}`);
      }}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form className={css.form}>
          <Field
            className={css.input}
            type="title"
            name="title"
            placeholder="Plant name"
          />
          {errors.title && touched.title ? (
            <div className={css.error}>{errors.title}</div>
          ) : null}
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
          <Field
            className={css.input}
            type="sunlight"
            name="sunlight"
            placeholder="Sunlight"
          />
          <Field
            className={css.input}
            type="temp"
            name="temp"
            placeholder="Temperature"
          />
          <Field
            className={css.input}
            type="humidity"
            name="humidity"
            placeholder="Humidity"
          />

          <Field
            className={css.input}
            type="soilMix"
            name="soilMix"
            placeholder="Soil mix"
          />
          <Field
            className={css.input}
            type="wateringConditions"
            name="wateringConditions"
            placeholder="Watering instructions"
          />

          <Field
            className={css.input}
            type="daysBetweenWatering"
            name="daysBetweenWatering"
            placeholder="Days between watering"
          />
          {errors.daysBetweenWatering && touched.daysBetweenWatering ? (
            <div className={css.error}>{errors.daysBetweenWatering}</div>
          ) : null}
          <Field
            className={css.input}
            type="fertilizerPlan"
            name="fertilizerPlan"
            placeholder="Fertilizer plan"
          />
          <Field
            className={css.input}
            type="daysBetweenFertilizing"
            name="daysBetweenFertilizing"
            placeholder="Days between fertilizing"
          />
          {errors.daysBetweenFertilizing && touched.daysBetweenFertilizing ? (
            <div className={css.error}>{errors.daysBetweenFertilizing}</div>
          ) : null}
          <Field
            className={css.input}
            type="plantingTime"
            name="plantingTime"
            placeholder="Planting time ie: Spring, Fall"
          />
          <Field
            className={css.input}
            type="pruning"
            name="pruning"
            placeholder="Pruning"
          />
          <Field
            className={css.input}
            type="harvestTime"
            name="harvestTime"
            placeholder="Harvest time"
          />
          <Field
            className={css.input}
            type="propogation"
            name="propogation"
            placeholder="Propogation"
          />
          <Field
            className={css.input}
            type="pestsDiseases"
            name="pestsDiseases"
            placeholder="Pests and diseases"
          />
          <Field
            className={css.input}
            type="notes"
            name="notes"
            placeholder="Notes"
            as="textarea"
          />
          <div className={css.button}>
            <Button
              buttonText="Save"
              variant="primary"
              disabled={isSubmitting}
              submit
            />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default FormAddNewPlant;
