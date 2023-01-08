import Navbar from "./components/navbar/Navbar";
import DisplayTable from "./components/reactTable/displayTable";
import Sidebar from "./components/sidebar/Sidebar";

const App = () => {
  return (
    <div className="App h-full w-full">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="px-5 flex grow">
          <DisplayTable />
        </div>
      </div>
    </div>
  );
}

export default App;
