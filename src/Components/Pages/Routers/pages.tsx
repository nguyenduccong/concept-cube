import { RoutesString } from "../../Modules/routesString";
import PageErr from "../404/PageErr";
import Home from "../Home/Home";
import Works from "../Works/Works";
import Contacts from "../Contacts/Contacts";
import Teams from "../Teams/Teams";
const pages = [

    {
        path: RoutesString.PageNotFound,
        component: PageErr,
        exact: true,
    },

    /* Home */
    {
        path: RoutesString.Home,
        component: Home,
        exact: true,
    },

    /* Works */
    {
        path: RoutesString.Works,
        component: Works,
        exact: true,
    },
     /* Works */
     {
        path: RoutesString.Teams,
        component: Teams,
        exact: true,
    },

    /* Contacts */
    {
        path: RoutesString.Contacts,
        component: Contacts,
        exact: true,
    },

];

export default pages;

