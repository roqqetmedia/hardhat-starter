import { ethers } from "hardhat";
import { expect } from "chai";

describe("Counter", function () {
  it("Should be deployed and incremented by 1.", async function () {
    const counter = await ethers.deployContract("Counter");
    await counter.waitForDeployment();
    await counter.increment();

    expect(await counter.count()).to.equal(1);
  });
  it("Should be deployed and incremented by 3 then decremented by 1.", async function () {
    const counter = await ethers.deployContract("Counter");
    await counter.waitForDeployment();

    await counter.increment();
    await counter.increment();
    await counter.increment();

    await counter.decrement();

    expect(await counter.count()).to.equal(2);
  });
});
