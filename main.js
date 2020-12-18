const input = document.getElementById('input'), add = document.getElementById("add"), list = document.getElementById("list");

add.onclick = function (){
  if(input.value == "" | input.value == " "| input.value == "   "){
    alert("fill in an some text")
    return;
  }else{
  var li = document.createElement("LI")
  var span = document.createElement("SPAN")
  var x = document.createTextNode("delete")
  var value = document.createTextNode(input.value)
  span.append(x)
  li.prepend(value)
  li.append(span)
  span.classList.add("close")
  list.appendChild(li)
  callback()
  input.value = ""
  }
}

var span = document.getElementsByClassName("close")
function callback(){
for (var i = 0; i < span.length; i++) {
  span[i].onclick = function(){
   var it = this.parentElement
    it.remove()
  }
}
}

callback()