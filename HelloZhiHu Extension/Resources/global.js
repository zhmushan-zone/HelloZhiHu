wait().then((_) => {
  qs(".AppHeader").parentElement.style.display = "none";

  const style = document.createElement("style");
  style.textContent = /* css */ `
  .App-main {
    width: 100vw;
    overflow-x: hidden;
  }
  .SearchBar-input {
    position: sticky;
    top: 0;
    z-index: 2;
  }
  [class*=feedAd] {
    display: none;
  }
  `;
  document.body.append(style);
});

/**
 * @param {string} s
 * @returns {HTMLElement}
 */
function qs(s) {
  return document.querySelector(s);
}

/**
 * @param {string} s
 * @returns {HTMLElement[]}
 */
function qsa(s) {
  return Array.from(document.querySelectorAll(s));
}

/**
 * @returns {Promise<HTMLElement>}
 */
async function wait() {
  return new Promise((resolve) => {
    const tmp = setInterval((_) => {
      const mainApp = qs(".App-main");
      if (mainApp) {
        resolve(mainApp);
        clearInterval(tmp);
      }
    }, 100);
  });
}

/**
 * @returns {void}
 */
function loadLinkSelf() {
  const links = qsa(".ContentItem-title a");
  for (const i of links) {
    i.target = "_self";
  }
}
