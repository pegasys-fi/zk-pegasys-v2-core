import '@matterlabs/hardhat-zksync-solc'

export default {
  networks: {
    hardhat: {
      zksync: true
    },
    zkSysTestnet: {
      url: 'https://rpc-test-zk.syscoin.org',
      ethNetwork: `https://rpc-tanenbaum.rollux.com`,
      zksync: true,
      verifyURL: 'https://zksync2-testnet-explorer.zksync.dev/contract_verification',
    },
  },
  solidity: {
    version: '0.5.16'
  },
  zksolc: {
    version: '1.3.13',
    compilerSource: 'binary',
    settings: {}
  }
}
