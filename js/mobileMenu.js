document.addEventListener('DOMContentLoaded', function () {

  const mobileMenu = document.querySelector('.mobilemenu');
  const menuList = document.querySelector('.menulist');

  if (!mobileMenu || !menuList) {
    return;
  }

  mobileMenu.addEventListener('click', function (event) {

    event.preventDefault();

    const isOpen = menuList.style.display === 'block';

    menuList.style.display = isOpen ? 'none' : 'block';

    mobileMenu.setAttribute(
      'aria-expanded',
      String(!isOpen)
    );

    mobileMenu.setAttribute(
      'aria-label',
      isOpen ? 'Open menu' : 'Close menu'
    );

  });

});

// Mobile submenu handling
const dropdownLinks = document.querySelectorAll(
  '#menu-main-menu li.menu-item-has-children > .dropdownlink'
);

dropdownLinks.forEach(function (dropdownLink) {

  dropdownLink.addEventListener('click', function (event) {

    event.preventDefault();
    event.stopPropagation();

    const menuItem = dropdownLink.parentElement;
    const subMenu = menuItem.querySelector(':scope > .sub-menu');

    if (!subMenu) {
      return;
    }

    const isOpen = subMenu.style.display === 'block';

    subMenu.style.display = isOpen ? 'none' : 'block';

  });

});
