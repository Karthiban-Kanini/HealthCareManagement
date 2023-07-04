import {Doctor7} from 'assert/images';
import { styled, Button, Box } from '@mui/material';
import { CgEditBlackPoint } from 'react-icons/cg';
import { useNavigate } from 'react-router-dom';
import BookAppointment from 'bookAppointment';


const ImageContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '50%',
  height: '100%',
  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
}));

const Image = styled('img')(({ theme }) => ({
  width: '40%',
  [theme.breakpoints.only('xs')]: {
    width: '80%',
  },
}));

const Container = styled('div')(({ theme }) => ({
  position: 'relative',
  background: '#feffff',
  display: 'flex',
  alignItems: 'center',
  padding: '80px 40px',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
  },
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
  width: '100%',
  display: 'flex',
  alignItems: 'start',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '20px',
});

const MainTitle = styled('p')(({ fontSize, color }) => ({
  padding: '10px 0',
  fontWeight: 700,
  color,
  fontSize,
}));

const PointContainer = styled('p')({
  display: 'flex',
  alignItems: 'center',
  color: '#898888',
    marginBottom: '10px',
});

const PointIcon = styled(CgEditBlackPoint)({
  color: '#01a998',
  marginRight: '10px',
});

const ServiceDetails = () => {
  const navigate = useNavigate();
  const Save = () => {
    navigate(' '); 
  };
  return (
    <Container>
      <ImageContainer>
        <Image src={Doctor7} />
      </ImageContainer>
      <MainContentContainer>
        <ContentContainer>
          <MainTitle fontSize='25px' color='#01a998'>
            About us
          </MainTitle>
          <MainTitle fontSize='20px' color='#898888'>
            We care about your health. Here we are to provide you best medical
            services to our customer
          </MainTitle>
          <PointContainer>
            <PointIcon />
            Easy online booking here
          </PointContainer>
          <PointContainer>
            <PointIcon />
            Best quality services
          </PointContainer>
          <PointContainer>
            <PointIcon />
            Affortable price
          </PointContainer>
          <PointContainer>
            <PointIcon />
            Affortable price
          </PointContainer>
          <PointContainer>
            <PointIcon />
            Affortable price
          </PointContainer>

          <CustomButton  onClick={Save} >Make Appointment</CustomButton>
        </ContentContainer>
      </MainContentContainer>
    </Container>
  );
};

export default ServiceDetails;
