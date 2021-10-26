/**
 * Decorator is a Conceptual pattern that allows adding new behaviors to
 * objects dynamically by placing them inside special wrapper objects.
 *
 * Using decorators you can wrap objects countless number of times since both target
 * objects and decorators follow the same interface.
 * The resulting object will get a stacking behavior of all wrappers.
 */
export interface Component {
  operation(): string;
}

export class ConcreteComponent implements Component {
  public operation(): string {
    return "Decorator Design Pattern";
  }
}

export class Decorator implements Component {
  private component: Component;

  constructor(component: Component) {
    this.component = component;
  }

  public operation(): string {
    return this.component.operation();
  }
}

export class ConcreteDecorator extends Decorator {
  constructor(component: Component) {
    super(component);
  }

  public operation(): string {
    return `Concrete-Decorator-Design-Pattern-${super.operation()}`;
  }
}
