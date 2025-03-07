import React, { useState } from 'react';
import {
    Grommet, Box, Heading, Form, FormField, TextInput, Button, DateInput
} from 'grommet';
import { grommet } from 'grommet/themes';
import { SidebarTip } from '../../components/Sidebar/sidebar';

const MyForm = () => {
    const [value, setValue] = useState({});

    return (
        <Grommet theme={grommet} full>
            <Box direction="row" fill>
                <SidebarTip />
                <Box pad="medium" width="large">
                    <Heading level="2" color="#3c6aaf">Lançamento de RC</Heading>
                    <Form
                        value={value}
                        onChange={nextValue => setValue(nextValue)}
                        onSubmit={({ value }) => console.log(value)}
                    >
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
                                <DateInput name="data" format="yyyy-mm-dd" />
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