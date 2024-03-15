export const handleOptions = (e, device) => {
  e.target.nextElementSibling.classList.toggle('hidden');
  e.target.nextElementSibling.nextElementSibling.classList.toggle('hidden');
  if (device === 'D') {
    e.target.parentElement.nextElementSibling.classList.toggle('hidden')
  } else {
    
    if (e.target.textContent === 'Features') {
      const features__options = document.querySelector('.features__options');
      features__options.classList.toggle('hidden');
    } else {
      const company__options = document.querySelector('.company__options');
      company__options.classList.toggle('hidden');
    }
  }
}