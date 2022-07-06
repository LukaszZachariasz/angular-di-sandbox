// Service example
class WheelService {
  public rotate(wheelName: string): void {
    console.log('You spin ' + wheelName);
  }
}

// Component example
class WheelComponent {
  private readonly name = 'AngularWheel';

  constructor(public wheelService: WheelService) {
  }

  public doRotate() {
    this.wheelService.rotate(this.name);
  }
}

// Angular Injector imitation
// Services are singletons in scope of injector
class Injector {
  // proper order by map, any type
  private _container = new Map();

  constructor(private _providers: any[]) {
    _providers.forEach((service: any) => {

      // do not duplicate instances
      this._container.set(service, new service())
    })
  }

  get(service: any) {
    const instance = this._container.get(service);

    if (!instance) {
      throw Error('No provider for: ' + service);
    }

    return instance;
  }
}

// If angular starts...

const mockModule = {
  providers: [

  ]
}

// Running: tsc di-example.ts && node di-example.js

// 1. create instance of Injector
const injector = new Injector([...mockModule.providers]);

// 2. then angular create instance of component
const component = new WheelComponent(injector.get(WheelService))

// 3. and invoke functionality of component which use injected service
component.doRotate()

// tsc di-example.ts && node di-example.js




