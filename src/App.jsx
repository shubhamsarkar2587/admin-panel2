import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Homepage from "./pages/homepage";

const App = () => {
  return (
    <div className="App h-full w-full flex">
      <div className="w-[316px] h-screen border-black">
        <Sidebar />
      </div>
      <div className="w-full">
        <Navbar />
        <Homepage />
      </div>
    </div>
  );
}

export default App;
