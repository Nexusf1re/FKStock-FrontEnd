import React from 'react';
import { Avatar, Button, Box, Grommet, Nav, Sidebar, Tip } from 'grommet';
import { Table, TableAdd, Analytics } from 'grommet-icons';
import logo from '../../assets/logo192.png'; // Adjust the path as necessary
import { Link, useLocation } from 'react-router-dom';
import styles from './sidebar.module.css';

const popupColor = '#1bc2ecde';

const customTheme = {
  global: {
    font: {
      family: `-apple-system, BlinkMacSystemFont`,
    },
    colors: {
      text: 'black',
    },
  },
  tip: {
    drop: {
      align: { left: 'right' },
    },
    content: {
      animation: 'slideRight',
      margin: 'small',
      pad: 'small',
      background: { color: `${popupColor}`, opacity: 0.7 },
      round: { size: 'medium', corner: 'right' },
      flex: false, // so Tip won't get cut on a window resize
    },
  },
};

const SidebarHeader = () => (
  <Box className={styles.logoBox} pad="small">
    <Avatar
      background="linear-gradient(#6FFFB0 0%, #3c6aaf 100%)"
      border={{ color: 'white', size: 'xsmall' }}
      round="small"
    >
      <Avatar src={logo} color="white" pad={{ horizontal: "40px !important" }} />
    </Avatar>
  </Box>
);

const iconsMap = (color) => [
  <Table color={color} />,
  <TableAdd color={color} />,
  <Analytics color={color} />,
];
const SidebarButton = ({ iconName, index, path, currentPath }) => {
  const hoverColor = { color: `${popupColor}`, opacity: 0.7 };
  const isActive = currentPath === path;

  return (
    <Box fill="vertical">
      <Tip
        content={<Box>{iconName}</Box>}
        dropProps={{ align: { left: 'right' } }}
      >
        <Link to={path}>
          <Button hoverIndicator={hoverColor} plain>
            {({ hover }) => (
              <Box width="10px !important" pad={{ vertical: '30px', horizontal: '40px' }} justify="center" align="center">
                {iconsMap(isActive ? 'black' : hover ? 'black' : 'white')[index]}
              </Box>
            )}
          </Button>
        </Link>
      </Tip>
    </Box>
  );
};

export const SidebarTip = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return(
  <Grommet theme={customTheme}>
    <Box direction="row" height={{ min: '100vh' }}>
      <Box margin="0">
        <Sidebar
          background="#3c6aaf"
          header={<SidebarHeader />}
          pad={{ vertical: '0' }}
        >
          <Nav margin="-15px 0 0 0">
              {[
                { name: 'Dados', path: '/' },
                { name: 'Lançamento', path: '/form' },
                { name: 'Dashboard', path: '/dashboard' },
              ].map((item, index) => (
                <SidebarButton
                  key={item.name}
                  iconName={item.name}
                  index={index}
                  path={item.path}
                  currentPath={currentPath}
                />
              ))}
            </Nav>
        </Sidebar>
      </Box>
    </Box>
  </Grommet>
);
};

SidebarTip.storyName = 'Sidebar';

const sidebarConfig = {
  title: 'Controls/Tip/Custom Themed/Sidebar',
};

export default sidebarConfig;