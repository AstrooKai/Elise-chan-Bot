module.exports = (client) => {
  client.variables({
    authorizedOne: "920264976663457792",
    authorizedTwo: "920265063087104000",
    botVersion: "2.0.0",
    captchaChannel: "933384124289417236",
    default: "#bd7a21",
    green: "#00fa9a",
    logChannel: "922407637411328010",
    no: "❌",
    ownerID: "714086889878978582",
    red: "#dc143c",
    userCaptchaCode: "",
    userinf: 0,
    isAuthorVerified: "false",
    verifyRole: "924527753913585674",
    err00: "The user you provided in \`TARGET_USER\` parameter is invalid or cannot be found!",
    err01: "You are not authorized to use this command!",
    err02: "Please include atleast one arg/parameter! Please refer to the correct usage below.",
    err03: "The user you specified is a bot! You can't use this command against a bot!",
    err04: "You can't use this command against yourself!",
    err05: "The user you specified is higher than you! You can't use this command against them!",
    err06: "Command in cooldown, please wait for",
    err07: "An error occured during commnication with the API!",
    errNumber: "0"
  })

  console.log('Variables loaded')
}