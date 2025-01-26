const ListEmployeeComponent = () => {

    const dummyData = [
		{
			"id": 1,
			"firstName": "Pushpa",
			"lastName": "Mulleti",
			"email": "pushpa@jukega.nhi"
		},
		{
			"id": 2,
			"firstName": "Murgan",
			"lastName": "Dave",
			"email": "murgan@jukega.hi"
		},
		{
			"id": 3,
			"firstName": "Jolly",
			"lastName": "Reddy",
			"email": "jolly@jukega.hi"
		}
	]

  return (
    <div className="container">
      <h2 className="text-center">List of Employees</h2>
	  <table className="table table-striped table-bordered">
		<thead>
			<tr>
				<th>Employee Id</th>
				<th>Employee First Name</th>
				<th>Employee Last Name</th>
				<th>Employee Email Id</th>
			</tr>
		</thead>
		<tbody>
			{
				dummyData.map(employee => 
					<tr key={employee.id}>
						<td>{employee.id}</td>
						<td>{employee.firstName}</td>
						<td>{employee.lastName}</td>
						<td>{employee.email}</td>
					</tr>
				)
			}
		</tbody>
	  </table>
    </div>
  )
}

export default ListEmployeeComponent
