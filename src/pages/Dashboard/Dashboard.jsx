import React from 'react';
import { Grommet, Box, Heading } from 'grommet';
import { grommet } from 'grommet/themes';
import { SidebarTip } from '../../components/Sidebar/sidebar';

const Dashboard = () => {
    return (
        <Grommet theme={grommet} full>
            <Box direction="row" fill>
                <SidebarTip />
                <Box pad="medium" width="large">
                    <Heading level="2" color="#3c6aaf">Análise de Materiais</Heading>
                    <Box fill>
                        
                    </Box>

                </Box>
            </Box>
        </Grommet>
    );
};

export default Dashboard;