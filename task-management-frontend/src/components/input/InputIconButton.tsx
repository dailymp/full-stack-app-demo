import * as React from "react";

export interface IInputTextProps {
    className?: string;
    iconName: string;
    deactivate?: boolean;
    onClicked : (event: object) => any;
    name: string;
}

export interface IState {

}

export class InputIconButton extends React.Component<IInputTextProps,IState> {
    public constructor(props: IInputTextProps) {
        super(props);
    }

    public render() {
        return (
            <div name={this.props.name}>
                    <button type="button"
                            id={this.props.name}
                            onClick={this.props.onClicked}
                            className="btn btn-default"
                            aria-label="Left Align">
                        <span className="glyphicon glyphicon-trash" id={this.props.name} />
                    </button>
            </div>
        );
    }
}