window.onload = async function () {
    const arbanbiApi = await fetch("https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72")
        .then(res => res.json())
        .then(data => {
            return data;
        })
        .catch(err => {
            throw err;
        });



    let types = arbanbiApi.map(d => d.property_type);


    types = [...new this.Set(types)];


    arbanbiApi.map((result) => {
        let id = `section-${result.property_type}`;
     
        const container = document.getElementById(id);

        // Create card element
        const card = document.createElement('div');
        card.classList = 'card-body';

        const content = `
        <div class="cards">
            <img src="${result.photo}" alt=""
            >
            <header class="header-cards"><h3>${result.name.toUpperCase()}</h3></header>
            <p>Preço da diaria: ${result.price},00 R$</p>
            
            <p>${result.property_type}</p>
        </div>

      </div>
    </div>
  </div>
  `;

        // Append newyly created card element to the container
        container.innerHTML += content;
    })

    function selectionClass(type) {

    }

    function createCard() {
        let container = document.getElementById('section-a');

        document.createElement("div")

    }

}