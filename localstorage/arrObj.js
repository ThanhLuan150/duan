function listProducts(){
    for (let i=0; i<=man.length-1;i++){
        var demo='<div class="col-3">';
        demo += '<div class="card" style="width: 18rem;">'
        demo += '<img src="'+man[i].image+'" class="card-img-top" alt="...">' 
        demo += '<div class="card-body">';
        demo += '<h5 class="">'+man[i].name+'</h5>';
        demo += '<p class="card-text"> '+man[i].price+'</p>';
        demo += '<a href="#" class="btn btn-primary">Buy</a>';
        demo += '</div>';
        demo += '</div>';
        console.log(demo);
        document.getElementById("men").innerHTML += demo;
    }

    for (let i=0; i<=man.length-1;i++){
        var demo='<div class="col-3">';
        demo += '<div class="card" style="width: 18rem;">'
        demo += '<img src="'+women[i].image+'" class="card-img-top" alt="...">'
        demo += '<div class="card-body">';
        demo += '<h5 class="">'+women[i].name+'</h5>';
        demo += '<p class="card-text"> '+women[i].price+'</p>';
        demo += '<a href="#" class="btn btn-primary">Buy</a>';
        demo += '</div>';
        demo += '</div>';
        console.log(demo);
        document.getElementById("women").innerHTML += demo;
    }
    
}