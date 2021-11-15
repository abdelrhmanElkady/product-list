
var prodConatiner;

if (localStorage.getItem("productsData") == null) {
    prodConatiner = [];
} else {
    prodConatiner = JSON.parse(localStorage.getItem("productsData"))
    displayProducts()
}

function addProd() {
    var prodName = document.getElementById("prodName").value;
    var prodPrice = document.getElementById("prodPrice").value;
    var prodCat = document.getElementById("prodCat").value;
    var prodDesc = document.getElementById("prodDesc").value;

    if(validateForm(prodName))
    {
        var product = {
            name: prodName,
            price: prodPrice,
            category: prodCat,
            description: prodDesc
        }
    
        prodConatiner.push(product);
        localStorage.setItem("productsData", JSON.stringify(prodConatiner))
        displayProducts();
        clearForm();
    }

    
}

function displayProducts() {

    var temp = "";
    for (var i = 0; i < prodConatiner.length; i++) {

        temp += `<div class="col-3 position-relative mt-4">
        <img src="images/2.jpg" class="img-fluid">
        <h5>`+ prodConatiner[i].name + `<span class="badge bg-primary text-white ml-3">` + prodConatiner[i].category + `</span></h5>
        <p>`+ prodConatiner[i].description + `</p>
        <button class="btn btn-danger" onclick="deleteProd(`+ i + `)">Delete</button>
        <div class="pprice position-absolute text-white">`+ prodConatiner[i].price + `</div>
     </div>`
    }

    document.getElementById("display").innerHTML = temp;
}

function clearForm() {
    var inputs = document.getElementsByClassName("form-control");
    for (var i = 0; i < inputs.length; i++) {

        inputs[i].value = ""
    }
}

function deleteProd(indx) {
    prodConatiner.splice(indx,1);
    localStorage.setItem("productsData", JSON.stringify(prodConatiner))
    displayProducts()

}

function prodSearch(word) {
    var temp = "";
    for (var i = 0; i < prodConatiner.length; i++) {
        if (prodConatiner[i].name.toLowerCase().includes(word.toLowerCase())) {
            temp += `<div class="col-3 position-relative mt-4">
        <img src="images/2.jpg" class="img-fluid">
        <h5>`+ prodConatiner[i].name + `<span class="badge bg-primary text-white ml-3">` + prodConatiner[i].category + `</span></h5>
        <p>`+ prodConatiner[i].description + `</p>
        <button class="btn btn-danger" onclick="deleteProd(`+ i + `)">Delete</button>
        <div class="pprice position-absolute text-white">`+ prodConatiner[i].price + `</div>
     </div>`
        }
    }

    document.getElementById("display").innerHTML = temp;

}

function validateForm(name){

    var nameRgex = /^[A-Z][a-z]{1,20}$/

    if(nameRgex.test(name)){
        
        return true;
    }else{
        window.alert("the name must begin with Capital character and must be between 4 and 9")
    }
}
