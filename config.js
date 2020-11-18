module.exports = {
  //all fields are **required**
  token: 'TOKEN BOT', // Your bot's token
  clockchannel: 'ID CHANNEL', // ID of a voice channel that used to display the time
  timezone: 'Asia/Jakarta', // Timezone (take a look at https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List)
  format: 'HH:mm (z)', // Clock format, leave this default seting for 24h format, read more at https://momentjs.com/docs/#/displaying/format/
  updateinterval: 600000, // Discord is ratelimiting us for 10 minutes!
  //[ON WORK, IGNORE THIS FIELD] dev: 'YOUR ID', // Developer's ID for sending the errors
}
