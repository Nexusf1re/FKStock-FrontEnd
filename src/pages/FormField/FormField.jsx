import React, { useState } from 'react';
import { Grommet, Box, Heading, Form, FormField, TextInput, DateInput } from 'grommet';
import { grommet } from 'grommet/themes';
import { SidebarTip } from '../../components/Sidebar/sidebar';
import useForm from '../../hooks/useForm';
import { submitForm } from '../../services/formService';
import styles from './FormField.module.css';

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

  const handleUppercaseChange = (event) => {
    const { name, value } = event.target;
    handleChange({ ...values, [name]: value.toUpperCase() });
  };

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
        <Box pad="small" fill>
          <Heading className={styles.heading} level="2" color="#3c6aaf">Lançamento de RC</Heading>
          <Form
            className={styles.form}
            value={values}
            onChange={(nextValue) => {
              if (Array.isArray(nextValue.Recebimento)) {
                nextValue.Recebimento = nextValue.Recebimento[0];
              }
              if (typeof nextValue.Recebimento === 'string') {
                nextValue.Recebimento = nextValue.Recebimento.split('T')[0];
              }
              handleChange(nextValue);
            }}
            onSubmit={handleSubmit(onSubmit)}
          >
            <Box className={styles.box} direction="row" gap="medium">
              <Box basis="1/2" gap="small">
                <FormField
                  className={styles.formField}
                  name="RC"
                  label="RC"
                  required
                  background="light-3"
                  round="small"
                  margin={{ vertical: 'xsmall' }}
                >
                  <TextInput
                    type="number"
                    name="RC"
                    value={values.RC}
                    onChange={handleUppercaseChange}
                  />
                </FormField>
                <FormField
                  className={styles.formField}
                  name="Material"
                  label="Material"
                  required
                  background="light-3"
                  round="small"
                  margin={{ vertical: 'xsmall' }}
                >
                  <TextInput
                    name="Material"
                    value={values.Material}
                    onChange={handleUppercaseChange}
                  />
                </FormField>
                <FormField
                  className={styles.formField}
                  name="Un"
                  label="Unidade"
                  required
                  background="light-3"
                  round="small"
                  margin={{ vertical: 'xsmall' }}
                >
                  <TextInput
                    name="Un"
                    value={values.Un}
                    onChange={handleUppercaseChange}
                  />
                </FormField>
                <FormField
                  className={styles.formField}
                  name="Quantidade"
                  label="Quantidade"
                  required
                  background="light-3"
                  round="small"
                  margin={{ vertical: 'xsmall' }}
                >
                  <TextInput
                    type="number"
                    name="Quantidade"
                    value={values.Quantidade}
                    onChange={handleUppercaseChange}
                  />
                </FormField>
              </Box>

              <Box basis="1/2" gap="small">
                <FormField
                  className={styles.formField}
                  name="Valor"
                  label="Valor RC"
                  required
                  background="light-3"
                  round="small"
                  margin={{ vertical: 'xsmall' }}
                >
                  <TextInput
                    type="number"
                    name="Valor"
                    value={values.Valor}
                    onChange={handleUppercaseChange}
                  />
                </FormField>
                <FormField
                  className={styles.formField}
                  name="Valor_NF"
                  label="Valor NF"
                  required
                  background="light-3"
                  round="small"
                  margin={{ vertical: 'xsmall' }}
                >
                  <TextInput
                    type="number"
                    name="Valor_NF"
                    value={values.Valor_NF}
                    onChange={handleUppercaseChange}
                  />
                </FormField>
                <FormField
                  className={styles.formField}
                  name="Marca"
                  label="Marca"
                  required
                  background="light-3"
                  round="small"
                  margin={{ vertical: 'xsmall' }}
                >
                  <TextInput
                    name="Marca"
                    value={values.Marca}
                    onChange={handleUppercaseChange}
                  />
                </FormField>
                <FormField
                  className={styles.formField}
                  name="Recebimento"
                  label="Recebimento"
                  required
                  background="light-3"
                  round="small"
                  margin={{ vertical: 'xsmall' }}
                >
                  <DateInput
                    className={styles.formField}
                    name="Recebimento"
                    format="yyyy-mm-dd"
                    calendarProps={{ range: false }}
                    value={values.Recebimento}
                    onChange={handleUppercaseChange}
                  />
                </FormField>
              </Box>
            </Box>

            <button
              className={styles.button}
              type="submit"
              primary
              disabled={isSubmitting}>
              Salvar
            </button>
          </Form>
        </Box>
      </Box>
    </Grommet>
  );
};

export default MyForm;