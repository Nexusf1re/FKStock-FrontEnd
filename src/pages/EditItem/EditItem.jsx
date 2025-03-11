import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Grommet, Box, Heading, Form, FormField, Button, Layer, Text, DateInput } from 'grommet';
import { grommet } from 'grommet/themes';
import { SidebarTip as Sidebar } from '../../components/Sidebar/sidebar';

const EditItem = () => {
    const { id } = useParams();
    const [item, setItem] = useState({
        RC: '',
        Material: '',
        Quantidade: '',
        Valor: '',
        Valor_NF: '',
        Un: '',
        Marca: '',
        Recebimento: ''
    });
    const [showConfirm, setShowConfirm] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/api/items/${id}`)
            .then((res) => res.json())
            .then((data) => setItem({
                RC: data.RC || '',
                Material: data.Material || '',
                Quantidade: data.Quantidade || '',
                Valor: data.Valor || '',
                Valor_NF: data.Valor_NF || '',
                Un: data.Un || '',
                Marca: data.Marca || '',
                Recebimento: data.Recebimento ? new Date(data.Recebimento).toISOString().split('T')[0] : ''
            }))
            .catch((err) => console.error(err));
    }, [id]);

    const handleSubmit = (updatedItem) => {
        // Convert Recebimento to a date format that PostgreSQL can accept
        const formattedItem = {
            ...updatedItem,
            Recebimento: updatedItem.Recebimento ? new Date(updatedItem.Recebimento).toISOString().split('T')[0] : null
        };

        console.log('Updating item:', formattedItem); // Log para depuração
        fetch(`${process.env.REACT_APP_API_URL}/api/items/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formattedItem),
        })
            .then((res) => {
                if (res.ok) {
                    console.log('Update successful');
                    navigate('/');
                } else {
                    console.error('Update failed');
                }
            })
            .catch((err) => console.error('Error:', err));
    };

    const handleDelete = () => {
        fetch(`${process.env.REACT_APP_API_URL}/api/items/${id}`, { method: 'DELETE' })
            .then((res) => {
                if (res.ok) {
                    console.log('Delete successful');
                    navigate('/');
                } else {
                    console.error('Delete failed');
                }
            })
            .catch((err) => console.error('Error:', err));
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
                            <FormField name="Recebimento" label="Recebimento" required>
                                <DateInput
                                    format="dd-mm-yyyy"
                                    name="Recebimento"
                                    value={item.Recebimento}
                                    onChange={({ value }) => setItem({ ...item, Recebimento: value })}
                                />
                            </FormField>
                        </Box>
                        <Box direction="row" gap="medium" margin={{ top: 'medium' }}>
                            <Button type="submit" primary label="Salvar" />
                            <Button type="button" label="Excluir" onClick={() => setShowConfirm(true)} />
                        </Box>
                    </Form>
                </Box>
            </Box>
            {showConfirm && (
                <Layer
                    onEsc={() => setShowConfirm(false)}
                    onClickOutside={() => setShowConfirm(false)}
                >
                    <Box pad="medium" gap="small" width="medium">
                        <Heading level={3} margin="none">
                            Confirmação
                        </Heading>
                        <Text>Tem certeza que deseja excluir este item?</Text>
                        <Box direction="row" gap="medium" justify="end" margin={{ top: 'medium' }}>
                            <Button label="Cancelar" onClick={() => setShowConfirm(false)} />
                            <Button label="Excluir" onClick={handleDelete} primary color="status-critical" />
                        </Box>
                    </Box>
                </Layer>
            )}
        </Grommet>
    );
};

export default EditItem;