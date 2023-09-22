function search_homeorders(){
    let input = document.getElementById('searchbar').value 
    input=iput.toLowerCase();
    let x =document.getElementsByClassName('homeorders');
    for (i = 0;i<x.length;i++){
        if(!x[i].innerHTML.toLowerCase().includes(input)){
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item"
        }
    }
}