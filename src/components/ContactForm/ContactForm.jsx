import { nanoid } from 'nanoid'
import { Formik, Form, Field, ErrorMessage} from 'formik';
import * as yup from 'yup';
import css from "./ContactForm.module.css";
const validation = yup.object({
  username: yup.string().min(3, "Too short").max(50).required("Required"),
  usernumber: yup.string().min(3,"Too short").max(50).required("Required"),
    });
export default function ContactForm({ onSubmit }) {
    const handleSubmit = (values, actions) => {
        onSubmit({
            ...values,
                id: nanoid(),
                // username: values.username,
                // usernumber: values.usernumber,
            })
          actions.resetForm();
    }
    return (
        <Formik initialValues={{
            username: "",
            usernumber: ""
        }}
            onSubmit={handleSubmit} validationSchema={validation}>
            <Form className={css.form}>
                <div className={css.container}>
                <label className={css.text} htmlFor="username"> Name</label>
                    <Field className={css.input} type="text" name="username" id="username" />
                     <ErrorMessage className={css.error} name="username" component="span" />
                </div>
                <div className={css.container}>
            <label className={css.text} htmlFor="usernumber"> Number</label>
             <Field className={css.input} type="number" name="usernumber" id="usernumber" />
            <ErrorMessage className={css.error} name="usernumber" component="span" />
            </div>
            <button className={css.btnAdd} type ="submit"> Add Contact </button>
            </Form>     
     </Formik>
    )
}