import { useState } from "react";
import "./App.css";

function App() {
  const [customerType, setCustomerType] = useState([]);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState("");

  // referenceAddress
  const [refDistrict, setRefDistrict] = useState("");
  const [districtCode, setDistrictCode] = useState("");
  const [refUpazila, setRefUpazila] = useState("");
  const [upazilaCode, setUpazilaCode] = useState("");
  const [refVillage, setRefVillage] = useState("");
  const [refUnion, setRefUnion] = useState("");
  const [refPostOffice, setRefPostOffice] = useState("");

  // handle form data
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;

    // get form input values
    const companyName = form.company.value;
    const name = form.name.value;
    const mobile = form.mobile.value;
    const email = form.email.value;
    const division = form.division.value;
    const district = form.district.value;
    const thana = form.thana.value;
    const packageName = form.package.value;
    const refName = form.refName.value;
    const refMobile = form.refMobile.value;

    // reference address
    const referenceAddress = {
      referenceAddressDistrict: {
        refDistrict,
        referenceAddressDistrictUpazila: {
          refUpazila,
          referenceAddressDistrictUpazilaVillage: refVillage,
          referenceAddressDistrictUpazilaUnion: refUnion,
          referenceAddressDistrictUpazilaPostOffice: refPostOffice,
        },
        districtCode,
      },
      upazilaCode,
    };

    // set data
    let data = {
      companyName,
      name,
      mobile,
      email,
      division,
      district,
      thana,
      package: { packageName, customerType },
      reference: {
        refName,
        refMobile,
        referenceAddress,
      },
    };

    // validation
    if (
      data.company === "" ||
      data.name === "" ||
      data.mobile === "" ||
      data.email === "" ||
      data.division === "" ||
      data.district === "" ||
      data.thana === "" ||
      emailError ||
      phoneError
    ) {
      alert("Please fill all the fields currently");

      return;
    }

    form.reset();
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
                  type="number"
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
                  <option>...</option>
                  <option>Barishal</option>
                  <option>Chattogram</option>
                  <option>Dhaka</option>
                  <option>Khulna</option>
                  <option>Rajshahi</option>
                  <option>Rangpur</option>
                  <option>Sylhet</option>
                  <option>Mymensingh</option>
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

                {/* reference address  */}
                <div className="bg-light p-2 rounded">
                  <h5 className="text-primary">Reference address</h5>

                  <div className="mb-3">
                    <label className="form-control-label">
                      Select District <span className="text-danger">*</span>
                    </label>
                    <select
                      className="form-select mw-100 mt-0"
                      aria-label="Default select example"
                      name="refDistrict"
                      id="refDistrict"
                      onChange={(e) => setRefDistrict(e.target.value)}
                      value={refDistrict}
                    >
                      <option value="">...</option>
                      <option value="Tangail">Tangail</option>
                      <option value="Bugura">Bugura</option>
                      <option value="Nachole">Nachole</option>
                      <option value="Bholohat">Bholohat</option>
                    </select>
                  </div>
                  <div className="mb-2">
                    <label htmlFor="company">
                      District Zip code <span className="text-danger">*</span>
                    </label>
                    <input
                      className="form-control shadow-none false"
                      name="districtCode"
                      type="text"
                      autoComplete="off"
                      onChange={(e) => setDistrictCode(e.target.value)}
                      value={districtCode}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-control-label">
                      Select Upazila <span className="text-danger">*</span>
                    </label>
                    <select
                      className="form-select mw-100 mt-0"
                      aria-label="Default select example"
                      name="refUpazila"
                      id="refUpazila"
                      onChange={(e) => setRefUpazila(e.target.value)}
                      value={refUpazila}
                    >
                      <option value="">...</option>
                      <option value="Gomastapur">Gomastapur</option>
                      <option value="Khesapur">Khesapur</option>
                      <option value="Mirarpur">Mirarpur</option>
                      <option value="Bholohat">Bholohat</option>
                    </select>
                  </div>

                  <div className="mb-2">
                    <label htmlFor="company">
                      Upazila Zip code <span className="text-danger">*</span>
                    </label>
                    <input
                      className="form-control shadow-none false"
                      name="upazilaCode"
                      type="text"
                      autoComplete="off"
                      value={upazilaCode}
                      onChange={(e) => setUpazilaCode(e.target.value)}
                    />
                  </div>

                  <div className="mb-2">
                    <label htmlFor="company">
                      Village <span className="text-danger">*</span>
                    </label>
                    <input
                      className="form-control shadow-none false"
                      name="refVillage"
                      type="text"
                      autoComplete="off"
                      value={refVillage}
                      onChange={(e) => setRefVillage(e.target.value)}
                    />
                  </div>
                  <div className="mb-2">
                    <label htmlFor="company">
                      Union <span className="text-danger">*</span>
                    </label>
                    <input
                      className="form-control shadow-none false"
                      name="refUnion"
                      type="text"
                      autoComplete="off"
                      value={refUnion}
                      onChange={(e) => setRefUnion(e.target.value)}
                    />
                  </div>
                  <div className="mb-2">
                    <label htmlFor="company">
                      Post office <span className="text-danger">*</span>
                    </label>
                    <input
                      className="form-control shadow-none false"
                      name="refPostOffice"
                      type="text"
                      autoComplete="off"
                      value={refPostOffice}
                      onChange={(e) => setRefPostOffice(e.target.value)}
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
