const apiList = [
  {
    url: "token",
    children: [
      {
        name: "getToken",
        url: "get",
        method: "POST",
      },
    ],
  },
  {
    url: "article",
    children: [
      {
        name: "getArticleList",
        url: "list",
        method: "POST",
      },
      {
        name: "getArticleDetail",
        url: "detail",
        method: "POST",
      },
    ],
  },
];

export default apiList;
