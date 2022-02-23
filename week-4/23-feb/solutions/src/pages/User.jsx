import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function User() {
  const [user, setUser] = useState();
  const params = useParams();

  useEffect(() => {
    async function getUser() {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${params.id}`
      );
      const json = await res.json();

      setUser(json);
    }

    getUser();
  }, []);

  if (user === undefined) return <h1>Loading..</h1> 

  return <div>
    <Helmet>
      <title>{user.name}</title>
    </Helmet>
    <h1>{user.name}</h1>
    <p>{user.email}</p>
  </div>;
}

export default User;
