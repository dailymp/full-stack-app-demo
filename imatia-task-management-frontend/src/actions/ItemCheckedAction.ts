import {ActionConstants} from "./ActionConstants";

export interface IItemCheckedAction {
    type: string;
    itemId: string;
    checked: boolean;
}

export function ItemCheckedAction(itemId: string, checked: boolean): IItemCheckedAction {
    return {
        type: ActionConstants.ITEM_CHECK_ACTION,
        itemId: itemId,
        checked: checked
    };
}