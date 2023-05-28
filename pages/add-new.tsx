import FormAddNewPlant from "./components/Form/AddNewPlant";
import css from "./AddNew.module.css";

export default function AddNew() {
  return (
    <div className={css.container}>
      <h1>Add a Plant</h1>
      <FormAddNewPlant />
    </div>
  );
}
