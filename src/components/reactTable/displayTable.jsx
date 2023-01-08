import ReactTable from './reactTable'

const DisplayTable = () => {
  const columns = [{ Header: 'Name', accessor: 'name', }, { Header: 'Age', accessor: 'age', }, { Header: 'Address', accessor: 'address', },];

  const data = [{ name: 'John Doe', age: 32, address: '123 Main St', }, { name: 'Jane Smith', age: 27, address: '456 Market St', }, { name: 'Bob Johnson', age: 45, address: '789 Maple Ave', },];



  return (
    <ReactTable columns={columns} data={data} />
  )
}

export default DisplayTable;
