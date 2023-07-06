import { Card, Box, styled, Button } from '@mui/material';
import { InputComponent, SelectComponent } from 'components';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Container = styled(Card)(() => ({
  width: '100%',
}));

const ContainerForm = styled('div')(() => ({
  width: '100%',
  padding: '0 20px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
}));

const ContainerHeader = styled(Box)(() => ({
  width: '100%',
  background: '#01a998',
  color: '#ffffff',
  fontWeight: 800,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '20px',
}));

const CustomButton = styled(Button)({
  backgroundColor: '#01a998',
  color: '#ffffff',
  margin: '20px 0',
  borderRadius: '8px',
  padding: '10px 20px',
  fontWeight: 600,
  ':hover': {
    backgroundColor: '#01a998',
    color: '#ffffff',
  },
});

const AppointmentForm = () => {
  const navigate = useNavigate();
  const[user,setuser]=useState({
    //"id": 0,
    "doctorID": 0,
    "patientID": 0,
    "appointmentDate": "2023-07-05T11:43:55.729Z"
  });
  var login=()=>{
    navigate("/Contact");
    fetch("http://localhost:5035/api/User/AddAppointment",{
        "method":"POST",
        headers:{
            "accept":"text/plain",
            "Content-Type":"application/json",
        },
        // "body":JSON.stringify({...user})
    })
    .then(async (data)=>{
        if(data.status >= 200 && data.status<=300){
            var myData = await data.json();
            alert("Appointment Booked")
            navigate("/");
        }
    })
    .catch((err)=>{
        alert("Appointment Booked")
        navigate("/");
        console.log(err.error)
    })
}
  return (
        <>
          <Container variant='outlined'>
            <ContainerHeader>Get An Appointment</ContainerHeader>
          </Container>
          <ContainerForm>
            <SelectComponent
              name='How Can We Help ?'
              item={['Serious', 'Need some suggestion', 'Need some help']}
            />
            <InputComponent name='Doctor ID' onChange={(event)=>{setuser({...user,"doctorID":event.target.value})}}/>
            <InputComponent name='Patient ID' onChange={(event)=>{setuser({...user,"patientID":event.target.value})}}/>
            <InputComponent name='Date' /*onChange={(event)=>{setuser({...user,"appointmentDate":event.target.value})}} *//>
            <InputComponent name='Description' />
            <CustomButton onClick={login}>Book Appointment</CustomButton>
          </ContainerForm>
          </>
  );
};

export default AppointmentForm;