const ToFormBodyAppender = {
    Append(container) {
      const formBodyContainer = document.querySelector("#form-body");
      formBodyContainer.appendChild(container);
    },
  };

export default ToFormBodyAppender;