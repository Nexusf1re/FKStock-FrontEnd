import React, { useEffect, useState } from 'react';
import { Grommet, Box, Heading, DataTable, Card, CardBody, CardHeader } from 'grommet';
import { grommet } from 'grommet/themes';
import { SidebarTip as Sidebar } from '../../components/Sidebar/sidebar';
import { useNavigate } from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => {
    const [items, setItems] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_API_URL}/api/items`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                if (Array.isArray(data)) {
                    setItems(data); // Certifique-se de que `data` é um array
                } else {
                    console.error('API response is not an array:', data);
                    setItems([]); // Evita passar um objeto para o DataTable
                }
            } catch (error) {
                console.error('Error fetching items:', error);
                setItems([]); // Evita erros no DataTable
            }
        };
    
        fetchItems();
    }, []);

    const formatCurrency = (value) => {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        }).format(value);
    };

    const columns = [
        { property: 'Id', header: 'Id' },
        { property: 'RC', header: 'RC', primary: true, search: true },
        { property: 'RCLine', header: 'Linha RC' },
        { property: 'SAPCode', header: 'Código SAP' },
        { property: 'RCValue', header: 'Valor RC', render: (datum) => formatCurrency(datum.RCValue) },
        { property: 'Material', header: 'Material', search: true },
        { property: 'Order', header: 'Pedido' },
        { property: 'OrderValue', header: 'Valor Pedido', render: (datum) => formatCurrency(datum.OrderValue) },
        { property: 'Un', header: 'Unidade' },
        { property: 'Quantity', header: 'Quantidade' },
        { property: 'Requester', header: 'Solicitante' },
        { property: 'ShipmentDate', header: 'Data Remessa' },
    ];

    const handleRowClick = (event) => {
        const id = event.datum.Id;
        navigate(`/edit/${id}`);
    };

    return (
        <Grommet theme={grommet} full>
            <Box direction="row" fill>
                <Sidebar />
                <Box pad="medium" background="light-2" fill>
                    <Heading level="2" margin="0px 0px 0px 4px" color="#3c6aaf">
                        Dados
                    </Heading>
                    <Card background="white" margin={{ top: 'small' }} elevation="small" round="small" fill>
                        <CardHeader pad="medium" background="#3c6aaf">
                            <Heading level="3" margin="none" color="white">
                                Stocks | Fresenius Kabi - PU ANÁPOLIS
                            </Heading>
                        </CardHeader>
                        <CardBody className={styles.tableCard} pad="medium" fill>
                            <Box className={styles.tableContainer}>
                                <DataTable
                                    columns={columns}
                                    data={items}
                                    sortable
                                    resizeable
                                    onClickRow={handleRowClick}
                                    primaryKey="Id"
                                />
                            </Box>
                        </CardBody>
                    </Card>
                </Box>
            </Box>
        </Grommet>
    );
};

export default Home;