import React from 'react';
import { Avatar, Button, Box, Grommet, Nav, Sidebar, Stack, Tip } from 'grommet';
import { Analytics, Calculator, Notification, Stakeholder } from 'grommet-icons';
import logo from '../../assets/logo192.png'; // Adjust the path as necessary

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
      round="medium"
    >
      <Avatar src={logo} color="white" />
    </Avatar>
  </Box>
);

const iconsMap = (color) => [
  <Analytics color={color} />,
  <Stakeholder color={color} />,
  <Calculator color={color} />,
];
const SidebarButton = ({ iconName, index }) => {
  const hoverColor = { color: 'accent-1', opacity: 0.9 };

  return (
    <Box fill="horizontal">
      {/* Second option to apply tip on button */}
      <Tip
        content={<Box>{iconName}</Box>}
        dropProps={{ align: { left: 'right' } }}
      >
        <Button hoverIndicator={hoverColor} plain>
          {({ hover }) => (
            <Box pad={{ vertical: 'small' }} align="center">
              {iconsMap(hover ? 'black' : 'white')[index]}
            </Box>
          )}
        </Button>
      </Tip>
    </Box>
  );
};

export const SidebarTip = () => (
  <Grommet theme={customTheme}>
    <Box direction="row" height={{ min: '100%' }}>
      <Box margin="0">
        <Sidebar
          background="#3c6aaf"
          header={<SidebarHeader />}
          pad={{ vertical: 'xsmall' }}
          footer={
            <Box>
              <Avatar margin="small" src={avatar} />
            </Box>
          }
        >
          <Nav margin="-15px 0 0 0">
            {['Analytics', 'Stakeholder', 'Calculator'].map((iconName, index) => (
              <SidebarButton key={iconName} iconName={iconName} index={index} />
            ))}
          </Nav>
        </Sidebar>
      </Box>
    </Box>
  </Grommet>
);

SidebarTip.storyName = 'Sidebar';

export default {
  title: 'Controls/Tip/Custom Themed/Sidebar',
};