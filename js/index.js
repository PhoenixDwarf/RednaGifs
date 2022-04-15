document.getElementById('gifs-container-search-div-submitInput').addEventListener('click',function(){

        var keyword = document.getElementById('gifs-container-search-div-searchInput').value;

        
            giphy.getUrlAsync(keyword,function(gifUrl,gitTitle){
                for(let i=0; i<6; i++){
                    document.getElementById('url'+i).src = gifUrl[i];
                    document.getElementById('title'+i).innerHTML = gitTitle[i];
                }  
            })
    }
);

function sugerenciasFunction(valor){

    giphy.getUrlAsync(valor,function(gifUrl,gitTitle){
        for(let i=0; i<6; i++){
            document.getElementById('url'+i).src = gifUrl[i];
            document.getElementById('title'+i).innerHTML = gitTitle[i];
        }  
    })

}