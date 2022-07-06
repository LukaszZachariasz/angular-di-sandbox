var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Service example
var WheelService = /** @class */ (function () {
    function WheelService() {
    }
    WheelService.prototype.rotate = function (wheelName) {
        console.log('You spin ' + wheelName);
    };
    return WheelService;
}());
// Component example
var WheelComponent = /** @class */ (function () {
    function WheelComponent(wheelService) {
        this.wheelService = wheelService;
        this.name = 'AngularWheel';
    }
    WheelComponent.prototype.doRotate = function () {
        this.wheelService.rotate(this.name);
    };
    return WheelComponent;
}());
// Angular Injector imitation
// Services are singletons in scope of injector
var Injector = /** @class */ (function () {
    function Injector(_providers) {
        var _this = this;
        this._providers = _providers;
        // proper order by map, any type
        this._container = new Map();
        _providers.forEach(function (service) {
            // do not duplicate instances
            _this._container.set(service, new service());
        });
    }
    Injector.prototype.get = function (service) {
        var instance = this._container.get(service);
        if (!instance) {
            throw Error('No provider for: ' + service);
        }
        return instance;
    };
    return Injector;
}());
// If angular starts...
var mockModule = {
    providers: []
};
// Running: tsc di-example.ts && node di-example.js
// 1. create instance of Injector
var injector = new Injector(__spreadArray([], mockModule.providers, true));
// 2. then angular create instance of component
var component = new WheelComponent(injector.get(WheelService));
// 3. and invoke functionality of component which use injected service
component.doRotate();
// tsc di-example.ts && node di-example.js
