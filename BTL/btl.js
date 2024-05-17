function scrolll(imageContainerId){
    var left=document.getElementById(imageContainerId);
    left.scrollBy(-450,0)
    
}
function scrollr(imageContainerId){
    var right=document.getElementById(imageContainerId);
    right.scrollBy(450,0)
    
}

function openModal(ModelId) {
    var modal2 = document.getElementById(ModelId);
    modal2.style.display = "block";
}


function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "none";
    // Find the iframe element within the modal
    const iframe = modal.querySelector("iframe");

    // Check if an iframe exists and pause it
    if (iframe) {
        const iframeSrc = iframe.src;
        iframe.src = iframeSrc; // This reloads the iframe, effectively pausing the video
    }
}













