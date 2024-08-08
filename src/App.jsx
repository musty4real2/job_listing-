import React from 'react';
import {Route, createBrowserRouter,createRoutesFromElements, RouterProvider} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';




const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<MainLayout />}>
  <Route index element={<HomePage />} />
  <Route path='/jobs' element={<JobsPage />} />
  </Route>)
);
const App = () => {
  return <RouterProvider router={router} />;

};

export default App;

  // return (
  //   // <>
  //   //   <Navbar />
  //   //   <Hero title="Become a React Dev" subtitle="Find the React job that fits your skills and needs" />
  //   //   <HomeCards />
  //   //   <JobListings />
  //   //   <ViewAllJobs />
  //   // </>
  // )