

for (var i = 0; i < 81; i++) {
  var div = document.createElement("div");
  div.style.width = "11.1%";
  div.style.paddingBottom = "11.1%";
  div.style.float = 'left';
  if (i % 2 === 0) {
    div.style.backgroundColor = "black";
  }else {
    div.style.backgroundColor = "red";
  }
  document.body.append(div);
}
