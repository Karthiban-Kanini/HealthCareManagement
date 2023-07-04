import Layout from 'layout/secondary';
import { Grid, styled, Button, Box } from '@mui/material';
import { InputComponent } from 'components';
import { MdLocationOn, MdMobileScreenShare, MdEmail } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const MainContainer = styled('div')(() => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
    alignItems: 'center',
  padding: '80px'
}));

const Container = styled('div')(() => ({
  width: '100%',
  maxWidth: '1000px',
}));

const MainTitle = styled('p')(({ fontSize }) => ({
  padding: '10px 0',
  fontWeight: 700,
  color: '#01a998',
  fontSize,
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

const AddressContainer = styled('div')(() => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  padding: '10px 0',
}));

const AddressText = styled('span')(() => ({
  color: 'grey',
}));

const IconContainer = styled(Box)(() => ({
  height: '50px',
  width: '50px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

const EmailIcon = styled(MdEmail)(() => ({
  color: '#01a998',
  fontSize: '25px',
  marginRight: '5px',
}));

const MobileIcon = styled(MdMobileScreenShare)(() => ({
  color: '#01a998',
  fontSize: '25px',
  marginRight: '5px',
}));

const LocationIcon = styled(MdLocationOn)(() => ({
  color: '#01a998',
  fontSize: '25px',
  marginRight: '5px',
}));

const ContainerCenter = styled(Box)(() => ({
    width:'100%',
    height:'100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'column'
}));

const ContactUs = () => {
  const navigate = useNavigate();

  const Save = () => {
    navigate('/'); 
  };
  return (
    <Layout>
      <MainContainer>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <ContainerCenter>
                <AddressContainer>
                  <IconContainer>
                    <LocationIcon />
                  </IconContainer>
                  <AddressText>
                  Ratha Tek, Tower- B, Shollinganallur, chennai, India
                  </AddressText>
                </AddressContainer>
                <AddressContainer>
                  <IconContainer>
                    <MobileIcon />
                  </IconContainer>
                  <AddressText>9878978998</AddressText>
                </AddressContainer>
                <AddressContainer>
                  <IconContainer>
                    <EmailIcon />
                  </IconContainer>
                  <AddressText>kaninicare@kanini.com</AddressText>
                </AddressContainer>
              </ContainerCenter>
            </Grid>
            <Grid item xs={12} md={8}>
              <MainTitle fontSize='25px'>Contact Form</MainTitle>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <InputComponent name='Name' />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <InputComponent name='Email' />
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <InputComponent name='Subject' />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <InputComponent name='Mobile Number' />
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <InputComponent name='Message' minRows={5} multiline />
                </Grid>
              </Grid>
              <CustomButton onClick={Save}>Submit</CustomButton>
            </Grid>
          </Grid>
        </Container>
      </MainContainer>
    </Layout>
  );
};

export default ContactUs;
