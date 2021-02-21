import { pools as configPools } from '../../configure';
import { status } from '../../common';

const tokens = {};

// Filter disabled pools so they don't get anywhere near the user.
const pools = configPools.filter((pool) => pool.status !== status.DISABLED);

pools.forEach(({ token, tokenAddress, earnedToken, earnedTokenAddress }) => {
  tokens[token] = {
    tokenAddress: tokenAddress,
    tokenBalance: 0,
  };
  tokens[earnedToken] = {
    tokenAddress: earnedTokenAddress,
    tokenBalance: 0,
  };
});

const initialState = {
  pools,
  tokens,
  apys: {},
  fetchApysPending: false,
  fetchVaultsDataPending: false,
  fetchVaultsDataLoaded: false,
  fetchBalancesPending: false,
  fetchApprovalPending: {},
  fetchDepositPending: {},
  fetchWithdrawPending: {},
  fetchHarvestPending: {},
};

export default initialState;
