function setupTabs() {
  let buttons = document.querySelectorAll('.gym-membership__tabs-nav-button');
  let tabPanels = document.querySelectorAll('.gym-membership__tabs-panel');

  for (let i = 0; i < buttons.length; i++) {

    buttons[i].addEventListener('click', (e) => {

      let activeTabAttr = e.target.getAttribute('data-tab');

      for (let j = 0; j < buttons.length; j++) {
        let contentAttr = tabPanels[j].getAttribute('data-tab-content');

        if (activeTabAttr === contentAttr) {
          buttons[j].classList.add('gym-membership__tabs-nav-button--active');
          tabPanels[j].classList.add('gym-membership__tabs-panel--active');
        } else {
          buttons[j].classList.remove('gym-membership__tabs-nav-button--active');
          tabPanels[j].classList.remove('gym-membership__tabs-panel--active');
        }
      }
    });
  }
}

export {setupTabs};
