import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Homepage from "./pages/homepage";

const App = () => {
  return (
    <div className="App h-full w-full">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="px-5 flex grow">
        </div>
      </div>
    </div>
  );
}

export default App;
