// src/components/MainContent.jsx
function MainContent({ children }) {
  return (
    <main className="flex-1 flex flex-col overflow-auto px-6 py-6 rounded-lg shadow-md">
      {children}
    </main>
  );
}

export default MainContent;
