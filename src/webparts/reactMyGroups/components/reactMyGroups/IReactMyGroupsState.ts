import * as MicrosoftGroup from '@microsoft/microsoft-graph-types';

export interface IReactMyGroupsState {
    filterText?: string;
    groups: MicrosoftGroup.Group[];
    isLoading: boolean;
    currentPage: number;
    pagelimit: number;
    showless: boolean;
    pageSeeAll: boolean;
}