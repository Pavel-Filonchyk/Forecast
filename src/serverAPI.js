export const serverAPI = {
    getItems () {
        return Promise.all([
            fetch('http://api.openweathermap.org/data/2.5/weather?q=Minsk,BY&appid=cb723e5abc0e0513abb4b23717c361e5')
                .then((response) => {return response.json()}),
            fetch('http://api.openweathermap.org/data/2.5/weather?q=Moscow,RU&appid=cb723e5abc0e0513abb4b23717c361e5')
                .then((response) => {return response.json()}),
            fetch('http://api.openweathermap.org/data/2.5/weather?q=London,UK&appid=cb723e5abc0e0513abb4b23717c361e5')
                .then((response) => {return response.json()}),
            fetch('http://api.openweathermap.org/data/2.5/weather?q=Madrid,ES&appid=cb723e5abc0e0513abb4b23717c361e5')
                .then((response) => {return response.json()}),
            fetch('http://api.openweathermap.org/data/2.5/forecast?q=Minsk,ES&appid=cb723e5abc0e0513abb4b23717c361e5')
                .then((response) => {return response.json()}),
            fetch('http://api.openweathermap.org/data/2.5/forecast?q=Moscow,RU&appid=cb723e5abc0e0513abb4b23717c361e5')
                .then((response) => {return response.json()}),
            fetch('http://api.openweathermap.org/data/2.5/forecast?q=London,UK&appid=cb723e5abc0e0513abb4b23717c361e5')
                .then((response) => {return response.json()}),
            fetch('http://api.openweathermap.org/data/2.5/forecast?q=Madrid,ES&appid=cb723e5abc0e0513abb4b23717c361e5')
                .then((response) => {return response.json()})
        ])
    }
    
}   
