import { Checkbox as MuiCheckbox, CheckboxProps } from '@mui/material';

const Checkbox = (props: CheckboxProps) => {
  return <MuiCheckbox color="primary" {...props} />;
};

export default Checkbox;