// src/components/Sidebar.jsx
function Sidebar({ completedSteps }) {
  const steps = [
    { id: 1, year: "862", title: "Древняя Русь" }, // Призвание варягов (Рюрик)
    { id: 2, year: "1547", title: "Царство Русское" }, // Венчание Ивана Грозного на царство
  ];

  return (
    <aside className="hidden lg:flex w-1/8 bg-primary-bg px-4 py-6">
      <div className="flex flex-col space-y-4">
        {steps.map((step) => (
          <div
            key={step.id}
            className={`text-sm pl-4 relative ${
              completedSteps.includes(step.id)
                ? "text-completed-step font-semibold"
                : "text-incomplete-step"
            }`}
          >
            <span
              className={`absolute -left-2 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full ${
                completedSteps.includes(step.id)
                  ? "bg-completed-step"
                  : "bg-incomplete-step"
              }`}
            ></span>
            <span>
              {step.year}: {step.title}
            </span>
          </div>
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;
