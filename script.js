
document.addEventListener('DOMContentLoaded',  function (){
    document.getElementById('button').onclick = async function(){
    let search = document.getElementById('search').value;
    const api = await fetch ("https://www.googleapis.com/books/v1/volumes?q= " + search)
    console.log(api)
    console.log(search)
    const respData = await api.json()
    let title = respData.items[1].volumeInfo.title
    console.log(respData)
    // console.log(respData.items[1].volumeInfo.authors[1])
    document.getElementById('title').innerHTML = `Title : ${title}`
    const author = document.getElementById('author').innerHTML = `Author : ${respData.items[0].volumeInfo.authors[0]}`
    let rating =  respData.items[1].volumeInfo.averageRating
    console.log(rating)
    let image = ""
    console.log(image)
    if (rating !== undefined && image !== undefined){
        document.getElementById('rating').innerHTML = `Rating : ${respData.items[1].volumeInfo.averageRating}`
        document.getElementById('thumbnail').src = `${respData.items[1].volumeInfo.imageLinks.thumbnail}`

        console.log(rating)
        console.log(image)
    }else{
        document.getElementById('rating').innerHTML = `Rating : ${respData.items[3].volumeInfo.averageRating}`
        document.getElementById('thumbnail').src = `${respData.items[0].volumeInfo.imageLinks.thumbnail}`
    }
    const link = document.getElementById('links').innerHTML = `<a href="${respData.items[0].volumeInfo.previewLink}" id="link">Link to Preview</a>`
    const language = document.getElementById('language').innerHTML = `Language : ${respData.items[1].volumeInfo.language}`
    const publishDate = document.getElementById('publishDate').innerHTML = `Publish Date : ${respData.items[0].volumeInfo.publishedDate}`
    }})
    
