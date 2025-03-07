import React from 'react';
import { Grommet, Box, Heading, Table, TableBody, TableCell, TableHeader, TableRow, Card, CardBody, CardHeader } from 'grommet';
import { grommet } from 'grommet/themes';
import { SidebarTip as Sidebar } from '../../components/Sidebar/sidebar';

const Home = () => { 
    return (
        <Grommet theme={grommet} full>
            <Box direction="row" fill >
                <Sidebar />
                <Box pad="medium" background="light-2" fill>
                    <Heading level="2" margin="-17px 0px 0px 4px"  color="#3c6aaf">Dados</Heading>
                    <Card 
                        background="white"
                        margin={{ top: 'small' }}
                        elevation="small"
                        round="small"
                        fill
                    >
                        <CardHeader pad="medium" background="#3c6aaf">
                            <Heading level="3" margin="none" color="white">Stocks | Fresenius Kabi - PU ANÁPOLIS</Heading>
                        </CardHeader>
                        <CardBody pad="medium" fill>
                            <Table>
                                <TableHeader>
                                    <TableRow >
                                        <TableCell scope="col" border="bottom" background="light-1" pad="medium">
                                            <strong>Name</strong>
                                        </TableCell>
                                        <TableCell scope="col" border="bottom" background="light-1" pad="medium">
                                            <strong>Brand</strong>
                                        </TableCell>
                                        <TableCell scope="col" border="bottom" background="light-1" pad="medium">
                                            <strong>Un</strong>
                                        </TableCell>
                                        <TableCell scope="col" border="bottom" background="light-1" pad="medium">
                                            <strong>Price</strong>
                                        </TableCell>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow hover>
                                        <TableCell pad="medium">Betametasona</TableCell>
                                        <TableCell pad="medium">General</TableCell>
                                        <TableCell pad="medium">Pc</TableCell>
                                        <TableCell pad="medium">R$200,00</TableCell>
                                    </TableRow>
                                    <TableRow hover>
                                        <TableCell pad="medium">Celulose</TableCell>
                                        <TableCell pad="medium">General</TableCell>
                                        <TableCell pad="medium">Pc</TableCell>
                                        <TableCell pad="medium">R$1.500,00</TableCell>
                                    </TableRow>
                                    <TableRow hover>
                                        <TableCell pad="medium">Cloreto de Cobalto</TableCell>
                                        <TableCell pad="medium">General</TableCell>
                                        <TableCell pad="medium">Pc</TableCell>
                                        <TableCell pad="medium">R$3.000,00</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </CardBody>
                    </Card>
                </Box>
            </Box>
        </Grommet>
    );
}   

export default Home;