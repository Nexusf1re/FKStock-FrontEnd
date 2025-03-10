import React from 'react';
import { Avatar, Button, Box, Grommet, Nav, Sidebar, Tip } from 'grommet';
import { Table, TableAdd, Analytics } from 'grommet-icons';
import logo from '../../assets/logo192.png'; // Adjust the path as necessary
import { Link, useLocation } from 'react-router-dom';

const avatar = 'https://avatars.githubusercontent.com/u/72570082?v=4';

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
      background: { color: 'accent-1', opacity: 0.9 },
      round: { size: 'medium', corner: 'right' },
      flex: false, // so Tip won't get cut on a window resize
    },
  },
};

const SidebarHeader = () => (
  <Box pad="small">
    <Avatar
      background="linear-gradient(#6FFFB0 0%, #7D4CDB 100%)"
      border={{ color: 'white', size: 'small' }}
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
  const hoverColor = { color: 'accent-1', opacity: 0.9 };
  const isActive = currentPath === path;

  return (
    <Box fill="horizontal">
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
          footer={
            {/*
            <Box>
              <Avatar margin="small" src={avatar} />
            </Box>
         */ }
        }
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