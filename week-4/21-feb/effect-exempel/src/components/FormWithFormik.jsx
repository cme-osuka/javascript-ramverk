import React from "react";
import { Formik, Field, Form } from "formik";

function FormWithFormik() {
  return (
    <div>
      <h1>FormWithFormik</h1>
      <Formik 
        initialValues={{
          username: ""
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form>
          <Field id="username" name="username" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}

export default FormWithFormik;
