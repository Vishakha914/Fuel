document.getElementById("orderForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var fuelType = document.getElementById("fuelType").value;
    var quantity = document.getElementById("quantity").value;
  
    // Simulate order processing (replace with actual implementation)
    setTimeout(function() {
      document.getElementById("orderStatus").innerHTML = "Order placed successfully! You ordered " + quantity + " litres of " + fuelType + ".";
    }, 2000);
  });
  