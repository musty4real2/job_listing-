import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
import JobPage, { jobLoader } from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';
import EditJobPage from './pages/EditJobPage';

const App = () => {

  // Add new job
  const addJob = async (newJob) => {
    try {
      const res = await fetch('/api/jobs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newJob),
      });
      if (!res.ok) {
        throw new Error('Failed to add new job');
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  // Delete job
  const deleteJob = async (id) => {
    try {
      const res = await fetch(`/api/jobs/${id}`, {
        method: 'DELETE',
      });
      if (!res.ok) {
        throw new Error('Failed to delete job');
      }
    } catch (error) {
      console.error(error.message);
    }
  };


  // updateJob

  const updateJob =async (updatedJob) => {
    try {
      const res = await fetch(`/api/jobs/${updatedJob.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedJob),
      });
      if (!res.ok) {
        throw new Error('Failed to add new job');
      }
    } catch (error) {
      console.error(error.message);
    }

  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/jobs' element={<JobsPage />} />
        <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob} />} />
        <Route 
          path='/jobs/:id' 
          element={<JobPage deleteJob={deleteJob} />} 
          loader={jobLoader} 
        />
            <Route 
          path='/edit-job/:id' 
          element={<EditJobPage updateJobSubmit={updateJob}/>} 
          loader={jobLoader} 
        />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
