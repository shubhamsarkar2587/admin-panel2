import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import DisplayTable from "../components/reactTable/displayTable";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="pl-5 pr-[30px] py-5 flex grow">
          <DisplayTable />
        </div>
      </div>
    </>
  )
}

export default Homepage;
