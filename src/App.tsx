import React, { useState } from "react";
import "./App.css";

const App = () => {
  type inittialType = {
    username: string;
    mailAddress: string;
    password: string;
  };
  const initialValues: inittialType = {
    username: "",
    mailAddress: "",
    password: "",
  };
  const [formValues, setFormValues] = useState(initialValues);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    // name キーを上書きしている！！
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };
  return (
    <div className="formContainer">
      <form action="">
        <h1>Login Form</h1>
        <hr />

        <div className="uiForm">
          <div className="formField">
            <label>User Name</label>
            {/* name属性..JSで使う! */}
            <input
              type="text"
              placeholder="UserName"
              name="username"
              onChange={(event) => handleChange(event)}
            />
          </div>
          <div className="formField">
            <label>Mail Address</label>
            {/* name属性..JSで使う! */}
            <input type="text" placeholder="MailAddress" name="mailAddress" />
          </div>
          <div className="formField">
            <label>PassWord</label>
            {/* name属性..JSで使う! */}
            <input type="text" placeholder="PassWord" name="password" />
          </div>
          <button className="submitButton">Login</button>
        </div>
      </form>
    </div>
  );
};

export default App;
