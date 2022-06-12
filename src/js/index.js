document.querySelectorAll('.toggle-mode').forEach(item =>
{
  item.addEventListener('click', () =>
  {
    document.querySelector('.bacground-gradient').classList.toggle('gradient-mode')
  })
})