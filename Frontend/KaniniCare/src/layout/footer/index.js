import { styled, Grid, Button, Box, Divider } from '@mui/material';
import { FiPhoneCall } from 'react-icons/fi';
import { GoLocation } from 'react-icons/go';
import { SiGmail } from 'react-icons/si';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { BsFacebook, BsLinkedin } from 'react-icons/bs';
import Logo from '../Logo';
import { useState } from 'react';
import './index.css';
const Container = styled('div')({
  position: 'relative',
  background: '#062f2b',
  padding: '80px',
});

const FooterTitle = styled('p')({
  fontSize: '20px',
  fontWeight: 700,
  color: '#ffffff',
});

const Text = styled('p')({
  fontSize: '16px',
  color: '#ffffff',
  paddingTop: '10px',
});

const ContactContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  color: '#ffffff',
});

const IconContainer = styled('span')({
  color: '#ffffff',
  padding: '0 10px 0 0',
  paddingTop: '10px',
});

const CustomInput = styled('input')({
  marginTop: '10px',
  padding: '10px 20px',
  borderRadius: '8px',
  outline: 'none',
  background: '#0d5c553b',
  border: '1px solid #0d5c553b',
  color: '#ffffff',
});

const SubscribeButton = styled(Button)(({ margin }) => ({
  backgroundColor: '#01a998',
  border: '2px solid #01a998',
  color: '#ffffff',
  margin: '20px 0',
  borderRadius: '8px',
  padding: '8px 16px',
  ':hover': {
    border: '2px solid #dfdfdf',
    backgroundColor: '#transparent',
    color: '#01a998',
  },
}));

const CustomDivider = styled(Divider)({
  borderColor: '#ffffff17',
  marginTop: '60px',
});

const CopRightContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  color: '#ffffff',
  paddingTop: '30px',
});

const CopyRightIcon = styled('span')({
  color: '#ffffff',
  padding: '10px',
});

const Footer = () => {
  
  const [isVisible, setIsVisible] = useState(true);
  const [isNotVisible, setIsNotVisible] = useState(false);
  
  const handleButtonClick = () => {
    setIsVisible(!isVisible);
    setIsNotVisible(!isNotVisible);
  };
  return (
    <Container>
      <Grid container spacing={8}>
        <Grid item sm={12} md={6} lg={3}>
          <Logo />
          <Text>Provide best services to our customer</Text>
        </Grid>
        <Grid item sm={12} md={6} lg={3}>
          <FooterTitle>Use</FooterTitle>
          <Text>Services</Text>
          <Text>Make Appointment</Text>
          <Text>Gallery</Text>
          <Text>Event</Text>
        </Grid>
        <Grid item sm={12} md={6} lg={3}>
          <FooterTitle>Contact</FooterTitle>
          <ContactContainer>
            <IconContainer>
              <FiPhoneCall />
            </IconContainer>
            <Text>9878978998</Text>
          </ContactContainer>
          <ContactContainer>
            <IconContainer>
              <GoLocation />
            </IconContainer>
            <Text> Ratha Tek, Tower- B, Shollinganallur, chennai, India</Text>
          </ContactContainer>
          <ContactContainer>
            <IconContainer>
              <SiGmail />
            </IconContainer>
            <Text>kaninicare@kanini.com</Text>
          </ContactContainer>
        </Grid>
        {isVisible && <Grid item sm={12} md={6} lg={3}>
        <FooterTitle>Subscribe us</FooterTitle>
        <CustomInput placeholder='Email' />
          <Box>
          <SubscribeButton onClick={handleButtonClick}>Subscribe</SubscribeButton>
          </Box>
        </Grid>}
        {isNotVisible && <FooterTitle className='subscribe'>Subscribed</FooterTitle>}
      </Grid>
      <CustomDivider />

      <CopRightContainer>
        <p>All Rights Reserved</p>
        <Box>
          <CopyRightIcon>
            <BsFacebook />
          </CopyRightIcon>
          <CopyRightIcon>
            <BsLinkedin />
          </CopyRightIcon>
          <CopyRightIcon>
            <AiFillTwitterCircle />
          </CopyRightIcon>
        </Box>
      </CopRightContainer>
    </Container>
  );
};

export default Footer;
