import { styled, Button } from '@mui/material';
import { routeName } from 'constant';
import { useNavigate } from 'react-router-dom';

const PatientLogin = styled(Button)(({ margin }) => ({
  backgroundColor: 'transparent',
  border: '2px solid #dfdfdf',
  color: '#01a998',
  margin: '20px 0',
  borderRadius: '8px',
  padding: '10px 20px',
  marginLeft: margin ?? '20px',
  ':hover': {
    border: '2px solid #01a998',
    backgroundColor: '#01a998',
    color: '#ffffff',
  },
}));

const DoctorLogin = styled(Button)(({ margin }) => ({
  backgroundColor: '#01a998',
  border: '2px solid #01a998',
  color: '#ffffff',
  margin: '20px 0',
  borderRadius: '8px',
  padding: '10px 20px',
  marginLeft: margin ?? '20px',
  ':hover': {
    border: '2px solid #dfdfdf',
    backgroundColor: '#transparent',
    color: '#01a998',
  },
})); 


const LoginButton = () => {
  const navigation = useNavigate();

  return (
    <>
      <PatientLogin onClick={() => navigation(routeName.SIGNUP)} >Login</PatientLogin>
      <DoctorLogin onClick={() => navigation(routeName.REGISTER)}>Register</DoctorLogin>
    </>
  );
};

export default LoginButton;
