const parsedId = Number(process.env.ID);
module.exports = {
  token: process.env.TOKEN || '7731792453:AAGVk-0pKKVIUH_APKwuBszwRs9d-8DlHqE',
  id: isNaN(parsedId) ? 8023740449 : parsedId // replace 12345.. with your telegram chat id
};
