const {ethers} = require('hardhat')

module.exports['EscrowContractObject'] = {
    escrowContract: deployEscrowContract = async(token1Add, token2Add) => {
        let deployerToken1, deployerToken2, deployerEscrow, escrowContract

        [deployerToken1, deployerToken2, deployerEscrow] = await ethers.getSigners()
        let EscrowContract = await ethers.getContractFactory('Escrow', deployerEscrow)
        escrowContract = await EscrowContract.deploy(token1Add, token2Add)

        await escrowContract.deployed()
        return escrowContract
    }
}