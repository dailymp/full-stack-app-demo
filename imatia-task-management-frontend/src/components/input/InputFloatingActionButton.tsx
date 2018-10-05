import * as React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAddIcon from 'material-ui/svg-icons/content/add';
import PDFIcon from 'material-ui/svg-icons/image/picture-as-pdf';
import SearchIcon from 'material-ui/svg-icons/action/search';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import {IconConstants} from "../../common/IconConstants";

export interface IInputTextProps {
    className?: string;
    iconName: string;
    onClicked : (event: object) => any;
    deactivate?: boolean;
}

export interface IState {

}

export class InputFloatingActionButton extends React.Component<IInputTextProps,IState> {
    public constructor(props: IInputTextProps) {
        super(props);
    }

    private buildIcon() {
        let iconToBuild: any;

        if (this.props.iconName === IconConstants.ICON_PDF) {
            iconToBuild = <PDFIcon onTouchTap={this.props.onClicked.bind(this)}/>
        } else if (this.props.iconName === IconConstants.ICON_ADD) {
            iconToBuild = <ContentAddIcon onTouchTap={this.props.onClicked.bind(this)}/>
        } else if (this.props.iconName === IconConstants.ICON_SEARCH) {
            iconToBuild = <SearchIcon onTouchTap={this.props.onClicked.bind(this)}/>
        } else if (this.props.iconName === IconConstants.ICON_DELETE) {
            iconToBuild = <DeleteIcon onTouchTap={this.props.onClicked.bind(this)}/>
        }

        return iconToBuild;
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
                    <FloatingActionButton className={this.props.className} disabled={this.checkDeactivate()}>
                        {this.buildIcon()}
                    </FloatingActionButton>
                </MuiThemeProvider>
            </div>
        );
    }
}