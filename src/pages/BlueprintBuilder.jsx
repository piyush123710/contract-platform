import { useState, useContext } from "react";
import { BlueprintContext } from "../context/BlueprintContext";
import FieldEditor from "../components/blueprint/FieldEditor";
import BlueprintCanvas from "../components/blueprint/BlueprintCanvas";
import { v4 as uuid } from "uuid";

function BlueprintBuilder() {
  const { dispatch } = useContext(BlueprintContext);

  const [blueprintName, setBlueprintName] = useState("");
  const [fields, setFields] = useState([]);

  const handleAddField = () => {
    const newField = {
      id: uuid(),
      type: "text",
      label: "",
      x: 50,
      y: 50,
    };

    setFields([...fields, newField]);
  };

  const updateField = (id, key, value) => {
    const updatedFields = fields.map((field) =>
      field.id === id ? { ...field, [key]: value } : field
    );

    setFields(updatedFields);
  };

  const handleSaveBlueprint = () => {
    if (!blueprintName) {
      alert("Please enter blueprint name");
      return;
    }

    const newBlueprint = {
      id: uuid(),
      name: blueprintName,
      fields: fields,
    };

    dispatch({
      type: "ADD_BLUEPRINT",
      payload: newBlueprint,
    });

    alert("Blueprint Saved Successfully!");

    setBlueprintName("");
    setFields([]);
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">
        Blueprint Builder
      </h1>

      <input
        type="text"
        placeholder="Blueprint Name"
        value={blueprintName}
        onChange={(e) => setBlueprintName(e.target.value)}
        className="border p-3 w-full mb-4 rounded"
      />

      <button
        onClick={handleAddField}
        className="bg-blue-600 text-white px-4 py-2 rounded mb-6"
      >
        Add Field
      </button>

      {fields.map((field) => (
        <FieldEditor
          key={field.id}
          field={field}
          updateField={updateField}
        />
      ))}

      {fields.length > 0 && (
        <>
          <h2 className="text-lg font-semibold mt-6 mb-2">
            Blueprint Preview
          </h2>
          <BlueprintCanvas fields={fields} />
        </>
      )}

      <button
        onClick={handleSaveBlueprint}
        className="bg-green-600 text-white px-6 py-2 rounded mt-6"
      >
        Save Blueprint
      </button>

    </div>
  );
}

export default BlueprintBuilder;
