import { styled, Rating, Avatar, Box } from '@mui/material';

const Container = styled('div')({
  padding: '20px',
  maxWidth: '300px',
  border: '1px solid #e5e5e5',
  borderRadius: '20px',
  boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
  margin: '20px'
});


const AvatarContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center'
});


const AvatarText = styled(Box)({
  paddingLeft: '10px',
  color: 'grey'
});

const CustomerFeedback = styled('p')({
  padding: '10px 0',
  color: 'grey',
  fontSize:'12px'
});

const ServiceCard = ({ rating, text, name, url }) => {
  return (
    <Container>
      <Rating name="read-only" value={rating} readOnly />
      <CustomerFeedback>{text}</CustomerFeedback>
      <AvatarContainer>

        <Avatar alt="Cindy Baker" src={url} />
        <AvatarText>{ name }</AvatarText>
      </AvatarContainer>
    </Container>
  )
}

export default ServiceCard