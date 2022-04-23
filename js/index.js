document.getElementById('gifs-container-search-div-submitInput').addEventListener('click',function(){

    //arrow function -->

        var keyword = document.getElementById('gifs-container-search-div-searchInput').value;

        
            giphy.getUrlAsync(keyword,function(gifUrl,gitTitle){
                for(let i=0; i<6; i++){
                    
                    //document.getElementById('url'+i).src = gifUrl[i];
                    //Template strings //
                    document.getElementById( `url${i}` ).src = gifUrl[i];
                    document.getElementById('title'+i).innerHTML = gitTitle[i];
                }  
            })
    }
);
popular1 = "pikachu"
function sugerenciasFunction(valor){

    giphy.getUrlAsync(valor,function(gifUrl,gitTitle){
        for(let i=0; i<6; i++){
            document.getElementById('url'+i).src = gifUrl[i];
            document.getElementById('title'+i).innerHTML = gitTitle[i];
        }  
    })

}

for(let i=0; i<4; i++){
giphy.getUrlAsync(popular1,function(gifUrl,gitTitle){
        document.getElementById('populares-trama-cuadro1-porpular1-gif').src = gifUrl[0];
        document.getElementById(`populares-trama-cuadro1-porpular${i}`).innerHTML = gitTitle[i];
})
}

