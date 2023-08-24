elements = document.querySelectorAll('.NC-NicoadMediaObjectWrapper');
elements.forEach(element => {
  if (element){
    element.style.display = 'none';
  }
});

elements = document.querySelectorAll('.NC-VideoMediaObjectWrapper');
elements.forEach(element => {
  if (element){
    const childDivs = element.querySelectorAll('div');
    const videoId = childDivs[0].getAttribute('data-video-id');
    if(localStorage.getItem(videoId)){
      element.style.display = 'none';
    }
  }
});