import { nanoid } from 'nanoid'
import { Formik, Form, Field, ErrorMessage} from 'formik';
import * as yup from 'yup';
import css from "./ContactForm.module.css";
const validation = yup.object({
  name: yup.string().min(3, "Too short").max(50).required("Required"),
  number: yup.string().min(3,"Too short").max(50).required("Required"),
    });
export default function ContactForm({ onSubmit }) {
    const handleSubmit = (values, actions) => {
        onSubmit({
            ...values,
                id: nanoid(),
            })
          actions.resetForm();
    }
    return (
        <Formik initialValues={{
            name: "",
            number: ""
        }}
            onSubmit={handleSubmit} validationSchema={validation}>
            <Form className={css.form}>
                <div className={css.container}>
                <label className={css.text} htmlFor="name"> Name</label>
                    <Field className={css.input} type="text" name="name" id="name" />
                     <ErrorMessage className={css.error} name="name" component="span" />
                </div>
                <div className={css.container}>
            <label className={css.text} htmlFor="number"> Number</label>
             <Field className={css.input} type="number" name="number" id="number" />
            <ErrorMessage className={css.error} name="number" component="span" />
            </div>
            <button className={css.btnAdd} type ="submit"> Add Contact </button>
            </Form>     
     </Formik>
    )
}