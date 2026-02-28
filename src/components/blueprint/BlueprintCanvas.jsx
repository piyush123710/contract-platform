function BlueprintCanvas({ fields }) {
  return (
    <div className="relative border h-96 bg-gray-100 mt-4">
      {fields.map((field) => (
        <div
          key={field.id}
          className="absolute bg-blue-200 px-2 py-1 rounded"
          style={{
            left: `${field.x}px`,
            top: `${field.y}px`,
          }}
        >
          {field.label || "Field"}
        </div>
      ))}
    </div>
  );
}

export default BlueprintCanvas;
