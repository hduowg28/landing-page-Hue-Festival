const tientrinh = document.getElementById("progress-bar");

function slectY(id) {
  var file = ".years/y1976.html";
  console.log(file);
  console.log(id);

  switch (id) {
    case "y1": {
      tientrinh.style.width = "8%";
      file = "./years/y1976.html";
      break;
    }


    case "y2":
      tientrinh.style.width = "25%";
      file = "./years/y1986.html";
      break;
    case "y3":
      tientrinh.style.width = "40%";
      file = "./years/y1996.html";
      break;
    case "y4":
      tientrinh.style.width = "59%";
      file = "./years/y2006.html";
      break;
    case "y5":
      tientrinh.style.width = "76%";
      file = "./years/y2016.html";
      break;
    case "y6":
      tientrinh.style.width = "100%";
      file = "./years/y2026.html";
      break;

    default:
      break;
  }

  $.ajax({
    url: file, success: function (res) {
      console.log(res);

      $("#content").html(res);
    }
  }

  );


}


$(document).ready(function () {
  slectY("y1")
});

