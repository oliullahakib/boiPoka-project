import { toast } from "react-toastify"

export const getFromLs=(key)=>{
    const readBooksJson= localStorage.getItem(key)
    if(readBooksJson){
        const readBooksArry=JSON.parse(readBooksJson)
        return readBooksArry
    }
    return []
}

 export const addToLS =(id,key,sec)=>{
    const readBooksArry = getFromLs(key)
    if(readBooksArry.includes(id)){
        toast.error(`This Book Alreay Added to ${sec}`)
      return
    }else{
        readBooksArry.push(id)
        localStorage.setItem(key,JSON.stringify(readBooksArry))
        toast.success(`Add To ${sec}`)
    }
}