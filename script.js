async function uploadFile() {
  const fileInput = document.getElementById("fileInput");
  const status = document.getElementById("status");

  if (!fileInput.files.length) {
    status.innerText = "Please select file";
    return;
  }

  const file = fileInput.files[0];
  const formData = new FormData();
  formData.append("file", file);

  status.innerText = "Uploading...";

  try {
    const response = await fetch("YOUR_BACKEND_URL/upload", {
      method: "POST",
      body: formData
    });

    const result = await response.text();
    status.innerText = "Success: " + result;

  } catch (error) {
    status.innerText = "Error uploading file";
  }
}
