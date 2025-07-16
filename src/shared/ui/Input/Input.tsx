import { TextField, TextFieldProps } from '@mui/material';

const Input = (props: TextFieldProps) => {
  return <TextField variant="outlined" fullWidth {...props} />;
};

export default Input;
