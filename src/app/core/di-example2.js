"use strict";
exports.__esModule = true;
exports.Injector = exports.WheelService = exports.WheelComponent = void 0;
// Imitation of component
var WheelComponent = /** @class */ (function () {
    function WheelComponent(wheelService) {
        this.wheelService = wheelService;
        this.spinMyWheel();
    }
    WheelComponent.prototype.spinMyWheel = function () {
        this.wheelService.spinWheel();
    };
    return WheelComponent;
}());
exports.WheelComponent = WheelComponent;
// Imitation of service
var WheelService = /** @class */ (function () {
    function WheelService() {
    }
    WheelService.prototype.spinWheel = function () {
        console.info('Wheel is spinning now');
    };
    return WheelService;
}());
exports.WheelService = WheelService;
// Imitation of Injector
var Injector = /** @class */ (function () {
    function Injector(_providers) {
        var _this = this;
        this._providers = _providers;
        // use map to avoid of duplication of instances
        this._container = new Map(); //<key, value>  - value can be any stuff
        _providers.forEach(function (provider) {
            _this._container.set(provider, new provider());
        });
    }
    Injector.prototype.get = function (provider) {
        var instance = this._container.get(provider);
        if (!instance) {
            throw Error('No provider found');
        }
        return instance;
    };
    return Injector;
}());
exports.Injector = Injector;
// What angular do when app starts
// 0. Mock module
var MockModule = {
    providers: [
        WheelService
    ]
};
// 1.Create of Injector
var injector = new Injector(MockModule.providers);
// 2. Instantiate of Component
var wheelComponent = new WheelComponent(injector.get(WheelService));
// 3. Invoke function from component constructor
wheelComponent.spinMyWheel();
