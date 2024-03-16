var ElCarusel = document.querySelector('.carusel')
var ElmoviesUl = document.querySelector('.movies_ul')
var ElCategory = document.querySelector('.category')
var count = 0
function Previous(){
    if(count > 0){
        count = count - 1
    }
    ElCarusel.style.transform = `translateX(-${1250 * count}px)`
}
function Next(){
    if(count < 2){
        count = count + 1
    }
    else if(count = 2){
        count = count = 0
    }
    ElCarusel.style.transform = `translateX(-${1250 * count}px)`
}
var Newmovie = movies.slice(1,50)


fnmovie(Newmovie)


function fnmovie(data){
    ElmoviesUl.innerHTML = ''
    data.forEach(item => {
        var NewLi = document.createElement('li') 
        NewLi.innerHTML = `
        <img src="https://i.ytimg.com/vi/${item.ytid}/hq720.jpg?" alt="">
        <h4>${item.Title}</h4>
        <p>${item.movie_year}</p>
        <p>${item.Categories}</p>
        <p>${item.imdb_rating}</p>
        `
           
        ElmoviesUl.appendChild(NewLi)
    });
        
}

function fnYear(value){
    if(value == 'new'){
        fnmovie(Newmovie.sort((a,b)=>b.movie_year - a.movie_year))
        }else{
        fnmovie(Newmovie.sort((a,b)=>a.movie_year - b.movie_year))
        }

}

function fnRating(value){
    if(value == 'higher'){
        fnmovie(Newmovie.sort((a,b)=>b.imdb_rating - a.imdb_rating))
        }else{
        fnmovie(Newmovie.sort((a,b)=>a.imdb_rating - b.imdb_rating))
        }
}
 var CategoryArr = []
Newmovie.forEach((item)=>{
   if(CategoryArr.includes(item.Categories)== false){
    CategoryArr.push(item.Categories)
   }
    
})





CategoryArr.sort().forEach((item)=>{
    var NewOption = document.createElement('option')
    NewOption.textContent = item
    NewOption.value = item
    ElCategory.appendChild(NewOption)
})

function fnCategory(value){
    fnmovie(Newmovie.filter((item)=> item.Categories == value))
}