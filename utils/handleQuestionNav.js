const handleQuestionNav = (gameStage, categories, router) => {
  if (!categories.length) {
    window.location.href = "/";
  }

  window.onbeforeunload = () => true;
  history.pushState(null, null, window.location.href);
  window.onpopstate = () => {
    alert("Cannot use back button on question pages. You lose!");
    router.push(
      `/gameboard/${gameStage === "final" ? "final/results" : gameStage}`
    );
  };
};

export default handleQuestionNav;
