import { StockInCreator, StockOutCreator } from '../src/creational/factory';

describe('Factory Method Pattern - Inventory Management', () => {
  it('should process Stock In operation using StockInCreator', () => {
    const creator = new StockInCreator();
    expect(creator.someOperation()).toBe('작업 완료: 입고 작업이 완료되었습니다. 재고가 추가되었습니다.');
  });

  it('should process Stock Out operation using StockOutCreator', () => {
    const creator = new StockOutCreator();
    expect(creator.someOperation()).toBe('작업 완료: 출고 작업이 완료되었습니다. 재고가 차감되었습니다.');
  });
});
