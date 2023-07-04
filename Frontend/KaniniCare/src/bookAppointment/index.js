import Layout from 'layout/secondary';
import { Card, styled, Box } from '@mui/material';
import { BackgroundContactUs } from 'assert/images';
import AppointmentForm from './appointmentForm';

const MainContainer = styled(Card)(() => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems:'center',
  backgroundColor: '#f9f9f9',
  padding: '80px 40px',
  backgroundImage: `url(${BackgroundContactUs})`,
  backgroundSize: 'cover'
}));

const Container = styled(Box)(() => ({
  width: '600px',
  background: '#e9e9e9bf',
}));


const BookAppointment = () => {
  return (
    <Layout>
      <MainContainer>
        <Container>
          <AppointmentForm />
        </Container>
      </MainContainer>
    </Layout>
  );
};

export default BookAppointment;
