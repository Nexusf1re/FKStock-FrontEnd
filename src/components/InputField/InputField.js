import React from "react";
import { FormField, TextInput } from "grommet";
import PropTypes from "prop-types";

const InputField = ({ label, name, value, onChange, placeholder, error, type }) => {
  return (
    <FormField label={label} error={error} name={name}>
      <TextInput
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
      />
    </FormField>
  );
};

InputField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  type: PropTypes.string,
};

InputField.defaultProps = {
  label: "",
  placeholder: "",
  error: "",
  type: "text",
};

export default InputField;