import React, { useEffect, useState } from "react";
import "./ToDo.css";
const ToDo = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
    return <div>
        {
            countries.map(country => <Country country={country}></Country>)
        }
        <h1>Total Country : { countries.length}</h1>
    </div>;
};
function Country(props) {
     const { title ,id} = props.country;
    return (
        <div>
            <p>{ id}</p>
            <h1>{title}</h1>
        </div>
    )
}
export default ToDo;
