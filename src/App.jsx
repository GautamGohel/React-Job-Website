// import React from 'react'

// const App = () => {
//   const names=['Gautam','Daksh','Yash'];
//   const isloggedin=true;
//   const styles={
//     color:'purple',
//     fontSize:'50px',
//   }
//   return (
//     <>
//     <p style={styles}>Hello India</p>
//     <div className='text-5xl'> </div>
//        <ul>
//           {
//           names.map((name,index)=>(
//                <li key={index}>{name}</li>
//           ))
//           }
//        </ul>
//        {isloggedin ?<h1>Hello Member</h1>:<h1>please Log in</h1>}
//     </>
//   )
// }

// export default App
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import MainLayout from "./Layout/MainLayout";
import JobPage from "./Pages/JobPage";
import NotFound from "./Pages/NotFound";
import PageJob, { jobloader } from "./Pages/PageJob";
import AddJobPage from "./Pages/AddJobPage";
import EditJobPage from "./Pages/EditJobPage";
const App = () => {
  //add job
  const addjob=async (newJob)=>{
    const res=await fetch('/api/jobs',{
      method:'POST',
      headers: {
        'Content-type':'application/json'
      },
      body:JSON.stringify(newJob)
    });
    return;
  }

  //update job
  const updateJob=async (job)=>{
    const res=await fetch(`/api/jobs/${job.id}`,{
      method:'PUT',
      headers: {
        'Content-type':'application/json'
      },
      body:JSON.stringify(job)
    });
    return;
  }

  //delete job
  const deleteJob=async(id)=>{
    const res=await fetch(`/api/jobs/${id}`,{
     method:'DELETE'
    })
  }


  const router=createBrowserRouter( createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />}></Route>
      <Route path="/jobs" element={<JobPage />}></Route>
      <Route path="/jobs/:id" element={<PageJob deleteJob={deleteJob} />} loader={jobloader}></Route>
      <Route path="/edit-jobs/:id" element={<EditJobPage updateJobSubmit={updateJob}/>} loader={jobloader}></Route>
      <Route path="/add-job" element={<AddJobPage addJobSubmit={addjob}/>} ></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Route>
    ));
  return (<RouterProvider router={router}/>);
};
export default App;
