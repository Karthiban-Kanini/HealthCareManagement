import { styled, Box } from '@mui/material';
import { BsFacebook, BsLinkedin, BsInstagram } from 'react-icons/bs';
import { routeName } from 'constant';
import { useNavigate } from 'react-router-dom';

const ImageContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer'
}));

const Image = styled('img')(({ theme }) => ({
  width: '100%',
}));

const Container = styled('div')(({ theme }) => ({
  position: 'relative',
  background: '#feffff',
  display: 'flex',
  width: '100%',
}));

const SocialMediaConatiner = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 20px',
  color: '#8e9193',
}));

const SocialMediaConatinerBar = styled('div')(() => ({
  height: '50%',
  width: '3px',
  background: '#d1d1d7',
  borderRadius: '10px',
}));

const MainContainer = styled('div')(({ theme }) => ({
  padding: '80px 40px',
  width: '25%',
  [theme.breakpoints.down('lg')]: {
      width: '50%',
    },
    [theme.breakpoints.down('md')]: {
        width: '100%',
        padding: '40px 20px',
  },
}));

const Name = styled('p')(() => ({
  color: 'grey',
  paddingTop: '10px',
  fontWeight: 900,
}));

const Designation = styled('p')(() => ({
  color: 'grey',
}));

const DoctorDetailsCard = ({ imageUrl, name, expertIn }) => {
  

  const navigation = useNavigate()

  return (
    <MainContainer>
      <Container>
        <ImageContainer onClick={() => navigation(routeName.DOCTORDETAILS)}>
          <Image src={imageUrl} />
        </ImageContainer>
        <SocialMediaConatiner>
          <BsInstagram />
          <BsLinkedin />
          <BsFacebook />
          <SocialMediaConatinerBar />
        </SocialMediaConatiner>
      </Container>
      <Name>{name}</Name>
      <Designation>{expertIn}</Designation>
    </MainContainer>
  );
};

export default DoctorDetailsCard;
