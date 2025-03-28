import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Grommet, Box, Heading, Form, FormField, Button, Layer, Text, DateInput } from 'grommet';
import { grommet } from 'grommet/themes';
import { SidebarTip as Sidebar } from '../../components/Sidebar/sidebar';
import { fetchItemById, updateItem, deleteItem } from '../../services/editService';
import { formatDateToBackend, formatDateToFrontend } from '../../utils/dateUtils';

const EditItem = () => {
    const { id } = useParams();
    const [item, setItem] = useState({
        RC: '',
        RCLine: '',
        SAPCode: '',
        RCValue: '',
        Material: '',
        Order: '',
        OrderValue: '',
        Un: '',
        Quantity: '',
        ShipmentDate: '',
        Requester: ''
    });
    const [showConfirm, setShowConfirm] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const loadItem = async () => {
            try {
                const data = await fetchItemById(id);
                setItem({
                    ...data,
                    ShipmentDate: formatDateToFrontend(data.ShipmentDate)
                });
            } catch (error) {
                console.error(error);
            }
        };
        loadItem();
    }, [id]);

    const handleSubmit = async () => {
        try {
            const formattedData = {
                ...item,
                ShipmentDate: item.ShipmentDate
                    ? formatDateToBackend(item.ShipmentDate) // Formata para o backend
                    : null // Envia null se a data estiver vazia
            };
            await updateItem(id, formattedData);
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
                        onChange={(nextValue) => setItem(nextValue)}
                        onSubmit={handleSubmit}
                    >
                        <Box direction="row" gap="medium" wrap>
                            <FormField name="RC" label="RC" required />
                            <FormField name="RCLine" label="Linha RC" required />
                            <FormField name="SAPCode" label="Código SAP" required />
                            <FormField name="RCValue" label="Valor RC" required />
                            <FormField name="Material" label="Material" required />
                            <FormField name="Order" label="Pedido" />
                            <FormField name="OrderValue" label="Valor Pedido" />
                            <FormField name="Un" label="Unidade" required />
                            <FormField name="Quantity" label="Quantidade" required />
                            <FormField name="Requester" label="Solicitante" required />
                            <FormField name="ShipmentDate" label="Data de Remessa" required>
                                <DateInput
                                    name="ShipmentDate"
                                    format="yyyy-MM-dd" // Use o formato ISO para consistência
                                    calendarProps={{ range: false }}
                                    value={item.ShipmentDate || ''} // Garante que o valor seja uma string
                                    onChange={({ value }) => {
                                        if (value) {
                                            const formattedDate = formatDateToFrontend(value); // Formata para dd-MM-yyyy
                                            setItem({ ...item, ShipmentDate: formattedDate });
                                        } else {
                                            setItem({ ...item, ShipmentDate: null }); // Define como null se estiver vazio
                                        }
                                    }}
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