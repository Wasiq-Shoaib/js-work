let arr = [
    {
        brand: "Samsung",
        model: "SamsungA30",
        price: "40000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb",
        
    },
    {
        brand: "Samsung",
        model: "SamsungA10",
        price: "40000",
        camera: "40px",
        ram: "4gb",
        rom : "128gb",
        
    },
    {
        brand: "Samsung",
        model: "SamsungA20",
        price: "40000",
        camera: "40px",
        ram: "4gb",
        rom : "128gb",
        
    },
    {
        brand: "Vivo",
        model: "VivoY20",
        price: "20000",
        camera: "40px",
        ram: "2gb",
        rom : "32gb",
        
    },
    {
        brand: "Vivo",
        model: "VivoY11",
        price: "20000",
        camera: "40px",
        ram: "3gb",
        rom : "32gb",
        
    },
    {
        brand: "Vivo",
        model: "VivoY15",
        price: "30000",
        camera: "40px",
        ram: "4gb",
        rom : "64gb",
        
    },
    {
        brand: "Motorola",
        model: "Motorola123",
        price: "5000",
        camera: "2px",
        ram: "2gb",
        rom : "32gb",
        
    },
    {
        brand: "Iphone",
        model: "Iphone12",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb"
    }]

    window.onload = function () {
        updateMobileList(arr);
      };
      
      function updateMobileList(data) {
        var mobileList = document.getElementById("mobileList");
        mobileList.innerHTML = "";
      
        data.forEach(function (mobile) {
          var listItem = document.createElement("li");
          listItem.textContent = `Brand: ${mobile.brand}, Model: ${mobile.model}, Price: $${mobile.price}, Camera: ${mobile.camera}, RAM: ${mobile.ram}, ROM: ${mobile.rom}`;
          mobileList.appendChild(listItem);
        });
      }
      
      function searchMobilePhones() {
        var filterOption = document.getElementById("filterOption").value;
        var filterValue = document.getElementById("filterValue").value.toLowerCase();
      
        if (filterOption === "price") {
          filterValue = parseFloat(filterValue);
        }
      
        var filteredData = arr.filter(function (mobile) {
          // Check if the filter value matches the selected filter option
          if (filterOption === "price") {
            return parseFloat(mobile[filterOption]) === filterValue;
          } else {
            return mobile[filterOption].toLowerCase().includes(filterValue);
          }
        });
      
        updateMobileList(filteredData);
      }
      
      
      
      