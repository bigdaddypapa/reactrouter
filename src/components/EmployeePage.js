import React from 'react'
import Header from './Header'

export default function EmployeePage() {
  return (
    
    <div className = "w-1/2 border-red-900 border-2 m-0.5" >
      <Header/>
      
      <div className = " text-xl  h-24 border-gray-100 border-2 mt-3 ml-3 mr-3">
      <img class="inline object-cover w-20 h-20 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDJWLbCcLJFQJP9Jxx3IggvNwTglMvjwvPcvVacr27b3T5PllkYbYNNzLoetmmyt_MRumVp7y_T-4&usqp=CAU&ec=48600113"/>
         Julie Taylor <small><small> /Vp Marketing</small></small>
        
      </div >
      <div className = "    h-14 border-gray-100 border-2  ml-3 mr-3 border-t-0">
        Call Office <br/>
        <small>781-000-0002</small>
      </div>
      <div className = "    h-14 border-gray-100 border-2  ml-3 mr-3 border-t-0">
        Call Mobile <br/>
        <small>617-000-0002</small>
      </div >
      <div className = "    h-14 border-gray-100 border-2  ml-3 mr-3 border-t-0">
        SMS <br/>
        <small>617-000-0002</small>
      </div>
      <div className = "    h-14 border-gray-100 border-2  ml-3 mr-3 border-t-0">
        Email <br/>
        <small>jtaylor@fakemail.com</small>
      </div>
     </div>
  )
}
