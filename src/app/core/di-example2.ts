


// Imitation of component
export class WheelComponent {
  constructor(private wheelService: WheelService) {
  }

  public spinMyWheel(): void {
    this.wheelService.spinWheel();
  }
}

// Imitation of service
export class WheelService {
  public spinWheel() {
    console.info('Wheel is spinning now');
  }
}

// Imitation of Injector
export class Injector {
  // use map to avoid of duplication of instances
  private _container = new Map(); //<key, value>  - value can be any stuff

  constructor(private _providers: any[]) {
    _providers.forEach((provider: any) => {
      this._container.set(provider, new provider())
    })
  }

  public get(provider: any): any {
    const instance = this._container.get(provider);

    if (!instance) {
      throw Error('No provider found');
    }

    return instance;
  }
}

// What angular do when app starts

// 0. Mock module

const MockModule = {
  providers: [
    WheelService
  ]
}


// 1.Create of Injector
const injector = new Injector(MockModule.providers)

// 2. Instantiate of Component
const wheelComponent = new WheelComponent(injector.get(WheelService))

// 3. Invoke function from component

wheelComponent.spinMyWheel();

