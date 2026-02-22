module.exports = {
    setObjectAttributesToLowerCase(obj) {
        var key,
            keys = Object.keys(obj);
        var n = keys.length;
        var newobj = {};
        while (n--) {
            key = keys[n];
            newobj[key.toLowerCase()] = obj[key];
        }
        return newobj;
    },

    formatEndpointWhitespace(args) {
        return args.map((arg) => arg.replace(/\s/g, "+"));
    },
    unflattenObject(data) {
        var result = {};
        for (var i in data) {
            var keys = i.split(".");
            keys.reduce(function (r, e, j) {
                return (
                    r[e] ||
                    (r[e] = isNaN(Number(keys[j + 1]))
                        ? keys.length - 1 == j
                            ? data[i]
                            : {}
                        : [])
                );
            }, result);
        }
        return result;
    },

    flattenObject(ob) {
        var toReturn = {};

        for (var i in ob) {
            if (!ob.hasOwnProperty(i)) continue;

            if (typeof ob[i] == "object" && ob[i] !== null) {
                var flatObject = this.flattenObject(ob[i]);
                for (var x in flatObject) {
                    if (!flatObject.hasOwnProperty(x)) continue;

                    toReturn[i + "." + x] = flatObject[x];
                }
            } else {
                toReturn[i] = ob[i];
            }
        }
        return toReturn;
    },

    isNumeric(str) {
        if (typeof str != "string") return false;
        return (
            !isNaN(str) && !isNaN(parseFloat(str))
        );
    },

    transformObjectStringPropertyToNumber(object) {
        return Object.entries(object).reduce((r, [k, o]) => {
            if (typeof o === "object") {
                r[k] = Object.entries(o).reduce((r, [k, v]) => {
                    let _v = Number(v);
                    if (!Number.isNaN(_v)) {
                        v = _v;
                    }
                    return (r[k] = v), r;
                }, {});
            }
            return r;
        }, {});
    },
    populateId() {
        return "xxxxx-xxxx-4xxx-yxxx".replace(/[xy]/g, function (c) {
            const r = (Math.random() * 16) | 0;
            const v = c === "x" ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
    },
    removeEmptyArrays(obj) {
        const filteredObj = {};
        for (const key in obj) {
            if (obj[key].length > 0) {
                filteredObj[key] = obj[key];
            }
        }
        return filteredObj;
    },
};
