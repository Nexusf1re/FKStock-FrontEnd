import React from 'react';
import { Grommet, Box, Heading, Table, TableBody, TableCell, TableHeader, TableRow, Card, CardBody, CardHeader } from 'grommet';
import { grommet } from 'grommet/themes';
import { SidebarTip as Sidebar } from '../../components/Sidebar/sidebar';

const tableData = {
headers: ['RC', 'Material', 'Marca', 'Un', 'Valor'],
rows: [
{
rc: '125468',
material: 'Betametasona',
marca: 'NA',
un: 'Pct',
valor: 'R$200,00'
},
{
rc: '1254625',
material: 'Celulose',
marca: 'NA',
un: 'Pct',
valor: 'R$1.500,00'
},
{
rc: '689872',
material: 'Luva Estéril',
marca: 'NA',
un: 'Pct',
valor: 'R$3.000,00'
}
]
};

const Home = () => { 
return (
<Grommet theme={grommet} full>
<Box direction="row" fill >
<Sidebar />
<Box pad="medium"   background="light-2" fill>
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
<TableRow>
{tableData.headers.map((header, index) => (
    <TableCell key={index} scope="col" border="bottom" background="light-1" pad="medium">
        <strong>{header}</strong>
    </TableCell>
))}
</TableRow>
</TableHeader>
<TableBody>
{tableData.rows.map((row, index) => (
<TableRow key={index} hover>
    <TableCell pad="medium">{row.rc}</TableCell>
    <TableCell pad="medium">{row.material}</TableCell>
    <TableCell pad="medium">{row.marca}</TableCell>
    <TableCell pad="medium">{row.un}</TableCell>
    <TableCell pad="medium">{row.valor}</TableCell>
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
}   

export default Home;