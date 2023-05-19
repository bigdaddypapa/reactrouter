import React from 'react'
import Header2 from './Header2'
import SearchBar from './SearchBar'
import EmployeeList from './EmployeeList'

export default function Homepage() {
  return (
    <div  className = "w-1/2 border-yellow-400 border-2 m-0.5">
      <Header2/>
      <SearchBar/>
      <EmployeeList/>
      </div>
  )
}
