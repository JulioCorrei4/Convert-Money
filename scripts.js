const convertButton = document.querySelector(".convert-button")

const currencySelect = document.querySelector(".currency-select")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValeuToconvert = document.querySelector(".currency-value-to-convert")
    const currencyValeuConvertd = document.querySelector(".currency-value")

    const dolartoday = 5.48
    const euroToday = 6.0

    if (currencySelect.value == "dolar") {
        currencyValeuConvertd.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolartoday)
    }

    if (currencySelect.value == "euro") {
        currencyValeuConvertd.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    currencyValeuToconvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

}
function changeCurrency() {
    const currencyName = document.getElementById ("currency-name")
const currencyImage = document.querySelector(".currency-img")

if( currencySelect.value == "dolar"){
    currencyName.innerHTML = "Dolar americano"
    currencyImage.src = "./assets/Dolar.png"
    
}

if( currencySelect.value == "euro"){
    currencyName.innerHTML = "Euro"
    currencyImage.src = "./assets/euro.png"
}
convertValues()
}

currencySelect.addEventListener("change", changeCurrency)

convertButton.addEventListener("click", convertValues)