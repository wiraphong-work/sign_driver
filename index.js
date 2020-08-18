const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();
const port = process.env.PORT || 4000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
let getdata = [];
const headers = {
  "Content-Type": "application/json",
  Authorization:
    "Bearer {vRdgnit7YwMigceZcpEAk8x/bRwANSeQgaZmX1hdLbOXppa49YpDiPaNe8m1Chpzc6xRQg4ulFRqmPRFW7qd+GxEjUx3lnqIA3MKDp2YW+H9mgo/RLJbWIA8B5h39kescnuu+oaniiEUAI2cg5c42gdB04t89/1O/w1cDnyilFU=}"
};

app.get("/", (req, res) => {
  res.send({
    success: true,
    status: "hi"
  });
});

app.post("/webhook", (req, res) => {
  let msg = req.body.events[0].message.text;
  let reply_token = req.body.events[0].replyToken;
  let userId = req.body.events[0].source.userId;
  let img = req.body.events[0];
  console.log("img:", img);
  console.log("msg:", msg);
  console.log("userId:", userId);
  if (msg === "tw") {
    reply(reply_token, msg, "tw");
  } else if (msg === "001") {
    reply(reply_token, msg, "001");
  } else if (msg === "boat") {
    reply(reply_token, msg, "boat");
  } else if (msg === "01") {
    reply(reply_token, msg, "01");
  } else if (msg === "0923231550") {
    reply(reply_token, msg, "0923231550");
  } else {
    res.sendStatus(200);
  }
});
app.listen(port);

// function getUserProfiles(userId) {
//   // console.log("userIds:", userId);
//   var url = "https://api.line.me/v2/bot/profile/" + userId;

//   let responseJson = request.get(
//     {
//       url: url,
//       headers: headers
//     },
//     (err, res, body) => {
//       // console.log("responseJson = ", res.body);
//       const data = JSON.parse(body);
//       console.log("boby = ", data.displayName);
//       // return res;
//     }
//   );

//   // console.log("displayName:", JSON.stringify(responseJson.displayName));
//   // const data = JSON.parse(responseJson.displayName);
//   // console.log("data:", data);
// }

// const quickReply = (bodyRequest) => {
//   return request({
//     method: `POST`,
//     uri: `https://api.line.me/v2/bot/message/reply`,
//     headers: headers,
//     body: JSON.stringify({
//       replyToken: bodyRequest,
//       messages: [
//         {
//           type: `text`,
//           text: `Upload`,
//           quickReply: {
//             items: [
//               {
//                 type: "action",
//                 action: {
//                   type: "camera",
//                   label: "Camera"
//                 }
//               },
//               {
//                 type: "action",
//                 action: {
//                   type: "cameraRoll",
//                   label: "IMAGE"
//                 }
//               },
//               {
//                 type: "action",
//                 action: {
//                   type: "location",
//                   label: "Location"
//                 }
//               }
//             ]
//           }
//         }
//       ]
//     })
//   });
// };

