const BarData = {

    getData: ()=> {
        return fetch("https://examspacebar.herokuapp.com/")
        .then(r=>r.json())
        .then(data => data);
    }
}

export default BarData;