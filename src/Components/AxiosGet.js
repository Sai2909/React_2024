import axios from 'axios';
import React, { useEffect, useState } from 'react'

function AxiosGet() {
    const[data,setData]=useState([]);
    const[error,setError]=useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
            console.log(response);
				console.log(response.data); // Response data
				setData(response.data);
				console.log(response.status); // HTTP status code
				console.log(response.headers); // Response headers
        })
        .catch((error)=>{
            console.log(error.message);
            setError(error.message);
        })

    },[])

  return (
    <div>
      <div>
			<h2>Axios GET Request</h2>
			{data.length > 0 ? (
				<>
					<p style={{ color: "yellowgreen" }}>Data Recived</p>
					<ul>
						{data.map((user, index) => {
							return <li key={index}>{user.email}</li>;
						})}
					</ul>
				</>
			) : (
				<p style={{ color: "red" }}>{error}</p>
			)}
		</div>
    </div>
  )
}

export default AxiosGet
