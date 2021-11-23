wait().then((mainApp) => {
  mainApp.insertAdjacentElement("beforebegin", qs(".SearchBar-input"));
  mainApp.replaceChildren(qs(".Topstory-mainColumnCard"));
  loadLinkSelf();
});
