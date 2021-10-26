/**
 * Adapter is a structural design pattern,
 * which allows incompatible objects to collaborate.
 *
 * The Adapter acts as a wrapper between two objects.
 * It catches calls for one object and transforms them to format and
 * interface recognizable by the second object.
 */
export interface Target {
  call(): string;
}

export class Adaptee {
  public callFromAdaptee(): string {
    return "Adapter Design Pattern";
  }
}

export class Adapter implements Target {
  private adaptee: Adaptee;

  constructor(adaptee: Adaptee) {
    this.adaptee = adaptee;
  }

  public call(): string {
    return this.adaptee.callFromAdaptee();
  }
}
