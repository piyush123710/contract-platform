
function StatusFilter({ filter, setFilter }) {
  return (
    <select
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
      className="border p-2 mb-4"
    >
      <option value="ALL">All</option>
      <option value="ACTIVE">Active</option>
      <option value="PENDING">Pending</option>
      <option value="SIGNED">Signed</option>
    </select>
  );
}

export default StatusFilter;
