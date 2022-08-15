import { SPHttpClient } from '@microsoft/sp-http';
import { IReadonlyTheme } from '@microsoft/sp-component-base';
import { WebPartContext } from '@microsoft/sp-webpart-base';

export interface IReactMyGroupsProps {
  seeAllLink: string;
  createCommLink: string;
  titleEn: string;
  titleFr: string;
  layout: string;
  sort: string;
  toggleSeeAll: boolean;
  numberPerPage: number;
  themeVariant: IReadonlyTheme | undefined;
  prefLang: string;
}