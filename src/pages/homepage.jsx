import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import DisplayTable from "../components/reactTable/displayTable";
import Applications from "../components/widgets/Applications";
import Date from "../components/widgets/Date";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="pl-5 pr-[30px] py-5 flex flex-col grow w-full h-full">
          <div className="mb-[30px] flex">
            <Date />
            <Date />
            <Date />
          </div>
          <div className="mb-[30px] grid grid-cols-3 gap-x-9">
            <Applications />
            <Applications />
            <Applications />
          </div>
          <div>
            <DisplayTable />
          </div>
        </div>
      </div>
    </>
  )
}

export default Homepage;
