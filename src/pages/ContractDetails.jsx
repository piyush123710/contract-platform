
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ContractContext } from "../context/ContractContext";
import ContractRenderer from "../components/contract/ContractRenderer";
import LifecycleController from "../components/contract/LifecycleController";

function ContractDetails() {
  const { id } = useParams();
  const { contracts } = useContext(ContractContext);

  const contract = contracts.find(
    (c) => c.id === id
  );

  if (!contract) return <div className="p-8">Not Found</div>;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">
        {contract.name}
      </h1>

      <ContractRenderer contract={contract} />

      <LifecycleController contract={contract} />
    </div>
  );
}

export default ContractDetails;
