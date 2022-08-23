export default {
  'paragraph.confirm': 'Please confirm the transaction.',
  //DEPOSIT PAGE & DEPOSIT WIZARD
  'collateral-listing.title': 'Collateral Listing',
  'deposit.title': 'Deposit',
  'deposit-eth.title': 'Deposit ETH',
  'deposit.label.available-in-wallet': 'Available in wallet',
  'deposit.label.your-wallet-balance': 'Your wallet balance',
  'deposit.label.available-to-deposit': 'Available to deposit',
  'deposit.paragraph.approve-token': 'Before you can <strong>deposit</strong>, you must approve the <strong>{{token}} contract.</strong>',
  'deposit.paragraph.tx-pending': 'Please wait while the transaction is being confirmed...',
  'deposit.paragraph.tx-success': 'You have deposited <strong>{{amount}} {{symbol}}</strong> successfully.',
  'deposit.label.deposit-failed': 'Deposit failed.',
  'deposit.label.select-reserve': 'Change reserve',
  'deposit.label.my-wallet': 'My wallet',
  'deposit.label.my-deposits': 'My deposits',
  'deposit.label.total-usd-value': 'Total USD value',
  'deposit.no-wallet-description': 'A wallet connection is needed for deposits.',
  'deposit.eth-reserve-pool': '<strong>Deposit {{symbol}}</strong> to the reserve pool and <strong>start earning interest.</strong>',
  'deposit.valid-amount-error': 'Please enter a valid amount.',
  'deposit.no-wallet.description': 'Connect to a wallet to deposit.',

  // BORROW PAGE
  'borrow.title': 'Borrow',
  'borrow-eth.title': 'Borrow ETH',
  'borrow.title-detail': 'Liquidity / Borrow',
  'borrow.title.description': 'See all the NFTs in your wallet and put them up as collaterals for loans',
  'borrow.title.description.borrow': 'Need to borrow some wETH?',
  'borrow.button.label.create-offer': 'Create new offer',
  'borrow.label.reserves': 'Reserves',
  'borrow.label.nft-collaterals': 'NFT Collaterals',
  'borrow.paragraph.approve-bend': 'Before you can <strong>borrow</strong>, you must approve the <strong>{{token}} contract.</strong>',
  'borrow.paragraph.approve-nft-token':
    'Before you can borrow ETH, you must <primary-color>Approve NFT Token ({{ asset }}).</primary-color><br> Each NFT Token needs its own approval.',
  'borrow.paragraph.approve-d': 'Before you can <strong>borrow</strong>, you must approve the delegation.',
  'borrow.paragraph.approve-d-1': 'Before you can borrow ETH, you must <primary-color>Approve Debt Token.</primary-color><br>You must do this only once.',
  'borrow.paragraph.tx-pending': 'Please wait while the transaction is being confirmed...',
  'borrow.paragraph.tx-success': 'You have successfully borrowed <strong>{{amount}} {{symbol}}.</strong>',
  'borrow.paragraph-remind-user-cancel-1':
    '<strong>Cancel your listings and sale offers for {{ collateralName }} <br></strong> on OpenSea, Looks Rare, X2Y2 or any other platforms.',
  'batch-borrow.paragraph-remind-user-cancel-1': '<strong>Cancel your listings and sale offers</strong> on OpenSea, Looks Rare, X2Y2 or any other platforms.',
  'borrow.paragraph-remind-user-cancel-2':
    "By borrowing ETH using the original NFT as collateral, you have transferred ownership to the contract. You won't be able to confirm sales or transfers for it.",
  'borrow.label.deposit-failed': 'Deposit failed.',
  'borrow.label.select-reserve': 'Change reserve',
  'borrow.label.select-collateral': 'Select collateral',
  'borrow.label.select-nft': 'Select NFT',
  'borrow.label.collateral-nft': 'Collateral NFT',
  'borrow.label.selected': 'Selected',
  'borrow.label.liquidation-ratio': 'Liquidation ratio',
  'borrow.paragraph.random-text': 'Insert paragraph',
  'borrow.no-wallet.description': 'Connect a wallet to borrow.',
  'borrow.label.your-wallet-balance': 'Your wallet balance',
  'borrow.label.available-in-wallet': 'Available in wallet',
  'borrow.step1':
    'By using your <strong>{{collateralName}} NFT</strong> as collateral, you are able to borrow up to <strong>{{availableToBorrow}} {{assetTicker}}</strong> with a <strong>Borrow APR of {{ borrowApy }}%.</strong> <br><br> <strong>Cancel your listings and sale offers<br> </strong> on OpenSea, Looks Rare, X2Y2 or any other platforms.',
  'borrow.title.my-borrowings': 'My Collaterals',
  'borrow.label.purchase-limit': "You don't have any NFT Collaterals. <strong>Buy some NFTs now.</strong>",
  'borrow.label.purchase-limit-testnet': "You don't have any Testnet NFT Collaterals. <strong>Just mint some NFTs now!</strong>",
  'borrow.paragraph.verify-address': '<strong>Note:</strong> Before you can borrow, you need to <strong>verify your wallet address.</strong>',
  'borrow.max-warning':
    'The updating of the floor price and the borrowing tx itself can be sometimes packaged into the same block, therefor maximal borrow (100%) transactions may fail. <br /><strong>We suggest an amount equal or lower than 95%.</strong>',
  // DASHBOARD PAGE
  'dashboard.title': 'Dashboard',
  'dashboard.title.description': 'All your active and past offers and loans',
  'dashboard.label.overview': 'Overview',
  'dashboard.label.my-nfts': 'My NFTs',
  'dashboard.title.my-deposits': 'My deposits',
  'dashboard.title.my-reserves': 'My reserves',
  'dashboard.title.my-borrowings': 'My borrows',
  'dashboard.title.my-nfts': 'My NFTs',
  'dashboard.title.my-reserves-history': 'My Reserves History',
  'dashboard.title.collaterals': 'My collaterals',
  'dashboard.title.collections': 'Collections',
  'dashboard.title.borrows': 'My Borrows',
  'dashboard.title.my-borrows': 'My borrows',
  'dashboard.title.my-active-auctions': 'My active auctions',
  'dashboard.title.my-bound-nfts': 'My BoundNFTs',
  'dashboard.label.latest-notifications': 'Latest notification',
  'dashboard.label.my-deposits': 'My deposits',
  'dashboard.label.my-borrows': 'My borrows',
  'dashboard.label.my-rewards': 'My rewards',
  'dashboard.label.in-auction': 'In auction',
  'dashboard.label.my-lockings': 'My lockings',
  'dashboard.label.my-collaterals': 'My collaterals',
  'dashboard.label.my-auctions': 'My auctions',
  'dashboard.rewards.borrowing-lending': 'Borrowing & Lending',
  'dashboard.rewards.borrowing-lending.sub': 'Borrow or deposit to earn BEND rewards',
  'dashboard.rewards.staking': 'Staking',
  'dashboard.rewards.staking.sub': 'Stake BEND to earn ETH/WETH rewards',
  'dashboard.label.rewards': 'Rewards',
  'dashboard.rewards.trading': 'Trading',
  'dashboard.rewards.trading.sub': 'Trade NFTs to earn BEND rewards',
  'dashboard.rewards.borrowing-lending.earn-daily': 'Earn daily BEND rewards by <br><strong>lending (deposit reserves) and/or borrowing.</span>',
  'dashboard.rewards.staking.stake-to-earn':
    '<strong>The more BEND you stake (lock), the bigger your rewards</strong> <br />from fees collected by the protocol. Rewards are calculated<br /> and distributed once daily.',
  'dashboard.rewards.staking.wait-box':
    "Today's total rewards for all holders are <strong>{{amount}} ETH</strong>. <br>This week's total rewards for all holders are <strong>{{amountWeek}} ETH</strong><br><br>and will be claimable on {{ claimTime }}.",
  'dashboard.rewards.staking.wait-box-1':
    "Today's total rewards for all holders are <strong>{{amount}} ETH</strong>. This week's total rewards for all holders are <strong>{{amountWeek}} ETH</strong> and will be distributed on <strong>{{ claimTime }}.</strong> Your rewards will be claimable after distribution, if you <strong>keep BEND locked</strong> until this time.",
  'dashboard.rewards.staking.wait-box-new-holder':
    "Today's total rewards for all holders are <strong>{{amount}} ETH</strong>. This week's total rewards for all holders are <strong>{{amountWeek}} ETH</strong> and will be distributed on {{ claimTime }}. As a new veBEND holder, your rewards will be claimable after <strong>{{newHolderClaimableTime}},</strong> if you <strong>keep BEND locked</strong> until this time.",
  'dashboard.rewards.trading.buy-or-sell-nfts': '<strong>Buying or selling NFTs on BENDs upcoming </strong><br>marketplace will give you BEND rewards.',
  'dashboard.notification.loan_warn_1a':
    '<red-color>Health factor dropped below 1</red-color> ({{ healthFactor }}). Others can now bid on repaying your borrowed amount for loan <strong>{{ collectionName }} #{{ collateral }}</strong> and eventually obtain ownership of your NFT collateral. We suggest you <strong>redeem the loan</strong> and save your NFT. ',
  'dashboard.notification.loan_warn_1b':
    '<yellow-color>Health factor dropped below 2</yellow-color> ({{ healthFactor }}). Please pay attention to your NFT loans risk in time. You can <strong>repay part of the amount to improve the health factor.</strong> Higher than 3 is safe.',
  'dashboard.notification.loan_warn_3':
    'Your last bid on the <strong>{{ collectionName }} #{{ collateral }}</strong> auction was <strong><primary-color>overbid</strong></primary-color>. The new highest bid is <strong>{{ highestBid }} {{ reserve }}.</strong> You can still place a higher bid to win the auction, liquidate the loan and obtain the NFT.',
  'dashboard.notification.loan_warn_2':
    "Since you didn't repay your loan for <strong>{{ collectionName }} #{{ collateral }}</strong> in time, it has now <primary-color> entered the auction state</primary-color>. You have <strong>48 hours to repay or redeem</strong> your loan, otherwise others can bid on it and eventually obtain ownership of your NFT collateral. ",
  'dashboard.notification.loan_warn_4a':
    'You repaid your loan for <strong>{{ collectionName }} #{{ collateral }}</strong> and <green-color>successfully regained ownership</green-color>.',
  'dashboard.notification.loan_warn_5a':
    'Your loan using collateral <strong>{{ collectionName }} #{{ collateral }} <green-color>can now be liquidated</green-color></strong>. You are <strong>the winner of the auction</strong> with the highest bid of <strong> {{ highestBid }} {{ reserve }}.</strong> Visit the liquidation page.',
  'dashboard.notification.loan_alert':
    'Your loan using collateral <strong>{{ collectionName }} #{{ collateral }}<red-color>can now be liquidated</red-color></strong>. Someone else placed the highest bid of <strong>{{highestBid}} {{reserve}}</strong>. Once the loan is liquidated <strong><red-color>you will loose its ownership</red-color></strong>.',
  'dashboard.notification.loan_warn_5b':
    'Your loan using collateral <strong>{{ collectionName }} #{{ collateral }} <red-color>can now be liquidated</red-color></strong>. Someone else placed the highest bid of <strong>{{highestBid}} {{reserve}}</strong>. Once the loan is liquidated <strong><red-color>you will loose its ownership</red-color></strong>.',
  'dashboard.paragraph.verify-email':
    '<strong>Important:</strong> We have sent you a confirmation link. Please, open you Inbox and <primary-color>verify you email.</primary-color>',
  'dashboard.label.deposit-and-borrow': 'Deposit and  Borrow',
  'dashboard.label.locking-staking': 'Locking/Staking',
  'dashboard.title.my-borrows-history': 'History: Borrows & Repays',

  // VEBEND DASHBOARD SUBCOMPONENT

  'vebend.label.total-bend-locked': 'Total BEND locked',
  'vebend.label.total-percent-locked': '% of total BEND locked',
  'vebend.label.min-lock-time': 'Min. lock time',
  'vebend.label.min-lock-time.suffix': 'week',
  'vebend.label.total-vebend': 'Total veBEND',
  'vebend.label.locked-bend-voting-percentage': '% of total BEND locked excluding voting escrow',
  'vebend.title.lock-bend': 'Lock BEND',
  'vebend.paragraph1.lock':
    'Locking {{amount}} BEND for <strong>{{ yearsDuration }} {{ yearTime }} {{ weeksDuration }} {{time}}</strong>, will increase your voting power to <strong>{{votingPower}} veBEND.</strong>',
  'vebend.paragraph2.lock': 'Your tokens will be locked until <br /><strong>{{newDate}}.</strong>',
  'vebend.paragraph1.add':
    'By increasing the locked amount for<br /> {{amount}} BEND your voting power<br /> will be increased to <strong>{{votingPower}} veBEND.</strong>',
  'vebend.paragraph2.add': 'Tokens will stay locked until <br /><strong>{{newDate}}.</strong>',
  'vebend.paragraph1.increased':
    'By increasing the lock time to <br /><strong>{{ yearsDuration }} {{ yearTime }} {{ weeksDuration }} {{time}}</strong>, your tokens will be locked until <strong>{{newDate}}.</strong>',
  'vebend.paragraph2.increased': 'Your voting power will be increased by <br /> {{votingPower}} veBEND to <strong>{{totalVotingPower}} veBEND.</strong>',
  'vebend.paragraph2': 'You can withdraw your <strong>{{amount}} BEND.</strong>',
  'vebend.label.your-bend-balance': 'Your veBEND balance',
  'vebend.label.your-bend-locked': 'Your BEND locked',
  'vebend.label.locking-apr-7d': 'Avg Locking APR (7d)',
  'vebend.label.your-locking-apr-7d': 'Your Locking APR (7d)',
  'vebend.label.min-locktime': 'Min lock time',
  'vebend.label.voting-power': 'veBEND voting power',
  'vebend.paragraph.approve': 'Before you can <strong>lock your {{token}}</strong>, you must approve the <strong>{{contract}} contract.</strong>',
  'vebend.paragraph.tx-success': 'You have locked <strong>{{amount}} {{symbol}}</strong> for <strong>{{duration}} {{time}}</strong> successfully.',
  'vebend.paragraph.tx-success.amount': 'You have locked additional <strong>{{amount}} {{symbol}}</strong> successfully.',
  'vebend.paragraph.tx-success.time': 'You have increased your locking time for <strong>{{duration}} {{time}}</strong> successfully.',
  'vebend.paragraph.tx-success.withdraw': 'You have successfully withdrawn <strong>{{amount}} {{symbol}}</strong>.',
  'vebend.paragraph.locked': 'Your tokens are locked until <br /><strong>{{lockEnd}}</strong>.',
  'vebend.time.single': 'week',
  'vebend.time.multiple': 'weeks',
  'vebend.paragraph.select-lock-time': 'Please select the lock time.',
  'vebend.paragraph.overlocked': 'Your tokens are locked for the <strong>maximum period</strong> of <strong>4 years.</strong>',
  'vebend.paragraph.valid-amount': 'Please enter a valid amount.',
  'vebend.paragraph.valid-amount-time':
    '<strong>Lock your BEND tokens and earn rewards.</strong><br /><br />You will receive our veBEND tokens<br />and with them more voting power.',
  // LIQUDATION PAGE & WIZARD

  'liquidate.title': 'Liquidate',
  'liquidate.label.available-in-wallet': 'Available in wallet',
  'liquidate.paragraph.tx-pending': 'Please wait while the transaction is being confirmed...',
  'liquidate.label.liquidation-failed': 'Liquidation failed.',
  'liquidate.label.you-have-liquidated': 'You have liquidated',
  'liquidate.paragraph.random-text': 'Your balance is sufficient, you are able to liquidate.',

  // STAKE PAGE
  'stake.title': 'Stake',
  'stake.label.staked': 'Staked',
  'stake.label.my-reward': 'My reward',
  'stake.paragraph':
    'By <strong>staking BEND</strong> you will <strong>earn BEND</strong> as Safety Incentives (SI) along <strong>with a percentage of protocol fees.</strong>',
  'stake.label.claim-reward': 'Claim reward',
  'stake.label.unstake': 'Unstake',
  'stake.label.your-stakings': 'Your stakings',
  'stake.label.total-staked-usd': 'Total staked USD value',
  'stake.claim-reward.tx-success': 'You have claimed <strong>{{amount}} {{symbol}}</strong> successfully.',
  'stake.tx-success': 'You have staked <strong>{{amount}} {{symbol}}</strong> successfully.',
  'stake.paragraph.approve-token': 'Before you can <strong>stake</strong>, you must approve the <strong>{{token}} contract.</strong>',

  // UNSTAKE PAGE
  'unstake.title': 'Unstake',
  'unstake.label.trigger-cooldown-period': 'Trigger cooldown for unstaking',
  'unstake.paragraph.trigger-cooldown-before':
    'Before you can unstake your tokens, you need to <strong>trigger the cooldown.</strong> After cooldown, you will have',
  'unstake.paragraph.trigger-cooldown-after': ' to redeem your staked tokens.',
  'unstake.paragraph.repaid': 'You have succesfully repaid your loan amount of',
  'unstake.label.success': 'succesfully.',
  'unstake.paragraph.reddem': 'You have succesfully redeemed your loan amount of',
  'unstake.paragraph.stake-in': 'You will be able to unstake in',
  'unstake.paragraph.now-able-to-stake': 'You are now able to unstake. Redeem window closes in',
  'unstake.tx-success': 'You have redeemed <strong>{{amount}} {{symbol}}</strong> successfully.',

  'unstake.paragraph.after-cooldown': 'to redeem your staked tokens.',

  // INCENTIVE

  'incentive.title': 'Incentive',
  'incentive.claim-your-rewards': 'Claim your rewards',
  'incentive.total-rewards': 'Total rewards',
  'incentive.your-reward': 'Your reward',
  'incentive.title.available-assets': 'Available assets',
  'incentive.paragraph.success': 'You have successfully claimed',
  'incentive.paragraph1': "The more you <strong>deposit and/or borrow, the more rewards</strong> you're entitled to.",
  'incentive.paragraph2': 'You can claim your <strong>available rewards.</strong>',
  'incentive.available-claim': 'Available claim',

  // REPAY
  'repay.title': 'Repay',
  'repay.label.available-in-wallet': 'Available in wallet:',
  'repay.label.collateral-nft': 'Collateral NFT',
  'repay.paragraph.auction-enter': 'Your Loan entered the <strong>Auction</strong> state which will end in:',
  'repay.paragraph.balance-sufficient': 'Your balance is sufficient. You can <strong>repay your whole loan of {{amountBorrowed}} {{assetTicker}}</strong>',
  'repay.paragraph.balance-sufficient-redeem-auction':
    'You can still save your loan. We suggest you redeem<br> at least a part of your loan and <strong>raise the health factor</strong> back above 2.<br /><br /> You can redeem <strong>max {{ maxRedeemAmount }} {{assetTicker}}</strong> (90% of your debt).<br /><br /> To redeem you must pay a bid fine of <strong>{{bidFine}} {{bidFineSymbol}}.</strong>',
  'repay.paragraph.balance-sufficient-redeem':
    'Your balance is sufficient. You can still <strong>redeem your loan of {{amountBorrowed}} {{assetTicker}}</strong>',
  'repay.paragraph.balance-insufficient': 'Your balance is insufficient. You can repay just a part of your loan.',
  'repay.paragraph.balance-insufficient-redeem': 'Your balance is insufficient. You must redeem a part of your loan before the auction time runs out.',
  'repay.paragraph.deadline-missed-1': 'You missed the deadline to redeem your loan.',
  'repay.paragraph.deadline-missed-2': 'You can still <strong>place a bid</strong> and get your NFT back.',
  'repay.paragraph.approve-contract': 'Before you can repay, you must approve the gateway contract.',
  'repay.paragraph.repaid': 'You have succesfully repaid your loan amount of',
  'repay.paragraph.reddem': 'You have succesfully redeemed your loan amount of',
  'repay.repay-whole-loan': 'Repay all - Repay the whole loan to regain NFT ownership',
  'repay.no-wallet.description': 'Connect the wallet to use repay.',
  'repay.paragraph.repay-all':
    'The default slippage for this transaction is 0.1%. The maximum slippage is 0.01 ETH. <br /> All unused ETH will be send back to your wallet.',
  'repay.repay-eth': 'Repay ETH',
  // REDEEM

  'redeem.redeem-whole-loan': 'Redeem 90% - maximum possible',
  'redeem.redeem-max-loan-1': 'Redeem max. amount',
  'redeem.redeem-max-loan-2': 'you can redeem max 90% of your debt',
  'redeem.redeem-loan': 'Redeem loan',
  'redeem.title': 'Redeem',

  // WITHDRAW
  'title.withdraw': 'Withdraw',
  'withdraw.paragraph.tx-success': 'You have withdrawn <strong>{{amount}} {{symbol}}</strong> successfully.',
  'withdraw.step1': 'You can <strong>withdraw</strong> a partial or the whole <strong>deposited amount with interests included.</strong>',
  'withdraw.paragraph.approve-token': 'Before you can withdraw, you must approve the <strong>{{token}}</strong> contract.',
  'withdraw.no-wallet.description': 'Wallet connection needed for withdrawals.',
  'withdraw.withdraw-all': 'Withdraw all - Withdraw total deposited amount from BEND',
  // AUCTION
  'auction.title': 'Auction',
  'title.auction-history': 'Auction History',
  'available-to-auction.title': 'Available to Auction',
  'health-factor-alert-list.title': 'Health Factor Alert List',
  'loans-in-auction.title': 'Loans in Auction',
  'auction.place-a-bid': 'Place a bid',
  'auction.paragraph.approve-contract': 'Before you can auction, you must approve the BEND contract.',
  'auction.paragraph.auction-end-in': 'This Loan entered the <strong>Auction</strong> state which will end in',
  'auction.paragraph.auction-ended': 'Auction ended',
  'auction.paragraph.auction-ended-extra':
    'Your highest bid is smaller than the borrowed amount. You need to pay the <strong>extra amount of {{ extraAmount }} ETH</strong> to be able to liquidate this loan.',
  'title.bid-history': 'Bid History',
  'auction.paragraph.tx-success': 'You have successfully placed your <strong>bid</strong> of <strong>{{amount}} {{symbol}}.</strong>',
  'auction.paragraph.more-info':
    'The bid price must be <br/><strong>greater than the current highest bid price + 1% * debt ({{minBid}} {{symbol}})</strong><br/><br/> If your bid will be the highest when auction ends, you will be able to liquidate the loan and become the new owner of the <strong>{{collateralName}}</strong> NFT Token. If someone bids higher, your previous bid will be returned to your wallet in WETH.',
  'auction.paragraph.first-bid-info':
    'The bid price must be <strong>greater than the debt amount and<br/> greater than the floor price * (1 - liquidation bonus) ({{minBid}} {{symbol}})</strong><br/><br/> If your bid will be the highest when auction ends, you will be able to liquidate the loan and become the new owner of the <strong>{{collateralName}}</strong> NFT Token. If someone bids higher, your previous bid will be returned to your wallet in WETH.',
  'auction.paragraph.balance-insufficient': 'Your balance is insufficient. Top up your ETH balance to place a bid.',
  'auction.paragraph.liquidate.approve-contract': 'Before you can liquidate, you must approve the contract.',
  // HOME
  'title.collections': 'Collections',

  // FAUCET
  'nft-faucet.label.select-collection': 'Select NFT Collection',
  'nft-faucet.title': 'NFT Faucet',
  'nft-faucet.selected': 'Selected',
  'nft-faucet.paragraph': 'Enter a Token ID number between 1 - 10000 to mint a new NFT Token from the selected collection to your connected wallet.',
  'nft-faucet.mint-collateral': 'Mint a NFT Collateral',
  'nft-faucet.your-wallet': 'Your wallet',
  'nft-faucet.token-id-number': 'Token ID Number',
  'nft-faucet.mint-nft': 'Mint NFT',
  'nft-faucet.select-collection': 'Select collection',
  'nft-faucet.need-nft': 'Need NFTs for testing?',
  'nft-faucet.easy-mint': ' Just mint some NFTs now!',
  'nft-faucet.paragraph.tx-success': 'You have successfully minted {{name}} id {{tokenId}}.',

  'reserve-faucet.need-tokens': 'Need ETHs for testing?',
  'reserve-faucet.easy-request': 'Easy... just request them.',
  'nft-faucet.no-wallet-description': 'Connect your wallet and start minting NFTs!',

  // TOKEN PRESALE PAGE
  'fair-launch.title': 'Fair Launch',
  'fair-launch.offering-timeframe': 'Offering timeframe',
  'fair-launch.banner.more-info': 'More information?',
  'fair-launch.banner.read-docs': 'Read the documentation.',
  'fair-launch.label.your-nfts': 'Your NFTs',
  'fair-launch.label.offerings-price': 'Offerings price',
  'fair-launch.label.your-max-buyable': 'Your max buyable',
  'fair-launch.label.buy-bend': 'Buy BEND',
  'fair-launch.step-nothing-selected': 'Please enter an amount for your purchase.',
  'fair-launch.step-entered-amount':
    'You will receive <strong>{{ lockedBendAmount }} BEND</strong> to your wallet.</strong> <br /><br />You can lock your BEND which gives you voting power and a share of the <strong>total protocol income.</strong> Locking is optional.',
  'fair-launch.step1-2':
    'You will lock <strong>{{ lockedBendAmount }} BEND</strong> for <strong>{{ yearsDuration }} {{ yearTime }} {{ weeksDuration }} {{time}}.</strong> You will add <strong>{{ veBendAmount }} veBEND</strong> to your voting power. After the lock period you can claim your BEND tokens.',
  'fair-launch.step1-2-2':
    'You will additionally lock <strong>{{ lockedBendAmount }} BEND</strong> until <strong>{{ lockedTimePeriod }}.</strong> You will add <strong>{{ veBendAmount }} veBEND</strong> to your voting power. After the lock period you can claim your BEND tokens.',
  'fair-launch.label.token-allocation': 'Token allocation',
  'fair-launch.label.purchase-limit': 'Need a bigger purchase limit? <strong>Buy more NFTs.</strong>',
  'fair-launch.label.token-price': 'Token price',
  'fair-launch.label.tokens-sold': 'Sold in current round',
  'fair-launch.label.available-for-sale': 'Available for sale',
  'fair-launch.label.your-locked-bend': 'Your locked BEND',
  'fair-launch.label.total-available': 'Total available',
  'fair-launch.label.dev-team': 'Dev Team',
  'fair-launch.label.ido': 'IDO',
  'fair-launch.label.community-incentive': 'Community incentive',
  'fair-launch.label.duration': 'Duration',
  'fair-launch.label.start': 'Start',
  'fair-launch.label.end': 'End',
  'fair-launch.label.dao-treasury': 'DAO Treasury  =  IDO + Community incentive',
  'label.no-wallet.description': 'Connect the wallet for page access.',
  'fair-launch.label.buy-bend.success': 'You have successfully bought BEND in value of ',
  'fair-launch.label.nft-used': 'Check NFTs',
  'fair-launch.label.nft-used-yet': 'Was the NFT used for Presale yet?',
  'fair-launch.label.select-collection': 'Select collection',
  'fair-launch.page.nft-was-used': 'The NFT Token <strong>{{ collectionName }} #{{tokenId}}</strong> was already used for the token sale.',
  'fair-launch.page.nft-was-not-used': 'The NFT Token <strong>{{ collectionName }} #{{tokenId}}</strong> has not been used for the token sale.',
  'fair-launch.presale-progress': 'Presale <strong>Progress</strong>',
  'fair-launch.label.who-can-join': '<strong>Who</strong> can join the presale?',
  'fair-launch.label.who-can-join.sub': 'Public: Everyone.',
  'fair-launch.label.how-much': '<strong>How much</strong> BEND can I get?',
  'fair-launch.label.how-much.sub': 'There is no limit for IFO.',
  'fair-launch.label.where-to-get': '<strong>What</strong> will the raised ETH be used for?',
  'fair-launch.label.where-to-get.sub': '66% will be used for the BEND protocol lending pool, 34% for the BEND dev operation.',
  'fair-launch.label.airdrop-stage': 'Airdrop',
  'fair-launch.label.finished': 'finished',
  'fair-launch.label.private-presale': 'Private presale',
  'fair-launch.label.live-now': 'live now',
  'fair-launch.label.round': 'round {{round}} / {{totalRounds}}',
  'fair-launch.label.public-presale': 'Public presale',
  'fair-launch.label.tba': 'tba',
  'fair-launch.label.finish': 'Finish',
  'fair-launch.label.get-updates-first': 'Get all the updates first!',
  'fair-launch.title.follow-our-channels': 'Follow our channels',
  'fair-launch.label.lock-my-bend': 'I want to lock my BEND',
  // PROFILE PAGE DASHBOARD
  'profile.title': 'Profile',
  'profile.label.profile-settings': 'Profile settings',
  'profile.label.notifications': 'Notifications',
  'profile.label.customize': 'Customize',
  'profile.label.edit-your': 'Edit your',
  'profile.label.more': 'More',
  'profile.label.settings-sample': 'Settings sample',
  'profile.label.username': 'Username',
  'profile.label.enter-username': 'Enter username',
  'profile.username-registered': 'Username registered',
  'profile.label.required': 'Field username is required.',
  'profile.label.fill-details': 'Fill out the profile details for {{ address }}',
  'profile.label.email-placeholder': 'your@email.com',
  'profile.label.twitter-placeholder': '@twitterHandle',
  'profile.label.instagram-placeholder': '@instagramHandle',
  'profile.label.tell-story': 'Tell your story!',
  'profile.label.notification-select': 'Select which notifications you would like to receive for {{ address }}',
  'profile.title.auctions-on-my-auctions': 'Auctions On My Auctions',
  'profile.description.liquidations-on-my-borrows': 'Get notified when a borrow deal of yours enters the liquidation stage.',
  'profile.title.liquidations-on-my-borrows': 'Liquidations On My Borrows',
  'profile.description.auctions-on-my-auctions': 'Get notified when a new bid is placed on your active auctions.',
  'profile.label.announcement-channels': 'Announcement channels',
  'profile.subtitle.follow-our-socials': 'Follow our official social channels to get the latest news',
  'profile.title.need-signature': 'We need your signature',
  'profile.title.verify-address': 'Verify address',
  'profile.subtitle.verify-address.sub': 'Verify your address to register your referrers code',
  'profile.subtitle.need-signature': 'To save your profile information, you need to verify your address.',
  'profile.title.been-invited': 'You have been invited already',
  'profile.title.been-invited.sub':
    "You have already used a referral code before. The current one won't be registered. Your registered referrers code is <primary-color>{{ refCode }}</primary-color>",
  'profile.label.connected': 'Connected',
  'profile.label.not-connected': 'Not connected',
  'profile.label.list-of-all-notifications': 'List of all notifications for {{ address }}',
  'profile.connect.step1': "Open {{ platform }} and connect with Bend's Notification bot {{ bot }}",
  'profile.connect.step2.telegram': "Once connected, tap START and you're set. If you don't see it in the chat, type in /start",
  'profile.connect.step2.discord': 'Once authorized with our Discord bot, click confirm',
  'profile.username-taken': 'Username taken',
  'profile.email-taken': 'Email taken',
  'profile.verification-pending': 'Verification pending',
  'profile.label.unique': 'Unique',
  'profile.label.verified': 'Verified',
  'profile.title.referral-code': 'Referral code',
  'profile.subtitle.referral-code': 'Copy and share your referral link with others to get extra rewards',
  'profile.title.ref-code-been-created': 'Your referral has been registered',
  'profile.title.ref-code-been-created.sub':
    'This is the first time you have used a referral code. It is now registered. Your registered referrers code is <primary-color>{{ refCode }}</primary-color>',
  'profile.title.ref-cannot-reffer-self': "You can't reffer yourself",
  'label.asset': 'Asset',
  'profile.title.ref-cannot-reffer-self.sub':
    "You are using the refferal code of the connected wallet. It won't be registered.<br>Try again with another referrers code.",

  // IFO

  'ifo.title': 'Fair Launch',

  // TRANSFER BACK

  'transfer-back.title': 'Transfer back',

  // FLASH CLAIM PAGE

  'flash-claim.no-wallet.description': 'A wallet connection is needed for flash claims.',
  'flash-claim.title': 'Flash claim',
  'flash-claim.subtitle': 'Claim your airdrops',
  'flash-claim.transfer-back-default': 'Transfer the selected NFTs to your wallet.',
  'flash-claim.choose-airdrop-project': 'Choose Airdrop Project',
  'flash-claim.airdrop-contract': 'Airdrop contract',
  'flash-claim.airdrop-projects': 'Airdrop projects',
  'flash-claim.airdrop-receiver-contract': 'Airdrop Receiver Contract',
  'flash-claim.first-deploy-your-own-contract':
    "To use Flash claim, you need to deploy your own receiver contract first. Deploying the contract is cost related, but it's needed only once.",
  'flash-claim.no-collaterals': 'You dont have NFTs as loan collaterals that fit this Airdrop project.',
  'flash-claim.step-1':
    '<strong>Select the Airdrop Project</strong> you want to claim from,<br> then <strong>Select the NFTs</strong> which you want to claim the Airdrop for.',
  'flash-claim.label.choose-collection-first': 'Choose collection first',
  'flash-claim.label.choose-collection': 'Choose collection',
  'flash-claim.label.choose-airdrop-first': 'Choose airdrop first',
  'flash-claim.label.choose-airdrop': 'Choose airdrop',
  'flash-claim.label.select-nft-for-airdrop': '<strong>Select the NFTs</strong> which you want to claim the Airdrop for.',
  'flash-claim.label.claim-now': 'Text for claim now.',
  'flash-claim.label.select-airdrop-project': 'Choose a Airdrop Project',
  'flash-claim.paragraph.tx-success': 'You have successfully executed the flash claim.',
  'flash-claim.label.no-collection-found': 'No collection found',
  'flash-claim.label.project-description': 'Project description',
  'flash-claim.label.project-name': 'Project name',
  'flash-claim.label.token-type': 'Token type',
  'flash-claim.label.website': 'Website',
  'flash-claim.label.contract-address': 'Contract address',
  'flash-claim.step-claim':
    'Owning a <strong>NFT</strong> in any of the <strong>supported collections</strong> allows you to claim <strong>your airdrop.</strong>',
  'flash-claim.no-tokens-in-collection': 'No tokens in collection.',
  'flash-claim.learn-more': 'Learn more / FAQ',
  'flash-claim.label.token-address': 'Token address',
  'flash-claim.mayc.step-1': '<strong>Select a Mutant Serum</strong> you will transfer to your Receiver Contract.',
  'flash-claim.mayc.step-2': '<strong>Select a BAYC token</strong> you will use for this new Mutant NFT Mint.',
  'flash-claim.mayc.step-3': 'Check your selection and claim <strong>your airdrop / mint your new Mutant NFT token.</strong>',
  'flash-claim.mayc.confirm': 'Please confirm the transaction.',
  'flash-claim.mayc.minting': 'Please wait while <strong>your new MAYC NFT</strong> is being minted.',
  'flash-claim.mayc.success': 'You have successfully minted a new MAYC with your BAYC #{{ tokenId }}.',
  'flash-claim.selected-serum-token': 'Selected token',
  'flash-claim.selected-nft-token': 'Selected NFT token',
  'flash-claim.selected-nft-and-serum': 'Selected NFT and Serum',
  'flash-claim.minting': 'Minting',
  'flash-claim.composable-nfts-found-in-contract': 'Composable NFTs found in contract!',
  'flash-claim.doople-nfts-found-in-contract': 'DOOPLE NFTs found in contract!',
  'flash-claim.button.transfer-dooples': 'Transfer DOOPLEs ({{amount}})',

  'flash-claim.selected-nft-tokens': 'Selected NFT Tokens',

  'flash-claim.yuga-metaverse-land.step-1': '<strong>Select {{token}} Tokens</strong> you wish to use for this Airdrop claim.',
  'flash-claim.yuga-metaverse-land.step-2': 'Check your selected NFT tokens and <strong>claim your airdrop.</strong>',
  'flash-claim.yuga-metaverse-land.success': 'You have successfully claimed <strong>your NFT.</strong> Check your wallet.',
  'flash-claim.doodles-dooplicator.step-1': '<strong>Select {{token}} Tokens</strong> you wish to use for this Airdrop claim.',
  'flash-claim.doodles-dooplicator.step-2': 'Check your selected NFT tokens and <strong>claim your airdrop.</strong>',
  'flash-claim.doodles-dooplicator.success':
    'You have successfully claimed <strong>your NFT</strong>. Please transfer <strong>DOOPL</strong> token from receiver contract to your wallet.',
  'flash-claim.minted-nft': 'Minted NFT',
  'flash-claim.new-mayc-minted': 'New MAYC minted!',
  'flash-claim.ape-coin.step-1':
    '<strong>Optionally</strong> select one or more <strong>composable tokens</strong> you will transfer to your receiver contract.',
  'flash-claim.ape-coin.step-2': '<strong>Transfer {{token}}</strong> to your Receiver Contract.',
  'flash-claim.ape-coin.step-3': '<strong>Select BAYC Tokens</strong> you will use for this Airdrop claim.',
  'flash-claim.ape-coin.step-4': 'Check your selected tokens and <strong>claim your airdrop.</strong>',
  'flash-claim.transfered-composable-tokens': 'Transfered Composable Tokens',
  'flash-claim.selected-airdrop-nft-tokens': 'Selected Airdrop NFT Tokens',
  'flash-claim.ape-coin.success': 'You have successfully claimed <strong>your tokens.</strong> Check your wallet.',
  'flash-claim.ape-coin.confirm': 'Please confirm the transaction.',
  'flash-claim.ape-coin.processing': 'Please wait while <strong>your ApeCoin</strong> is being claimed.',
  'flash-claim.transfer-composable-tokens': 'Transfer Composable Tokens',
  'flash-claim.transfer-back-composable-tokens': 'Transfer back Composable tokens',
  'flash-claim.transfer-back-doopl-tokens': 'Transfer back Dooplicator tokens',
  'flash-claim.ape-coin.step-transfer-back': '<strong>Transfer {{token}}</strong> back to your Wallet.',
  'flash-claim.composable-tokens-in-receiver-contract': 'Tokens in Receiver Contract',
  'flash-claim.processing': 'Processing...',
  'flash-claim.button.transfer-back-to-wallet': 'Transfer back to wallet',
  'flash-claim.transfer-back-success': 'You have successfully transfered your {{ token }} back to your wallet.',
  'flash-claim.transfer-back-success-default': 'You have successfully transfered your selected tokens back to your wallet.',
  'flash-claim.dooplicator.transfer-nfts': '<strong>Transfer NFTs</strong> to your wallet.',
  'flash-claim.dooplicator.transfer-success': 'You have successfully <strong>transfered your Dooplicator NFTs.</strong> Check your wallet.',
  'flash-claim.dooplicator.transfer-error': '<strong>Error:</strong> {{errorMsg}}.',
  'flash-claim.transfer-dooplicator-nfts-1': 'Transfer DOOPL NFTs',
  'flash-claim.transfer-dooplicator-nfts-2': 'Skipped transfering your claimed NFTs?',
  'flash-claim.enter-tx-id': 'Your transaction id',

  // SIDEBAR

  'sidebar.wrap.succesfull': 'You have wrapped your <strong>{{ wrapAsset }}</strong> and received <strong>{{ txAmount }} {{ asset }}.</strong>',
  'sidebar.unwrap.succesfull': 'You have unwrapped your <strong>{{ wrapAsset }}</strong> and received <strong>{{ txAmount }} {{ asset }}.</strong>',
  'sidebar.subtitle.need-signature': 'To be able to see your notifications you need to verify your address.',

  // NFT CUSTODY

  'nft-custody.title': 'NFT Custody',
  'nft-custody.deposit-nft.title': 'Deposit NFT',
  'nft-custody.label.deposit-nft-infobox': 'Deposit your NFT to Custody and make it SAFE, you will <strong>only pay the GAS fee.</strong>',
  'nft-custody.label.withdraw-nft-infobox': '<strong>Withdraw</strong> your NFT from Custody.',

  'nft-custody.withdraw-nft.title': 'Withdraw NFT',
  'nft-custody.approve': 'Please approve the contract for the selected NFT Collection',
  'nft-custody.register': 'Confirm the transaction to register a proxy address in the Wrapped CryptoPunk contract',
  'nft-custody.register.button': 'Register proxy address',
  'nft-custody.transfer': 'Confirm the transaction to transfer <strong>#{{ tokenId }} CryptoPunk</strong> to the registered proxy address.',
  'nft-custody.transfer.button': 'Transfer Punk #{{ tokenId }}',
  'nft-custody.approve.button': 'Approve Punk #{{ tokenId }}',
  'nft-custody.mint-wpunk': 'Confirm the transaction to mint the transferred Wrapped CryptoPunk token.',
  'nft-custody.mint-wpunk.button': 'Mint WPunk',
  'nft-custody.paragraph.tx-success': 'You have successfully deposited {{ collectionName }} #{{tokenId}} to Custody',
  'nft-custody.paragraph.tx-success2': 'You have successfully withdrawn {{collectionName}} #{{nftId}}',
  'nft-custody.loading': 'Loading please wait...',

  'nft-custody.paragraph-remind-user-cancel-1':
    '<strong>Cancel your listings and sale offers for {{ collectionName }} {{tokenId }}<br></strong> on OpenSea, Looks Rare, X2Y2 or any other platforms.',
  'nft-custody.paragraph-remind-user-cancel-2':
    "By borrowing ETH using the original NFT as collateral, you have transferred ownership to the contract. You won't be able to confirm sales or transfers for it.",

  // DOWN PAYMENT NFTS

  'down-payment.title': 'Down Payment',
  'down-payment.no-wallet.description': 'Connect a wallet to use the Fly NFT feature.',
  'down-payment.subtitle': 'We’ll help you buy the NFT you love — fast.',
  'down-payment.paragraph.step1':
    'You can use the Down payment to buy this NFT. <strong>Pay {{payAmount}} ETH and buy your desired NFT now!</strong> Your paid <strong>{{payAmount}} ETH</strong> includes the <strong>down payment of {{payAmount}} ETH</strong> and <strong>trading fees of {{payAmount}} ETH. The remaining payment of {{payAmount}} ETH</strong> will be provided by AAVE flash loan and BEND borrowing.',
  'down-payment.choose-collection': 'Choose collection',
  'down-payment.step2-desired-url':
    '<strong>Search for your desired NFT on <u>OpenSea<u/> </strong>and <strong>copy/paste the URL,</strong> then click Confirm URL to request the NFT details.',
  'down-payment.step1-approve': 'Before you can continue with the down payment, you must first <strong>Approve WETH</strong> and <strong>debtWETH.</strong>',
  'down-payment.step1-approved': 'You have successfully approved the <strong>WETH</strong> and <strong>debtWETH token</strong> contracts.',
  'down-payment.step-error': '<strong>Error:</strong> {{errorMsg}}.',
  'down-payment.step2-token-id-submit':
    '<strong>Submit details about your desired NFT token, (Confirm ID / Confirm URL), </strong> then click continue to get the Down Payment offer.',
  'down-payment.step2-token-id-submit-crypto-punk':
    '<strong>Submit your desired NFT token ID (Confirm ID), </strong> then click continue to get the Down Payment offer.',
  'down-payment.step2-token-id-success': 'Success, your collection and token ID are valid.',
  'down-payment.step2-token-id-error': '<strong>{{errorType}}:</strong> {{errorMsg}}.',
  'down-payment.step2-no-sell-orders': 'A listing with the provided Collection and Token ID could not be found. Please try again.',
  'down-payment.step2-no-sell-orders-crypto-punk': 'A listing with the provided Token ID could not be found. Please try again.',
  'down-payment.step2-token-id-invalid':
    "We can't find a matching NFT on the Marketplaces. Please enter a valid Token ID that is listed on OpenSea or LooksRare.",
  'down-payment.step3-confirm':
    '<strong>You only need to pay {{amount}} {{assetTicker}} to buy this NFT.</strong> The missing {{assetTicker}} will be borrowed from BEND, and the purchased NFT will be deposited.',
  'down-payment.step3-processing': 'Please wait while <strong>your NFT is being purchased...</strong>',
  'down-payment.step3-success': 'You have bought the <strong>{{collectionName}} #{{tokenId}} NFT</strong>.',
  'down-payment.step3-error': '<strong>Error:</strong> {{errorMsg}}.',
  'down-payment.step2-enter-url':
    '<strong>Search for your desired NFT on OpenSea</strong> and <strong>copy/paste the URL,</strong> then click Confirm URL to request the NFT details.',
  'down-payment.step2-enter-url-error': '<strong>Invalid URL</strong>: {{ errorMsg }}',
  'down-payment.step2-enter-url-error-down-payment': '<strong>Error</strong>: {{ errorMsg }}',
  'down-payment.step2-enter-url-error-error-msg':
    'Unsupported Marketplace, Collection or Token ID. Please try again. We can only accept <strong>OpenSea or LooksRare URLs</strong> with NFTs from <strong>collections we support.</strong>',
  'down-payment.step2-processing': 'Please wait, processing...',
  'down-payment.step2-skip-url-process': 'Skip and enter NFT details manually',
  'down-payment.error-buy-order-error': 'An error occurred. Please check the details and try again.',
  'down-payment.step2-user-rejected-buy-signature': 'User has rejected the buy signature',
  'down-payment.token-approved': 'Both tokens are approved. Please sign the transaction to continue.',
  'down-payment.error-buy-order': 'An error occurred. Please check the details and try again.',
  // LIQUIDITY FARMING PAGE

  'liquidity-farming.title': 'Liquidity mining',
  'liquidity-farming.stake-bend-eth-lp-tokens': 'Stake BEND/ETH LP tokens',
  'liquidity-farming.claim-your-rewards-lp': 'Claim your rewards for LP staking',
  'liquidity-farming.step1': 'Enter an amount you want to stake.',
  'liquidity-farming.earn-bend-by-staking': 'Earn BEND by staking LPs',
  'liquidity-farming.no-wallet.description': 'A wallet connection is needed for Liquidity mining.',
  'liquidity-farming.rewards.yes': 'You can claim your rewards.',
  'liquidity-farming.rewards.no': 'No rewards to claim.',
  'liquidity-farming.stake.approve': 'You must approve the contract before you can stake.',
  'liquidity-farming.stake.tx-success': 'You have successfully staked {{ amount }} LP tokens.',
  'liquidity-farming.unstake.tx-success': 'You have successfully unstaked {{ amount }} LP tokens.',
  'liquidity-farming.rewards.tx-success': 'You have successfully claimed {{ amount }} BEND.',

  // BATCH BORROW

  'batch-borrow.subtitle': 'Use multiple NFTs as collateral and borrow ETH in one transaction',
  'batch-borrow.step1':
    '<strong>Choose at least one NFT token</strong> which you want to deposit as collateral. The more collaterals you deposit, the higher ETH amount you can borrow.<br><br> <strong>Cancel your listings and sale offers </strong> on OpenSea, Looks Rare, X2Y2 or any other platforms.',
  'batch-borrow.step4':
    "Before you can continue borrowing ETH, you need to approve <strong>BEND's Debt Token </strong> and <strong>approve NFT Token</strong> for each NFT Collection and for each Cryptopunks NFT.",
  'batch-borrow.step5': 'You approved all Debt Tokens and all NFT Tokens.<br><strong>You can now continue and borrow your {{amount}} {{assetTicker}}.</strong>',
  'batch-borrow.confirm':
    'By using <strong>{{collateralCount}} of your NFTs</strong> as collateral, you will borrow a total amount of <strong>{{amount}} {{assetTicker}}.</strong>',
  'batch-borrow.step-success':
    'You have successfully borrowed <strong>{{amount}} {{assetTicker}}</strong> by using <strong>{{collateralCount}} of your NFTs</strong> as collateral.',
  'batch-borrow.step-error': '<strong>Error:</strong> {{errorMsg}}',

  // BATCH REPAY

  'batch-repay.subtitle': 'Repay multiple loans in one transaction',
  'batch-repay.step1':
    '<strong>Choose at least one loan</strong> for which you want to repay your debt. You can set the repay amounts for each loan in the next steps.',
  'batch-repay.repay-whole-loan': '<strong> Repay all</strong> (Repay the whole loan to regain NFT ownership)',
  'batch-repay.approve-gateaway-contracts': 'Before you can continue repaying ETH, you need to <strong>approve Gateway Contracts.</strong>',
  'batch-repay.gateaway-approved':
    'You approved all required Gateaway Contracts. <br><strong>You can now continue and repay {{ amount }} {{assetTicker}}.</strong>',
  'batch-repay.step-error': '<strong>Error:</strong> {{errorMsg}}',
  'batch-repay.confirm-repay':
    'You will repay a total amount of <strong>{{amount}} {{assetTicker}}</strong> for the <strong>{{ loanAmount }} selected active loans.</strong>',
  'batch-repay.processing': 'Processing...',
  'batch-repay.success': 'You have successfully repaid <strong>{{ loanAmount }} selected active loans.</strong>',
  'batch-repay.confirm-tx': 'Please confirm the transaction.',

  // COLLECTION DETAILS

  'analytics.title': 'NFT analytics',
  'analytics.wrong-network-id-1': 'Wrong Network',
  'analytics.wrong-network-id-2': 'The NFT analytics data is only available on Ethereum mainnet.',
  'analytics.no-wallet.description': 'A wallet connection is needed for analytics.',

  // MARKETPLACE
  'liquidity.title': 'Liquidity',
  'marketplace.title': 'Marketplace',
  'marketplace.buy-nft.title': 'Buy NFT',
  'marketplace.buy-nft-downpayment.title': 'Down Payment NFT Purchase',
  'marketplace.list-for-sale.title': 'List for Sale',
  'marketplace.cancel-listing.title': 'Cancel Listing',
  'marketplace.list-for-sale.subtitle': 'Create a listing for your NFT',
  'marketplace.adjust-listing.subtitle': 'Update the listing for your NFT',
  'marketplace.adjust-listing.title': 'Adjust Listing',
  'marketplace.list-for-sale.step1':
    'When you sell this item, <strong>{{ royaltyFee }}% (Creator royalties)</strong> of the amount will be taken out of the sale proceeds and sent to the creator of the NFT and <strong>{{ protocolFee }}% (Trading fee)</strong> will be redistributed to BendDAO treasury and veBEND holders.',
  'marketplace.list-for-sale.step1.min-price':
    "Creating a listing using the minimum price can sometimes fail since it doesn't cover the debt and bid fine. We suggest listing for a higher price.",
  'marketplace.list-for-sale.step2-approve':
    'Before you can continue with creating a listing, you need to approve the collection. Once approved, you can sell any item in this collection.',
  'marketplace.list-for-sale.step2-approved':
    'You have approved the collection and can now create your listing for <strong>{{ amount }} {{assetTicker }}.</strong>',
  'marketplace.list-for-sale.step3-confirm': 'Review your listing details and <strong>confirm the transaction.</strong>',
  'marketplace.list-for-sale.step3-processing': 'Please wait while the transaction is confirmed...',
  'marketplace.list-for-sale.step3-success-1':
    'Item successfully listed for <strong>{{ amount }} {{ assetTicker }},</strong> valid until <strong>{{ date }}.</strong>',
  'marketplace.list-for-sale.step3-success-2': 'You&apos;ll receive your payment in WETH, not ETH if someone buys your item.',
  'marketplace.cancel-listing.step1': 'If you are sure you want to cancel the listing, <strong>confirm the transaction.</strong>',
  'marketplace.cancel-listing.processing': 'Please wait while the transaction is confirmed...',
  'marketplace.cancel-listing.step2': 'You have cancelled the listing of this item for <strong>{{amount}} {{assetTicker}}.</strong>',
  'marketplace.cancel-listing.subtitle': 'Cancel the listing for your NFT',
  'marketplace.buy-nft.subtitle': 'Purchase the listed NFT',
  'marketplace.list-for-sale.punk-not-supported-title': 'Listing Cryptopunks is not supported.',
  'marketplace.list-for-sale.punk-not-supported-sub':
    "If you want to sell your CryptoPunk, you must first wrap it. Please visit the official <a href='https://www.wrappedpunks.com/' target='_blank' rel='noreferrer noopener'><a-punk >wrappedpunks.com</a-punk></a> to do that.",
  'marketplace.list-for-sale.punk-not-supported': 'Please try again after you wrap your CryptoPunk into an <strong>ERC-721 WrappedPunk.</strong>',
  'marketplace-buy-nft.step1':
    'You have sufficient {{asset}} balance to pay for the purchase.<br> You will <strong>pay {{amount}} {{asset}}</strong> to cover the payment. No {{alternativeAsset}} will be used.',
  'marketplace-buy-nft.step1-combined':
    'You have sufficient balance to pay for the purchase.<br> You will <strong>pay {{amount}} {{asset}} and {{alternativeAssetAmount}} {{alternativeAsset}}</strong> to cover the payment.',
  'marketplace.buy-nft.step2':
    'Before you can continue with the purchase, you need to <strong>approve {{assetTicker}} token.</strong> Once approved, you can buy any item in this collection.',
  'marketplace.buy-nft.step2-approve-coll':
    'Before you can continue with the purchase, you need to <strong>approve the {{collection}}</strong> collection. Once approved, you can buy any item in this collection.',
  'marketplace.buy-nft.step3-confirm': 'Review the listing offer again and <strong>confirm the transaction</strong> to buy the NFT.',
  'marketplace.buy-nft.step3-success':
    '<strong>Congratulations on your new NFT!</strong><br> Your have successfully purchased it for <strong>{{amount}} {{assetTicker}}.</strong>',
  'marketplace.buy-nft.step3-success.sub':
    'Reminder: You can now <strong>list your NFT for sale</strong> or you can <strong>use it as collateral to borrow ETH.</strong>',
  'marketplace.adjust-listing.step2-cancel':
    'You have cancelled the previous listing and can now re-list the item for <strong>{{amount}} {{assetTicker}}.</strong>',
  'marketplace.adjust-listing.step3-confirm': 'Review your adjusted listing details and <strong>confirm the transaction.</strong>',
  'marketplace.adjust-listing.step3-processing': 'Please wait while the transaction is confirmed...',
  'marketplace.adjust-listing.step3-success-1':
    'Item successfully listed for <strong>{{ amount }} {{ assetTicker }},</strong> valid until <strong>{{ date }}.</strong>',
  'marketplace-buy-nft.step1-insufficient': 'Wallet balance is insufficient.',
  'marketplace.adjust-listing.step3-success-2': 'You’ll receive your payment in WETH, not ETH if someone buys your item.',
  'marketplace-buy-nft.select-payment-step':
    'We offer two payment options. <br><br>1. <strong>Pay the downpayment and borrow the rest</strong> - obtain ownership after repaying.<br>2. <strong>Pay the full price</strong> in ETH and/or WETH - obtain ownership instantly.',
  'marketplace-downpayment.step1-unsufficient':
    "Downpayment only supports WETH for now.<br> You don't have sufficient WETH balance to pay for the purchase.<br><strong>Use our wrapping tool to swap</strong> your ETH to WETH.",
  'marketplace-downpayment.step1-sufficient':
    "'You have sufficient {{asset}} balance to pay for the purchase.<br> You will <strong>pay {{amount}} {{asset}}</strong> to cover the payment.",
  'marketplace.buy-nft-downpayment.subtitle': 'Purchase the listed NFT by just paying a partial price',
  'marketplace.buy-nft-default.subtitle': 'Purchase the listed NFT by paying the full price',
  'marketplace.full-buy-nft.title': 'Full Payment NFT Purchase',
  'marketplace.buy-nft-downpayment.step3-success':
    '<strong>Congratulations on your new NFT!</strong><br><br> Your have successfully purchased it for <strong>{{amount}} {{assetTicker}}</strong> and borrowed <strong>{{borrowAmount}} {{assetTicker}}.</strong>',
  'marketplace.buy-nft-downpayment.step3-success-disclaimer': 'You now have time to <strong>repay your loan</strong> and obtain full ownership.',
  'marketplace.buy-nft-buy-borrow.title': 'Buy NFT / with borrow',
  'marketplace.buy-nft-downpayment.step3-success-reminder': 'Reminder: You can now <strong>list your NFT for sale.</strong>',
  'marketplace.buy-nft-buy-borrow.subtitle': 'Purchase the listed NFT by borrowing ETH',
  'marketplace-buy-borrow-nft.step1':
    'You will pay <strong>{{amount}} {{assetTicker}}</strong> from your wallet balance and<br> <strong>borrow {{borrowAmount}} {{assetTicker}}</strong> from Bend to cover the payment for this NFT.',
  'marketplace.balance-sufficient': 'You have sufficient ETH balance to pay for the purchase. No WETH will be used.',
  'marketplace.balance-not-sufficient': 'You have insufficient ETH balance to pay for the purchase. No WETH will be used.',
  'marketplace.repay-loan-later': 'You can repay your loan later and obtain ownership of the NFT.',
  'marketplace.buy-borrow-nft.step3-success':
    '<strong>Congratulations on your new NFT!</strong><br> Your have successfully purchased it for <strong>{{amount}} {{assetTicker}}</strong> and borrowed <strong>{{borrowAmount}} {{assetTicker}}.</strong>',
  'marketplace.buy-borrow-nft.step3-success-sub': 'You now have time to <strong>repay your loan</strong> and obtain full ownership.',
  'marketplace.buy-borrow-nft.step3-success-sale-option': 'If you want, you can now <strong>list your NFT for sale.</strong>',
  'marketplace.receiver-contract': 'Marketplace Receiver Contract',
  'marketplace.receiver-contract.sub': 'Listing and selling your NFT requires you to deploy your Receiver contract.',
  'marketplace.receiver-contract.sub-buy': 'Buying NFTs requires you to deploy your Receiver contract.',
  'marketplace.label.proxy-contract-approved': 'Proxy contract approved',
  'marketplace.receiver-contract.error': 'An error occured. Please try again.',
  'marketplace.signature-required': 'Signature required',
  'marketplace.signature-required.sub': 'Before you can list your NFT for sale, you first need to verify your address.',
  'marketplace.signature-required.sub-buy': 'Before you can buy NFTs, you first need to verify your address.',
  'marketplace.list-for-sale.step1-verify-address': 'To be able to list and sell your NFT, you need to <strong>verify your address.</strong>',
  'marketplace.list-for-sale.step1-deploy-receiver-contract':
    'To be able to list and sell your NFT, you need to <strong>deploy your receiver contract.</strong>',
  'buy-notification.label-1': 'With your new NFT you can now use it as collateral to <strong>borrow ETH.</strong>',
  'buy-notification.label-2': 'If you want to <strong>sell your NFT immediately,</strong> you can create a listing for a sale offer.',
  'buy-notification.downpayment.label-1':
    'If you want to <strong>sell your NFT immediately,</strong> you can create a listing for a sale offer. <br><br>If someone buys it, your current<br>active loan will be repayed in full.',
  'batch-borrow-notification.label-1':
    'If you want to <strong>sell your NFT(s)</strong> immediately, you can create a listing for a sale offer.<br><br>If someone buys it, your current<br> active loan will be repayed in full.',
  'list-asset-notification.label-1': 'Before you list your NFT for sale, you can already get some ETH in advance.',
  'list-asset-notification.label-2': 'By using the NFT as collateral you can <strong>borrow ETH</strong> from BendDAO.',
  'batch-borrow.reminder': 'Reminder: You can now <strong>list your NFT(s) for sale.</strong>',
  'marketplace.listing-reminder':
    'Reminder: You can use your NFT as collateral to <strong>borrow up to {{amount}} {{assetTicker}} now</strong> and recieve the remaining sale amount when your NFT is bought.',
  'activity.title': 'Activity',

  // DANGLING ORDERS

  'dangling-orders.title': 'Dangling Orders',
  'dangling-orders.no-wallet.description': 'Connect a wallet to see if you have any dangling orders.',
  'dangling-orders.subtitle': 'Select and cancel your dangling orders',
  'dangling-asset.step1': 'Please cancel your dangling asset listings to avoid possible difficulities if you regain ownership of the assets in the future.',
  'dangling-asset.step2-confirm-cancel': 'You will cancel your dandling orders. Please review and confirm.',
  'dangling-asset.step2-processing': 'Processing...',
  'dangling-asset.step2-success': 'You have successfully canceled your dangling orders.',
  'dangling-asset.step2-error': '<strong>Error:</strong> {{errorMsg}}',
  'dangling-asset.signature-required.sub': 'Before you can cancel dangling NFTs, you first need to verify your address.'
}
