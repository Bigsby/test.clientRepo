var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SpecificType = (function (_super) {
    __extends(SpecificType, _super);
    function SpecificType() {
        _super.apply(this, arguments);
    }
    SpecificType.prototype.poli = function (value) {
        return 3 + value;
    };
    return SpecificType;
}(baseObject));
