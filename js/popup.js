    var link = document.querySelector(".feedback-link");

    var popup = document.querySelector(".modal-feedback");
    var close = popup.querySelector(".modal-close");

    var darkOverlay = document.querySelector(".modal-dark");

    var form = popup.querySelector("form");
    var userName = popup.querySelector("[name=feedback-user-name]");
    var userEmail = popup.querySelector("[name=feedback-user-email]");
    var message = popup.querySelector("[name=feedback-field]");

    var isStorageSupport = true;
    var storage = "";

    try {
      storage = localStorage.getItem("userName");
    } catch (err) {
      isStorageSupport = false;
    }

    link.addEventListener("click", function(evt) {
      evt.preventDefault();
      popup.classList.add("modal-show");
      darkOverlay.classList.add("modal-overlay");

      if (storage) {
        userName.value = storage;
        userEmail.focus();
      } else {
        userName.focus();
      }
    });

    close.addEventListener("click", function(evt) {
      evt.preventDefault();
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
      darkOverlay.classList.remove("modal-overlay");
    });

    form.addEventListener("submit", function(evt) {
      if (!userName.value || !userEmail.value || !message.value) {
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error");
        evt.preventDefault();
        console.log("Введите, пожалуйста, ваши имя, e-mail и сообщение.");
      } else {
        if (isStorageSupport) {
          localStorage.setItem("userName", userName.value);
        }
      }
    });

    window.addEventListener("keydown", function(evt) {
      if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup.classList.contains("modal-show")) {
          popup.classList.remove("modal-show");
          popup.classList.remove("modal-error");
          darkOverlay.classList.remove("modal-overlay");
        }
      }
    });
