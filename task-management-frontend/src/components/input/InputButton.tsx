import * as React from "react";
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export interface InputButtonProps {
    onClick: (value) => any;
    label: string;
    value: string;
    deactivate?: boolean;
}

export interface InputButtonState {

}

export class InputButton extends React.Component<InputButtonProps, InputButtonState> {

    public constructor(props: InputButtonProps) {
        super(props);
    }

    private checkDeactivate (): boolean {
        if ( this.props.deactivate) {
            return true;
        }
        else {
            return false;
        }
    }


    public render() {
        return (
            <div>
                <MuiThemeProvider>
                    <RaisedButton label={this.props.label}
                                  value={this.props.value}
                                  primary={true}
                                  onClick={this.props.onClick}  disabled={this.checkDeactivate()}/>
                </MuiThemeProvider>
            </div>
        );
    }
}