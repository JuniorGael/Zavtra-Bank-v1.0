
import Select from 'react-select';
import React, { useState } from 'react'

export const lang = {}
 const data = [
   {
     value: "eng",
     label: "En"
   },
   {
     value: "ru",
     label: "Ru"
   },
   {
     value: "fr",
     label: "Fr"
   }
 ];
const DataLanguage = () => {

  const [selectedValue, setSelectedValue] = useState(null)

  

  const fetchLang = (selectedValue) => {
    try{

      fetch("http://localhost:5174/getLang", {
        method: "POST",
           mode: 'no-cors', 
        headers: {
          "Content-Type": "application/json",
        },
        credentials: 'include',
        body: JSON.stringify({chooseLang: "eng"}),
      })
       .then((data) => {
         console.log(data.langdic)
    })
    } catch(error) {
      console.log(data.error);
    }
  }

  const handleChange = (e) => {
    setSelectedValue(e.value)

    console.log('Option selected:', e.value);

    fetchLang(e.value);
  }


  return (
    <div>
      <Select
        placeholder="Select Option"
        value={data.filter(obj => obj.value === selectedValue)} // set selected value
        options={data} // set list of the data
        onChange={handleChange} // assign onChange function
      />
    </div>
  )
}

export default DataLanguage

