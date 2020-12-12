const BarData = {

    getData: ()=> {
        return fetch("https://examspacebar.herokuapp.com/")
        .then(r=>r.json())
        .then(data => {
            data.storage = data.storage.map(item => {
                return {...item,price: 30}
            })
            return data;
        });
    }
}

export default BarData;