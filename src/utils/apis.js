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
  slider: `${configModalUsaWin}slider`,
  invitation_bonus_list: `${configModalUsaWin}invitation_bonus_list?userid=`,
  invitation_bonus_claim: `${configModalUsaWin}invitation_bonus_claim`,
  transaction_history_list: `${configModalUsaWin}transaction_history_list`,
  transaction_history: `${configModalUsaWin}transaction_history?userid=`,
  Invitation_records: `${configModalUsaWin}Invitation_records?userid=`,
  update_profile: `${configModalUsaWin}update_profile`,
  allAvatar: `${configModalUsaWin}image_all`,
  customer_service: `${configModalUsaWin}customer_service`,
  about_us: `${configModalUsaWin}about_us?type=`,
  newSubordinate: `${configModalUsaWin}new-subordinate?id=`,
  payModes: `${configModalUsaWin}pay_modes`,
  account_update: `${configModalUsaWin}account_update/`,
  country: `${configModalUsaWin}country`,
  betting_rebate_history: `${configModalUsaWin}betting_rebate_history?userid=`,
  add_usdt_account: `${configModalUsaWin}add_usdt_account`,
  usdt_account_view: `${configModalUsaWin}usdt_account_view?user_id=`,
  wingo_rules: `${configModalUsaWin}wingo_rules?type=`,
};

export default apis


