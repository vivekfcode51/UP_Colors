// const baseUrlTirangaWin = "https://root.tirangawin.club/";
// const configModalTirangaWin = `${baseUrlTirangaWin}api/`
const baseUrlUsaWin = "https://root.usawin.vip/";
const configModalUsaWin = `${baseUrlUsaWin}api/`
// const baseUrlmobileappdemo = "https://tiranga.mobileappdemo.net/";
// const configModalMobileappdemo = `${baseUrlmobileappdemo}api/`

// const baseUrlCodingjourney = "// https://root.codingjourney.in/";
// const configModalCodingjourney = `${baseUrlCodingjourney}api/`
const apis = {
  sendOtp: "https://otp.fctechteam.org/send_otp.php?mode=live&digit=4&mobile=",
  verifyOtp: "https://otp.fctechteam.org/verifyotp.php",
  createUserId: `${configModalUsaWin}otp-register`,
  register: `${configModalUsaWin}register`,
  login: `${configModalUsaWin}login`,
  profile: `${configModalUsaWin}profile/`,
  changePassword: `${configModalUsaWin}changepassword`,
  fundTransfer: `${configModalUsaWin}main_wallet_transfers`,
  wingo_bet: `${configModalUsaWin}bets`,
  wingo_my_history: `${configModalUsaWin}bet_history`,
  wingo_game_history: `${configModalUsaWin}results`,
  wingo_win_amount_announcement: `${configModalUsaWin}win_amount`,
  dragon_bet: `${configModalUsaWin}dragon_bet`,
  dragonBet_history: `${configModalUsaWin}bet_history`,
  dragonResults: `${configModalUsaWin}results`,
  payin_deposit: `${configModalUsaWin}payin`,
  depositHistory: `${configModalUsaWin}deposit-history`,
  addAccount: `${configModalUsaWin}addAccount`,
  accountView: `${configModalUsaWin}accountView`,
  payout_withdraw: `${configModalUsaWin}withdraw`,
  withdrawHistory: `${configModalUsaWin}withdraw-history`,
  promotionData: `${configModalUsaWin}agency-promotion-data-`,
  subordinateData: `${configModalUsaWin}subordinate-data`,
  commisionDetails: `${configModalUsaWin}commission_details?user_id=`,
  tier: `${configModalUsaWin}tier`,
  vipLevel: `${configModalUsaWin}vip_level?userid=`,
  vipLevelHistory: `${configModalUsaWin}vip_level_history?userid=`,
  vipLevelAddMoney: `${configModalUsaWin}add_money`,
  redeemGift: `${configModalUsaWin}gift_cart_apply`,
  redeemGiftList: `${configModalUsaWin}gift_redeem_list?userid=`,
  gameStatsHistory: `${configModalUsaWin}total_bet_details?userid=`,
  activityRewards: `${configModalUsaWin}activity_rewards?userid=`,
  activityRewardsClaim: `${configModalUsaWin}activity_rewards_claim`,
  activityRewardsHistory: `${configModalUsaWin}activity_rewards_history?user_id=`,
  attendanceList: `${configModalUsaWin}attendance_List?userid=`,
  attendanceHistory: `${configModalUsaWin}attendance_history?userid=`,
  attendanceClaim: `${configModalUsaWin}attendance_claim`,
};

export default apis


