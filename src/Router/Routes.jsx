import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import BookDetails from "../Pages/BookDetails";

export const router = createBrowserRouter([
    {
        path:"/",
        Component:Root,
        loader:()=>fetch("booksData.json"),
        children:[
            {
                index:true,
                Component:Home
            },
            {
                path:"/details/:id",
                Component:BookDetails
            }
        ]
    }
])