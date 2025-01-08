import React from 'react';
import { useParams, useLoaderData } from 'react-router-dom';
import Spinners from '../components/Spinners';


function JobPage() {

  const { id } = useParams();
  const jobs = useLoaderData();

  return <h1>{jobs.title}</h1>
}

const jobLoader = async ({ params }) => {
  const res = await fetch(`/api/jobs/${params.id}`);
  const data = await res.json();
  return data;
}
export {JobPage as default, jobLoader};