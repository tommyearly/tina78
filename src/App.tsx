import React, { Component } from "react";
import { Link, Route, Routes } from 'react-router-dom'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Footer from "./components/Footer";
import Header from "./components/Header"; 
import "./App.css"; 
//@ts-ignore
const PagePathsWithComponents = import.meta.glob('./pages/*.tsx', { eager: true })
//Example Output: 
// const modules = {
//   './pages/About.tsx': () => import('./pages/About.js'),
//   './pages/Home.tsx': () => import('./pages/Home.tsx')
// }
//@ts-ignore

const routes = Object.keys(PagePathsWithComponents).map((path: string) => {
  const name = path.match(/\.\/pages\/(.*)\.tsx$/)![1]
  return {
    name,
    path: name === 'Home' ? '/' : `/${name.toLowerCase()}`,
    //@ts-ignore
    component: PagePathsWithComponents[path].default
  }
})

const helmetContext = {};






export function App() {
  return (
    <>
     <Header/> 
    <HelmetProvider context={helmetContext}>
    <Helmet>
                
                <title>Home ********* Comfy Beds &amp; More | Sofas and Beds | Sofas and Beds</title>
                   <meta name="description" content="Home *********  Here you’ll find a list of important headings to assist you when using our site; including terms & conditions, rules, processes and privacy statements." />
                
                                            </Helmet>  
                                           
      <Routes>
        {routes.map(({ path, component: RouteComp }) => {
          return <Route key={path} path={path} element={<RouteComp />}/>
        })}
      </Routes>
      </HelmetProvider>
      <Footer/> 
    </>
  )
}
