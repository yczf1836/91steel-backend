/**
 * Created by Harold on 2017/9/12
 */

function SteelReg() {
    var self = this;
    var common = new SteelCommon();

    self.isEmptyString = function (str) {
        if (common.isPureString(str)) {
            if (str.trim().length > 0) {
                return false;
            } else {
                return true;
            }
        } else {
            throw new BusinessException("Object type is not string");
        }
    };

    return self;
}
