import Header from 'layout/header';
import Footer from 'layout/footer';


const Layout = ({ children }) => {
  
  return (
    <>
      <Header />
        {children}
      <Footer />
    </>
  );
};

export default Layout;
