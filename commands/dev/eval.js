module.exports = {
  name: "eval",
  code: `$eval[$message]
$onlyForIDs[OWNER_ID;{description:This command is restricted to the dev only!}{color:$getVar[red]}]`
}
