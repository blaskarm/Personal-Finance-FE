import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <div className="p-6">
          <h1 className="text-3x1 font-bold mb-4">Main Content</h1>
        </div>
      </main>
    </div>
  );
}

export default App;
