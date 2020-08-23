function Login(userName) {
    localStorage.setItem("userName",userName) //保存名字，不用每次输入
}

function Upload() {

}

function Download() {
    let httpRequest = new XMLHttpRequest();
    httpRequest.open("GET", "https://gist.githubusercontent.com/JensonYang2020/37daf0bde929df8504c9a52e36976414/raw/08f721e92f4523a5cfa930b12b39d10fe53b9555/Score.json", true);
    httpRequest.send();
    httpRequest.onreadystatechange =function () {
        if (httpRequest.status == 200 && httpRequest.readyState == 4) {
            let jsons = JSON.parse(httpRequest.responseText);
            for (let i in jsons) {
                console.log(i,":",jsons[i]);
                document.write(i,":",jsons[i]+"<br>");
            }
        }
    }
}

Download()