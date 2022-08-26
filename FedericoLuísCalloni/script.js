function Calc() {
    var height = document.getElementById("resultHeight")
    var weight = document.getElementById("resultWeight")

    var numHeight = Number(height.value)
    var numWeight = Number(weight.value)

    var result = numWeight / (numHeight * numHeight)
    var resultShort = result.toFixed(2)
    document.getElementById("resultImput").innerText = resultShort

    console.log("resultImput" + resultShort)
}
function clean() {
    resultWeight = (" ")
    resultHeight = (" ")
    var limpH = document.getElementById("resultHeight").value = limpH
    var limpW = document.getElementById("resultWeight").value = limpW
    document.getElementById(resultImput).innerHTML = " "
}