// ============================== form section start ==============================
// select form data
const form = document.querySelector("form");

// select output for show response data
const output = document.getElementById("output");

// run event on form submit
form.addEventListener("submit", function (e) {
  e.preventDefault();

  //clear output data
  output.innerHTML = "";

  // error message
  const errorMsg = document.querySelector(".error-msg");
  errorMsg.innerHTML = "";

  // get form data
  const formData = new FormData(form);

  // input file
  const file = e.target.thumbnail.files[0];
  if (file) {
    fetchData(formData);
  } else {
    errorMsg.innerHTML = "Please select a file";
  }
});

// ============================== form section end ==============================

// ============================== Fetch data section start ==============================
const fetchData = async (data) => {
  spinner(true);
  const res = await fetch("https://whatsapp.devsujon.com/api/v1/fishial", {
    method: "POST",
    body: data,
  });
  const formData = await res.json();
  showDataOnUi(formData);
  spinner(false);
};
// ============================== Fetch data section end ==============================

// ============================== Show data on ui section start ==============================
const showDataOnUi = (data) => {
  const { species } = data.data.results[0];
  const { name } = species[0];

  // destructure fish image link
  const { mediaUri } = species[0]["fishangler-data"].photo;

  // clear output element
  output.innerHTML = "";

  // create h4 element for show fish name
  const h4 = document.createElement("h4");
  h4.classList.add("my-3");
  h4.classList.add("text-capitalize");
  h4.classList.add("text-warning");

  h4.innerText = `Fish Name: ${name}`;

  //create image element for show fish image and set src
  const img = document.createElement("img");
  img.src = mediaUri;
  img.style.width = "100%";
  img.classList.add("rounded");

  // append all element
  output.appendChild(h4);
  output.appendChild(img);

  // clear form element
  form.reset();
};
// ============================== Show data on ui section end ==============================

// ============================== Loader section start ==============================

const spinner = (isTrue) => {
  const loader = document.getElementById("loader");

  isTrue
    ? (loader.innerHTML = `
  <div class="spinner-border text-warning" role="status">
  <span class="visually-hidden">Loading...</span>
  </div>
  `)
    : (loader.innerHTML = "");
};

// ============================== Loader section end ==============================
