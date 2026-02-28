
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
  const [selected, setSelected] = useState("");

  const createContract = () => {
    const blueprint = blueprints.find(
      (b) => b.id === selected
    );

    if (!blueprint) return;

    dispatch({
      type: "ADD_CONTRACT",
      payload: {
        id: uuid(),
        name: blueprint.name,
        blueprintName: blueprint.name,
        fields: blueprint.fields,
        values: {},
        status: STATUS.CREATED,
        createdAt: new Date().toISOString(),
      },
    });

    navigate("/");
  };

  return (
    <div className="p-8">
      <h1 className="text-xl font-bold mb-4">
        Create Contract
      </h1>

      <select
        className="border p-2 w-full mb-4"
        onChange={(e) => setSelected(e.target.value)}
      >
        <option>Select Blueprint</option>
        {blueprints.map((bp) => (
          <option key={bp.id} value={bp.id}>
            {bp.name}
          </option>
        ))}
      </select>

      <button
        onClick={createContract}
        className="bg-blue-600 text-white px-4 py-2"
      >
        Generate Contract
      </button>
    </div>
  );
}

export default CreateContract;
