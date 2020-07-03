$(function () {
  $(".datepicker").datepicker({
    dateFormat: "dd-mm-yy",
    duration: "fast",
  });
});

function loadJSON(callback) {
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open(
    "GET",
    "https://www.json-generator.com/api/json/get/cfuZQZrwqG?indent=2",
    true
  );
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
      callback(xobj.responseText);
    }
  };
  xobj.send(null);
}

var cities = [],
  properties = [];
var select1, select2;

loadJSON(function (response) {
  jsonresponse = JSON.parse(response);
  select1 = document.getElementById("city-dropdown");
  select2 = document.getElementById("apartment-dropdown");

  var option;
  for (var i = 0; i < jsonresponse.length; i++) {
    option =
      '<option value="' +
      jsonresponse[i].name +
      '">' +
      jsonresponse[i].name +
      "</option>";
    select1.innerHTML += option;
  }

  select1.addEventListener("change", function (el) {
    select2.innerHTML = '<option value="">Choose an Apartment</option>';

    for (var i = 0; i < jsonresponse.length; i++) {
      if (jsonresponse[i].name == select1.value) {
        for (var j = 0; j < jsonresponse[i].properties.length; j++) {
          option =
            '<option value="' +
            jsonresponse[i].properties[j].name +
            '">' +
            jsonresponse[i].properties[j].name +
            "</option>";
          select2.innerHTML += option;
        }
        break;
      }
    }
  });
});

document.querySelector(".search-form").addEventListener("submit", function (e) {
  // e.preventDefault();

  var selected_city = select1.value;
  var selected_apartment = select2.value;
  var check_in = document.querySelectorAll('[name="check-in-date"]')[0].value;
  var check_out = document.querySelectorAll('[name="check-out-date"]')[0].value;
  console.log(selected_city);
  console.log(selected_apartment);
  console.log(check_in);
  console.log(check_out);
});
