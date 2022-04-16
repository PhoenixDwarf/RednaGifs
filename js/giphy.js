class giphy{
    constructor(keyword){
        this.keyword = keyword;
        this.endpoint = "https://api.giphy.com/v1/gifs";
        this.api_key = "thZ9sYvaJ7CGowATLFUqvpY0Ok32V3t3";
    }

    getGifUrl(callback){
        var xhr = new XMLHttpRequest();

        xhr.open("GET",this.endpoint+"/search?api_key="+this.api_key+"&q="+this.keyword+"&limit=6");

        //fetch

        xhr.responseType = "json";

        //Anonimous function 

        xhr.onload = function(){

            let arregloGif = [];
            let arregloTitle = [];

            for(let i=0; i<6; i++){
                arregloGif.push (this.response.data[i].images.downsized_medium.url);
                arregloTitle.push (this.response.data[i].title);
            }

            // callbacks - study
            callback(arregloGif,arregloTitle);
        }
        xhr.send();
    }

    static getUrlAsync(keyword,callback){
        return new giphy(keyword).getGifUrl(callback);
    }
}