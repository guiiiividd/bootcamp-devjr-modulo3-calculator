function calcular(){
    let num1 = parseFloat(document.getElementById("num1").value)
    let num2 = parseFloat(document.getElementById("num2").value)

    let output = document.getElementById("output")
    output.value = num1 + num2
}