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
                        <iframe
                            title="FK Stock"
                            style={{ width: '100%', height: '100%' }}
                            src="https://app.powerbi.com/reportEmbed?reportId=adb15680-4542-4493-88fd3-94c0c2a7ce2b&autoAuth=true&ctid=c98df534-5e36-459a-ac3f-8c2e449863bd"
                            frameBorder="0"
                            allowFullScreen
                        />
                    </Box>

                </Box>
            </Box>
        </Grommet>
    );
};

export default Dashboard;