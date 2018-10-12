const apiList = [
  {
    url: "master",
    children: [
      {
        name: "getMasterCity",
        url: "city",
        method: "POST"
      },
      {
        name: "getMasterPersona",
        url: "persona",
        method: "POST"
      },
      {
        name: "getMasterBrandPreferences",
        url: "brand_preferences",
        method: "POST"
      },
      {
        name: "getMasterMeetingPurposes",
        url: "meeting_purpose",
        method: "POST"
      }
    ]
  },
  {
    url: "auth",
    children: [
      {
        name: "authLogin",
        url: "login",
        method: "POST"
      },
      {
        name: "authLogout",
        url: "logout",
        method: "POST"
      },
      {
        name: "authForgot",
        url: "forgot_password",
        method: "POST"
      },
      {
        name: "authReset",
        url: "forgot_password/reset",
        method: "POST"
      }
    ]
  }
];

export default apiList;
