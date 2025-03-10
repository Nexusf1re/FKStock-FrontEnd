import React, { useEffect, useState } from 'react';
import { Grommet, Box, Heading, Table, TableBody, TableCell, TableHeader,TableRow, Card, CardBody, CardHeader } from 'grommet';
import { grommet } from 'grommet/themes';
import { SidebarTip as Sidebar } from '../../components/Sidebar/sidebar';

const Home = () => {
const [items, setItems] = useState([]);

useEffect(() => {
fetch(`${process.env.REACT_APP_API_URL}/api/items`)
.then((res) => res.json())
.then((data) => setItems(data))
.catch((err) => console.error(err));
}, []);

return (
<Grommet theme={grommet} full>
<Box direction="row" fill>
<Sidebar />
<Box pad="medium" background="light-2" fill>
<Heading level="2" margin="-17px 0px 0px 4px" color="#3c6aaf">
Dados
</Heading>
<Card background="white" margin={{ top: 'small' }} elevation="small" round="small" fill>
<CardHeader pad="medium" background="#3c6aaf">
<Heading level="3" margin="none" color="white">
    Stocks | Fresenius Kabi - PU ANÁPOLIS
</Heading>
</CardHeader>
<CardBody pad="medium" fill>
<Table>
    <TableHeader>
        <TableRow>
            <TableCell scope="col" border="bottom" background="light-1" p  ad="medium">
                <strong>RC</strong>
            </TableCell>

            <TableCell scope="col" border="bottom" background="light-1" pad="medium">
                <strong>Material</strong>
            </TableCell>

            <TableCell scope="col" border="bottom" background="light-1" pad="medium">
                <strong>Qtd</strong>
            </TableCell>

            <TableCell scope="col" border="bottom" background="light-1" pad="medium">
                <strong>Valor</strong>
            </TableCell>

            <TableCell scope="col" border="bottom" background="light-1" pad="medium">
                <strong>Valor NF</strong>
            </TableCell>
            
            <TableCell scope="col" border="bottom" background="light-1" pad="medium">
                <strong>Un</strong>
            </TableCell>

            <TableCell scope="col" border="bottom" background="light-1" pad="medium">
                <strong>Marca</strong>
            </TableCell>

            <TableCell scope="col" border="bottom" background="light-1" pad="medium">
                <strong>Recebimento</strong>
            </TableCell>
        </TableRow>
    </TableHeader>
    <TableBody>
        {items.map((item) => (
            <TableRow key={item.Id} hover>
                <TableCell pad="medium">{item.RC}</TableCell>
                <TableCell pad="medium">{item.Material}</TableCell>
                <TableCell pad="medium">{item.Quantidade}</TableCell>
                <TableCell pad="medium">{item.Valor}</TableCell>
                <TableCell pad="medium">{item.Valor_NF}</TableCell>
                <TableCell pad="medium">{item.Un}</TableCell>
                <TableCell pad="medium">{item.Marca}</TableCell>
                <TableCell pad="medium">{item.Recebimento}</TableCell>
            </TableRow>
        ))}
    </TableBody>
</Table>
</CardBody>
</Card>
</Box>
</Box>
</Grommet>
);
};

export default Home;
