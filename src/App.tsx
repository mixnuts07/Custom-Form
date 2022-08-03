import React, { useState } from "react";
import "./App.css";

const App = () => {
  type inittialType = {
    username: string;
    mailAddress: string;
    password: string;
  };
  type ErrorsType = {
    username?: string;
    mailAddress?: string;
    password?: string;
  };
  const initialValues: inittialType = {
    username: "",
    mailAddress: "",
    password: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  // Validation → エラー用のObjectを作成
  const [formErrors, setFormErrors] = useState<ErrorsType>({});
  // Submit を押したかどうか
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    // name キーを上書きしている！！(name = <input name=''/>)
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // 送信ボタンを押すと画面がリロードされる。 リロードされるとUseStateの値が無くなる。
    event.preventDefault();
    // Validation → エラー用のObjectを作成
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };
  const validate = (values: inittialType): Object => {
    const errors: ErrorsType = {};
    const regex =
      /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;
    if (!values.username) {
      errors.username = "input username";
    }
    if (!values.mailAddress) {
      errors.mailAddress = "input mailAddress";
    } else if (!regex.test(values.mailAddress)) {
      errors.mailAddress = "input correct mailAddress";
    }
    if (!values.password) {
      errors.password = "input password";
    } else if (values.password.length < 4) {
      errors.password = "input password length is 4 Up and 15 Low";
    } else if (values.password.length > 15) {
      errors.password = "input password length is 4 Up and 15 Low";
    }
    return errors;
  };
  return (
    <div className="formContainer">
      <form onSubmit={(event) => handleSubmit(event)}>
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
          <p className="errorMsg">{formErrors.username}</p>
          <div className="formField">
            <label>Mail Address</label>
            {/* name属性..JSで使う! */}
            <input
              type="text"
              placeholder="MailAddress"
              name="mailAddress"
              onChange={(event) => handleChange(event)}
            />
          </div>
          <p className="errorMsg">{formErrors.mailAddress}</p>
          <div className="formField">
            <label>PassWord</label>
            {/* name属性..JSで使う! */}
            <input
              type="text"
              placeholder="PassWord"
              name="password"
              onChange={(event) => handleChange(event)}
            />
          </div>
          <p className="errorMsg">{formErrors.password}</p>
          <button className="submitButton">Login</button>
          {Object.keys(formErrors).length === 0 && isSubmit && (
            <div className="msgOK">Success Login</div>
          )}
        </div>
      </form>
    </div>
  );
};

export default App;
