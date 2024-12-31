$(document).ready(function () {
  $("#navbar").load("sections/navbar.html");
  $("#hero").load("sections/hero.html");
  $("#about").load("sections/about.html");
  $("#service").load("sections/service.html");
  $("#contact").load("sections/contact.html");
  $("#footer").load("sections/footer.html");
});

$(document).ready(function () {
  // Add click event listener to all buttons with class "tab-button"
  $(".tab-button").click(function () {
    console.log("Button clicked:", $(this).data("tab")); // Debugging

    // Remove active class from all buttons
    $(".tab-button").removeClass("bg-green-500").addClass("bg-gray-500");
    // Add active class to the clicked button
    $(this).removeClass("bg-gray-500").addClass("bg-green-500");

    // Hide all tab content
    $(".tab-content").addClass("hidden");
    // Show the selected tab content
    const tabId = $(this).data("tab");
    $(`#${tabId}`).removeClass("hidden");
  });
});
