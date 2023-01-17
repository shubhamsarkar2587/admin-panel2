import DisplayTable from "../components/reactTable/DisplayTable";
import Applications from "../components/widgets/Applications";
import Date from "../components/widgets/Date";

const Homepage = () => {

  return (
    <>
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
    </>
  )
}

export default Homepage;
