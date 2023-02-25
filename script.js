/*
Hands-on Project 7-5
TJ H Lopez de Leon
02/23/23
*/

//4
"use strict";
var delivInfo = {};
var delivSummary = document.getElementById("deliverTo");
var foodInfo = {};
var foodSummary = document.getElementById("order");

//5
function processDeliveryInfo(){
   var prop;
   delivInfo.name = document.getElementById("nameinput").value;
   delivInfo.addr = document.getElementById("addrinput").value;
   delivInfo.city = document.getElementById("cityinput").value;
   delivInfo.email = document.getElementById("emailinput").value;
   delivInfo.phone = document.getElementById("phoneinput").value;
   //6
   for (prop in delivInfo) {
      delivSummary.innerHTML += "<p>" + delivInfo[prop] + "</p>";
   }
}

//7-5.5
function processFood() {
   //7-5.5a
   //var prop;
   var crustOpt = document.getElementsByName("crust");
   //var toppings = 0;
   var toppingBoxes = document.getElementsByName("toppings");
   var instr = document.getElementById("instructions");
   //7-5.5b
   if(document.getElementById("thin").checked) {
      foodInfo.crust = crustOpt[0].value;
   } else {
      foodInfo.crust = crustOpt[1].value;
   }
   //7-5.5c
   foodInfo.size = document.getElementById("size").value;
   //7-5.5d
   for (var i=0; i<toppingBoxes.length; i++) {
      if(document.getElementsByName("toppings")[i].checked) {
         foodInfo["topping" + i] += document.getElementsByName("toppings")[i].value;
         //toppings++;
      }
      //document.write(toppings);
   }
   //7-5.5e
   if(instr !== "" || instr !== null) {
      foodInfo.instructions = instr.value;
   }
   //7-5.5f
   foodSummary.innerHTML += "<p><span>Crust</span>: " + foodInfo.crust + "</p>";
   foodSummary.innerHTML += "<p><span>Size</span>: " + foodInfo.size + "</p>";
   foodSummary.innerHTML += "<p><span>Topping(s)</span>: " + "</p>";
   foodSummary.innerHTML += "<ul>";
   for (var i=0; i<6; i++) {
      if(foodInfo["topping" + i]) {
         foodSummary.innerHTML +=  "<li>" + foodInfo["topping" + i] + "</li>";
      }
   }
   foodSummary.innerHTML += "</ul>";
   foodSummary.innerHTML += "<p><span>Instructions</span>: " + foodInfo.instructions;
   document.getElementById("order").style.display = "block";
   
}

//7
function previewOrder() {
    processDeliveryInfo();
    processFood();
    document.getElementById("section").style.display = "block";
}

//8
function createEventlistener() {
    var button = document.getElementById("previewBtn");
    if (button.addEventListener) {
       button.addEventListener("click",previewOrder,false);
    } else if (button.attachEvent) {
       button.attachEvent("onclick",previewOrder);
    }
 }

//9
 if (window.addEventListener) {
    window.addEventListener("load",createEventlistener,false);
 } else if (window.attachEvent) {
    window.attachEvent("onload",createEventlistener,false);
 }
