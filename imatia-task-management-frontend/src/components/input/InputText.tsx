import * as React from "react";
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { ValidatorComponent, TextValidator} from 'react-material-ui-form-validator';

export interface IInputTextProps {
    className?: string;
    onChangeText: (event: object, newValue: string) => any;
    hintText: string;
    floatingLabelText: string;
    multiLine?: boolean;
    id?: string;
    value?: string;
    rows?: number;
    rowsMax?: number;
    deactivate?: boolean;
    required?: boolean;
}

export interface IState {

}

export class InputText extends React.Component<IInputTextProps,IState> {
    public constructor(props: IInputTextProps) {
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

    private isRequired (): boolean {
        if ( this.props.required) {
            return true;
        }
        else {
            return false;
        }
    }
    private activateMultiLine(): boolean {
        if (this.props.multiLine) {
            return true;
        } else {
            return false;
        }
    }

    private getRowsNumber(): number {
        if (this.props.rows) {
            return this.props.rows;
        } else {
            return 1;
        }
    }

    private getRowsMaxNumber(): number {
        if (this.props.rowsMax) {
            return this.props.rowsMax;
        } else {
            return 1;
        }
    }

    public render() {
        return (
            <div className={this.props.className}>
                <MuiThemeProvider>
                    <TextField
                        id={this.props.id}
                        type="text"
                        multiLine={this.activateMultiLine()}
                        hintText={this.props.hintText}
                        floatingLabelText={this.props.floatingLabelText}
                        onChange={this.props.onChangeText.bind(this)}
                        value={this.props.value} 
                        rows={this.getRowsNumber()} 
                        rowsMax={this.getRowsMaxNumber()} 
                        disabled={this.checkDeactivate()}
                        >
                    </TextField>
                </MuiThemeProvider>
            </div>
        );
    }
}