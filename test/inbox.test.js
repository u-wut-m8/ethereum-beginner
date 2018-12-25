const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");

const web3 = new Web3(ganache.provider());

let accounts;

beforeEach(async () => {
  //Get list of all elements
  accounts = await web3.eth.getAccounts();
  // .then(fetchedAccounts => {
  //   console.log(fetchedAccounts);
  // }).catch(err => {
  //   console.log(err);
  // });
});

describe("inbox", () => {
  it("deployes a contract", done => {
    console.log(accounts);
    done();
  });
});
