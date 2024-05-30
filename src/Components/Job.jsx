import React from "react";
import JobListing from "./JobListing";
import { useState, useEffect } from "react";
import Spinner from "./Spinner";
const Job = ({ isHome = true }) => {
  const [Jobs, setJobs] = useState([]);
  const [loading, setloading] = useState(true);
  useState(() => {
    const fetchJob = async () => {
      try {
        const apiurl = isHome
          ? "/api/jobs?_limit=3"
          : "/api/jobs";
        const res = await fetch(apiurl);
        const data = await res.json();
        setJobs(data); 
        console.log(data);
      } catch (error) {
        console.log("error fetching data");
      } finally {
        setloading(false);
      }
    };
    fetchJob();
  }, []);
  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? "Browse Jobs" : "Recent Jobs"}
        </h2>

        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Jobs.map((Job) => (
              <JobListing key={Job.id} job={Job} ishome={isHome} />
            ))}
            ;
          </div>
        )}
      </div>
    </section>
  );
};

export default Job;
