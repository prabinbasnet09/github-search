import React, { Component, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

const User = ({getUser, user}) => {
  const params = useParams();

  useEffect(() => {
    getUser(params.login);
  }, []); // the second parameter specifies the component that will be rendered or updates
  // that is the useEffect gets executed only when the specified component changes not when the whole page renders
  // an empty array is used when we need to execute the function only once since the value of empty array never changes for every render
  // if we do not use the second parameter then it will keep executing crashing the browser eventually
   
      // const {
      //     name,
      //     avatar_url,
      //     location,
      //     bio,
      //     blog,
      //     login,
      //     html_url,
      //     followers,
      //     following,
      //     public_repos,
      //     public_gists,
      //     hireable
      // } = this.props.user;

    return (<div>
      
        <h1>
          {user.login}</h1>
    </div>);
}

export default User


