import { styled, Box } from '@mui/material';
import FeedbackCard from 'components/serviceCard';
import {Cusomer_1,Cusomer_2,Cusomer_3,Cusomer_4} from 'assert/images';

const Container = styled(Box)({
  position: 'relative',
  background: '#f4f8fb',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: '80px 40px',

});

const MainContentContainer = styled(Box)(({ theme }) => ({
  height: '100%',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
  zIndex: 2,
  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
}));

const MainTitle = styled('p')(({ fontSize, color }) => ({
  padding: '10px 0',
  fontWeight: 700,
  color,
  fontSize,
}));

const ServiceSection = () => {

  const serviceDetails = [
    {
      rating: 3.5,
      text: ' It shows the patients that you prioritize their satisfaction and that you care about their experience.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It has survived not only five centuries, but also of the yaer',
      name: 'Narasimhum',
      url: Cusomer_1
    },
    {
      rating: 5,
      text: 'Having a patient feedback system allows healthcare providers to monitor online reviews posted about their healthcare practice book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
      name: 'Karthiban',
      url: Cusomer_3
    },
    {
      rating: 4,
      text: 'Patients can reveal characteristics of high-quality healthcare and reinforce important behaviours and service delivery & gratitude, the expression of which has many benefits for staff as well as patients and families, but also the leap into electronic typesetting, remaining essentially unchanged.',
      name: 'Dhinesh',
      url: Cusomer_2
    },
    
  ]

  return (
    <Container>
      <MainTitle fontSize='25px' color='#01a998'>
        Customer Feedback
      </MainTitle>
      <MainContentContainer>
        {
          serviceDetails.map(({ rating, text, name, url }) =>
            <FeedbackCard
              rating={rating}
              text={text}
              name={name}
              url={url}
            />
          )
        }

      </MainContentContainer>
    </Container>
  );
};

export default ServiceSection;
