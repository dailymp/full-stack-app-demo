import {ActionConstants} from "./ActionConstants";

export interface  INewItemTextAction {
    type: string;
    newText: string;
}

export function  NewItemTextAction(newText: string): INewItemTextAction {
    return {
        type: ActionConstants.NEW_ITEM_TEXT_ACTION,
        newText: newText
    };
}