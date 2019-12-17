// BDD-Style Testing (powered by https://mochajs.org/)
//
// Import your stories
// import * as stories from "./index.stories.js";
//
// Use any renderer for you stories
import { fixture } from "@open-wc/testing-helpers";
import Computeinput from "index.js";
import { html } from "lit-element";
//
// Use any assert library
import chai from "chai/chai.js";
const expect = chai.expect;

describe("Dummy test", () => {
  it("should be always true", async () => {
    // const el = await fixture("<compute-input type='text'></compute-input>");

    // expect(el.type).to.equal("text");

    expect(true).to.be.true;
  });
});
