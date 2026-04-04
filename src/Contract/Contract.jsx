
// import { useRef } from "react";

import useFrom from "../custom/useFrom";

const Contract = () => {
  // const nameRef = useRef(null);
  // const emailRef = useRef(null);
  // const passwordRef  = useRef(null);
  const [name,handelName] = useFrom("")
  const [email,handelEmail] = useFrom("")
  const [password,handelPassword] = useFrom("")

  
  const handelSubmit = (e) => {
    e.preventDefault();
  
    // const name = nameRef.current.value
    // const email = emailRef.current.value
    // const password = passwordRef.current.value

   console.log("Name:",name, "Email: ",email, "password: ",password)
  };
  return (
    <div className="flex flex-col items-center justify-center h-90 w-full bg-green-600">
      <h1>this is contract page</h1>
      <form action="" onSubmit={handelSubmit}>
        <label htmlFor="name">
          Name:
          <input
            value={name}
            className="border"
            // ref={nameRef}
            onChange={handelName}
            type="text"
            name="name"
            id="name"
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            value={email}
            className="border"
            // ref={emailRef}
            onChange={handelEmail}
            type="email"
            name="email"
            id="email"
          />
        </label>
        <label htmlFor="password">
          Password:
          <input
            value={password}
            className="border"
            // ref={passwordRef}
            onChange={handelPassword}
            type="password"
            name="password"
            id="password"
          />
        </label>
        <div>
          <button className="border p-3 rounded-xl bg-blue-400" type="submit">
            click
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contract;
