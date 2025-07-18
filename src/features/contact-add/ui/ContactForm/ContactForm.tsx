import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useContactStore } from '@entities/contact/model/contactStore';
import React from 'react';

export interface ContactFormProps {
  onSuccess?: () => void;
}

const ContactForm: React.FC<ContactFormProps> = (props) => {
  const addContact = useContactStore((state) => state.addContact);

  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
      email: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      phone: Yup.string()
        .matches(/^[0-9]+$/, 'Phone must contain only digits')
        .min(10, 'Phone must be at least 10 digits')
        .required('Phone is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
    }),
    onSubmit: (values, { resetForm }) => {
      addContact({
        id: Date.now(),
        name: values.name,
        phone: values.phone,
        email: values.email,
      });
      resetForm();
      props.onSuccess?.();
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label>Name</label>
        <input name="name" type="text" value={formik.values.name} onChange={formik.handleChange} />
        {formik.touched.name && formik.errors.name && (
          <div style={{ color: 'red' }}>{formik.errors.name}</div>
        )}
      </div>

      <div>
        <label htmlFor="phone">Phone</label>
        <input
          type="tel"
          name="phone"
          value={formik.values.phone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          inputMode="numeric"
          pattern="[0-9]*"
        />
        {formik.touched.phone && formik.errors.phone && (
          <div style={{ color: 'red' }}>{formik.errors.phone}</div>
        )}
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email && (
          <div style={{ color: 'red' }}>{formik.errors.email}</div>
        )}
      </div>

      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;
