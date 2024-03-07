import { Injectable } from '@angular/core';

interface ChartData {
  name: string;
  data: { data: number[]; }[];
}[]

@Injectable({
  providedIn: 'root'
})
export class DataService {

  chartDataMap: { [key: string]: ChartData } = {
    Apple: {
      name: 'Apple',
      data: [{ data: [1, 2, 3, 4] }]
    },
    Banana: {
      name: 'Banana',
      data: [{ data: [4, 3, 2, 1] }]
    },
    Orange: {
      name: 'Orange',
      data: [{ data: [2, 3, 1, 4] }]
    },
    Carrot: {
      name: 'Carrot',
      data: [{ data: [3, 2, 4, 1] }]
    },
    Potato: {
      name: 'Potato',
      data: [{ data: [2, 4, 1, 3] }]
    },
    Onion: {
      name: 'Onion',
      data: [{ data: [4, 1, 3, 2] }]
    },
    Beef: {
      name: 'Beef',
      data: [{ data: [1, 3, 2, 4] }]
    },
    Pork: {
      name: 'Pork',
      data: [{ data: [3, 2, 4, 1] }]
    },
    Chicken: {
      name: 'Chicken',
      data: [{ data: [2, 4, 1, 3] }]
    },
    Tshirt: {
      name: 'Tshirt',
      data: [{ data: [4, 1, 3, 2] }]
    },
    Polo: {
      name: 'Polo',
      data: [{ data: [1, 3, 2, 4] }]
    },
    Vneck: {
      name: 'Vneck',
      data: [{ data: [3, 2, 4, 1] }]
    },
    Jeans: {
      name: 'Jeans',
      data: [{ data: [2, 4, 1, 3] }]
    },
    Chinos: {
      name: 'Chinos',
      data: [{ data: [4, 1, 3, 2] }]
    },
    Shorts: {
      name: 'Shorts',
      data: [{ data: [1, 3, 2, 4] }]
    },
    Casual: {
      name: 'Casual',
      data: [{ data: [3, 2, 4, 1] }]
    },
    Formal: {
      name: 'Formal',
      data: [{ data: [2, 4, 1, 3] }]
    },
    Party: {
      name: 'Party',
      data: [{ data: [4, 1, 3, 2] }]
    },
    Toyota: {
      name: 'Toyota',
      data: [{ data: [1, 3, 2, 4] }]
    },
    Honda: {
      name: 'Honda',
      data: [{ data: [3, 2, 4, 1] }]
    },
    Nissan: {
      name: 'Nissan',
      data: [{ data: [2, 4, 1, 3] }]
    },
    Ford: {
      name: 'Ford',
      data: [{ data: [4, 1, 3, 2] }]
    },
    Chevrolet: {
      name: 'Chevrolet',
      data: [{ data: [1, 3, 2, 4] }]
    },
    Jeep: {
      name: 'Jeep',
      data: [{ data: [3, 2, 4, 1] }]
    },
    Ram: {
      name: 'Ram',
      data: [{ data: [2, 4, 1, 3] }]
    }
  };

  getSelect1Data() {
    return ['', 'Food', 'Cloth', 'Car'];
  }

  getSelect2Data(value: string) {
    if (value === 'Food') {
      return ['', 'Fruits', 'Vegetables', 'Meat'];
    } else if (value === 'Cloth') {
      return ['', 'Shirt', 'Pants', 'Dress'];
    } else if (value === 'Car') {
      return ['', 'Sedan', 'SUV', 'Truck'];
    } else {
      return [];
    }
  }

  getSelect3Data(value: string) {
    if (value === 'Fruits') {
      return ['Apple', 'Banana', 'Orange'];
    } else if (value === 'Vegetables') {
      return ['Carrot', 'Potato', 'Onion'];
    } else if (value === 'Meat') {
      return ['Beef', 'Pork', 'Chicken'];
    } else if (value === 'Shirt') {
      return ['T-shirt', 'Polo', 'V-neck'];
    } else if (value === 'Pants') {
      return ['Jeans', 'Chinos', 'Shorts'];
    } else if (value === 'Dress') {
      return ['Casual', 'Formal', 'Party'];
    } else if (value === 'Sedan') {
      return ['Toyota', 'Honda', 'Nissan'];
    } else if (value === 'SUV') {
      return ['Ford', 'Chevrolet', 'Jeep'];
    } else if (value === 'Truck') {
      return ['Ford', 'Chevrolet', 'Ram'];
    } else {
      return [];
    }
  }

  getChartData(value: string){
    return [this.chartDataMap[value]];
  }
}