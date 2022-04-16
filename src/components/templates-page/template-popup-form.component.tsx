import React, { useState } from 'react';
import { Box, Button, Modal, TextField } from '@mui/material';
import { useFormik, FormikHelpers } from 'formik';
import * as yup from 'yup';

interface TemplatePopupFormProps {
  label: string;
}

interface FormValues {
  name: string;
  content: string;
}

const validationSchema = yup.object({
  name: yup.string().required('Template name is required.'),
  content: yup.string().required('Template content is required.'),
});

const TemplatePopupForm: React.FC<TemplatePopupFormProps> = ({ label }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const submitHandler = async (
    values: FormValues,
    actions: FormikHelpers<FormValues>
  ) => {
    console.log(values);
    actions.setSubmitting(false);
  };
  const { handleSubmit, values, errors, touched, handleChange } = useFormik({
    initialValues: {
      name: '',
      content: '',
    },
    validationSchema,
    onSubmit: submitHandler,
  });

  return (
    <>
      <Button onClick={handleOpen} variant="contained">
        {label}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'white',
            borderRadius: '10px',
            boxShadow: 24,
            p: 4,
          }}
        >
          <Box
            component="form"
            noValidate
            sx={{ mt: 1 }}
            onSubmit={handleSubmit}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Template name"
              name="name"
              autoFocus
              value={values.name}
              onChange={handleChange}
              error={touched.name && Boolean(errors.name)}
              helperText={touched.name && errors.name}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="content"
              label="Template content"
              id="content"
              rows={10}
              multiline
              value={values.content}
              onChange={handleChange}
              error={touched.content && Boolean(errors.content)}
              helperText={touched.content && errors.content}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default TemplatePopupForm;
