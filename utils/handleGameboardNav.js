const handleGameboardNav = (categories, router) => {
  if (!categories.length) {
    window.location.href = "/";
  }

  window.onbeforeunload = () => true;
  history.pushState(null, null, window.location.href);
  window.onpopstate = () => {
    const leavePage = confirm(
      "This will end your progress. Are you sure you want to do this?"
    );
    if (leavePage) {
      router.push("/");
    } else {
      history.pushState(null, null, window.location.href);
    }
  };
};

export default handleGameboardNav;
