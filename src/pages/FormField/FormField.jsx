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
    RCLine: '',
    SAPCode: '',
    RCValue: '',
    Material: '',
    Order: '',
    OrderValue: '',
    Un: '',
    Quantity: '',
    ReceiptDate: '',
    Requester: ''
  });

  const handleUppercaseChange = (event) => {
    const { name, value } = event.target;
    handleChange({ ...values, [name]: value.toUpperCase() });
  };

  const onSubmit = async (formData) => {
    setIsSubmitting(true);
    await submitForm(formData);

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

  const formFields = [
    { name: 'RC', label: 'RC', type: 'number', required: true },
    { name: 'Material', label: 'Material', type: 'text', required: true },
    { name: 'Un', label: 'Unidade', type: 'text', required: true },
    { name: 'Quantidade', label: 'Quantidade', type: 'number', required: true },
    { name: 'Valor', label: 'Valor RC', type: 'number', required: true },
    { name: 'Valor_NF', label: 'Valor NF', type: 'number', required: true },
    { name: 'Marca', label: 'Marca', type: 'text', required: true },
    { name: 'Recebimento', label: 'Recebimento', type: 'date', required: true },
    { name: 'RCLine', label: 'Linha RC', type: 'text', required: true },
    { name: 'SAPCode', label: 'Código SAP', type: 'text', required: true },
    { name: 'RCValue', label: 'Valor RC', type: 'number', required: true },
    { name: 'Order', label: 'Pedido', type: 'text', required: false },
    { name: 'OrderValue', label: 'Valor Pedido', type: 'number', required: false },
    { name: 'Requester', label: 'Solicitante', type: 'text', required: true }
  ];

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
            <Box className={styles.box}>
              <Box className={styles.column}>
                {formFields.slice(0, Math.ceil(formFields.length / 2)).map((field, index) => (
                  <FormField
                    key={index}
                    className={styles.formField}
                    name={field.name}
                    label={field.label}
                    required={field.required}
                    background="light-3"
                    round="small"
                    margin={{ vertical: 'xsmall' }}
                  >
                    {field.type === 'date' ? (
                      <DateInput
                        className={styles.formField}
                        name={field.name}
                        format="yyyy-mm-dd"
                        calendarProps={{ range: false }}
                        value={values[field.name]}
                        onChange={handleUppercaseChange}
                      />
                    ) : (
                      <TextInput
                        type={field.type}
                        name={field.name}
                        value={values[field.name]}
                        onChange={handleUppercaseChange}
                      />
                    )}
                  </FormField>
                ))}
              </Box>
              <Box className={styles.column}>
                {formFields.slice(Math.ceil(formFields.length / 2)).map((field, index) => (
                  <FormField
                    key={index}
                    className={styles.formField}
                    name={field.name}
                    label={field.label}
                    required={field.required}
                    background="light-3"
                    round="small"
                    margin={{ vertical: 'xsmall' }}
                  >
                    {field.type === 'date' ? (
                      <DateInput
                        className={styles.formField}
                        name={field.name}
                        format="yyyy-mm-dd"
                        calendarProps={{ range: false }}
                        value={values[field.name]}
                        onChange={handleUppercaseChange}
                      />
                    ) : (
                      <TextInput
                        type={field.type}
                        name={field.name}
                        value={values[field.name]}
                        onChange={handleUppercaseChange}
                      />
                    )}
                  </FormField>
                ))}
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