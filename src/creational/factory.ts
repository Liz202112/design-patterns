// Product 인터페이스 정의 (재고 관리에서 처리할 제품)
interface Product {
  process(): string;  // 입고 및 출고 작업을 처리하는 메서드
}

// ConcreteProduct 1: 입고 처리 제품
class StockInProduct implements Product {
  process(): string {
    return "입고 작업이 완료되었습니다. 재고가 추가되었습니다.";
  }
}

// ConcreteProduct 2: 출고 처리 제품
class StockOutProduct implements Product {
  process(): string {
    return "출고 작업이 완료되었습니다. 재고가 차감되었습니다.";
  }
}

// Creator 추상 클래스 정의 (팩토리 메서드를 갖는 추상 클래스)
abstract class Creator {
  // Factory Method: 각 작업에 맞는 제품을 생성
  abstract factoryMethod(): Product;

  public someOperation(): string {
    // Factory Method를 호출하여 제품 생성
    const product = this.factoryMethod();
    return `작업 완료: ${product.process()}`;
  }
}

// ConcreteCreator 1: 입고 작업을 처리하는 클래스
class StockInCreator extends Creator {
  factoryMethod(): Product {
    return new StockInProduct();  // 입고 작업에 맞는 제품을 생성
  }
}

// ConcreteCreator 2: 출고 작업을 처리하는 클래스
class StockOutCreator extends Creator {
  factoryMethod(): Product {
    return new StockOutProduct();  // 출고 작업에 맞는 제품을 생성
  }
}

// 클라이언트 코드: 재고 관리 작업을 처리하는 코드
function clientCode(creator: Creator) {
  console.log(creator.someOperation());
}

// 테스트: 입고와 출고 작업 생성
clientCode(new StockInCreator());  // "작업 완료: 입고 작업이 완료되었습니다. 재고가 추가되었습니다."
clientCode(new StockOutCreator());  // "작업 완료: 출고 작업이 완료되었습니다. 재고가 차감되었습니다."
