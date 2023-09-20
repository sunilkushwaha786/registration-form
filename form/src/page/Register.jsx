import React, { useState } from "react";
import "./Register.css";
const Register = () => {
  const [sliderValue, setSliderValue] = useState(50); // Initial value

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };
  return (
    <>
      <div className="container-fluid py-4">
        <div className="row">
          <div className="col-md-3" style={{ position: "relative" }}>
            <img
              src="../../public/elon-musk.webp"
              style={{ width: "100%", height: "100%" }}
              alt="Registration"
            />

            <div className="registration-image">
              <h4>REGISTER NOW</h4>
              <h6>while seats are available!</h6>
            </div>
          </div>
          <div className="col-md-8">
            {/* Registration form */}

            <form>
              <div className="row">
                <div className="col col-md-6">
                  <div className="form-group">
                    <label htmlFor="firstName">
                      First Name<span className="star">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      style={{ border: "1px solid grey" }}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">
                      Last Name<span className="star">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      style={{ border: "1px solid grey" }}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="company">
                      Company<span className="star">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="company"
                      style={{ border: "1px solid grey" }}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">
                      Email<span className="star">*</span>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      style={{ border: "1px solid grey" }}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phoneNumber">
                      Phone Number<span className="star">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="phoneNumber"
                      style={{ border: "1px solid grey" }}
                    />
                  </div>
                </div>
                <div className="col col-md-6">
                  <div className="form-group">
                    <label htmlFor="mealPreference">Meal Preference</label>
                    <select className="form-control" id="mealPreference">
                      <option value="">Vegetarian</option>
                      <option value="">Non-Vegetarian</option>
                    </select>
                  </div>
                  <div className="form-group" style={{ marginTop: "5%" }}>
                    <label>Payment Mode</label>
                    <br />
                    <div style={{ display: "flex", justifyContent: "left" }}>
                      <div>
                        <input type="checkbox" /> Cash
                      </div>
                      <div className="mx-5">
                        <input type="checkbox" /> Cheque
                      </div>
                      <div>
                        <input type="checkbox" /> Demand Draft
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="ddChequeNo">DD/Cheque No.</label>
                    <input
                      type="text"
                      className="form-control"
                      id="ddChequeNo"
                      style={{ border: "1px solid grey" }}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="bankName">Drawn On (Bank Name)</label>
                    <input
                      type="text"
                      className="form-control"
                      id="bankName"
                      style={{ border: "1px solid grey" }}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="payableAt">Payable At</label>
                    <input
                      type="text"
                      className="form-control"
                      id="payableAt"
                      style={{ border: "1px solid grey" }}
                    />
                  </div>
                </div>
                <div className="col col-md-12">
                  <div className="form-group">
                    <label htmlFor="slider">Donate us</label>
                    <input
                      type="range"
                      className="form-control-range"
                      id="slider"
                      min="0"
                      max="100"
                      value={sliderValue}
                      onChange={handleSliderChange}
                    />
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", justifyContent: "right" }}>
                <button type="submit" className="btn btn-primary mx-3">
                  Submit
                </button>
                <button type="submit" className="btn btn-success">
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* <div className="rege">
      <div className="left">
        <h4>REGISTER NOW</h4>
        <h6>while seats are available !</h6>
      </div>
      <div className="container"> 
         <div className="">
            <label htmlFor="">
              FIRST NAME<span className="star">*</span>
            </label>
            <br />
            <input type="text" />
            <label htmlFor="">
              LAST NAME<span className="star">*</span>
            </label>
            <br />
            <input type="text" />   
            <label htmlFor="">
              COMPANY<span className="star">*</span>
            </label>
            <br />
            <input type="text" />

            <label htmlFor="">
              EMAIL<span className="star">*</span>
            </label>
            <br />
            <input type="email" />
            <label htmlFor="">
              PHONE NUMBER<span className="star">*</span>
            </label>
            <br />
            <input type="text" />

            <label htmlFor="">MEAL PREFERENCE</label>
            <select id="meal" name="meal">
              <option value="">Vegetarian</option>
            </select>
          
          
            <label htmlFor="">PAYMENT MODE</label>
            <br />
            <input type="checkbox" />Cash<input type="checkbox" />Cheque<input type="checkbox" />Demand Draft
          
          
            <label htmlFor="">DD/CHEQUE NO.</label>
            <br />
            <input type="text" />
          
          
            <label htmlFor="">DRAWN ON(BANK NAME)</label>
            <br />
            <input type="text" />
            <label htmlFor="">PAYABLE AT</label>
            <br />
            <input type="text" />
        </div>
</div>
    </div>  */}
    </>
  );
};

export default Register;
