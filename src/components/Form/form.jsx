// filepath: c:\Users\msabreu\VsCode\FK Stock\FKStock-FrontEnd\src\components\Form\form.jsx
import React from 'react';
import { Form, FormField, TextInput, Button, Box } from 'grommet';
import { useForm } from '../../hooks/useForm';
import { submitForm } from '../../services/formService';

const MyForm = () => {
    const { value, setValue } = useForm();

    const handleSubmit = async (event) => {
        event.preventDefault();
        await submitForm(value);
        console.log(value);
    };

    return (
        <Form value={value} onChange={setValue} onSubmit={handleSubmit}>
            <Box direction="row" gap="medium">
                <FormField name="rc" label="RC" required>
                    <TextInput type="number" name="rc" />
                </FormField>
                <FormField name="material" label="Material" required>
                    <TextInput name="material" />
                </FormField>
            </Box>
            <Box direction="row" gap="medium">
                <FormField name="marca" label="Marca" required>
                    <TextInput name="marca" />
                </FormField>
                <FormField name="un" label="Un" required>
                    <TextInput name="un" />
                </FormField>
            </Box>
            <Box direction="row" gap="medium">
                <FormField name="valor" label="Valor" required>
                    <TextInput type="number" name="valor" />
                </FormField>
                <FormField name="quantidade" label="Quantidade" required>
                    <TextInput type="number" name="quantidade" />
                </FormField>
            </Box>
            <Box direction="row" gap="medium">
                <FormField name="data" label="Data" required>
                    <TextInput type="date" name="data" />
                </FormField>
            </Box>
            <Box direction="row" margin={{ top: 'medium' }}>
                <Button type="submit" primary label="Salvar" />
            </Box>
        </Form>
    );
};

export default MyForm;