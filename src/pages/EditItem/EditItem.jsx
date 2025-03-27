import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Grommet, Box, Heading, Form, FormField, Button, Layer, Text, DateInput } from 'grommet';
import { grommet } from 'grommet/themes';
import { SidebarTip as Sidebar } from '../../components/Sidebar/sidebar';
import { fetchItemById, updateItem, deleteItem } from '../../services/editService';

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
        const loadItem = async () => {
            try {
                const data = await fetchItemById(id);
                setItem({
                    RC: data.RC || '',
                    Material: data.Material || '',
                    Quantidade: data.Quantidade || '',
                    Valor: data.Valor || '',
                    Valor_NF: data.Valor_NF || '',
                    Un: data.Un || '',
                    Marca: data.Marca || '',
                    Recebimento: data.Recebimento || ''
                });
            } catch (error) {
                console.error(error);
            }
        };
        loadItem();
    }, [id]);

    const handleSubmit = async () => {
        try {
            await updateItem(id, item);
            navigate('/');
        } catch (error) {
            console.error('Error updating item:', error);
        }
    };

    const handleDelete = async () => {
        try {
            await deleteItem(id);
            navigate('/');
        } catch (error) {
            console.error('Error deleting item:', error);
        }
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
                    <Form
                        value={item}
                        onChange={(nextValue) => {
                            // If Recebimento ends up as an array, use the first item
                            if (Array.isArray(nextValue.Recebimento)) {
                                nextValue.Recebimento = nextValue.Recebimento[0];
                            }
                            // Convert "2025-03-13T03:00:00.000Z" to just "2025-03-13"
                            if (typeof nextValue.Recebimento === 'string') {
                                nextValue.Recebimento = nextValue.Recebimento.split('T')[0];
                            }
                            setItem(nextValue);
                        }}
                        onSubmit={({ value }) => handleSubmit(value)}
                    >
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
                                    name="Recebimento"
                                    format="yyyy-mm-dd"
                                    calendarProps={{ range: false }}
                                    value={item.Recebimento}
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