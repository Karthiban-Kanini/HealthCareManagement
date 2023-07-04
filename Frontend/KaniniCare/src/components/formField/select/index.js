import { useState } from 'react';
import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  styled,
} from '@mui/material';

const FormControlComponent = styled(FormControl)(() => ({
  width: '100%',
  margin: '10px 0',
}));

const SelectStyled = styled(Select)(() => ({
    color: '#aba9a9 !important',
    width: '100%',
    
    '&:before': {
      borderColor: '#aba9a9 !important',
    },
    '&:after': {
      borderColor: '#aba9a9 !important',
    },

 
    '.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: '#aba9a9 !important',
    },

    '.MuiOutlinedInput-notchedOutline': {
      borderColor: '#aba9a9 !important'
    },
    '&:hover': {
      '.MuiOutlinedInput-notchedOutline': {
        borderColor: '#aba9a9 !important'
      },
    },
    svg: {
      color: '#aba9a9 !important'
    }
  
  }));
  
  const SelectMenuStyle = styled(MenuItem)(({ theme }) => ({
    color: '#aba9a9 !important',
    '&:after': {
      backgroundColor: '#ffffff !important',
    },
    '&:hover': {
      backgroundColor: '#ffffff !important',
    },
    '&.Mui-selected': {
      backgroundColor: '#ffffff !important',
    },
  }));


const SelectComponent = ({ name, item }) => {
  const [selectDetails, setSelectDetails] = useState('');


  return (
  
      <FormControlComponent fullWidth>
        <InputLabel id='demo-simple-select-label'>{name}</InputLabel>
        <SelectStyled
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={selectDetails}
          label={name}
          >
          {item.map((val) => (
            <SelectMenuStyle value={val}>{val}</SelectMenuStyle>
          ))}
        </SelectStyled>
      </FormControlComponent>

  );
};

export default SelectComponent;
