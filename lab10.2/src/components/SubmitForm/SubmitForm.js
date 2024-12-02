//src/components/SubmitForm/SubmitForm.js

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "../../redux/cartSlice.js"; // Імпортуємо дію для очищення кошика
import "./SubmitForm.css";

const SubmitForm = () => {
  const dispatch = useDispatch(); // Ініціалізація dispatch для виклику дії
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); // Для повідомлення про помилку

  // Обробка зміни значень полів
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Перевірка на валідність номера та email
  const validateInput = () => {
    const { phoneNumber, email } = formData;

    if (phoneNumber.startsWith("+7")) {
      setErrorMessage(
        "You are  from russia. We do not accept orders from russia. Use f*ckin soyuz rockets making with sh*t and stick."
      );
      return false;
    }

    if (email.endsWith("@mail.ru")) {
      setErrorMessage(
        "You are  from russia. We do not accept orders from russia. Use f*ckin soyuz rockets making with sh*t and stick."
      );
      return false;
    }

    setErrorMessage(""); // Якщо помилок немає
    return true;
  };

  // Обробка надсилання форми
  const handleSubmit = (e) => {
    e.preventDefault();

    // Якщо перевірка не пройшла, показуємо банер і блокуємо подальші дії
    if (!validateInput()) {
      return;
    }

    console.log("Form submitted with data:", formData); // Логування для перевірки
    setIsSubmitted(true);
    dispatch(clearCart()); // Очищення кошика після успішного замовлення
  };

  if (isSubmitted) {
    return (
      <div className="submit-success">
        <h2>Thank you for your order!</h2>
        <p>We will contact you soon.</p>
      </div>
    );
  }

  return (
    <div className="submit-form-container">
      <h1>Order Form</h1>
      {/* Банер для повідомлення про помилку */}
      {errorMessage && <div className="error-banner">{errorMessage}</div>}

      <form onSubmit={handleSubmit} className="submit-form">
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SubmitForm;
