export function fetchPlants(action) {
    fetch('http://localhost:3000/api/v1/plants')
    .then(resp => resp.json())
    .then(r => console.log(r.data))
}