import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div class="container">
        <h2>Registration Form</h2>
        <form action="#" method="post">
          <div class="form-group">
            <label for="email">Email Address</label>
            <input type="email" id="email" name="email" />
            <div class="error-message" id="email-error">
              Please provide a Email.
            </div>
          </div>
          <div class="form-group">
            <label for="mobile">Mobile Number</label>
            <input type="text" id="mobile" name="mobile" />
            <div class="error-message" id="email-error">
              Provide your mobile number.
            </div>
          </div>
          <div className="column">
            <label for="firstName">First Name</label>
            <input type="text" id="firstName" name="firstName" />
            <div class="error-message" id="email-error">
              Provide your first name.
            </div>

            <label for="lastName">Last Name</label>
            <input type="text" id="lastName" name="lastName" />
            <div class="error-message" id="email-error">
              Provide your last name.
            </div>
          </div>

          <div className="column2">
            <label for="password">Password</label>
            <input type="password" id="password" name="password" />
            <div class="error-message" id="email-error">
              Provide a password.
            </div>

            <label for="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
            />
            <div class="error-message" id="email-error">
              Please Enter Confirmation Password.
            </div>
          </div>

          <div class="buttons">
            <button type="submit" id="btn1">
              Submit
            </button>
            <button type="button" id="btn2">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
