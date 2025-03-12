import React, { useState } from 'react';
import { Grommet, Box, Heading, Form, FormField, TextInput, Button, DateInput } from 'grommet';
import { grommet } from 'grommet/themes';
import { SidebarTip } from '../../components/Sidebar/sidebar';
import useForm from '../../hooks/useForm';
import { submitForm } from '../../services/formService';

const MyForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
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
    setIsSubmitting(true);
    await submitForm(formData);

    // Limpar os campos após envio
    handleChange({
      RC: '',
      Material: '',
      Marca: '',
      Un: '',
      Valor: '',
      Quantidade: '',
      Valor_NF: '',
      Recebimento: ''
    });

    setIsSubmitting(false);
  };

  return (
    <Grommet theme={grommet} full>
      <Box direction="row" fill>
        <SidebarTip />
        <Box pad="medium" fill>
          <Heading level="2" color="#3c6aaf">Lançamento de RC</Heading>
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
              <Box basis="1/2" gap="small">
                <FormField
                  name="RC"
                  label="RC"
                  required
                  background="light-1"
                  round="small"
                  margin={{ vertical: 'small' }}
                >
                  <TextInput type="number" name="RC" />
                </FormField>
                <FormField
                  name="Material"
                  label="Material"
                  required
                  background="light-1"
                  round="small"
                  margin={{ vertical: 'small' }}
                >
                  <TextInput name="Material" />
                </FormField>
                <FormField
                  name="Marca"
                  label="Marca"
                  required
                  background="light-1"
                  round="small"
                  margin={{ vertical: 'small' }}
                >
                  <TextInput name="Marca" />
                </FormField>
                <FormField
                  name="Un"
                  label="Un"
                  required
                  background="light-1"
                  round="small"
                  margin={{ vertical: 'small' }}
                >
                  <TextInput name="Un" />
                </FormField>
              </Box>
              <Box basis="1/2" gap="small">
                <FormField
                  name="Valor"
                  label="Valor"
                  required
                  background="light-1"
                  round="small"
                  margin={{ vertical: 'small' }}
                >
                  <TextInput type="number" name="Valor" />
                </FormField>
                <FormField
                  name="Quantidade"
                  label="Quantidade"
                  required
                  background="light-1"
                  round="small"
                  margin={{ vertical: 'small' }}
                >
                  <TextInput type="number" name="Quantidade" />
                </FormField>
                <FormField
                  name="Valor_NF"
                  label="Valor NF"
                  required
                  background="light-1"
                  round="small"
                  margin={{ vertical: 'small' }}
                >
                  <TextInput type="number" name="Valor_NF" />
                </FormField>
                <FormField
                  name="Recebimento"
                  label="Recebimento"
                  required
                  background="light-1"
                  round="small"
                  margin={{ vertical: 'small' }}
                >
                  <DateInput
                    name="Recebimento"
                    format="yyyy-mm-dd"
                    calendarProps={{ range: false }}
                  />
                </FormField>
              </Box>
            </Box>
            <Box margin={{ top: 'medium' }}>
              <Button
                type="submit"
                primary
                label={isSubmitting ? 'Salvando...' : 'Salvar'}
                disabled={isSubmitting}
              />
            </Box>
          </Form>
        </Box>
      </Box>
    </Grommet>
  );
};

export default MyForm;