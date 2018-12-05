import React from "react";
import PlainList from "../templates/PlainList";
import Pagination from "../templates/Pagination";
import { getAllListing } from "../api";

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

    {/* PAGINATION */}
    <Pagination
      currentPage={1}
      totalPage={5}
      numberButton={{
        normal: number => <span style={{ color: "blue" }}>{number}</span>,
        active: number => (
          <span style={{ color: "blue" }} className="active">
            {number}
          </span>
        )
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
  </>
);

export default ProductList;