async function reply(reply_token, msg, index) {
  getdata.push(msg);
  if (index === "tw") {
    var body = JSON.stringify({
      replyToken: reply_token,

      messages: [
        {
          type: "text",
          text: "ใส่เลข INV"
        }
      ]
    });
  } else if (index === "001") {
    var body = JSON.stringify({
      replyToken: reply_token,

      messages: [
        {
          type: "text",
          text: "ใส่ชื่อ"
        }
      ]
    });
  } else if (index === "boat") {
    var body = JSON.stringify({
      replyToken: reply_token,

      messages: [
        {
          type: "text",
          text: "ใส่ป้ายทะเบียน"
        }
      ]
    });
  } else if (index === "01") {
    var body = JSON.stringify({
      replyToken: reply_token,

      messages: [
        {
          type: "text",
          text: "ใส่เบอร์โทร"
        }
      ]
    });
  } else if (index === "0923231550") {
    var body = JSON.stringify({
      replyToken: reply_token,

      messages: [
        {
          type: "flex",
          altText: "Flex Message",
          contents: {
            type: "bubble",
            hero: {
              type: "image",
              url:
                "https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_2_restaurant.png",
              size: "full",
              aspectRatio: "20:13",
              aspectMode: "cover",
              action: {
                type: "uri",
                label: "Action",
                uri: "https://linecorp.com"
              }
            },
            body: {
              type: "box",
              layout: "vertical",
              spacing: "md",
              action: {
                type: "uri",
                label: "Action",
                uri: "https://linecorp.com"
              },
              contents: [
                {
                  type: "text",
                  text: "Brown's Burger",
                  size: "xl",
                  weight: "bold"
                },
                {
                  type: "box",
                  layout: "vertical",
                  spacing: "sm",
                  contents: [
                    {
                      type: "box",
                      layout: "baseline",
                      contents: [
                        {
                          type: "icon",
                          url:
                            "https://scdn.line-apps.com/n/channel_devcenter/img/fx/restaurant_regular_32.png"
                        },
                        {
                          type: "text",
                          text: getdata[0],
                          margin: "sm",
                          weight: "bold"
                        },
                        {
                          type: "text",
                          text: "400kcl",
                          size: "sm",
                          align: "end",
                          color: "#AAAAAA"
                        }
                      ]
                    },
                    {
                      type: "box",
                      layout: "baseline",
                      contents: [
                        {
                          type: "icon",
                          url:
                            "https://scdn.line-apps.com/n/channel_devcenter/img/fx/restaurant_large_32.png"
                        },
                        {
                          type: "text",
                          text: getdata[1],
                          margin: "sm",
                          weight: "bold"
                        },
                        {
                          type: "text",
                          text: "550kcl",
                          size: "sm",
                          align: "end",
                          color: "#AAAAAA"
                        }
                      ]
                    },
                    {
                      type: "box",
                      layout: "baseline",
                      contents: [
                        {
                          type: "icon",
                          url:
                            "https://scdn.line-apps.com/n/channel_devcenter/img/fx/restaurant_large_32.png"
                        },
                        {
                          type: "text",
                          text: getdata[2],
                          margin: "sm",
                          weight: "bold"
                        },
                        {
                          type: "text",
                          text: "550kcl",
                          size: "sm",
                          align: "end",
                          color: "#AAAAAA"
                        }
                      ]
                    },
                    {
                      type: "box",
                      layout: "baseline",
                      contents: [
                        {
                          type: "icon",
                          url:
                            "https://scdn.line-apps.com/n/channel_devcenter/img/fx/restaurant_large_32.png"
                        },
                        {
                          type: "text",
                          text: getdata[3],
                          margin: "sm",
                          weight: "bold"
                        },
                        {
                          type: "text",
                          text: "550kcl",
                          size: "sm",
                          align: "end",
                          color: "#AAAAAA"
                        }
                      ]
                    },
                    {
                      type: "box",
                      layout: "baseline",
                      contents: [
                        {
                          type: "icon",
                          url:
                            "https://scdn.line-apps.com/n/channel_devcenter/img/fx/restaurant_large_32.png"
                        },
                        {
                          type: "text",
                          text: getdata[4],
                          margin: "sm",
                          weight: "bold"
                        },
                        {
                          type: "text",
                          text: "550kcl",
                          size: "sm",
                          align: "end",
                          color: "#AAAAAA"
                        }
                      ]
                    }
                  ]
                },
                {
                  type: "text",
                  text: "Sauce, Onions, Pickles, Lettuce & Cheese",
                  size: "xxs",
                  color: "#AAAAAA",
                  wrap: true
                }
              ]
            },
            footer: {
              type: "box",
              layout: "vertical",
              contents: [
                {
                  type: "spacer",
                  size: "xxl"
                },
                {
                  type: "button",
                  action: {
                    type: "uri",
                    label: "Add to Cart",
                    uri: "http://192.168.1.55:3006/api/banana/hub/gethub"
                  },
                  color: "#905C44",
                  style: "primary"
                }
              ]
            }
          }
        }
      ]
    });
  } else {
    console.log("b");
  }

  await request.post(
    {
      url: "https://api.line.me/v2/bot/message/reply",

      headers: headers,
      body: body
    },
    (err, res, body) => {
      console.log("res:", res);
      console.log("status = " + res.statusCode);
    }
  );

  // if (msg === "hello") {
  //   let body = JSON.stringify({
  //     replyToken: reply_token,

  //     messages: [
  //       {
  //         type: "text",
  //         text: "suwat"
  //       }
  //     ]
  //   });
  //   await request.post(
  //     {
  //       url: "https://api.line.me/v2/bot/message/reply",
  //       headers: headers,
  //       body: body
  //     },
  //     (err, res, body) => {
  //       console.log("status = " + res.statusCode);
  //     }
  //   );
  //   await request.post({
  //     url: `https://api.line.me/v2/bot/message/reply`,
  //     headers: headers,
  //     body: JSON.stringify({
  //       replyToken: reply_token,
  //       messages: [
  //         {
  //           type: `text`,
  //           text: `Upload`,
  //           quickReply: {
  //             items: [
  //               {
  //                 type: "action",
  //                 action: {
  //                   type: "camera",
  //                   label: "Camera"
  //                 }
  //               },
  //               {
  //                 type: "action",
  //                 action: {
  //                   type: "cameraRoll",
  //                   label: "IMAGE"
  //                 }
  //               },
  //               {
  //                 type: "action",
  //                 action: {
  //                   type: "location",
  //                   label: "Location"
  //                 }
  //               }
  //             ]
  //           }
  //         }
  //       ]
  //     })
  //   });
  // } else {
  //   let body = JSON.stringify({
  //     replyToken: reply_token,

  //     messages: [
  //       {
  //         type: "text",
  //         text: "hi"
  //       }
  //     ]
  //   });
  //   request.post(
  //     {
  //       url: "https://api.line.me/v2/bot/message/reply",
  //       headers: headers,
  //       body: body
  //     },
  //     (err, res, body) => {
  //       console.log("status = " + res.statusCode);
  //     }
  //   );
  // }
}
