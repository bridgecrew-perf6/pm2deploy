const fakeHeaders = () => false;

const apiList = [
  {
    url: "wot",
    children: [
      {
        name: "getDataWOT",
        url: "get_wot",
        method: "GET"
      },
      {
        name: "sendDataWOT",
        url: "send_word_wot",
        method: "POST"
      },
      {
        name: "getLeaderBoard",
        url: "leader_board",
        method: "POST"
      }
    ]
  },
  {
    url: "article",
    children: [
      {
        name: "getArticle",
        url: "search",
        method: "POST"
      },
      {
        name: "getArticleAlpha",
        url: "search2",
        method: "POST"
      },
      {
        name: "getArticleDetail",
        url: "detail",
        method: "POST"
      }
    ]
  },
  {
    url: "user",
    children: [
      {
        name: "submitDoubtRegister",
        url: "submit_doubt_register",
        method: "POST"
      },
      {
        name: "postUTM",
        url: "utm_post_data",
        method: "POST"
      },
      {
        name: "postInteraction",
        url: "interaction_tracker",
        method: "POST",
        headers: fakeHeaders
      },
      {
        name: "acsStream",
        url: "facial_age_verification",
        method: "POST",
        headers: { mode: "stream" }
      },
      {
        name: "acsUpload",
        url: "facial_age_verification",
        method: "POST",
        headers: { mode: "upload" }
      }
    ]
  },
  {
    url: "submission",
    children: [
      {
        name: "submissionTnc",
        url: "tnc",
        method: "POST",
        headers: fakeHeaders
      },
      {
        name: "recentSubmission",
        url: "recent_submission",
        method: "POST"
      },
      {
        name: "submitDoubtLoggedIn",
        url: "submit_doubt",
        method: "POST"
      },
      {
        name: "submissionImage",
        url: "upload_image",
        method: "POST",
        headers: fakeHeaders
        // headers: {
        //   "Content-Type": "multipart/form-data;"
        // }
      },
      {
        name: "submissionDocument",
        url: "upload_document",
        method: "POST",
        headers: fakeHeaders
      },
      {
        name: "submissionMusic",
        url: "upload_music",
        method: "POST",
        headers: fakeHeaders
      },
      {
        name: "submissionVideo",
        url: "upload_video",
        method: "POST",
        headers: fakeHeaders
      },
      {
        name: "submitSubmission",
        url: "submit/tapi-gue-jadi",
        method: "POST",
        headers: fakeHeaders
      },
      {
        name: "designerAlpha",
        url: "designer_alpha",
        method: "POST"
      },
      {
        name: "itemAlpha",
        url: "item_alpha",
        method: "POST"
      },
      {
        name: "submitAlpha",
        url: "submit/alpha",
        method: "POST"
      },
      {
        name: "checkReward",
        url: "reward_status",
        method: "POST"
      },
      {
        name: "validateReward",
        url: "redeem",
        method: "POST"
      },
      {
        name: "winnerAlpha",
        url: "winner-alpha",
        method: "POST"
      }
    ]
  },
  {
    url: "masterdata",
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
      },
      {
        name: "city",
        url: "city",
        method: "POST"
      },
      {
        name: "securityQuestion",
        url: "security_question",
        method: "POST"
      },
      {
        name: "brandPreference",
        url: "brand_preference",
        method: "POST"
      },
      {
        name: "campaignPhase",
        url: "campaign_phase",
        method: "POST"
      },
      {
        name: "interest",
        url: "interest",
        method: "POST"
      }
    ]
  },
  {
    url: "property",
    children: [
      {
        name: "getListing",
        url: "primary/listing",
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
  },
  {
    url: "user",
    children: [
      {
        name: "loginStatus",
        url: "login_status",
        method: "POST"
      },
      {
        name: "login",
        url: "login",
        method: "POST"
      },
      {
        name: "logout",
        url: "logout",
        method: "POST"
      },
      {
        name: "forgotPassword",
        url: "forgot_password",
        method: "POST"
      },
      {
        name: "forgotPasswordToken",
        url: "auto_login",
        method: "POST"
      },
      {
        name: "forgotPasswordReset",
        url: "reset_password",
        method: "POST"
      },
      {
        name: "changePassword",
        url: "change_password",
        method: "POST"
      },
      {
        name: "forgotEmail",
        url: "forgot_id",
        method: "POST"
      },
      {
        name: "forgotEmailSecurity",
        url: "answer_question",
        method: "POST"
      },
      {
        name: "searchPerson",
        url: "search_person",
        method: "POST"
      },
      {
        name: "register",
        url: "register",
        method: "POST"
      },
      {
        name: "registerPrivy",
        url: "register-privy",
        method: "POST"
      },
      {
        name: "updatePrivy",
        url: "update-privy",
        method: "POST"
      },
      {
        name: "spiceId",
        url: "search_by_spice_id",
        method: "POST"
      },
      {
        name: "verifyEmail",
        url: "verify_email",
        method: "POST"
      },
      {
        name: "resendEmail",
        url: "resend_confirmation_email",
        method: "POST"
      },
      {
        name: "deleteAccount",
        url: "delete_account",
        method: "POST"
      },
      {
        name: "shortProfile",
        url: "get_short_profile",
        method: "POST"
      },
      {
        name: "updateProfile",
        url: "update_profile",
        method: "POST"
      },
      {
        name: "profile",
        url: "get_profile",
        method: "POST"
      },
      {
        name: "reactivateAccount",
        url: "reactivate_account",
        method: "POST"
      },
      {
        name: "mergeAccount",
        url: "merge_user",
        method: "POST"
      },
      {
        name: "updateEmail",
        url: "update_email",
        method: "POST"
      }
    ]
  }
];

export default apiList;
