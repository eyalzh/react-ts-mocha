import * as React from "react";

interface GreeterProperties {
    defaultGreetMessage: string;
}

export default class Greeter extends React.Component<GreeterProperties, {}> {

    public render() {
        return (
            <div>{this.props.defaultGreetMessage}</div>
        );
    };

}