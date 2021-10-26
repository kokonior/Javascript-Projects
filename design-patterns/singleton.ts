/**
 * Singleton is a creational design pattern,
 * which ensures that only one object of its kind exists and provides a single point of access to it for any other code.
 */

export class Singleton {
  private static instance: Singleton;

  private constructor() {
    //
  }

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }

    return Singleton.instance;
  }
}
