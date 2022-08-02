import React from "react";

const App = () => {
  return (
    <div className="formContainer">
      <form action="">
        <h1>Login Form</h1>
        <hr />
        <div className="uiForm">
          <div className="formField">
            <label>User Name</label>
            {/* name属性..JSで使う! */}
            <input type="text" placeholder="UserName" name="username" />
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
        </div>
      </form>
    </div>
  );
};

export default App;
