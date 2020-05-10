window.onload = async function () {
    const arbanbiApi = await fetch("https://my.api.mockaroo.com/airbnbgamaacademy.json?key=4fbeba30")
        .then(res => res.json())
        .then(data => {
            return data;
        })
        .catch(err => {
            throw err;
        });

    function createCards() {
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
    }

    function locationMaps() {
        var mapOptions = {
            center: new google.maps.LatLng(-34.397, 150.644),
            zoom: 2.8,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map_canvas"),
            mapOptions);


        arbanbiApi.map((ponto, index) => {

            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(ponto.latitude, ponto.longitude),
                title: ponto.name,
                map: map
            });

        });

    }

    createCards();
    locationMaps();
}