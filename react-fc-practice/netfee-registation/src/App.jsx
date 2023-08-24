import { useState } from "react";
import "./App.css";

function App() {
  const [customerType, setCustomerType] = useState([]);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState("");

  // handle form data
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    let data = Object.fromEntries(formData);

    // set reference
    data = {
      ...data,
      reference: { phone: data.refMobile, name: data.refName },
    };
    // delete reference value
    delete data.refName;
    delete data.refMobile;

    data = {
      ...data,
      package: { packageName: data.package, customerType },
    };

    // validation
    if (
      data.company === "" ||
      data.name === "" ||
      data.mobile === "" ||
      data.email === "" ||
      data.division === "" ||
      data.district === "" ||
      data.taluka === "" ||
      data.village === "" ||
      emailError ||
      phoneError
    ) {
      alert("Please fill all the fields currently");
      return;
    }

    event.target.reset();
    setCustomerType([]);
    console.log(data);
  };

  const handleValidation = (e) => {
    // checkBox validation
    if (e.target.checked) {
      setCustomerType([...customerType, e.target.value]);
    } else {
      setCustomerType(customerType.filter((item) => item !== e.target.value));
    }

    //email validation using regex
    if (e.target.name === "email") {
      const emailRegex = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,8})+$/;

      if (emailRegex.test(e.target.value)) {
        setEmailError(false);
      } else {
        setEmailError(true);
      }
    }

    // phone mobile length validation
    if (e.target.name === "mobile") {
      if (e.target.value.length < 11) {
        setPhoneError("Write 11 Digit Mobile Number");
      } else if (e.target.value.length > 14) {
        setPhoneError("Over 14 Digit Mobile Number");
      } else {
        setPhoneError("");
      }
    }
  };

  return (
    <>
      <div className="container text-start">
        <div className="sc-hKwDye cWGmhP">
          <div className="formStyle">
            <h3 className="mb-4">Registration </h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-2">
                <label htmlFor="company">
                  Organization Name <span className="text-danger">*</span>
                </label>
                <input
                  className="form-control shadow-none false"
                  name="company"
                  type="text"
                  autoComplete="off"
                  defaultValue=""
                />
              </div>
              <div className="mb-2">
                <label htmlFor="name">
                  Admin Name <span className="text-danger">*</span>
                </label>
                <input
                  className="form-control shadow-none false"
                  name="name"
                  type="text"
                  autoComplete="off"
                  defaultValue=""
                />
              </div>
              <div className="mb-2">
                <label htmlFor="mobile">
                  Mobile <span className="text-danger">*</span>
                </label>
                <input
                  className={`form-control shadow-none false ${
                    phoneError && "border border-danger"
                  }`}
                  name="mobile"
                  type="text"
                  autoComplete="off"
                  defaultValue=""
                  onChange={handleValidation}
                />
                {phoneError && <p className="text-danger">{phoneError}</p>}
              </div>
              <div className="mb-2">
                <label htmlFor="email">
                  Email <span className="text-danger">*</span>
                </label>
                <input
                  className={`form-control shadow-none false ${
                    emailError && "border border-danger"
                  }`}
                  name="email"
                  type="email"
                  autoComplete="off"
                  defaultValue=""
                  onChange={handleValidation}
                />
                {emailError && <p className="text-danger">Invalid Email</p>}
              </div>
              <div className="mb-3">
                <label className="form-control-label">
                  Select Division <span className="text-danger">*</span>
                </label>
                <select
                  className="form-select mw-100 mt-0"
                  aria-label="Default select example"
                  name="division"
                  id="division"
                >
                  <option value="">...</option>
                  <option value={1}>Barishal</option>
                  <option value={2}>Chattogram</option>
                  <option value={3}>Dhaka</option>
                  <option value={4}>Khulna</option>
                  <option value={5}>Rajshahi</option>
                  <option value={6}>Rangpur</option>
                  <option value={7}>Sylhet</option>
                  <option value={8}>Mymensingh</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="form-control-label">
                  Select District <span className="text-danger">*</span>
                </label>
                <select
                  className="form-select mw-100 mt-0"
                  aria-label="Default select example"
                  name="district"
                  id="district"
                >
                  <option value="">...</option>
                  <option value="Tangail">Tangail</option>
                  <option value="Bugura">Bugura</option>
                  <option value="Nachole">Nachole</option>
                  <option value="Bholohat">Bholohat</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="form-control-label">
                  Select Thana <span className="text-danger">*</span>
                </label>
                <select
                  className="form-select mw-100 mt-0"
                  aria-label="Default select example"
                  name="thana"
                  id="thana"
                >
                  <option value="">...</option>
                  <option value="Gomastapur">Gomastapur</option>
                  <option value="Khesapur">Khesapur</option>
                  <option value="Mirarpur">Mirarpur</option>
                  <option value="Bholohat">Bholohat</option>
                </select>
              </div>
              <div className="mb-2">
                <label htmlFor="address">
                  Address <span className="text-danger">*</span>
                </label>
                <input
                  className="form-control shadow-none false"
                  name="address"
                  type="text"
                  autoComplete="off"
                  defaultValue=""
                />
              </div>
              <div className="discount">
                <span className="disspan">
                  <strong className="disStrong">50%</strong> Discount With Sign
                  Up Fee
                </span>
              </div>
              <label className="form-label mt-2">
                Select Your Preferable Package{" "}
                <span className="text-danger">*</span>
              </label>
              <select
                name="package"
                className="form-select mw-100 mt-0 fw-700"
                aria-label="Default select example"
                id="selector"
                style={{ backgroundColor: "rgb(220, 220, 220)" }}
              >
                <option value="">Select Package</option>
                <option className="customOption">P1 - 100</option>
                <option className="customOption">P2 - 200</option>
                <option className="customOption">P3 - 300</option>
                <option className="customOption">P4 - 400</option>
                <option className="customOption">P5 - 500</option>
                <option className="customOption">P6 - 750</option>
                <option className="customOption">P7 - 1000</option>
                <option className="customOption">P8 - 1250</option>
                <option className="customOption">P9 - 1500</option>
                <option className="customOption">P10 - 2000</option>
                <option className="customOption">P11 - 2500</option>
                <option className="customOption">P12 - 3000</option>
                <option className="customOption">P13 - 4000</option>
                <option className="customOption">P14 - 5000</option>
              </select>
              <div className="pakinfo mt-2">
                <span>
                  Customers : <span />
                </span>
                <span className="insFeespan">
                  Sign Up Fee :
                  <span className="strikethrough">
                    <span />
                  </span>
                  <span className="mainfee">
                    <span />
                  </span>
                </span>
                <span>
                  Month Fee : <span />
                </span>
              </div>
              <label className="form-label mt-2">Customer Type </label>
              <div className="input-group justify-content-between">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="pppoe"
                    defaultValue="pppoe"
                    onChange={handleValidation}
                    defaultChecked=""
                  />
                  <label className="form-check-label" htmlFor="pppoe">
                    PPPOE
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="static"
                    defaultValue="static"
                    onChange={handleValidation}
                  />
                  <label className="form-check-label" htmlFor="static">
                    Static
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="hotspot"
                    defaultValue="hotspot"
                    onChange={handleValidation}
                  />
                  <label className="form-check-label" htmlFor="hotspot">
                    Hotspot
                  </label>
                </div>
              </div>
              <div className="customInputGroup">
                <div className="referanceField">
                  <div className="mb-2">
                    <label htmlFor="refName">Reference Name </label>
                    <input
                      className="form-control shadow-none false"
                      name="refName"
                      type="text"
                      autoComplete="off"
                      defaultValue=""
                    />
                  </div>
                  <div className="mb-2">
                    <label htmlFor="refMobile">Reference Mobile </label>
                    <input
                      className="form-control shadow-none false"
                      name="refMobile"
                      type="text"
                      autoComplete="off"
                      defaultValue=""
                    />
                  </div>
                </div>
              </div>
              <button type="submit" className="submitBtn">
                Register
              </button>
              <a className="" href="/">
                <button
                  className="w-45 btn  btn-secondary registerCacleBtn"
                  type="button"
                >
                  Cancel
                </button>
              </a>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
