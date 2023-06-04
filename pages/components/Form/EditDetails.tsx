import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button } from "semantic-ui-react";
import { useRouter } from "next/navigation";
import { IUpdatePlantDetails, updatePlantDetails } from "@/lib/plants";
import { IPlantData } from "@/pages/plants/[pid]";

import css from "./Form.module.css";

interface IProps {
  plantData?: IPlantData;
  setEdit: any;
  isLoading: boolean;
  refreshData: any;
}
interface IErrors {
  title?: string;
}
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
          fertilizerPlan: plantData?.fertilizerPlan || "",
          plantingTime: plantData?.plantingTime || "",
          pruning: plantData?.pruning || "",
          harvestTime: plantData?.harvestTime || "",
          propogation: plantData?.propogation || "",
          pestsDiseases: plantData?.pestsDiseases || "",
          notes: plantData?.notes || "",
        }}
        validate={(values) => {
          const errors: IErrors = {};
          if (!values.title) {
            errors.title = "Plant name is required";
          }
          return errors;
        }}
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
        {({ isSubmitting }) => (
          <Form className={css.form}>
            <Field
              className={css.input}
              type="title"
              name="title"
              placeholder="Plant name"
            />
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
              type="fertilizerPlan"
              name="fertilizerPlan"
              placeholder="Fertilizer plan"
            />
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
              <Button size="huge" type="submit" disabled={isSubmitting}>
                Save
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default EditDetails;
