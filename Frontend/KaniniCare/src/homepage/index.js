import Introduction from './introduction'
import Details from './details'
import ServiceSection from './servicesSection'
import DoctorDetails from './doctorDetails'
import Layout from 'layout';

const Homepage = () => {
  return (
    <Layout>
      <Introduction />
      <Details />
      <ServiceSection />
      <DoctorDetails />
    </Layout>
  );
};

export default Homepage;
