import { Fragment } from 'react';
import {
  styled,
  Box,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { AiOutlineHome } from 'react-icons/ai';
import { IoIosContact } from 'react-icons/io';
import LoginButton from 'layout/LoginButton';
import Logo from 'layout/Logo';
import { useScreenSize } from 'customHooks';

const LogoContainer = styled(Box)(() => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '20px',
}));

const ListContainer = styled(Box)(({ theme }) => ({
  padding: '0 20px',
  width: '400px',
}));

const LoginButtonContainer = styled(List)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
}));

const ListItemStyled = styled(ListItem)(({ theme }) => ({
  '&:hover': {
    '.MuiTypography-root': {
      fontWeight: 800,
    },
    color: '#01a998',
    svg: {
      color: '#01a998',
    },
  },
}));

const HeaderDrawer = ({ toggleDrawer, state }) => {
  const screen = useScreenSize();

  const headerList = [
    {
      name: 'Home',
      icon: <AiOutlineHome />,
    },
    {
      name: 'Contact Us',
      icon: <IoIosContact />,
    },
  ];

  const list = () => (
    <ListContainer>
      <List>
        {headerList.map(({ name, icon }) => (
          <ListItemStyled key={name} disablePadding>
            <ListItemButton>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={name} />
            </ListItemButton>
          </ListItemStyled>
        ))}
      </List>
      {['xs', 'sm'].includes(screen) && (
        <>
          <Divider />
          <LoginButtonContainer>
            <LoginButton margin='0' />
          </LoginButtonContainer>
        </>
      )}
    </ListContainer>
  );

  return (
    <Fragment key='left'>
      <Drawer anchor={'left'} open={state} onClose={() => toggleDrawer(false)}>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        {list()}
      </Drawer>
    </Fragment>
  );
};

export default HeaderDrawer;
