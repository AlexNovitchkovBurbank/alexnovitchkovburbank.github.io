const ToFormBodyAppender = {
    Append(container) {
      const formBodyElement = document.querySelector(".form-body");
      formBodyElement.append(container);
    },
  };

export default ToFormBodyAppender;