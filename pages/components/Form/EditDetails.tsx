import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useRouter } from "next/navigation";
import { IUpdatePlantDetails, updatePlantDetails } from "@/lib/plants";
import { IPlantData } from "@/pages/plants/[pid]";
import Button from "../Button/Button";
import css from "./Form.module.css";

interface IProps {
  plantData?: IPlantData;
  setEdit: any;
  isLoading: boolean;
  refreshData: any;
}
const validation = Yup.object().shape({
  daysBetweenWatering: Yup.number().typeError("Must be a number"),
  daysBetweenFertilizing: Yup.number().typeError("Must be a number"),
  title: Yup.string().required("Plant name is required"),
});

const EditDetails = ({
  plantData,
  setEdit,
  isLoading,
  refreshData,
}: IProps) => {
  const { push } = useRouter();

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      <Formik
        initialValues={{
          title: plantData?.title || "",
          streetName: plantData?.streetName || "",
          flowers: plantData?.flowers || "",
          dateAcquired: plantData?.dateAcquired || "",
          sunlight: plantData?.sunlight || "",
          temp: plantData?.temp || "",
          humidity: plantData?.humidity || "",
          soilMix: plantData?.soilMix || "",
          wateringConditions: plantData?.wateringConditions || "",
          daysBetweenWatering: plantData?.daysBetweenWatering || undefined,
          fertilizerPlan: plantData?.fertilizerPlan || "",
          daysBetweenFertilizing:
            plantData?.daysBetweenFertilizing || undefined,
          plantingTime: plantData?.plantingTime || "",
          pruning: plantData?.pruning || "",
          harvestTime: plantData?.harvestTime || "",
          propogation: plantData?.propogation || "",
          pestsDiseases: plantData?.pestsDiseases || "",
          notes: plantData?.notes || "",
        }}
        validationSchema={validation}
        onSubmit={async (values: IUpdatePlantDetails) => {
          values.id = plantData?._id;
          await updatePlantDetails(values);
          setEdit(false);
          if (plantData?.title !== values.title) {
            push(`/plants/${values.title}`);
          }
          refreshData(values.title);
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
            <div className={css.error}>
              <ErrorMessage name="title" />
            </div>
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
    </div>
  );
};

export default EditDetails;
