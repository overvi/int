const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab-content");
const tabsArr = Array.from(tabs);

tabs.forEach((tab) => {
  tab.addEventListener("click", function () {
    if (tab.classList.contains("has-map")) {
      import("./general-info").then((map) => {
        setTimeout(() => {
          map.map.invalidateSize();
        }, 1000);
      });
    }
    const parentTab = tab.closest(".tab-content");
    tabs.forEach((tab2) => {
      if (!parentTab || parentTab.id !== tab2.getAttribute("data-tab")) {
        tab2.classList.remove("active");
      }
    });

    // Get the data-tab target
    const target = tab.getAttribute("data-tab");

    console.log(document.getElementById(target))
    tabContents.forEach((tc) => {
      if (!parentTab || parentTab.id !== tc.id) {
        tc.classList.add("hidden");
      }
    });

    // Activate the clicked tab
    tab.classList.add("active");
    document.getElementById(target).classList.remove("hidden");
    const targetContent = document.getElementById(target);

    const childTabs = targetContent.querySelectorAll(".tab");
    if (childTabs.length > 0) {
      const firstChildTab = childTabs[0];
      firstChildTab.click(); // Programmatically trigger the click event
    }
  });
});
