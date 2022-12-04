const tabsContent = document.querySelector('.tabs__content--nojs');
tabsContent.classList.remove('tabs__content--nojs');

const tabsContentInner = document.querySelectorAll('.tabs__content-inner--nojs');
tabsContentInner.forEach((contentInner) => {
  contentInner.classList.remove('tabs__content-inner--nojs');
});

document.querySelectorAll('.tabs__item').forEach((item) =>
  item.addEventListener('click', function (evt) {
    evt.preventDefault();
    const id = evt.target.getAttribute('href').replace('#', '');

    document.querySelectorAll('.tabs__item').forEach(
        (child) => child.classList.remove('tabs__item--active')
    );
    document.querySelectorAll('.tabs__content-inner').forEach(
        (child) => child.classList.remove('tabs__content-inner--active')
    );

    item.classList.add('tabs__item--active');

    document.getElementById(id).classList.add('tabs__content-inner--active');
  })
);

const tabs = () => {
  document.querySelector('.tabs__item').click();
};

export {tabs};
