const statusBox = {
    element: null,
    setMessage: (text) => {
      statusBox.element.innerText = text;
    },
    hide: () => {
      statusBox.element.classList.remove("show");
      statusBox.element.classList.add("hide");
    },
    show: () => {
      statusBox.element.classList.remove("hide");
      statusBox.element.classList.add("show");
    }
}

statusBox.showMessage = (text) => {
  statusBox.setMessage(text);
  statusBox.show();
}

statusBox.element = document.getElementById("status-message");
console.log("Status Box is", statusBox.element)