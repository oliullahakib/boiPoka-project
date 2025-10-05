export const getFromLs=()=>{
    const readBooksJson= localStorage.getItem("readBooks")
    if(readBooksJson){
        const readBooksArry=JSON.parse(readBooksJson)
        return readBooksArry
    }
    return []
}

 export const addToLS =(id)=>{
    const readBooksArry = getFromLs()
    if(readBooksArry.includes(id)){
        alert("This Book Alreay Readed")
      
    }else{
        readBooksArry.push(id)
        localStorage.setItem("readBooks",JSON.stringify(readBooksArry))
    }
}