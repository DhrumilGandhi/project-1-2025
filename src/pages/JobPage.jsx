import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Spinners from '../components/Spinners';


function JobPage() {

  const { id} = useParams();
  const [Jobs, setJobs] = useState(null);
  const {Loading, setLoading} = useState(true)

  useEffect(()=>{
    const fetchJobs = async () => {
      try {
        const res = await fetch(`/api/jobs/${id}`);
        const data = await res.json();
        setJobs(data)
      } catch (error) {
        console.log("error in fetching data", error)
      } finally {
        setLoading(false);
      }
    }
    fetchJobs();
  }, []);



  return Loading ? <Spinners /> : <h1>{Jobs.title}</h1>
}

export default JobPage