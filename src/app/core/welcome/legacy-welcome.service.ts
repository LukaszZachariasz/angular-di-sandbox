import {Welcome} from './welcome';

export function legacyWelcomeService(): Welcome {
  return {
    sayHello: () => alert('Hello... but.. I am deprecated :/')
  }
}
