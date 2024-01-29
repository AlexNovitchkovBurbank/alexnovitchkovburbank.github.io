const ToFormBodyAppender = {
    Append(container) {
      const formBodyElement = document.querySelector("#form-body");
      formBodyElement.appendChild(container);
    },
  };

export default ToFormBodyAppender;