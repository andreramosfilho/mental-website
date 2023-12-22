function buscaCep() {
    let cep = document.getElementById("Tcep").value;
    if (cep != "") {
        let url = "https://brasilapi.com.br/api/cep/v1/" + cep;
        let req = new XMLHttpRequest();
        req.open("GET", url);
        req.send();
        //tratar a resposta
        req.onload = function () {
            if (req.status === 200) {
                let endereco = JSON.parse(req.response);
                document.getElementById("rua").value = endereco.street;
                document.getElementById("bairro").value =
                    endereco.neighborhood;
                document.getElementById("cidade").value = endereco.city;
                document.getElementById("estado").value = endereco.state;
            }
            else if (req.status === 404) {
                alert("CEP Inválido!");
            }
            else {
                alert("Erro ao fazer a requisição");
            }
        }
    }
}
window.onload = function () {
    let Txcep = document.getElementById("Tcep");
    Txcep.addEventListener("blur", buscaCep);
}