import { TextField, styled } from '@mui/material';

const TextFieldComponent = styled(TextField)(() => ({
  width: '100%',
  margin: '10px 0',
  '.MuiOutlinedInput-input': {
    color: '#aba9a9',
  },
  '.MuiInputLabel-root': {
    color: '#737373 !important',
    fontSize: '16px',
  },
  '.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: '#aba9a9 !important',
  },
  '&:hover': {
    '.MuiOutlinedInput-notchedOutline': {
      borderColor: '#aba9a9 !important',
    },
  },
}));

const InputComponent = ({ name, multiline=false,minRows=0 }) => {
  return (
    <TextFieldComponent
      id='outlined-basic'
      label={name}
      multiline={multiline}
      minRows={minRows}
      variant='outlined'
    />
  );
};

export default InputComponent;
