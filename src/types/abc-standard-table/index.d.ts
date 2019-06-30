declare module "abc-standard-table" {
  import React from 'react';
  import {ColumnProps} from 'antd/es/table/interface';
  //type Column = ColumnProps;
  interface Config {
    // 展示toolbar
    showToolBar?: boolean;
    showSearchTool?: boolean;
    searchUrl?: string;
    showAdvancedFilter?: boolean;
    filterConditionsType?: "公用" | "单独设置";
    showAdvancedSort?: boolean;
    showEditColumn?: boolean;
    hiddenFormula?: boolean;
    filterUrl?: string | any;
    showExport?: boolean;
    
    showHoverButton?: boolean;
    
    title?: string;
  
    filterMode?: "none" | "simple" | "complex";
    hasOrderRow?: boolean;
    cellClick?: boolean;
    cellBackEnd?: boolean;
    calcColumnConfig?: Column;
  
    NumberRight?: boolean;
    addUnit?: boolean;
    leftFixed?: number;
    adaptation?: boolean;
    changeUnit?: number;
    newCountColumns?: boolean;
    rowClick?: boolean;
    sourceType?: "static" | "dynamic";
    isTree?: boolean;
    paginationMode?: "more" | "pager";
    morePageSize: number;
  }
  interface rowSelection<T> {
    selectedRowKeys?: string[] | number[];
    onChangeCallBack?: (selectedRowKeys: string[] | number[], selectedRows: T[]) => void
    onSelect?: (record: T, selectedRowKeys: string[] | number[], selectedRows: T[], nativeEvent: Event)=>void
    onSelectAll?: (selected: string[] | number[], selectedRows: T[], changeRows: T[])=>void
    columnWidth?: number | string;
  }
  export interface Columns<T> extends ColumnProps<T>{
    title: string;
    dataIndex: string;
    key: string;
    fixed?: "left" | "right";
    width?: number;
    filterMode?: "none" | "simple" | "complex";
    extType?: "chart" | "progressbar" | "colorgradation" | "stockInfo";
    chartType?: "line" | "column" | "chart";
    progressBarType?: number;
    colorType?: number;
    color?: string;
    stockType?: number;
    render?: (text: any, record: T, index: number) => void
    sorter?: (text1: any, text2: any) => number | true
    sortOrder?: "ascend" | "descend" | false;
    show?: boolean;
  }
  interface Props<T> {
    config: Config;
    showHeader?: boolean;
    columns: Columns<T>[];
    rowSelection?: rowSelection<T>;
    dataSource: any[] | string;
    theme?: "default" | "pale" | "dark" | "others";
    bordered?: boolean;
    zebra?: "none" | "zebra";
    pagination?: boolean | object;
    rowSelection?: rowSelection<T>;
    onHandleData?: (result: T) => void;
    addCalcColumn?: (name: string, expression: any) => void;
    addColumn?: (column: Columns<T>, dataSource: any[]) => void;
    refresh?: (changedProps: this) => void;
    afterEdit?: (column: Columns<T>) => void
  }
  interface State {
  
  }
  
  class ABCStandardTable extends React.Component<Props,State> {
  
  }
  
  export default ABCStandardTable
}