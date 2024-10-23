let myImgs = [
  "./assets/antilopes.jpg",
  "./assets/ballon.jpg",
  "./assets/bison-sunset.jpg",
  "./assets/cheetahs.jpg",
  "./assets/elephant-mom.jpg",
  "./assets/elephant.jpg",
  "./assets/flamingos.jpg",
  "./assets/giraffe-sunset.jpg",
  "./assets/giraffes.jpg",
  "./assets/giraffe_zebra.jpg",
  "./assets/greenseacats.jpg",
  "./assets/hyena.jpg",
  "./assets/impala.jpg",
  "./assets/lion.jpg",
  "./assets/meerkat.jpg",
  "./assets/zebra.jpg",
];

function render() {
  let contentRef = document.getElementById("content");
  for (let index = 0; index < myImgs.length; index++) {
    contentRef.innerHTML += getGalleryTemplate(index);
  }
}

function render2() {
  document.getElementById("content").innerHTML = '';
  let contentRef = document.getElementById("content");
  for (let index = 0; index < myImgs.length; index++) {
    contentRef.innerHTML += getGalleryTemplate(index);
  }
}


function prevImage(index) {
  index = (index - 1 + myImgs.length) % myImgs.length;
  toggleDialog(index);
  event.stopPropagation();
}

function nextImage(index) {
  index = (index + 1) % myImgs.length;
  toggleDialog(index);
  event.stopPropagation();
}

function closeOverlay() {
  let element = document.getElementById("overlay");
  element.classList.add("d-none");
  element.innerHTML = "";
  document.body.classList.remove('no-scroll');
}

function toggledImageBubblingPrevention(event) {
  event.stopPropagation();
}
