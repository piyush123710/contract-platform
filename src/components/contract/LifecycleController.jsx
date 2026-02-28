
import { useContext } from "react";
import { ContractContext } from "../../context/ContractContext";
import { allowedTransitions } from "../../utils/lifecycle";

function LifecycleController({ contract }) {
  const { dispatch } = useContext(ContractContext);

  const nextStates =
    allowedTransitions[contract.status];

  return (
    <div className="mt-6">
      <h3 className="font-semibold mb-2">
        Status: {contract.status}
      </h3>

      {nextStates.map((state) => (
        <button
          key={state}
          onClick={() =>
            dispatch({
              type: "UPDATE_STATUS",
              payload: { id: contract.id, status: state },
            })
          }
          className="bg-green-600 text-white px-4 py-2 mr-2"
        >
          Move to {state}
        </button>
      ))}
    </div>
  );
}

export default LifecycleController;
