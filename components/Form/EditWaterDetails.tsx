import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import { updatePlantDetails } from "@/lib/plants";
import { IPlantData } from "@/pages/plants/[pid]";
import Button, { Variants } from "../Button/Button";
import css from "./Form.module.css";

interface IProps {
  plantData?: IPlantData;
  setWaterEdit: any;
  refreshData: any;
}
const validation = Yup.object().shape({
  daysBetweenWatering: Yup.number()
    .typeError("Must be a number")
    .nullable()
    .notRequired(),
});

const EditWaterDetails = ({ plantData, refreshData, setWaterEdit }: IProps) => {
  return (
    <div>
      <Formik
        // @ts-ignore
        initialValues={{
          wateringConditions: plantData?.wateringConditions || "",
          daysBetweenWatering: plantData?.daysBetweenWatering || undefined,
        }}
        validationSchema={validation}
        onSubmit={async (values: IPlantData) => {
          // @ts-ignore
          values.id = plantData?._id;
          await updatePlantDetails(values);
          setWaterEdit(false);
          refreshData();
        }}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form className={css.form}>
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
            <div className={css.button}>
              <Button buttonText="Save" disabled={isSubmitting} submit />
            </div>
            <div className={css.button}>
              <Button
                buttonText="Cancel"
                variant={Variants.CANCEL}
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

export default EditWaterDetails;
