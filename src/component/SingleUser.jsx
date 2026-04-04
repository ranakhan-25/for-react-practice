import React from "react";
import { useLoaderData } from "react-router";

const SingleUser = () => {

  const data = useLoaderData()
  const {username, email } = data;
  return <div>
    <h1>{username}</h1>
    <h1>{email}</h1>
  </div>;
};

export default SingleUser;
