import React from "react";

import BasketCart from "../basketCart/index";
import Search from "../search/index";
import Categories from "../categories/index";

const Sidebar = () => (
    <div>
        <BasketCart />
        <Search />
        <Categories />
    </div>
)

export default Sidebar