import { useState } from 'react';
import { styled, Box } from '@mui/material';
import Drawer from 'layout/drawer';
import Logo from 'layout/Logo';
import LoginButton from 'layout/LoginButton';
import { useScreenSize } from 'customHooks';
import { RxHamburgerMenu } from 'react-icons/rx';
import { useNavigate } from 'react-router-dom';
import { routeName } from 'constant';

const Container = styled('div')({
  width: '100%',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 20px',

});

const HeaderTitleContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',
  [theme.breakpoints.down('lg')]: {
    display: 'none',
  },
}));

const HeaderTitle = styled('span')({
  color: '#898888',
  padding: '20px',
  fontWeight: 600,
  cursor: 'pointer'
});

const HamburgerIcon = styled(RxHamburgerMenu)(({ theme }) => ({
  cursor: 'pointer',
  marginRight: '20px',
  fontSize: '20px',
  color: '#a19d9d',
  [theme.breakpoints.down('md')]: {
    marginRight: 0,
  },
}));

const DrawerContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
}));

const LogoContainer = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    width: '100%',
    padding: '20px 0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const Header = () => {
  const screen = useScreenSize();
  const navigation = useNavigate();
  const [state, setState] = useState(false);

  const toggleDrawer = (val) => {
    setState(val);
  };
  return (
    <Container>
      {['xs', 'sm', 'md'].includes(screen) && (
        <DrawerContainer>
          <Drawer state={state} toggleDrawer={toggleDrawer} />
          <HamburgerIcon onClick={() => toggleDrawer(true)} />
          <LogoContainer>
            <Logo />
          </LogoContainer>
        </DrawerContainer>
      )}
      {['lg', 'xl'].includes(screen) && <Logo />}
      <HeaderTitleContainer>
        <HeaderTitle onClick={() => navigation(routeName.HOMEPAGE)}>Home</HeaderTitle>
        <HeaderTitle onClick={() => navigation(routeName.CONTACTUS)}>Contact Us</HeaderTitle>
      </HeaderTitleContainer>
      {!['xs', 'sm'].includes(screen) && (
        <Box>
          <LoginButton />
        </Box>
      )}
    </Container>
  );
};

export default Header;
