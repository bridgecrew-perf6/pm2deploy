import React from "react";
import PlainList from "../templates/PlainList";
import { getAllListing } from "../api";
import Pagination from "../templates/Pagination";

const ProductList = () => (
  <>
    <h1>ALL</h1>
    <ul>
      <PlainList
        storeKey="product_contoh"
        itemComponent={({ id, name }) => <li key={id}>{`${id}, ${name}`}</li>}
        // skeletonComponent={() => <li>asd</li>}
        loadingComponent={() => <div>Loading...</div>}
        dataSource={() => getAllListing()}
      />
    </ul>

    <div>
      {/* PAGINATION */}
      <Pagination
        currentPage={1}
        totalPage={20}
        numberButton={{
          normal: number => <div>{number}</div>,
          active: number => <div className="active">{number}</div>
        }}
        prevArrowButton={{
          normal: () => <div>{"<"}</div>,
          disabled: () => <div>{"dis<"}</div>
        }}
        nextArrowButton={{
          normal: () => <div>{">"}</div>,
          disabled: () => <div>{">dis"}</div>
        }}
        dotComponent={() => <div>...</div>}
      />
    </div>

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
