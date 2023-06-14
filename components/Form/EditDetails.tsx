import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import { useRouter } from "next/navigation";
import { updatePlantDetails } from "@/services/plants";
import { IPlantData } from "@/pages/plants/[pid]";
import Button from "../Button/Button";
import css from "./Form.module.css";
import { formData } from "@/services/formData";

interface IProps {
  plantData?: IPlantData;
  setEdit: any;
  refreshData: any;
}
const validation = Yup.object().shape({
  daysBetweenWatering: Yup.number()
    .transform((currentValue, originalValue) => {
      return originalValue === "" ? -1 : currentValue;
    })
    .nullable()
    .typeError("Must be a number"),
  daysBetweenFertilizing: Yup.number()
    .transform((currentValue, originalValue) => {
      return originalValue === "" ? -1 : currentValue;
    })
    .nullable()
    .typeError("Must be a number"),
  title: Yup.string().required("Plant name is required"),
});

const EditDetails = ({ plantData, setEdit, refreshData }: IProps) => {
  const { push } = useRouter();

  const initialValues = {};

  formData.fields.forEach((field) => {
    //@ts-ignore
    initialValues[field.name] = plantData[field.name] || "";
  });

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validation}
        onSubmit={async (values: any) => {
          values.id = plantData?._id;
          await updatePlantDetails(values);
          setEdit(false);
          if (plantData?.title !== values.title) {
            push(`/plants?title=${values.title}`);
          }
          refreshData(values.title);
        }}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form className={css.form}>
            {formData.fields.map((field, i) => (
              <>
                <Field
                  key={i}
                  className={css.input}
                  type={field.name}
                  name={field.name}
                  placeholder={field.displayName}
                />
                {/* @ts-ignore */}
                {errors[field] && touched[field] ? (
                  // @ts-ignore
                  <div className={css.error}>{errors[field]}</div>
                ) : null}
              </>
            ))}
            <div className={css.button}>
              <Button buttonText="Save" disabled={isSubmitting} submit />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default EditDetails;
