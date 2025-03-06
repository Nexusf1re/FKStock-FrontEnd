import React from 'react';
import { Grommet, Box, Heading, Table, TableBody, TableCell, TableHeader, TableRow, Card, CardBody, CardHeader } from 'grommet';
import { grommet } from 'grommet/themes';

const Home = () => { 
    return (
        <Grommet theme={grommet}>
            <Box pad="small" background="light-2" width="100%">
                <Heading level="2" margin="none" color="#3c6aaf">Home</Heading>
                <Card 
                    background="white"
                    margin={{ top: 'small' }}
                    elevation="small"
                    round="small"
                >
                    <CardHeader pad="medium" background="#3c6aaf">
                        <Heading level="3" margin="none" color="white">Stocks | Fresenius Kabi - PU ANÁPOLIS</Heading>
                    </CardHeader>
                    <CardBody pad="medium">
                        <Table>
                            <TableHeader>
                                <TableRow>
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
        </Grommet>
    );
}   

export default Home;