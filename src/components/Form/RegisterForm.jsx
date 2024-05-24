import React, { useState, useEffect } from "react";
import TextInput from "./TextInput";
import SelectInput from "./SelectInput";
import CheckboxInput from "./CheckboxInput";

const RegisterForm = () => {
  const [values, setValues] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreementChecked: false,
    gender: "",
  });

  const [errors, setErrors] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreementChecked: "",
    gender: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);

  const handleFieldChange = (evt) => {
    const { name, value, type, checked } = evt.target;
    setValues({
      ...values,
      [name]: type === "checkbox" ? checked : value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const validateField = (name, value) => {
    switch (name) {
      case "userName":
        if (value.length < 4 || !/^[A-Za-z0-9]+$/.test(value)) {
          return "Username must be at least 4 characters long and contain only A-Z, a-z, or 0-9.";
        }
        break;
      case "email":
        if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(value) || value.length < 1) {
          return "Please enter a valid email address.";
        }
        break;
      case "password":
        if (value.length < 8) {
          return "Password must be at least 8 characters long.";
        }
        break;
      case "confirmPassword":
        if (value !== values.password) {
          return "Password do not match.";
        }
        break;
      case "gender":
        if (value === "") {
          return "Please select a gender.";
        }
        break;
      case "agreementChecked":
        if (!values.agreementChecked) {
          return "You must agree to the terms and conditions.";
        }
        break;
    }
    return "";
  };

  const handleBlur = (evt) => {
    const { name, value } = evt.target;
    const errorMessage = validateField(name, value);
    setErrors({
      ...errors,
      [name]: errorMessage,
    });
  };

  useEffect(() => {
    const isFormValid =
      Object.values(errors).every((error) => error === "") &&
      Object.values(values).every((value) => value !== "" && value !== null);
    setIsFormValid(isFormValid);
  }, [errors, values]);

  return (
    <form className="flex flex-col p-4 bg-white shadow-md rounded-md">
      <TextInput
        label="Username"
        value={values.userName}
        onChange={handleFieldChange}
        onBlur={handleBlur}
        placeholder="User Name"
        name="userName"
        error={errors.userName}
        required
        minLength={4}
        pattern="[A-Za-z0-9]+"
      />
      <TextInput
        label="Email"
        value={values.email}
        onChange={handleFieldChange}
        onBlur={handleBlur}
        placeholder="Email"
        name="email"
        type="email"
        pattern="^[a-zA-Z0-9._%+-]+@gmail\.com$"
        error={errors.email}
        required
      />
      <TextInput
        label="Password"
        value={values.password}
        onChange={handleFieldChange}
        onBlur={handleBlur}
        placeholder="Password"
        name="password"
        type="password"
        error={errors.password}
        required
        minLength={8}
      />
      <TextInput
        label="Confirm Password"
        value={values.confirmPassword}
        onChange={handleFieldChange}
        onBlur={handleBlur}
        placeholder="Confirm Password"
        name="confirmPassword"
        type="password"
        error={errors.confirmPassword}
        required
        minLength={8}
      />
      <SelectInput
        label="Gender"
        value={values.gender}
        onChange={handleFieldChange}
        onBlur={handleBlur}
        name="gender"
        options={[
          { value: "", label: "Select Gender" },
          { value: "male", label: "Male" },
          { value: "female", label: "Female" },
        ]}
        error={errors.gender}
        required
      />
      <CheckboxInput
        label="I agree to the terms and conditions"
        checked={values.agreementChecked}
        onChange={handleFieldChange}
        onBlur={handleBlur}
        name="agreementChecked"
        error={errors.agreementChecked}
        required
      />
      <button
        type="submit"
        disabled={!isFormValid}
        className={`mt-4 bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 ease-in-out ${
          !isFormValid ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        Submit
      </button>
    </form>
  );
};

export default RegisterForm;
