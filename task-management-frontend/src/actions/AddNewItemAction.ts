import {ActionConstants} from "./ActionConstants";

export interface  IAddNewItemAction {
    type: string;
}

export function  AddNewItemAction(): IAddNewItemAction {
    return {
        type: ActionConstants.ADD_NEW_ITEM_ACTION
    };
}