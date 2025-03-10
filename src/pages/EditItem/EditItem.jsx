import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Grommet, Box, Heading, Form, FormField, Button } from 'grommet';
import { grommet } from 'grommet/themes';
import { SidebarTip as Sidebar } from '../../components/Sidebar/sidebar';

const EditItem = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/api/items/${id}`)
            .then((res) => res.json())
            .then((data) => setItem(data))
            .catch((err) => console.error(err));
    }, [id]);

    const handleSubmit = (updatedItem) => {
        fetch(`${process.env.REACT_APP_API_URL}/api/items/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedItem),
        })
            .then(() => navigate('/'))
            .catch((err) => console.error(err));
    };

    const handleDelete = () => {
        fetch(`${process.env.REACT_APP_API_URL}/api/items/${id}`, { method: 'DELETE' })
            .then(() => navigate('/'))
            .catch((err) => console.error(err));
    };

    if (!item) return <div>Loading...</div>;

    return (
        <Grommet theme={grommet} full>
            <Box direction="row" fill>
                <Sidebar />
                <Box pad="medium" background="light-2" fill>
                    <Heading level="2" margin="none" color="#3c6aaf">
                        Editar Item
                    </Heading>
                    <Form value={item} onChange={setItem} onSubmit={({ value }) => handleSubmit(value)}>
                        <Box direction="row" gap="medium" wrap>
                            <FormField name="RC" label="RC" required />
                            <FormField name="Material" label="Material" required />
                            <FormField name="Quantidade" label="Quantidade" />
                            <FormField name="Valor" label="Valor" required />
                            <FormField name="Valor_NF" label="Valor NF" />
                            <FormField name="Un" label="Un" required />
                            <FormField name="Marca" label="Marca" required />
                            <FormField name="Recebimento" label="Recebimento" />
                        </Box>
                        <Box direction="row" gap="medium" margin={{ top: 'medium' }}>
                            <Button type="submit" primary label="Salvar" />
                            <Button type="button" label="Excluir" onClick={handleDelete} />
                        </Box>
                    </Form>
                </Box>
            </Box>
        </Grommet>
    );
};

export default EditItem;
