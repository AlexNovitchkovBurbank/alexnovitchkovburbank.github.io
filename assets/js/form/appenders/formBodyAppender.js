const formBodyAppender = {
    Append(container) {
      const formBodyContainer = document.querySelector("#form-body");
      formBodyContainer.appendChild(container);
    },
  };

export default formBodyAppender;
