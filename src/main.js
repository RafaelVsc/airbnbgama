// Faremos as requisações em uma API externa, cujo endpoint já está listado abaixo.
const API_URL = "https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72";


fetch(API_URL)
  .then(response => response.text())
  .then(result => {

    const data = JSON.parse(result);
    console.log(data);

    data.map((element) => {

      const { photo, property_type, name, price } = element;


      let row = document.getElementById("row");


      let div = document.createElement("div");

      div.setAttribute("class", "col-md-4");


      let card = document.createElement("div");
      card.setAttribute("class", "card mb-4 box-shadow");


      let image = document.createElement("img");
      image.src = photo;
      image.className = "card-img-top";

      let cardBody = document.createElement("div");
      cardBody.setAttribute("class", "card-body");


      let cardText = document.createElement("div");
      cardText.setAttribute("class", "card-text");


      let propertyType = document.createElement('p');
      propertyType.className = "property-type";
      propertyType.innerText = property_type;

      let propertyName = document.createElement('p');
      propertyName.innerText =  name

      let propertyPrice = document.createElement('p');
      propertyPrice.innerText = price;
      
     



      //botão do modal #TODO
      let modalButton = document.createElement('button');
      modalButton.className = "btn btn-primary";
      modalButton.id = "openModal"
      modalButton.type = "button";
      modalButton.innerText = "Ver mais";
      modalButton.setAttribute("data-toggle", "modal")
      modalButton.setAttribute("data-target", "#modalAirBnB")
      modalButton.setAttribute("onclick", "openModal(this, )")

      row.appendChild(div);
      div.appendChild(card);
      card.appendChild(image);
      card.appendChild(cardBody);
      cardText.appendChild(propertyType);
      cardText.appendChild(propertyName);
      cardText.appendChild(propertyPrice);
      cardBody.appendChild(cardText);
      card.appendChild(modalButton);
    });
  });
