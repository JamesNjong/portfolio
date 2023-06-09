const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const square = entry.target.querySelector('.bucket');

    if (entry.isIntersecting) {
      square.classList.add('.animated');
	  return; // if we added the class, exit the function
    }
    // We're not intersecting, so remove the class!
   // square.classList.remove('square-animation');
  });
});

observer.observe(document.querySelector('.page'));