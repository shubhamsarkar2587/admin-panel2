import DisplayTable from "../components/reactTable/displayTable";
import Applications from "../components/widgets/Applications";
import Date from "../components/widgets/Date";

const Homepage = () => {

  return (
    <>
      <div className="pl-5 pr-[30px] py-5 ml-[300px] mt-[115px] flex flex-col grow w-full h-full">
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
    </>
  )
}

export default Homepage;
