function setValue(value) {
  localStorage.setItem("currentValue", value.toString());
}

function Submit(params) {
  const currentValue = localStorage.getItem("currentValue");
  if (currentValue) {
    window.location.href = "./degerlendirmeThank.html";
  } else {
    alert("Please Choose Rating!");
  }
}
