const dropArea = document.getElementById("drop-area");
const fileInput = document.getElementById("file-input");
const cancelUpload = document.getElementById("cancel-upload");
const previewContainer = document.getElementById("preview-container");

// Utility function to prevent default browser behavior
function preventDefaults(e) {
  e.preventDefault();
  e.stopPropagation();
}

// Preventing default browser behavior when dragging a file over the container
dropArea.addEventListener("dragover", preventDefaults);
dropArea.addEventListener("dragenter", preventDefaults);
dropArea.addEventListener("dragleave", preventDefaults);

// Handling dropping files into the area
dropArea.addEventListener("drop", handleDrop);

// We’ll discuss `handleDrop` function down the road
function handleDrop(e) {
  e.preventDefault();

  // Getting the list of dragged files
  const files = e.dataTransfer.files;

  // Checking if there are any files
  if (files.length) {
    // Assigning the files to the hidden input from the first step
    fileInput.files = files;

    // Processing the files for previews (next step)
    handleFiles(files);
  }
}

// We’ll discuss `handleFiles` function down the road
function handleFiles(files) {
  for (const file of files) {
    // Initializing the FileReader API and reading the file
    const reader = new FileReader();
    reader.readAsDataURL(file);

    // Once the file has been loaded, fire the processing
    reader.onloadend = function (e) {
      const preview = document.createElement("img");

      if (isValidFileType(file)) {
        preview.src = e.target.result;
      }

      // Apply styling
      preview.classList.add("preview-image");

      previewContainer.innerHTML = "";
      previewContainer.appendChild(preview);
    };
  }
}

// We’ll discuss `isValidFileType` function down the road
function isValidFileType() {
  return true;
}

dropArea.addEventListener("dragover", () => {
  dropArea.classList.add("drag-over");
});

dropArea.addEventListener("dragleave", () => {
  dropArea.classList.remove("drag-over");
});
function isValidFileType(file) {
  const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
  return allowedTypes.includes(file.type);
}

cancelUpload.addEventListener("click", () => {
  if (previewContainer.innerHTML) {
    previewContainer.innerText = "";
  }
});
