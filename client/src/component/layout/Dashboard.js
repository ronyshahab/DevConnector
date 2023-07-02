import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

const Dashboard = () => {
    const linkName =["Developer","Posts"]
    const linkPath =["/profiles","/posts"]
  return (
    <div>
      <Navbar name={linkName} link={linkPath}/>
      <div className="container">

        <p className='text-primary'> <h1>Dashboard</h1></p>
        <p> <i class="fa-solid fa-user"></i> Welcome <span className='text-primary'>John Doe</span></p>
        <div className="dashboardLinkContainer">
            <Link to={"/create-profile"} style={{color:"white"}}>
            <button className='btnMain'> <i class="fa-solid fa-id-card"></i>

            Edit profile
            </button>
            </Link>

            
            <Link to={"/add-education"} style={{color:"white"}}>
            <button className='btnMain'> <i class="fa-sharp fa-solid fa-graduation-cap"></i>

            Add Education
            </button>
            </Link>
            <Link to={"/add-experience"} style={{color:"white"}}>
            <button className='btnMain'> <i class="fa-solid fa-user-tie"></i>

            Add Experience
            </button>
            </Link>
        </div>
      </div>
      <div className="tableContainer">

        <div className="experienceContainer">
        <p className='text-primary'> <h2>Experience</h2></p>
          
            <div className="expTableContainer">
              <table>
                <thead>
                  <tr>
                    <th>
                      Company
                    </th>
                    <th >
                      Title
                    </th>
                    <th className='hide-sm'>

                    Years
                    </th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Microsoft</td>
                    <td>Senior developer</td>
                    <td className='hide-sm'>2021-2023</td>
                    <td>

                    <button className='btn btn-danger'>Delete</button>
                    </td> 
                  </tr>

                </tbody>
              </table>
            </div>
        </div>
        <div className="experienceContainer" style={{marginTop:"1em"}} >
        <p className='text-primary'> <h2>Education</h2></p>
          
            <div className="expTableContainer">
              <table>
                <thead>
                  <tr>
                    <th>
                      College
                    </th>
                    <th className='hide-sm'>
                      Degree
                    </th>
                    <th>Feild</th>
                    <th className='hide-sm'>

                    Years
                    </th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Bhagwan Mahavir Polytechnic</td>
                    <td>Diploma</td>
                    <td className='hide-sm'>Computer science</td>
                    <td className='hide-sm'>2021-2023</td>
                    <td>

                    <button className='btn btn-danger'>Delete</button>
                    </td> 
                  </tr>

                </tbody>
              </table>
            </div>
        </div>
            <button className='btn btn-danger' style={{marginTop:"0.8em"}} >Delete my account</button>
      </div>
    </div>
  )
}

export default Dashboard
