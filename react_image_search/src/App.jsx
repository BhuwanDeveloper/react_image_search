import { useState } from "react";
import ImageList from "./components/ImageList"
import SearchForm from "./components/SearchForm"


function App() {
  const [searchData, setSearchData] = useState([]);
  
  return (
    <div className="flex justify-center">
       <div className=" flex flex-col gap-4 w-1/2 m-8 p-8 rounded-md shadow-md bg-white">
        <h2 className="text-2xl font-bold">React Image Search App</h2>
        <SearchForm setSearchData={setSearchData} />
        <ImageList searchData={searchData}/>
        </div>
    </div>
    
  )
}

export default App
