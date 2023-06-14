import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { updatePlantDetails } from "@/services/plants";
import { IPlantData } from "@/pages/plants/[pid]";
import Button, { Variants } from "../Button/Button";
import css from "./Form.module.css";

interface IProps {
  plantData?: IPlantData;
  setFertilizerEdit: any;
  refreshData: any;
}
const validation = Yup.object().shape({
  daysBetweenFertilizing: Yup.number()
    .typeError("Must be a number")
    .nullable()
    .notRequired(),
});

const EditFertilizerDetails = ({
  plantData,
  refreshData,
  setFertilizerEdit,
}: IProps) => {
  return (
    <div>
      <Formik
        // @ts-ignore
        initialValues={{
          fertilizerPlan: plantData?.fertilizerPlan || "",
          daysBetweenFertilizing:
            plantData?.daysBetweenFertilizing || undefined,
        }}
        validationSchema={validation}
        onSubmit={async (values: IPlantData) => {
          // @ts-ignore
          values.id = plantData?._id;
          await updatePlantDetails(values);
          setFertilizerEdit(false);
          refreshData();
        }}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form className={css.form}>
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

export default EditFertilizerDetails;
