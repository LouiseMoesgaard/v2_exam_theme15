import BEERS from '../constants/Beers';

const BarData = {

    getData: ()=> {
        return fetch("https://examspacebar.herokuapp.com/")
        .then(r=>r.json())
        .then(data => {
            data.storage = data.storage.map(item => {
                return {...item,price: 30,desc: BEERS[item.name], type: 'beer'}
            })
            return fetch("https://exam15-d8e4.restdb.io/rest/storage", {
                method: "get",
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                    "x-apikey": "5fd628a4ff9d670638140529",
                    "cache-control": "no-cache",
                },
            }).then(r=>r.json())
            .then(ownData=>{
                data.storage = [...data.storage,...ownData];
            }).then(()=> data)
        });
    }
}

export default BarData;