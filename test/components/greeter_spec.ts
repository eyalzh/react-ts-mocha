/// <reference path="../../typings/main.d.ts" />

import "mocha";
import { expect } from "chai";
import * as React from "react";
import * as ReactTestUtils from "react-addons-test-utils";

import Greeter from "../../src/components/Greeter";


describe("Greeter", () => {

    it("should render the prop defaultGreetMessage", () => {

        const renderer = ReactTestUtils.createRenderer();
        renderer.render(React.createElement(Greeter, {defaultGreetMessage: "foo"}));
        const output = renderer.getRenderOutput();

        expect(output.props.children).to.equal("foo");

    });

});