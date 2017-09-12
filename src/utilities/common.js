function SteelCommon() {
    var self = this;

    self.isPureString = function (str) {
        if (typeof str === "string" || str instanceof String) {
            return true;
        } else {
            return false;
        }
    }

    self.isPureBoolean = function (value) {
        return value === false || value === true || value instanceof Boolean;
    }

    // check number or string type is pure number
    self.isPureNumber = function (num) {
        if (num === undefined || num === null) {
            return false;
        }
        // primitive number type
        if (typeof num === "number" && !isNaN(NaN)) {
            return true;
        } else {
            try { // filter empty string
                if (self.isPureString(num) && num.trim().length == 0) {
                    return false;
                }
                if (self.isPureBoolean(num)) {
                    return false;
                }
                var result = Number(num);
                if (!isNaN(result)) {
                    return true;
                } else {
                    return false;
                }
            }
            catch (e) {
                return false;
            }
        }
    }

    // check object is pure number,and convert to pure number type;otherwise throw exception
    self.parseNumber = function (num) {
        if (self.isPureNumber(num)) {
            return Number(num);
        } else {
            throw new BusinessException("Object type is not a number");
        }
    };

    // only round float number 
    self.roundFloat = function (num, precision) {
        if (self.isPureNumber(num) && self.isPureNumber(precision) && precision >= 0) {
            return Number((self.parseNumber(num)).toFixed(precision));
        } else {
            throw new BusinessException("Object type is not a number");
        }
    }


}