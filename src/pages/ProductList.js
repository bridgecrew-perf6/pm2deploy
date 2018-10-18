import React from "react";
import PlainList from "../templates/PlainList";
import { getAllListing } from "../api";

const ProductList = () => (
  <>
    <h1>ALL</h1>
    <ul>
      <PlainList
        storeKey="product_contoh"
        itemComponent={({ id, name }) => <li key={id}>{`${id}, ${name}`}</li>}
        skeletonComponent={() => <li>asd</li>}
        loadingComponent={() => <div>Loading...</div>}
        dataSource={() => getAllListing()}
      />
    </ul>

    <h1>Per Page</h1>
    {/* <ul>
      <List
        storeKey="product_list"
        itemComponent={({ id, name }) => <li key={id}>{`${id}. ${name}`}</li>}
        dataSource={({ start, length }) => getListing({ start, length })}
        pagination={{
          type: "PERPAGE",
          itemPerPage: 50
        }}
      />
    </ul>

    <h1>INFINITY</h1>
    <ul>
      <List
        storeKey="product_list_2"
        itemComponent={({ id, name }) => <li key={id}>{`${id}. ${name}`}</li>}
        dataSource={({ start, length }) => getListing({ start, length })}
        pagination={{
          type: "INFINITY",
          itemPerPage: 50
        }}
      />
    </ul> */}
  </>
);

export default ProductList;
