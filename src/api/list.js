const apiList = [
  {
    url: "token",
    children: [
      {
        name: "getToken",
        url: "get",
        method: "GET",
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
      {
        name: "createArticle",
        url: "create",
        method: "POST",
      },
    ],
  },
];

export default apiList;
