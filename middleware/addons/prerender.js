/* eslint-disable */
const puppeteer = require("puppeteer");
const url = require("url");
const isbot = require("isbot");

// Switch logic using isbot package
// const crawlerUserAgents = [
//   "googlebot",
//   "Yahoo! Slurp",
//   "bingbot",
//   "yandex",
//   "baiduspider",
//   "facebookexternalhit",
//   "twitterbot",
//   "rogerbot",
//   "linkedinbot",
//   "embedly",
//   "quora link preview",
//   "showyoubot",
//   "outbrain",
//   "pinterest/0.",
//   "developers.google.com/+/web/snippet",
//   "slackbot",
//   "vkShare",
//   "W3C_Validator",
//   "redditbot",
//   "Applebot",
//   "WhatsApp",
//   "flipboard",
//   "tumblr",
//   "bitlybot",
//   "SkypeUriPreview",
//   "nuzzel",
//   "Discordbot",
//   "Google Page Speed",
//   "Qwantify",
//   "pinterestbot",
//   "Bitrix link preview",
//   "XING-contenttabreceiver",
//   "Chrome-Lighthouse",
//   "Screaming Frog SEO Spider",
// ];

const extensionsToIgnore = [
  ".js",
  ".css",
  ".xml",
  ".less",
  ".png",
  ".jpg",
  ".jpeg",
  ".gif",
  ".pdf",
  ".doc",
  ".txt",
  ".ico",
  ".rss",
  ".zip",
  ".mp3",
  ".rar",
  ".exe",
  ".wmv",
  ".doc",
  ".avi",
  ".ppt",
  ".mpg",
  ".mpeg",
  ".tif",
  ".wav",
  ".mov",
  ".psd",
  ".ai",
  ".xls",
  ".mp4",
  ".m4a",
  ".swf",
  ".dat",
  ".dmg",
  ".iso",
  ".flv",
  ".m4v",
  ".torrent",
  ".woff",
  ".ttf",
  ".svg",
  ".webmanifest",
];

const port = process.env.PORT || 8000;
const isPrerender = !!process.env.PRERENDER_PAGE;

const whitelist = "";
const blacklist = "";

// const whitelisted = function(whitelist) {
//   whitelist = typeof whitelist === "string" ? [whitelist] : whitelist;
// };

// const blacklisted = function(blacklist) {
//   blacklist = typeof blacklist === "string" ? [blacklist] : blacklist;
// };

module.exports = {
  shouldShowPrerenderedPage: function (req) {
    let userAgent = req.headers["user-agent"],
      bufferAgent = req.headers["x-bufferbot"],
      isRequestingPrerenderedPage = false;

    if (!isPrerender) return false;
    if (!userAgent) return false;
    if (req.method != "GET" && req.method != "HEAD") return false;
    if (req.headers && req.headers["x-prerender"]) return false;

    //if it contains _escaped_fragment_, show prerendered page
    let parsedQuery = url.parse(req.url, true).query;
    if (parsedQuery && parsedQuery["_escaped_fragment_"] !== undefined)
      isRequestingPrerenderedPage = true;

    //if it is a bot...show prerendered page
    // if (
    //   crawlerUserAgents.some(
    //     (crawlerUserAgent) =>
    //       userAgent.toLowerCase().indexOf(crawlerUserAgent.toLowerCase()) !== -1
    //   )
    // )
    //   isRequestingPrerenderedPage = true;

    if (userAgent.toLowerCase().indexOf("headless") === -1 && isbot(userAgent))
      isRequestingPrerenderedPage = true;

    //if it is BufferBot...show prerendered page
    if (bufferAgent) isRequestingPrerenderedPage = true;

    //if it is a bot and is requesting a resource...dont prerender
    if (
      extensionsToIgnore.some(
        (extension) => req.url.toLowerCase().indexOf(extension) !== -1
      )
    )
      return false;

    //if it is a bot and not requesting a resource and is not whitelisted...dont prerender
    if (
      Array.isArray(whitelist) &&
      whitelist.every(
        (whitelisted) => new RegExp(whitelisted).test(req.url) === false
      )
    )
      return false;

    //if it is a bot and not requesting a resource and is not blacklisted(url or referer)...dont prerender
    if (
      Array.isArray(blacklist) &&
      blacklist.some((blacklisted) => {
        let blacklistedUrl = false,
          blacklistedReferer = false,
          regex = new RegExp(blacklisted);

        blacklistedUrl = regex.test(req.url) === true;
        if (req.headers["referer"])
          blacklistedReferer = regex.test(req.headers["referer"]) === true;

        return blacklistedUrl || blacklistedReferer;
      })
    )
      return false;

    return isRequestingPrerenderedPage;
  },
  // Function to render the content using puppeteer to mimic the user
  prerenderPage: async (req, res) => {
    const browser = await puppeteer.launch({
      ignoreDefaultArgs: ["--disable-extensions"],
      args: [
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--disable-web-security",
      ],
    });

    try {
      const page = await browser.newPage();

      // Error Log if failed
      page.on("error", (err) => {
        console.log("error happen at the page: ", err);
      });

      page.on("pageerror", (pageerr) => {
        console.log("pageerror occurred: ", pageerr);
      });

      page.on("requestfailed", (request) =>
        console.log(
          `url: ${request.url()}, errText: ${JSON.stringify(
            request.failure()
          )}, method: ${request.method()}`
        )
      );

      const local_url = "http://localhost:" + port + req.originalUrl;
      await page.goto(local_url, {
        waitUntil: "networkidle0",
      });

      const html = await page.evaluate(() => {
        function removeDOM(removeSelector) {
          const thingToRemove = document.querySelectorAll(removeSelector);
          for (let i = 0; i < thingToRemove.length; i++) {
            thingToRemove[i].parentNode.removeChild(thingToRemove[i]);
          }
        }

        //Delete Cookies Notice
        const optanonAlert = ".optanon-alert-box-wrapper";
        removeDOM(optanonAlert);

        const optanonID = "#optanon";
        removeDOM(optanonID);
        //Delete Cookies Notice END

        return document.documentElement.innerHTML;
      });

      browser.close();
      res.send(html);
    } catch (e) {
      console.log(e);
      res.send("ERROR");
      await browser.close();
    } finally {
      await browser.close();
    }
  },
};
