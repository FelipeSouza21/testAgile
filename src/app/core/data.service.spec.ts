import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return correct data for getSelect1Data', () => {
    expect(service.getSelect1Data()).toEqual(['', 'Food', 'Cloth', 'Car']);
  });

  it('should return correct data for getSelect2Data', () => {
    expect(service.getSelect2Data('Food')).toEqual(['', 'Fruits', 'Vegetables', 'Meat']);
    expect(service.getSelect2Data('Cloth')).toEqual(['', 'Shirt', 'Pants', 'Dress']);
    expect(service.getSelect2Data('Car')).toEqual(['', 'Sedan', 'SUV', 'Truck']);
    expect(service.getSelect2Data('')).toEqual([]);
  });

  it('should return correct data for getSelect3Data', () => {
    expect(service.getSelect3Data('Fruits')).toEqual(['Apple', 'Banana', 'Orange']);
    expect(service.getSelect3Data('Vegetables')).toEqual(['Carrot', 'Potato', 'Onion']);
    expect(service.getSelect3Data('Meat')).toEqual(['Beef', 'Pork', 'Chicken']);
    expect(service.getSelect3Data('Shirt')).toEqual(['T-shirt', 'Polo', 'V-neck']);
    expect(service.getSelect3Data('Pants')).toEqual(['Jeans', 'Chinos', 'Shorts']);
    expect(service.getSelect3Data('Dress')).toEqual(['Casual', 'Formal', 'Party']);
    expect(service.getSelect3Data('Sedan')).toEqual(['Toyota', 'Honda', 'Nissan']);
    expect(service.getSelect3Data('SUV')).toEqual(['Ford', 'Chevrolet', 'Jeep']);
    expect(service.getSelect3Data('Truck')).toEqual(['Ford', 'Chevrolet', 'Ram']);

    expect(service.getSelect3Data('')).toEqual([]);
  });
});
