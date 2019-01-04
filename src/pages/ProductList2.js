import React from "react";

import { getAllListing } from "../api";
import List from "../templates/List";

const ProductList = () => (
  <>
    <h1>ALL</h1>
    <ul>
      <List
        itemComponent={({ id, name }) => <li key={id}>{`${id}, ${name}`}</li>}
        loadingComponent={() => <div>Loading...</div>}
        // dataSource={() => getAllListing()}
      />
    </ul>
  </>
);

export default ProductList;
