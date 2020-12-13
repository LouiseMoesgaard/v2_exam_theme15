import BEERS from '../constants/Beers';

const BarData = {

    getData: ()=> {
        return fetch("https://examspacebar.herokuapp.com/")
        .then(r=>r.json())
        .then(data => {
            data.storage = data.storage.map(item => {
                return {...item,price: 30,desc: BEERS[item.name]}
            })
            return data;
        });
    }
}

export default BarData;