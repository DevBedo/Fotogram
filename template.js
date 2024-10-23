function getGalleryTemplate(index) {
    return `<img onclick="toggleDialog(${index})" class="images" src="${myImgs[index]}">`;
  }
  
function toggleDialog(index) {
    document.body.classList.add('no-scroll');
    let element = document.getElementById("overlay");
    element.classList.remove("d-none");
    element.innerHTML = `
                <div class="toggledview">
                  <div class="control-icons">
                  <img onclick="prevImage(${index})" class="controls" src="./assets/left.png" alt=""/>
                  <img onclick="closeOverlay()" class="controls" src="./assets/close.png" alt=""/>
                  <img onclick="nextImage(${index})" class="controls" src="./assets/right.png" alt=""/>
                  </div>
                  <img onclick="toggledImageBubblingPrevention(event)" class="imageToggled" src="${myImgs[index]}">
                </div>`;
  }