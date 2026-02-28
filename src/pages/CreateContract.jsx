
import { useContext, useState } from "react";
import { BlueprintContext } from "../context/BlueprintContext";
import { ContractContext } from "../context/ContractContext";
import { STATUS } from "../utils/lifecycle";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";

function CreateContract() {
  const { blueprints } = useContext(BlueprintContext);
  const { dispatch } = useContext(ContractContext);
  const navigate = useNavigate();

  const [selectedBlueprint, setSelectedBlueprint] = useState("");

  const handleGenerateContract = () => {
    if (!selectedBlueprint) {
      alert("Please select a blueprint");
      return;
    }

    const blueprint = blueprints.find(
      (bp) => bp.id === selectedBlueprint
    );

    if (!blueprint) return;

    const newContract = {
      id: uuid(),
      name: blueprint.name,
      blueprintName: blueprint.name,
      fields: blueprint.fields,
      values: {},
      status: STATUS.CREATED,
      createdAt: new Date().toISOString(),
    };

    dispatch({
      type: "ADD_CONTRACT",
      payload: newContract,
    });

    alert("Contract Created Successfully!");

    navigate("/");
  };

  return (
    <div className="p-8 max-w-2xl mx-auto">
      
      {/* Heading */}
      <h1 className="text-2xl font-bold mb-6">
        Create Contract
      </h1>

      {/* Select Blueprint */}
      <select
        value={selectedBlueprint}
        onChange={(e) => setSelectedBlueprint(e.target.value)}
        className="border p-3 w-full mb-6 rounded"
      >
        <option value="">Select Blueprint</option>

        {blueprints.map((bp) => (
          <option key={bp.id} value={bp.id}>
            {bp.name}
          </option>
        ))}
      </select>

      {/* Generate Button */}
      <button
        onClick={handleGenerateContract}
        className="bg-blue-600 text-white px-6 py-2 rounded w-full"
      >
        Generate Contract
      </button>

    </div>
  );
}

export default CreateContract;
