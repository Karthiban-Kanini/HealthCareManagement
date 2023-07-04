import {
  Doctor2,
  Doctor3,
  Doctor4,
  Doctor5
} from 'assert/images';
import { styled } from '@mui/material';
import DoctorCard from 'components/doctorDetailsCard';


const Container = styled('div')(({ theme }) => ({
  position: 'relative',
  background: '#feffff',
  display: 'flex',
  alignItems: 'center',
    maxWidth: '1600px',
  flexWrap: 'wrap',
 
}));

const MainContainer = styled('div')(({ theme }) => ({
    padding: '80px 40px',
  display: 'flex',
  alignItems: 'center',
    justifyContent: 'center',
  flexDirection:'column'
}));

const MainTitle = styled('p')(({ fontSize, color }) => ({
  padding: '10px 0',
  fontWeight: 700,
  color,
  fontSize,
}));

const DoctorDetails = () => {

  const details = [
    {
      name: 'Jenifer',
      imageUrl: Doctor2,
      expertIn: "Dentist"
    },
    {
      name: 'Marilyn',
      imageUrl: Doctor3,
      expertIn: "Dermatologists"
    },
    {
      name: 'Mansi Roy',
      imageUrl: Doctor4,
      expertIn: "Dentist"
    },
    {
      name: 'Anjali Sharma',
      imageUrl: Doctor5,
      expertIn: "Gastroenterologists"
    }
  ]
  return (
    <MainContainer>
      <MainTitle fontSize='25px' color='#01a998'>
        Meet Our Team
      </MainTitle>

      <Container>
        {
          details.map(({ name, imageUrl,expertIn }) => <DoctorCard imageUrl={imageUrl} name={name} expertIn={expertIn} />)
        }
      </Container>
    </MainContainer>
  );
};

export default DoctorDetails;
