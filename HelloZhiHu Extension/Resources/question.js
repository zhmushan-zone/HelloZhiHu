wait().then((mainApp) => {
  mainApp.insertAdjacentElement("beforebegin", qs(".SearchBar-input"));
  mainApp.replaceChildren(
    qs(".QuestionHeader-main"),
    qs(".Question-mainColumn"),
  );

  const questionStyle = document.createElement("style");
  questionStyle.textContent = /* css */ `
  .QuestionHeader-main,
  .Question-mainColumn {
    width: auto;
  }
  `;
  document.body.append(questionStyle);
});
