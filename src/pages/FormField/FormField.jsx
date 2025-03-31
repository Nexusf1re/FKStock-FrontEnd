import React, { useState } from 'react';
import { Grommet, Box, Heading, Form, FormField, TextInput, DateInput, Button } from 'grommet';
import { grommet } from 'grommet/themes';
import { useNavigate } from 'react-router-dom';
import { SidebarTip } from '../../components/Sidebar/sidebar';
import useForm from '../../hooks/useForm';
import { submitForm } from '../../services/formService';
import { formatDateToBackend } from '../../utils/dateUtils';
import styles from './FormField.module.css';

const MyForm = () => {
  const navigate = useNavigate();
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
    ShipmentDate: '',
    Requester: ''
  });

  const onSubmit = async (formData) => {
    setIsSubmitting(true);

    // Verificar e formatar a data antes de enviar ao backend
    const formattedData = {
      ...formData,
      ShipmentDate: formData.ShipmentDate
        ? formatDateToBackend(formData.ShipmentDate) // Formata para yyyy-MM-dd
        : undefined // Exclui ShipmentDate se estiver vazio ou inválido
    };

    try {
      await submitForm(formattedData);
      navigate('/');
    } catch (error) {
      console.error('Error creating item:', error);
    } finally {
      setIsSubmitting(false);
    }
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
              // If Recebimento ends up as an array, use the first item
              if (Array.isArray(nextValue.ShipmentDate)) {
                nextValue.ShipmentDate = nextValue.ShipmentDate[0];
              }
              // Convert "2025-03-13T03:00:00.000Z" to just "2025-03-13"
              if (typeof nextValue.ShipmentDate === 'string') {
                nextValue.ShipmentDate = nextValue.ShipmentDate.split('T')[0];
              }
              handleChange(nextValue);
            }}
            onSubmit={handleSubmit(onSubmit)}
          >
            <Box direction="row" gap="medium" wrap>
              <FormField name="RC" label="RC" required>
                <TextInput name="RC" value={values.RC} onChange={(e) => handleChange({ ...values, RC: e.target.value })} />
              </FormField>
              <FormField name="RCLine" label="Linha RC" required>
                <TextInput name="RCLine" value={values.RCLine} onChange={(e) => handleChange({ ...values, RCLine: e.target.value })} />
              </FormField>
              <FormField name="SAPCode" label="Código SAP" required>
                <TextInput name="SAPCode" value={values.SAPCode} onChange={(e) => handleChange({ ...values, SAPCode: e.target.value })} />
              </FormField>
              <FormField name="RCValue" label="Valor RC" required>
                <TextInput name="RCValue" type="number" value={values.RCValue} onChange={(e) => handleChange({ ...values, RCValue: e.target.value })} />
              </FormField>
              <FormField name="Material" label="Material" required>
                <TextInput name="Material" value={values.Material} onChange={(e) => handleChange({ ...values, Material: e.target.value })} />
              </FormField>
              <FormField name="Order" label="Pedido">
                <TextInput name="Order" value={values.Order} onChange={(e) => handleChange({ ...values, Order: e.target.value })} />
              </FormField>
              <FormField name="OrderValue" label="Valor Pedido">
                <TextInput name="OrderValue" type="number" value={values.OrderValue} onChange={(e) => handleChange({ ...values, OrderValue: e.target.value })} />
              </FormField>
              <FormField name="Un" label="Unidade" required>
                <TextInput name="Un" value={values.Un} onChange={(e) => handleChange({ ...values, Un: e.target.value })} />
              </FormField>
              <FormField name="Quantity" label="Quantidade" required>
                <TextInput name="Quantity" type="number" value={values.Quantity} onChange={(e) => handleChange({ ...values, Quantity: e.target.value })} />
              </FormField>
              <FormField name="Requester" label="Solicitante" required>
                <TextInput name="Requester" value={values.Requester} onChange={(e) => handleChange({ ...values, Requester: e.target.value })} />
              </FormField>
              <FormField name="ShipmentDate" label="Data de Remessa" required>
              <DateInput
                    className={styles.formField}
                    name="ShipmentDate"
                    format="dd-mm-yyyy"
                    calendarProps={{ locale: 'pt-BR', range: false }}
                    />
              </FormField>
            </Box>
            <Box direction="row" gap="medium" margin={{ top: 'medium' }}>
              <Button
                className={styles.button}
                type="submit"
                primary
                label="Salvar"
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