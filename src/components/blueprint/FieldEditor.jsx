function FieldEditor({ field, updateField }) {
  return (
    <div className="border p-4 mb-4 bg-white rounded">
      <select
        value={field.type}
        onChange={(e) =>
          updateField(field.id, "type", e.target.value)
        }
        className="border p-2 mr-2"
      >
        <option value="text">Text</option>
        <option value="date">Date</option>
        <option value="signature">Signature</option>
        <option value="checkbox">Checkbox</option>
      </select>

      <input
        value={field.label}
        placeholder="Label"
        onChange={(e) =>
          updateField(field.id, "label", e.target.value)
        }
        className="border p-2 mr-2"
      />

      <input
        type="number"
        value={field.x}
        onChange={(e) =>
          updateField(field.id, "x", e.target.value)
        }
        className="border p-2 w-20 mr-2"
      />

      <input
        type="number"
        value={field.y}
        onChange={(e) =>
          updateField(field.id, "y", e.target.value)
        }
        className="border p-2 w-20"
      />
    </div>
  );
}

export default FieldEditor;
