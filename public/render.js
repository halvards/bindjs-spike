'use strict';

module.exports = () => {
  if (document.readyState != 'loading') {
    renderOnHashChange();
  } else {
    document.addEventListener('DOMContentLoaded', renderOnHashChange);
  }

  function renderOnHashChange() {
    window.addEventListener('hashchange', () => {
      render(window.location.hash);
    });
  }

  function render(route) {
    Array.prototype.forEach.call(document.querySelectorAll('.page'), (page, i) => {
      page.style.display = 'none';
    });
    const routes = {
      '': require('./home'),
      '#other': require('./other')
    };
    if (routes[route]) {
			routes[route]();
		} else {
      require('./error')();
    }
  }
}
