import React from 'react';
import { Grommet, Box, Heading, Form, FormField, TextInput, Button, DateInput } from 'grommet';
import { grommet } from 'grommet/themes';
import { SidebarTip } from '../../components/Sidebar/sidebar';
import useForm from '../../hooks/useForm';
import { submitForm } from '../../services/formService';

const MyForm = () => {
    const { values, handleChange, handleSubmit } = useForm({
        RC: '',
        Material: '',
        Marca: '',
        Un: '',
        Valor: '',
        Quantidade: '',
        Valor_NF: '',
        Recebimento: ''
    });

    const onSubmit = async (formData) => {
        await submitForm(formData);
    };

    return (
        <Grommet theme={grommet} full>
            <Box direction="row" fill>
                <SidebarTip />
                <Box pad="medium" width="large">
                    <Heading level="2" color="#3c6aaf">Lançamento de RC</Heading>
                    {/* Let the Form control all fields using "value" and "onChange" itself */}
                    <Form
                        value={values}
                        onChange={(nextValue) => {
                            // If Recebimento ends up as an array, use the first item
                            if (Array.isArray(nextValue.Recebimento)) {
                                nextValue.Recebimento = nextValue.Recebimento[0];
                            }
                            // Convert "2025-03-13T03:00:00.000Z" to just "2025-03-13"
                            if (typeof nextValue.Recebimento === 'string') {
                                nextValue.Recebimento = nextValue.Recebimento.split('T')[0];
                            }
                            handleChange(nextValue);
                        }}
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <Box direction="row" gap="medium">
                            <FormField name="RC" label="RC" required>
                                <TextInput type="number" name="RC" />
                            </FormField>
                            <FormField name="Material" label="Material" required>
                                <TextInput name="Material" />
                            </FormField>
                        </Box>
                        <Box direction="row" gap="medium">
                            <FormField name="Marca" label="Marca" required>
                                <TextInput name="Marca" />
                            </FormField>
                            <FormField name="Un" label="Un" required>
                                <TextInput name="Un" />
                            </FormField>
                        </Box>
                        <Box direction="row" gap="medium">
                            <FormField name="Valor" label="Valor" required>
                                <TextInput type="number" name="Valor" />
                            </FormField>
                            <FormField name="Quantidade" label="Quantidade" required>
                                <TextInput type="number" name="Quantidade" />
                            </FormField>
                        </Box>
                        <Box direction="row" gap="medium">
                            <FormField name="Valor_NF" label="Valor NF" required>
                                <TextInput type="number" name="Valor_NF" />
                            </FormField>
                            <FormField name="Recebimento" label="Recebimento" required>
                                <DateInput
                                    name="Recebimento"
                                    format="yyyy-mm-dd"
                                    calendarProps={{ range: false }}
                                />
                            </FormField>
                        </Box>
                        <Box direction="row" margin={{ top: 'medium' }}>
                            <Button type="submit" primary label="Salvar" />
                        </Box>
                    </Form>
                </Box>
            </Box>
        </Grommet>
    );
};

export default MyForm;