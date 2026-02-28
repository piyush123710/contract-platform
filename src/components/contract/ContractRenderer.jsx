
import { useContext } from "react";
import { ContractContext } from "../../context/ContractContext";

function ContractRenderer({ contract }) {
  const { dispatch } = useContext(ContractContext);

  const isLocked =
    contract.status === "Locked" ||
    contract.status === "Revoked";

  const updateValue = (fieldId, value) => {
    dispatch({
      type: "UPDATE_VALUES",
      payload: {
        id: contract.id,
        values: {
          ...contract.values,
          [fieldId]: value,
        },
      },
    });
  };

  return (
    <div className="space-y-4">
      {contract.fields.map((field) => (
        <div key={field.id}>
          <label className="block mb-1">
            {field.label}
          </label>

          {field.type === "text" && (
            <input
              disabled={isLocked}
              className="border p-2 w-full"
              onChange={(e) =>
                updateValue(field.id, e.target.value)
              }
            />
          )}

          {field.type === "date" && (
            <input
              type="date"
              disabled={isLocked}
              className="border p-2 w-full"
              onChange={(e) =>
                updateValue(field.id, e.target.value)
              }
            />
          )}

          {field.type === "checkbox" && (
            <input
              type="checkbox"
              disabled={isLocked}
              onChange={(e) =>
                updateValue(field.id, e.target.checked)
              }
            />
          )}

          {field.type === "signature" && (
            <input
              disabled={isLocked}
              className="border p-2 w-full"
              placeholder="Type signature"
              onChange={(e) =>
                updateValue(field.id, e.target.value)
              }
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default ContractRenderer;
