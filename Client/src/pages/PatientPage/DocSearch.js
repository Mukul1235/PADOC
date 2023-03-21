import React, { useState } from 'react'
import "./DocSearch.css";
import Doctor from "./Doctor.json";
const DocSearch = () => {
  const [filterSearch, setfilerSearch] = useState([]);

  const handlefilter = (e) => {
    e.preventDefault();
    const searchword = e.target.value;
    const newFilter = Doctor.filter((value) => {
      return value.specialist.toLowerCase().includes(searchword.toLowerCase());
    })
    // if (se 
    setfilerSearch(newFilter);
  }

  return (
    <div className="DocSearch">
      <div className="title">Please fill details</div>
      <div>
        <div className="searchTitle">
          Problem
          <input className="Search" onChange={handlefilter}></input>
        </div>
        <div className="dataResult ">
          {filterSearch.map((value, key) => {
            return (
              <form >
                <div className="dataItem">
                  {value.specialist}
                </div>
                ;
              </form>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default DocSearch



/*
   <div className='searchTitle'>
              Time
          <input className='Search' ></input>
          </div>
          <div className='searchTitle'>
              Time
          <input className='Search' ></input>
          </div>
          <div className='searchTitle'>
          <input placeholder='search' className='Search' ></input>
          </div>*/ 