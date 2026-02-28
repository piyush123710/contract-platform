
import { useState, useContext } from "react";
import { BlueprintContext } from "../context/BlueprintContext";
import FieldEditor from "../components/blueprint/FieldEditor";
import BlueprintCanvas from "../components/blueprint/BlueprintCanvas";
import { v4 as uuid } from "uuid";

function BlueprintBuilder() {
  const { dispatch } = useContext(BlueprintContext);

  const [name, setName] = useState("");
  const [fields, setFields] = useState([]);

  const addField = () => {
    setFields([
      ...fields,
      { id: uuid(), type: "text", label: "", x: 50, y: 50 },
    ]);
  };

  const updateField = (id, key, value) => {
    setFields(
      fields.map((field) =>
        field.id === id ? { ...field, [key]: value } : field
      )
    );
  };

  const saveBlueprint = () => {
    dispatch({
      type: "ADD_BLUEPRINT",
      payload: { id: uuid(), name, fields },
    });
    alert("Blueprint Saved!");
  };

  return (
    <div className="p-8">
      <h1 className="text-xl font-bold mb-4">
        Blueprint Builder
      </h1>

      <input
        className="border p-2 w-full mb-4"
        placeholder="Blueprint Name"
        onChange={(e) => setName(e.target.value)}
      />

      <button
        onClick={addField}
        className="bg-blue-600 text-white px-4 py-2 mb-4"
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

      <BlueprintCanvas fields={fields} />

      <button
        onClick={saveBlueprint}
        className="bg-green-600 text-white px-6 py-2 mt-4"
      >
        Save Blueprint
      </button>
    </div>
  );
}

export default BlueprintBuilder;
