import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import BookDetails from "../Pages/BookDetails";
import ListedBooks from "../Pages/ ListedBooks";
import PagesToRead from "../Pages/PagesToRead";
import SingIn from "../Pages/SingIn";
import SingUp from "../Pages/SingUp";

export const router = createBrowserRouter([
    {
        path:"/",
        hydrateFallbackElement:<span className="loading loading-spinner loading-xl"></span>,
        Component:Root,
        loader:()=>fetch("/booksData.json"),
        children:[
            {
                index:true,
                Component:Home
            },
            {
                path:"/details/:id",
                Component:BookDetails
            },
            {
                path:"/listedBooks",
                Component:ListedBooks
            },
            {
                path:"/pages",
                Component:PagesToRead
            },
            {
                path:"/singIn",
                Component:SingIn
            },
            {
                path:"singUp",
                Component:SingUp
            }
        ]
    }
])