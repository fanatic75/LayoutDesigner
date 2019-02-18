import mockData from './dataMock';

 export  default class DataProvider{
     getPlotData(): Promise<any> {
        return Promise.resolve(mockData);
      }
};

