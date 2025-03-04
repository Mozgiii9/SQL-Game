function TaskWindow({ title, description }) {
  return (
    <section className="mb-4 p-4 bg-white shadow-md rounded-md h-1/2 overflow-auto">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-700">{description}</p>
    </section>
  );
}

export default TaskWindow;
