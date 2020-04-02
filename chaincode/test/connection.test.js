// Test suite for querying the pacContract in the Hyperledger Fabric Network
const chai = require("chai");
let chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
let expect = chai.expect;
let now = require ("performance-now");

const MAX_CONN = 10;
let connections = new Array(MAX_CONN);
let connectionsBench = new Array(MAX_CONN);
let connectTime = 30 * 1000;

const express    = require('express');
const bodyParser = require('body-parser');
const cors       = require('cors');
const morgan     = require('morgan');
const util       = require('util');
const path       = require('path');
const fs         = require("fs");

let network = require('../src/fabric/network.js');

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

const configPath = path.join(process.cwd(), './config.json');
const configJSON = fs.readFileSync(configPath, 'utf8');
const config = JSON.parse(configJSON);

//use this identity to query
const appAdmin = config.appAdmin;

describe(" ============== Connecting and Querying the Ledger ==============", function() {
  this.timeout(connectTime);

	for (let i=0; i<MAX_CONN; i++) {
		describe(`Connecting to Hyperledger Fabric #${i+1}`, function() {
	
			it("Should connect to the fabric using app-admin wallet.", async function() {
				this.timeout(connectTime);
				let start = now();
				let networkObj = await network.connectToNetwork(appAdmin);
				let end = now();
				let _fileName = "./test/connectionCacheTime";
				let _newLine = '\n';
				//console.log(" connection time ", end - start);
				connectionsBench[i] = end - start;
				if (i==0) {
					_fileName = "./test/connectionTime";
					_newLine = "";
			  }
				fs.appendFile(_fileName, connectionsBench[i] + _newLine, function(err) {
					if (err) throw err;
				});
				connections[i] = networkObj;
				expect(networkObj).to.be.a("object");
				networkObj.gateway.disconnect();
			});

		});
	}//for
  
	describe("[QUERY] --> Connecting and Querying the ledger.", function() {
		it("Should connect to the fabric using app-admin wallet. Checking Network.", async function() {
			this.timeout(connectTime);
			let networkObj = await network.connectToNetwork(appAdmin);
			expect(networkObj.network).to.be.a("object");
		});
	 
		it("Should send request after connecting. QueryAll. Receives Array. Checking Key", async function() {
			let networkObj     = await network.connectToNetwork(appAdmin);
			let response       = await network.invoke(networkObj, true, 'queryAll', '');
			let parsedResponse = await JSON.parse(response);
			expect(parsedResponse).to.be.a("array");
			expect(parsedResponse[0].Key).to.equal("01");
			expect(parsedResponse[1].Key).to.equal("02");
			expect(parsedResponse[2].Key).to.equal("0afac45e-5a78-11ea-9595-7470fd63d6e8");
			expect(parsedResponse[3].Key).to.equal("ffa405a2-575c-11ea-9595-7470fd63d6e8");
		});

		it("Should send request after connecting. QueryAll. Checking Content. Object", async function() {
			let networkObj     = await network.connectToNetwork(appAdmin);
			let response       = await network.invoke(networkObj, true, 'queryAll', '');
			let parsedResponse = await JSON.parse(response);
			expect(parsedResponse).to.be.a("array");
			expect(parsedResponse[0].Record).to.be.a("object");
			expect(parsedResponse[1].Record).to.be.a("object");
			expect(parsedResponse[2].Record).to.be.a("object");
			expect(parsedResponse[3].Record).to.be.a("object");
		});
		
		it("Should send request after connecting. QueryAll. Checking Content. pacID", async function() {
			let networkObj     = await network.connectToNetwork(appAdmin);
			let response       = await network.invoke(networkObj, true, 'queryAll', '');
			let parsedResponse = await JSON.parse(response);
			expect(parsedResponse).to.be.a("array");
			expect(parsedResponse[0].Record).to.be.a("object");
			expect(parsedResponse[1].Record).to.be.a("object");
			expect(parsedResponse[2].Record).to.be.a("object");
			expect(parsedResponse[3].Record).to.be.a("object");
			expect(parsedResponse[0].Record.pacID).to.equal("01");
			expect(parsedResponse[1].Record.pacID).to.equal("02");
			expect(parsedResponse[2].Record.pacID).to.equal("0afac45e-5a78-11ea-9595-7470fd63d6e8");
			expect(parsedResponse[3].Record.pacID).to.equal("ffa405a2-575c-11ea-9595-7470fd63d6e8");
		});

		it("Should send request after connecting. QueryAll. Checking Content. quoteHash", async function() {
			let networkObj     = await network.connectToNetwork(appAdmin);
			let response       = await network.invoke(networkObj, true, 'queryAll', '');
			let parsedResponse = await JSON.parse(response);
			expect(parsedResponse).to.be.a("array");
			expect(parsedResponse[0].Record).to.be.a("object");
			expect(parsedResponse[1].Record).to.be.a("object");
			expect(parsedResponse[2].Record).to.be.a("object");
			expect(parsedResponse[3].Record).to.be.a("object");
			expect(parsedResponse[0].Record.quoteHash).to.equal("958b9f65d87caacd734e355871b99adc3ee0cb46b08704733ecc37f935b839cc");
			expect(parsedResponse[1].Record.quoteHash).to.equal("a8fd9a7c227155ec31baadeece2603ca601546563d8c11c3e241d820885cc850");
			expect(parsedResponse[2].Record.quoteHash).to.equal("170f6d327510d11ba5449b8831c05bb2e9e0e3fae69d3f7ba0b2e1c8742749c9");
			expect(parsedResponse[3].Record.quoteHash).to.equal("d2baecf4c37ddc0b40c595d106c3987c6b96232262c691513086f7f7e622e3b1");
		});
	});

	describe("[QUERY] --> Querying individual transactions", async function() {

		it("should send point query request. query pac using pacid. check quotehash.", async function() {
			let networkObj     = await network.connectToNetwork(appAdmin);
			let response       = await network.invoke(networkObj, true, "readPac", "0afac45e-5a78-11ea-9595-7470fd63d6e8");
			let parsedResponse = await JSON.parse(response);
			
			expect(parsedResponse).to.be.a("object");
			expect(parsedResponse.quoteHash).to.equal("170f6d327510d11ba5449b8831c05bb2e9e0e3fae69d3f7ba0b2e1c8742749c9");
		});
		
		it("should send point query request. query pac using pacid. check quotehash.", async function() {
			let networkObj     = await network.connectToNetwork(appAdmin);
			let response       = await network.invoke(networkObj, true, "readPac", "ffa405a2-575c-11ea-9595-7470fd63d6e8");
			let parsedResponse = await JSON.parse(response);
			
			expect(parsedResponse).to.be.a("object");
			expect(parsedResponse.quoteHash).to.equal("d2baecf4c37ddc0b40c595d106c3987c6b96232262c691513086f7f7e622e3b1");
		});

	});

});//describe
