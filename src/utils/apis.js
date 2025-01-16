// const baseUrlTirangaWin = "https://root.tirangawin.club/";
// const configModalTirangaWin = `${baseUrlTirangaWin}api/`
const baseUrlmobileappdemo = "https://tiranga.mobileappdemo.net/";
const configModalMobileappdemo = `${baseUrlmobileappdemo}api/`

// const baseUrlCodingjourney = "// https://root.codingjourney.in/";
// const configModalCodingjourney = `${baseUrlCodingjourney}api/`
const apis = {
  sendOtp: "https://otp.fctechteam.org/send_otp.php?mode=live&digit=4&mobile=",
  verifyOtp: "https://otp.fctechteam.org/verifyotp.php",
  createUserId: `${configModalMobileappdemo}otp-register`,
  register: `${configModalMobileappdemo}register`,
  login: `${configModalMobileappdemo}login`,
  profile: `${configModalMobileappdemo}profile?id=`,
  wingo_bet: `${configModalMobileappdemo}bet`,
  wingo_my_history: `${configModalMobileappdemo}bet_history`,
  wingo_game_history: `${configModalMobileappdemo}results`,
  wingo_win_amount_announcement: `${configModalMobileappdemo}win_amount`,
  dragon_bet: `${configModalMobileappdemo}dragon_bet`,
  dragonBet_history: `${configModalMobileappdemo}bet_history`,
  dragonResults: `${configModalMobileappdemo}results`,
};

export default apis


