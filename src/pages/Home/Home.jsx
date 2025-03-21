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
        fetch(`${process.env.REACT_APP_API_URL}/api/items`)
            .then((res) => res.json())
            .then((data) => {
                setItems(data);
            })
            .catch((err) => console.error(err));
    }, []);

    const columns = [
        { property: 'Id', header: 'Id'},
        { property: 'RC', header: 'RC', primary: true, search: true },
        { property: 'Material', header: 'Material', search: true },
        { property: 'Quantidade', header: 'Qtd' },
        { property: 'Valor', header: 'Valor' },
        { property: 'Valor_NF', header: 'Valor NF' },
        { property: 'Un', header: 'Un' },
        { property: 'Marca', header: 'Marca' },
        { property: 'Recebimento', header: 'Recebimento' },
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