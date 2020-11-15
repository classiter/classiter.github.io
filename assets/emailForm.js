$(document).ready(function () {
  // Mobile meny JS
  var $toggle = $(".navbar-burger");
  var $menu = $(".navbar-menu");
  $toggle.click(function () {
    $(this).toggleClass("is-active");
    $menu.toggleClass("is-active");
  });

  // Email Form JS
  window.addEventListener("DOMContentLoaded", function () {
    // get the form elements defined in your form HTML above

    var form = document.getElementById("mainForm");
    var button = document.getElementById("mainFormSubmit");
    var status = document.getElementById("mainFormResult");

    // Success and Error functions for after the form is submitted

    function success() {
      form.reset();
      button.style = "display: none ";
      status.classList.remove("is-invisible");
      status.innerHTML = "Your message was sent successfully. Thank you!";
    }

    function error() {
      status.innerHTML = "Oops! There was a problem.";
    }

    // handle the form submission event

    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var data = new FormData(form);
      ajax(form.method, form.action, data, success, error);
    });
  });

  // helper function for sending an AJAX request

  function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  }
});
