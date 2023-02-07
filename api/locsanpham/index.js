function changeProductList(type, element) //type là tham số truyền vào để có thể hiểu được khi nào nhấn vào cái này cái kia
//element để có hiểu rằng kaf mình đã lấy ra được đối tượng nào ra .
{   
    let tabs =document.getElementsByClassName('tab-item');
    // duyệt các mảng này
    for (i=0; i < tabs.length; i++){
            tabs[i].style.background ='#b14c38';
            // background gán váo background ban đầu
    }

    element.style.background='#ee4d2d'

    document.getElementById(type).style.display ='block';
    switch (type) {
        case 'trend':
            document.getElementById('new').style.display="none";
            document.getElementById('best-sell').style.display="none";
            break;
        case 'new':
            document.getElementById('trend').style.display="none";
            document.getElementById('best-sell').style.display="bnone";
            break;
        case 'best-sell':
            document.getElementById('trend').style.display="none";
            document.getElementById('new').style.display="none";
            break;
    }
    console.log(tabs);
    //console.log(type);
}