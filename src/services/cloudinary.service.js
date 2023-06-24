const SHUNNO_STORAGE_TOKEN =
  process.env.SHUNNO_STORAGE_TOKEN ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJsamEzenN6ayIsImlhdCI6MTY4NzYxNzY4MSwiZXhwIjo5MDA3MTk5MjU0NzQwOTkxLCJ0eXBlIjoiQVBJX0tFWSJ9.Ocm2DpKlZlysWOZuJknRZnlrtaOuNQW4MvsLGIb7DRw";

export const SHUNNO_STORAGE_BASE_URL =
  process.env.SHUNNO_STORAGE_TOKEN || "http://139.84.135.222:4500";

export const fileUpload = async (file) => {
  let result = null;

  let formData = new FormData();
  formData.append("files", file);
  // formData.append(
  //   "files",
  //   `${process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET}`
  // );

  await fetch(`${SHUNNO_STORAGE_BASE_URL}/api/v1/vault`, {
    method: "POST",
    body: formData,
    headers: new Headers({
      Authorization: `Bearer ${SHUNNO_STORAGE_TOKEN}`,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      result = data;
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  return result;
};
