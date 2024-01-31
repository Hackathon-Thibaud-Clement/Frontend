//document.querySelector('#btn-search').addEventListener('click', function () {
    //const departure = document.querySelector('#search-departure').value;
    //const arrival = document.querySelector('#search-arrival').value;
    //const date = document.querySelector('#search-date').value;
const departure = 'Paris'
const arrival = 'Marseille'
const date = '31/01/2024'
    fetch(`http://localhost:3000/trips/${departure}/${arrival}/${date}`, {
    }).then(response => response.json())
    .then(data => {
        if (data.result) {
            for (const trip of data) {
                //document.querySelector('#content-right').children.remove( );
                //document.querySelector('#content-right').
                console.log(`${trip.departure}/${trip.arrival}`)
            }
        }
        else {
            console.log('No trip found')
        }
    })
//})
