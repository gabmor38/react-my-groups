export interface IGroupListProps {
    groups?: string[];
    onRenderItem: (item: string, index: number) => JSX.Element;
  }