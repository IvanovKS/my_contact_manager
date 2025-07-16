import { Button as MuiButton, ButtonProps } from '@mui/material';

const Button = (props: ButtonProps) => {
  return <MuiButton variant="outlined" color="error" size="medium" {...props} />;
};

export default Button;
