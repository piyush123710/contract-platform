
import { useContext, useState } from "react";
import { ContractContext } from "../context/ContractContext";
import { Link } from "react-router-dom";
import StatusFilter from "../components/dashboard/StatusFilter";

function Dashboard() {
  const { contracts } = useContext(ContractContext);
  const [filter, setFilter] = useState("ALL");

  const filteredContracts = contracts.filter((c) => {
    if (filter === "ALL") return true;

    if (filter === "ACTIVE")
      return ["Created", "Approved"].includes(c.status);

    if (filter === "PENDING")
      return ["Sent"].includes(c.status);

    if (filter === "SIGNED")
      return ["Signed", "Locked"].includes(c.status);

    return true;
  });

  return (
    <div className="p-8">
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold">
          Contract Dashboard
        </h1>

        <div>
          <Link
            to="/blueprint"
            className="bg-gray-600 text-white px-4 py-2 mr-2"
          >
            New Blueprint
          </Link>

          <Link
            to="/create"
            className="bg-blue-600 text-white px-4 py-2"
          >
            New Contract
          </Link>
        </div>
      </div>

      <StatusFilter filter={filter} setFilter={setFilter} />

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">Name</th>
            <th>Blueprint</th>
            <th>Status</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {filteredContracts.map((contract) => (
            <tr key={contract.id} className="text-center">
              <td className="p-2">{contract.name}</td>
              <td>{contract.blueprintName}</td>
              <td>{contract.status}</td>
              <td>
                {new Date(
                  contract.createdAt
                ).toLocaleDateString()}
              </td>
              <td>
                <Link
                  to={`/contract/${contract.id}`}
                  className="text-blue-600"
                >
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
