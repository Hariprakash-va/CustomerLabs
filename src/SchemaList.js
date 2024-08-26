import React, { useState, useEffect } from "react";

const schemaOptions = [
  { label: "First Name", value: "first_name" },
  { label: "Last Name", value: "last_name" },
  { label: "Gender", value: "gender" },
  { label: "Age", value: "age" },
  { label: "Account Name", value: "account_name" },
  { label: "City", value: "city" },
  { label: "State", value: "state" },
];

function SchemaList({ schemas, setSchemas }) {
  const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    if (
      selectedOption &&
      !getAvailableOptions([...schemas, selectedOption]).find(
        (option) => option.value === selectedOption
      )
    ) {
      setSelectedOption("");
    }
  }, [schemas]);

  const handleAddSchema = () => {
    if (selectedOption && !schemas.includes(selectedOption)) {
      setSchemas([...schemas, selectedOption]);
      setSelectedOption("");
    }
  };

  const handleDropdownChange = (index, value) => {
    const updatedSchemas = [...schemas];
    updatedSchemas[index] = value;
    setSchemas(updatedSchemas);
  };

  const handleRemoveSchema = (index) => {
    const updatedSchemas = schemas.filter((_, i) => i !== index);
    setSchemas(updatedSchemas);
  };

  const getAvailableOptions = (excludeValues = []) => {
    const excludedValues = new Set(excludeValues);
    return schemaOptions.filter((option) => !excludedValues.has(option.value));
  };

  return (
    <div className="schema-list">
      {schemas.map((schema, index) => {
        const availableOptions = getAvailableOptions(
          schemas.filter((_, i) => i !== index)
        );

        return (
          <div key={index} className="schema-item">
            <select
              value={schema}
              onChange={(e) => handleDropdownChange(index, e.target.value)}
            >
              {availableOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <button onClick={() => handleRemoveSchema(index)}>Remove</button>
          </div>
        );
      })}
      <select
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
      >
        <option value="">Select schema</option>
        {getAvailableOptions(schemas).map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <button onClick={handleAddSchema}>+Add new schema</button>
    </div>
  );
}

export default SchemaList;
