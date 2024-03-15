export const handleSidebar = (e) => {
  if (e.target.classList.contains('menu')) {
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.remove('hidden');
  } else {
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.add('hidden');
  }
}