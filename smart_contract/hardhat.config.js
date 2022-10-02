// require("@nomicfoundation/hardhat-toolbox");
// require
// /** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: "0.8.9",
// };

// https://eth-goerli.g.alchemy.com/v2/U8ghxXBh_0i1GyIjzcCEvRZdBeGXO-6-

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/U8ghxXBh_0i1GyIjzcCEvRZdBeGXO-6-',
      accounts: ['491ff1757912e6bfd780442402f74c4be2a5cd604f90cafa5e398696ad3759fe']
    }
  }
}