# Creational Design Patterns

## 1. Factory Method Pattern (팩토리 메서드 패턴)

### 정의
팩토리 메서드 패턴은 **객체 생성 코드**를 서브클래스에 위임하여, 객체 생성의 **추상화**를 제공하는 생성 패턴입니다. 이 패턴은 객체 생성 과정에서 클래스를 결정하는 일을 팩토리 메서드로 분리하여, 클라이언트 코드에서 객체 생성을 캡슐화합니다. 

### 구성 요소
- **Creator**: 객체 생성 방법을 정의하는 추상 클래스 또는 인터페이스입니다. 서브클래스가 구체적인 객체 생성을 담당합니다.
- **ConcreteCreator**: 실제 객체 생성을 담당하는 클래스입니다. 팩토리 메서드를 구현하고, 필요한 객체를 생성하여 반환합니다.
- **Product**: 생성되는 객체들의 공통 인터페이스입니다.
- **ConcreteProduct**: 구체적인 객체입니다. `Creator`가 요청할 때 반환되는 실제 객체입니다.

### 예시 코드

```typescript
// Product 인터페이스 정의
interface Product {
  operation(): string;
}

// ConcreteProduct 1
class ConcreteProductA implements Product {
  operation(): string {
    return 'Product A';
  }
}

// ConcreteProduct 2
class ConcreteProductB implements Product {
  operation(): string {
    return 'Product B';
  }
}

// Creator 인터페이스 정의
abstract class Creator {
  // Factory Method
  abstract factoryMethod(): Product;

  public someOperation(): string {
    // Factory Method를 호출하여 제품 생성
    const product = this.factoryMethod();
    return `Creator: The same creator's code has just worked with ${product.operation()}`;
  }
}

// ConcreteCreator 1
class ConcreteCreatorA extends Creator {
  factoryMethod(): Product {
    return new ConcreteProductA();
  }
}

// ConcreteCreator 2
class ConcreteCreatorB extends Creator {
  factoryMethod(): Product {
    return new ConcreteProductB();
  }
}

// 클라이언트 코드
function clientCode(creator: Creator) {
  console.log(creator.someOperation());
}

clientCode(new ConcreteCreatorA()); 
