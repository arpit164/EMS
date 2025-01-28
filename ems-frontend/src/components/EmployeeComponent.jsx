import { useState } from 'react'
import { createEmployee } from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom'

const EmployeeComponent = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')

    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
    })

    const navigator = useNavigate();

    function saveEmployee(e){
        e.preventDefault();

        if(validateForm()){
            const employee = {firstName, lastName, email}
            console.log(employee)
    
            createEmployee(employee).then((response) => {
                console.log(response.data);
                navigator('/employees');
            })
        }
    }

    function validateForm(){
        let valid = true;

        const errorsCopy = {... errors}

        if(firstName.trim()){
            errorsCopy.firstName = '';
        }else {
            errorsCopy.firstName = 'First Name is required';
            valid = false;
        }

        if(lastName.trim()){
            errorsCopy.lastName = '';
        }else {
            errorsCopy.lastName = 'Last Name is required';
            valid = false;
        }

        if(email.trim()){
            errorsCopy.email = '';
        }else {
            errorsCopy.email = 'Email is required';
            valid = false;
        }

        setErrors(errorsCopy);

        return valid;
    }

  return (
    <div className='container'>
        <br /><br />
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
                <h2 className='text-center'>Add Employee</h2>
                <div className='card-body'>
                    <form>
                        <div className='form-group mb-2'>
                            <label className='form-label'>First Name:</label>
                            <input 
                                type='text' 
                                placeholder="Enter Employee's First Name" 
                                name='firstName' 
                                value={firstName} 
                                className={`form-control ${ errors.firstName ? 'is-invalid' : '' }` }
                                onChange={(e) => setFirstName(e.target.value)} />
                            { errors.firstName && <div className='invalid-feedback'> { errors.firstName } </div> }
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Last Name:</label>
                            <input 
                                type='text' 
                                placeholder="Enter Employee's Last Name"  
                                name='lastName' 
                                value={lastName} 
                                className={`form-control ${ errors.lastName ? 'is-invalid' : '' }` }
                                onChange={(e) => setLastName(e.target.value)} />
                            { errors.lastName && <div className='invalid-feedback'> { errors.lastName } </div> }
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Email:</label>
                            <input 
                                type='text' 
                                placeholder="Enter Employee's Email"  
                                name='email' 
                                value={email} 
                                className={`form-control ${ errors.email ? 'is-invalid' : '' }` } 
                                onChange={(e) => setEmail(e.target.value)} />
                            { errors.email && <div className='invalid-feedback'> { errors.email } </div> }
                        </div>

                        <button className='btn btn-success' onClick={saveEmployee}>Submit</button>

                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EmployeeComponent
