let countrySelectDiv = document.querySelector("#country");
function getData(){
let url = "https://raw.githubusercontent.com/stefanbinder/countries-states/master/countries.json";
fetch(url)
    .then(function(res){
        return res.json()
    })
    .then(function(data){
        let countryOptions = "";
        for(let key in data){
            // key-> 0,1,2,3,....,249
            // console.log(data[key].name);
            countryOptions += `<option value="${data[key].code2}">${data[key].name}</option>`
        }
        countrySelectDiv.innerHTML = countryOptions;
    });
}
getData();