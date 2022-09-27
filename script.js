function priceChange() {
  var checkBox = document.getElementById("pricing");
  var monthly = document.getElementsByClassName("monthly");
  var annually = document.getElementsByClassName("annually");

  if (checkBox.checked) {
    for (var i = 0; i < annually.length; i++) {
      annually[i].style.display = "none";
    }
    for (var i = 0; i < monthly.length; i++) {
      monthly[i].style.display = "block";
    }
  } else {
    for (var i = 0; i < monthly.length; i++) {
      monthly[i].style.display = "none";
    }
    for (var i = 0; i < annually.length; i++) {
      annually[i].style.display = "block";
    }
  }
}
