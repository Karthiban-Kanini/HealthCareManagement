import {DoctorCombo} from 'assert/images';
import { styled, Button, Box } from '@mui/material';
import { routeName } from 'constant';
import { useNavigate } from 'react-router-dom';

const ImageContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '50%',
  background: '#ecf3f9',
  height: '100%',
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

const Image = styled('img')({
  width: '70%',
});

const Container = styled('div')({
  position: 'relative',
  height: '100%',
  background: '#f4f8fb',
  display: 'flex',
  alignItems: 'center',
});

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

const MainContentContainer = styled('div')(({ theme }) => ({
  height: '100%',
  width: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 2,
  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
}));

const ContentContainer = styled('div')({
  position: 'relative',
  height: '100%',
  display: 'flex',
  alignItems: 'start',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '20px',
});

const MainTitle = styled('p')(({ fontSize }) => ({
  padding: '10px 0',
  fontWeight: 700,
  color: '#01a998',
  fontSize,
}));

const SubTitle = styled('p')({
  maxWidth: '500px',
  padding: '10px 0',
  fontSize: '18px',
  color: '#898888',
  fontWeight: 500,
});

const Homepage = () => {
  const navigation = useNavigate()
  return (
    <Container>
      <MainContentContainer>
        <ContentContainer>
          <MainTitle fontSize='35px'>Welcome to our Kanini Care</MainTitle>
          <MainTitle fontSize='20px'>Highest standard of health care</MainTitle>
          <SubTitle>
            The first and the only human centered, built to enable better
            decision making and make the process fast.
          </SubTitle>
          <CustomButton onClick={() => navigation(routeName.BOOKAPPOINTMENT)} >Make Appointment</CustomButton>
        </ContentContainer>
      </MainContentContainer>
      <ImageContainer>
        <Image src={DoctorCombo} />
      </ImageContainer>
    </Container>
  );
};

export default Homepage;
