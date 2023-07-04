import Layout from 'layout/secondary';
import { Grid, Box, styled } from '@mui/material';
import AppointmentForm from '../bookAppointment/appointmentForm';
import { Doctor7 } from 'assert/images';

const MainConatiner = styled(Box)(() => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const Container = styled('div')(({ padding }) => ({
  maxWidth: '1200px',
  width: '100%',
  padding: '20px',
}));

const CardStyled = styled('div')(({ padding } ) => ({
  padding: padding || '20px',
  border: '1px solid #e5e5e5',
  borderRadius: '8px',
  boxShadow: 'rgba(99, 99, 99, 0.12) 0px 2px 8px 0px',
  width: '100%',
}));

const Title = styled('p')(() => ({
  color: '#01a998',
  fontSize: '24px',
  fontWeight: 900,
}));

const SubTitle = styled('p')(() => ({
  color: '#01a998',
  fontSize: '16px',
  fontWeight: 900,
}));

const TextTitle = styled('p')(() => ({
  color: '#000000',
  fontSize: '16px',
  fontWeight: 900,
}));

const Text = styled('p')(({ padding } ) => ({
  color: '#666666',
  fontSize: '16px',
  padding,
}));

const GridContainer = styled(Grid)(() => ({
  padding: '10px 0',
}));

const GridImageContainer = styled(Grid)(() => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}));
  
const Image = styled('img')(({ theme }) => ({
    width: '100%',
    [theme.breakpoints.only('sm')]: {
        width: '50%',
    }
}));

const DoctorDetails = () => {
  return (
    <Layout>
      <MainConatiner>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} md={5} lg={4}>
              <Grid container spacing={2}>
                <GridImageContainer item xs={12}>
                  <Image src={Doctor7} />
                </GridImageContainer>
                <Grid item xs={12}>
                  <CardStyled>
                    <TextTitle>Availability</TextTitle>
                    <GridContainer container spacing={2}>
                      <Grid item xs={6}>
                        <Text>Monday - Friday</Text>
                      </Grid>
                      <Grid item xs={6}>
                        <Text>9.00 - 20.00</Text>
                      </Grid>
                      <Grid item xs={6}>
                        <Text>Saturday</Text>
                      </Grid>
                      <Grid item xs={6}>
                        <Text>10.00 - 16.00</Text>
                      </Grid>
                      <Grid item xs={6}>
                        <Text>Sunday</Text>
                      </Grid>
                      <Grid item xs={6}>
                        <Text>9.30 - 18.00</Text>
                      </Grid>
                    </GridContainer>
                  </CardStyled>
                </Grid>
                <Grid item xs={12}>
                  <CardStyled padding='0px'>
                    <AppointmentForm />
                  </CardStyled>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={7} lg={8}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <CardStyled>
                    <Title>Anjali Gupta</Title>
                    <SubTitle>Dentist</SubTitle>
                    <Text>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Repellat, totam! Dicta rerum deserunt itaque. Incidunt in
                      quo architecto eveniet rem facere, necessitatibus, dolorem
                      voluptas deleniti iure fuga magni velit molestiae ipsum
                      dolor sit amet consectetur adipisicing elit. Repellat,
                      totam adipisicing.
                    </Text>
                    <GridContainer container spacing={2}>
                      <Grid item xs={4}>
                        <TextTitle>Specialty</TextTitle>
                      </Grid>
                      <Grid item xs={8}>
                        <Grid container spacing={1}>
                          <Grid item xs={12}>
                            <Text>Obstetrics</Text>
                          </Grid>
                          <Grid item xs={12}>
                            <Text>Dermatology</Text>
                          </Grid>
                          <Grid item xs={12}>
                            <Text>Orthopedics</Text>
                          </Grid>
                        </Grid>
                      </Grid>
                    </GridContainer>
                    <GridContainer container spacing={2}>
                      <Grid item xs={4}>
                        <TextTitle>Education</TextTitle>
                      </Grid>
                      <Grid item xs={8}>
                        <Grid container spacing={1}>
                          <Grid item xs={12}>
                            <Text>Ph.D fron AIMS India</Text>
                          </Grid>
                          <Grid item xs={12}>
                            <Text>MBBS fron AIMS India</Text>
                          </Grid>
                        
                        </Grid>
                      </Grid>
                    </GridContainer>
                    <GridContainer container spacing={2}>
                      <Grid item xs={4}>
                        <TextTitle>Experience</TextTitle>
                      </Grid>
                      <Grid item xs={8}>
                        <Grid container spacing={1}>
                          <Grid item xs={12}>
                            <Text>25 Years of experience in medicine</Text>
                          </Grid>
                        </Grid>
                      </Grid>
                    </GridContainer>
                    <GridContainer container spacing={2}>
                      <Grid item xs={4}>
                        <TextTitle>Address</TextTitle>
                      </Grid>
                      <Grid item xs={8}>
                        <Grid container spacing={1}>
                          <Grid item xs={12}>
                            <Text>udbia main road, Duabi</Text>
                          </Grid>
                        </Grid>
                      </Grid>
                    </GridContainer>
                    <GridContainer container spacing={2}>
                      <Grid item xs={4}>
                        <TextTitle>Phone</TextTitle>
                      </Grid>
                      <Grid item xs={8}>
                        <Grid container spacing={1}>
                          <Grid item xs={12}>
                            <Text>987654321</Text>
                          </Grid>
                        </Grid>
                      </Grid>
                    </GridContainer>
                    <GridContainer container spacing={2}>
                      <Grid item xs={4}>
                        <TextTitle>Email</TextTitle>
                      </Grid>
                      <Grid item xs={8}>
                        <Grid container spacing={1}>
                          <Grid item xs={12}>
                            <Text>Anjali@kanini.com</Text>
                          </Grid>
                        </Grid>
                      </Grid>
                    </GridContainer>
                    <GridContainer container spacing={2}>
                      <Grid item xs={4}>
                        <TextTitle>Website</TextTitle>
                      </Grid>
                      <Grid item xs={8}>
                        <Grid container spacing={1}>
                          <Grid item xs={12}>
                            <a href='https://kanini.com/' target={'_parent'}>
                              <Text>kanini.com</Text>
                            </a>
                          </Grid>
                        </Grid>
                      </Grid>
                    </GridContainer>
                  </CardStyled>
                </Grid>
                <Grid item xs={12}>
                  <CardStyled>
                    <SubTitle>Description</SubTitle>
                    <Text>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Repellat, totam! Dicta rerum deserunt itaque. Incidunt in
                      quo architecto eveniet rem facere, necessitatibus, dolorem
                      voluptas deleniti iure fuga magni velit molestiae ipsum
                      dolor sit amet consectetur adipisicing elit. Repellat,
                      totam adipisicing.
                    </Text>
                    <Text padding='10px 0'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Repellat, totam! Dicta rerum deserunt itaque. Incidunt in
                      quo architecto eveniet rem facere, necessitatibus, dolorem
                      voluptas deleniti iure fuga magni velit molestiae ipsum
                      dolor sit amet consectetur adipisicing elit. Repellat,
                      totam adipisicing.
                    </Text>
                  </CardStyled>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </MainConatiner>
    </Layout>
  );
};

export default DoctorDetails;
