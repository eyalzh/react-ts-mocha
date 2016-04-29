/// <reference path="../../typings/main.d.ts" />
"use strict";
require("mocha");
const chai_1 = require("chai");
const React = require("react");
const ReactTestUtils = require("react-addons-test-utils");
const Greeter_1 = require("../../src/components/Greeter");
describe("Greeter", () => {
    it("should render the prop defaultGreetMessage", () => {
        const renderer = ReactTestUtils.createRenderer();
        renderer.render(React.createElement(Greeter_1.default, { defaultGreetMessage: "foo" }));
        const output = renderer.getRenderOutput();
        chai_1.expect(output.props.children).to.equal("foo");
    });
});
//# sourceMappingURL=greeter_spec.js.map