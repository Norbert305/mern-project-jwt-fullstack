import React, {useEffect} from 'react'
import {useNavigate} from "react-router-dom"
import {useSelector, useDispatch} from "react-redux"
import JobForm from '../components/JobForm'
import Spinner from '../components/Spinner'
import { getJobs } from '../features/jobs/jobSlice'
import { reset } from '../features/auth/authSlice'
import JobItem from '../components/JobItem'


function Dashboard() {
  
  const navigate = useNavigate()
  const dispatch = useDispatch()

const {user} = useSelector((state)=> state.auth)
const {jobs, isLoading, isError, message} = useSelector((state)=>state.jobs)

useEffect(()=> {

  if(isError) {
    console.log(message);
  }

    if(!user) {
      navigate('/login')
    }

    dispatch(getJobs())
    return ()=>{
      dispatch(reset())
    }
}, [user, navigate, isError, message, dispatch])

    if(isLoading) {
      return <Spinner />
    }

  return (
    <>
    <section className='heading'>
      <h1>Welcome {user && user.name}</h1>
      <p>Jobs Dashboard</p>
    </section>
    <JobForm />

    <section className='content'>
    {jobs.length > 0 ? (
          <div className='goals'>
            {jobs.map((job) => (
              <JobItem key={job._id} job={job} />
            ))}
          </div>
        ) : (
          <h3>You have not set any goals</h3>
        )}
    </section>
    </>
  )
}

export default Dashboard