const imageInput = document.getElementById("imageInput");
const previewContainer = document.getElementById("previewContainer");

imageInput.addEventListener("change", function(event){
    const files = event.target.files;
    previewContainer.innerHTML = " ";

    for (const file of files) {
        if (! file.type.startsWith("image/"))  continue;
        const reader = new FileReader();
        reader.readAsDataURL(file);
    
        reader.onload = function(e) {
            const imagePreview = document.createElement("div");
            imagePreview.classList.add("preview");
    
            const img = document.createElement("img");
            img.src = e.target.result;
    
            imagePreview.appendChild(img);
            previewContainer.appendChild(imagePreview);
    
            const removeBtn = document.createElement("button");
            removeBtn.textContent = "x";
            removeBtn.classList.add("remove-btn");
    
            removeBtn.addEventListener("click", () => {
                imagePreview.remove();
            })
    
            imagePreview.appendChild(removeBtn);
            previewContainer.appendChild(imagePreview);
        }
    }

   
}) 

