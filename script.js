document.querySelector('#btn-search').addEventListener('click', function () {
    const departure = document.querySelector('#search-departure').value;
    const arrival = document.querySelector('#search-arrival').value;
    let date = document.querySelector('#search-date').value;
    date = date.split('/');
    date = date.join('-');

    fetch(`http://localhost:3000/trips/${departure}/${arrival}/${date}`, {
    }).then(response => response.json())
    .then(data => {
        if (data.result) {
            document.querySelector('#content-right').innerHTML = '';
            for (const trip of data.tripsFound) {
                document.querySelector('#content-right').innerHTML +=
                `<div class='tripFound' id='${trip.id}'
                    <span class='DepArr'>${trip.departure}/${trip.arrival}</span>
                    <span class='tripHour'>${trip.date}</span>
                    <span class='tripPrice'>${trip.price}€</span>
                    <button type="button" id="btn-book">Book</button>
                </div>`
                console.log(`${trip.departure}/${trip.arrival}`)
            }
        }
        else if (data.result === false) {
            document.querySelector('#content-right').innerHTML = '';
            document.querySelector('#content-right').innerHTML +=
            `<img class="notfound" src="./images/notfound.png">
            <p>No trip found</p>`    
        }
    })
})
