import caver from '../caver';

const product_contract = require('../build/vote.json');
const smartcontract = new caver.klay.Contract(
  product_contract.abi,
  process.env.REACT_APP_CONTRACT_ACCOUNT,
);

export default smartcontract;
