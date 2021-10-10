export const serverAPI = {
    getItems (cities) {
        return Promise.all([
            //forecast today
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cities[0]}&appid=cb723e5abc0e0513abb4b23717c361e5`)
                .then((response) => {return response.json()}),
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cities[1]}&appid=cb723e5abc0e0513abb4b23717c361e5`)
                .then((response) => {return response.json()}),
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cities[2]}&appid=cb723e5abc0e0513abb4b23717c361e5`)
                .then((response) => {return response.json()}),
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cities[3]}&appid=cb723e5abc0e0513abb4b23717c361e5`)
                .then((response) => {return response.json()}),
            // forecast tomorrow
            fetch(`http://api.openweathermap.org/data/2.5/forecast?q=Minsk,BY&appid=cb723e5abc0e0513abb4b23717c361e5`)
                .then((response) => {return response.json()}),
            fetch(`http://api.openweathermap.org/data/2.5/forecast?q=Moscow,RU&appid=cb723e5abc0e0513abb4b23717c361e5`)
                .then((response) => {return response.json()}),
            fetch(`http://api.openweathermap.org/data/2.5/forecast?q=London,UK&appid=cb723e5abc0e0513abb4b23717c361e5`)
                .then((response) => {return response.json()}),
            fetch(`http://api.openweathermap.org/data/2.5/forecast?q=Madrid,ES&appid=cb723e5abc0e0513abb4b23717c361e5`)
                .then((response) => {return response.json()})
        ])
    }
    
}   
