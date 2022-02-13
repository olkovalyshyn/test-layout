const tabsBtn = document.querySelectorAll('.tabs-btn');
const tabsItems = document.querySelectorAll('.text-tab');

tabsBtn.forEach(function (item) {
  item.addEventListener('click', function () {
    let activeBtn = item;
    let tabId = activeBtn.getAttribute('data-tab');
    let currentTab = document.querySelector(tabId);

    tabsBtn.forEach(function (item) {
      item.classList.remove('active');
    });

    tabsItems.forEach(function (item) {
      item.classList.remove('active');
    });

    activeBtn.classList.add('active');
    currentTab.classList.add('active');
  });
});
