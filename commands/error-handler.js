module.exports = {
  type: 'functionError',
  channel: '1068879076644896778',
  code: `$title[Error No. $getVar[errNumber]]
$description[An error occured upon using the command \`$handleError[command]\`]
$addField[Error Message;$handleError[error];false]
$addField[Author;$handleError[author]]
$addField[Function;\`$handleError[function]\`;true]
$addField[Command;\`$handleError[command]\`;true]
$color[Random]
$footer[Error Handling System]
$addTimestamp
$setVar[errNumber;$math[$getVar[errNumber]+1]]`
}