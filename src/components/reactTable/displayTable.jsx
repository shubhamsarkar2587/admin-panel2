import ReactTable from './reactTable'

const DisplayTable = () => {
  const columns = [
    { Header: 'Client Name', accessor: 'clientName' },
    { Header: 'Pan', accessor: 'pan' },
    { Header: 'Mobile Number', accessor: 'mobileNumber' },
    { Header: 'Steps', accessor: 'steps' },
    { Header: 'Created At', accessor: 'createdAt' },
    { Header: 'Updated At', accessor: 'updatedAt' },
    { Header: 'Actions', accessor: 'actions' }
  ];

  const data = [
    { clientName: 'Tony Stark', pan: 3734343434342232334, mobileNumber: 'fdf3343', steps: 'dfdfdf0', createdAt: 'sdsd', updatedAt: 'ddfdf', actions: 'dd' },
    { clientName: 'Tony Stark', pan: 3734343434342232334, mobileNumber: 'fdf3343', steps: 'dfdfdf0', createdAt: 'sdsd', updatedAt: 'ddfdf', actions: 'dd' },
    { clientName: 'Tony Stark', pan: 3734343434342232334, mobileNumber: 'fdf3343', steps: 'dfdfdf0', createdAt: 'sdsd', updatedAt: 'ddfdf', actions: 'dd' },
    { clientName: 'Tony Stark', pan: 3734343434342232334, mobileNumber: 'fdf3343', steps: 'dfdfdf0', createdAt: 'sdsd', updatedAt: 'ddfdf', actions: 'dd' },
    { clientName: 'Tony Stark', pan: 3734343434342232334, mobileNumber: 'fdf3343', steps: 'dfdfdf0', createdAt: 'sdsd', updatedAt: 'ddfdf', actions: 'dd' },
    { clientName: 'Tony Stark', pan: 3734343434342232334, mobileNumber: 'fdf3343', steps: 'dfdfdf0', createdAt: 'sdsd', updatedAt: 'ddfdf', actions: 'dd' },
  ];

  return (
    <div className="w-full flex flex-col ">
      <div className="w-full mb-[30px]">
        <ReactTable columns={columns} data={data} />
      </div>
      <div className="w-full">
        <ReactTable columns={columns} data={data} />
      </div>
    </div>

  )
}

export default DisplayTable;
