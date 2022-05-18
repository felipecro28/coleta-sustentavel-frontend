import axios from 'axios'

export function cordenate (adress) {
    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${adress}&key=AIzaSyBkcSwoV2GxS8CzGh1VK8nao4pSWRraflw`)
    .then(response => response.data.results)
}

cordenate('Rua Tenente Vilas Boas, 53')