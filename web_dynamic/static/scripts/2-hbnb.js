// Listen for changes on each input checkbox tag (class = "amenity-checkbox"):
// if the checkbox is checked, you must store the Amenity ID in a variable (dictionary or list)
// if the checkbox is unchecked, you must remove the Amenity ID from the variable
// update the h4 tag inside the div Amenities with the list of Amenities checked className = "amenity-h4"
// Your script must be executed only when DOM is loaded
// You must use JQuery
// Request http://0.0.0.0:5001/api/v1/status/:
// If in the status is “OK”, add the class available to the div#api_status
// Otherwise, remove the class available to the div#api_status

$(document).ready(function () {
  $.get("http://0.0.0.0:5001/api/v1/status/", function (data) {
    if (data.status === "OK") {
      $("#api_status").addClass("available");
    } else {
      $("#api_status").removeClass("available");
    }
  });

  const amenityDict = {};
  $("input[type=checkbox]").click(function () {
    if ($(this).is(":checked")) {
      amenityDict[$(this).data("id")] = $(this).data("name");
    } else {
      delete amenityDict[$(this).data("id")];
    }
    $(".amenities h4").text(Object.values(amenityDict).join(", "));
  });
});
