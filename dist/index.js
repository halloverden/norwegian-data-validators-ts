/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../index.ts":
/*!*******************!*\
  !*** ../index.ts ***!
  \*******************/
/*! exports provided: LuhnUtilities, Mod11Utilities, SsnUtilities, AccountNumberValidator, KidValidator, OrganizationNumberValidator, SsnValidator */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utilities_luhn_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @utilities/luhn-utilities */ "./utilities/luhn-utilities.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LuhnUtilities", function() { return _utilities_luhn_utilities__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _utilities_mod11_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @utilities/mod11-utilities */ "./utilities/mod11-utilities.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Mod11Utilities", function() { return _utilities_mod11_utilities__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony import */ var _utilities_ssn_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @utilities/ssn-utilities */ "./utilities/ssn-utilities.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SsnUtilities", function() { return _utilities_ssn_utilities__WEBPACK_IMPORTED_MODULE_2__["a"]; });

/* harmony import */ var _validators_account_number_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @validators/account-number-validator */ "./validators/account-number-validator.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccountNumberValidator", function() { return _validators_account_number_validator__WEBPACK_IMPORTED_MODULE_3__["a"]; });

/* harmony import */ var _validators_kid_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @validators/kid-validator */ "./validators/kid-validator.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KidValidator", function() { return _validators_kid_validator__WEBPACK_IMPORTED_MODULE_4__["a"]; });

/* harmony import */ var _validators_organization_number_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @validators/organization-number-validator */ "./validators/organization-number-validator.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OrganizationNumberValidator", function() { return _validators_organization_number_validator__WEBPACK_IMPORTED_MODULE_5__["a"]; });

/* harmony import */ var _validators_ssn_validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @validators/ssn-validator */ "./validators/ssn-validator.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SsnValidator", function() { return _validators_ssn_validator__WEBPACK_IMPORTED_MODULE_6__["a"]; });









/***/ }),

/***/ "./utilities/luhn-utilities.ts":
/*!*************************************!*\
  !*** ./utilities/luhn-utilities.ts ***!
  \*************************************/
/*! exports provided: LuhnUtilities */
/*! exports used: LuhnUtilities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LuhnUtilities; });
var LuhnUtilities = function () {
  function LuhnUtilities() {}

  LuhnUtilities.getControlDigit = function (input) {
    var sum = 0;

    for (var i = input.length - 1; i >= 0; i -= 2) {
      var double = parseInt(input.charAt(i), 10) * 2;
      sum += double > 9 ? parseInt(double.toString().charAt(0)) + parseInt(double.toString().charAt(1)) : double;

      if (!isNaN(parseInt(input.charAt(i - 1), 10))) {
        sum += parseInt(input.charAt(i - 1), 10);
      }
    }

    return sum * 9 % 10;
  };

  LuhnUtilities.getControlDigits = function (input, numberOfDigits) {
    var controlDigits = [];

    for (var i = numberOfDigits; i > 0; i--) {
      var c = LuhnUtilities.getControlDigit(input);
      controlDigits.push(c);
      input += c.toString();
    }

    return controlDigits;
  };

  LuhnUtilities.checkControlDigit = function (input) {
    var c = LuhnUtilities.getControlDigit(input.substr(0, input.length - 1));
    return c === parseInt(input.charAt(input.length - 1), 10);
  };

  LuhnUtilities.checkControlDigits = function (input, numberOfDigits) {
    for (var i = numberOfDigits - 1; i >= 0; i--) {
      if (!LuhnUtilities.checkControlDigit(input.substr(0, input.length - i))) {
        return false;
      }
    }

    return true;
  };

  return LuhnUtilities;
}();



/***/ }),

/***/ "./utilities/mod11-utilities.ts":
/*!**************************************!*\
  !*** ./utilities/mod11-utilities.ts ***!
  \**************************************/
/*! exports provided: Mod11Utilities */
/*! exports used: Mod11Utilities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Mod11Utilities; });
var Mod11Utilities = function () {
  function Mod11Utilities() {}

  Mod11Utilities.getControlDigit = function (input) {
    var weightNumber = 2;
    var modSum = 0;

    for (var i = input.length - 1; i >= 0; i--) {
      var digit = parseInt(input.charAt(i), 10);

      if (isNaN(digit)) {
        return null;
      }

      modSum += weightNumber * digit;

      if (++weightNumber > 7) {
        weightNumber = 2;
      }
    }

    var remainder = modSum % 11;

    switch (remainder) {
      case 0:
        return remainder;

      case 1:
        return null;

      default:
        return 11 - remainder;
    }
  };

  Mod11Utilities.getControlDigits = function (input, numberOfDigits) {
    var controlDigits = [];

    for (var i = numberOfDigits; i > 0; i--) {
      var c = Mod11Utilities.getControlDigit(input);
      controlDigits.push(c);
      input += null === c ? '-' : c.toString();
    }

    return controlDigits;
  };

  Mod11Utilities.checkControlDigit = function (input) {
    return parseInt(input.charAt(input.length - 1), 10) === Mod11Utilities.getControlDigit(input.substr(0, input.length - 1));
  };

  Mod11Utilities.checkControlDigits = function (input, numberOfDigits) {
    for (var i = numberOfDigits; i > 0; i--) {
      if (!Mod11Utilities.checkControlDigit(input)) {
        return false;
      }

      input = input.substr(0, input.length - 1);
    }

    return true;
  };

  return Mod11Utilities;
}();



/***/ }),

/***/ "./utilities/ssn-utilities.ts":
/*!************************************!*\
  !*** ./utilities/ssn-utilities.ts ***!
  \************************************/
/*! exports provided: SsnUtilities */
/*! exports used: SsnUtilities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SsnUtilities; });
/* harmony import */ var _validators_ssn_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @validators/ssn-validator */ "./validators/ssn-validator.ts");


var SsnUtilities = function () {
  function SsnUtilities() {}

  SsnUtilities.getBirthDateFromSsn = function (ssn) {
    if (!_validators_ssn_validator__WEBPACK_IMPORTED_MODULE_0__[/* SsnValidator */ "a"].validate(ssn)) {
      return null;
    }

    var birthDate = ssn.substr(0, 6);
    var d1 = birthDate.substr(0, 1);
    var d2 = birthDate.substr(1, 1);
    var m1 = birthDate.substr(2, 1);
    var m2 = birthDate.substr(3, 1);
    var shortYear = birthDate.substr(4, 2);
    var shortYearInt = parseInt(shortYear, 10);
    var indInt = parseInt(ssn.substr(6, 3), 10);
    var birthYear = null;

    if (indInt >= 0 && indInt <= 499) {
      birthYear = parseInt('19' + shortYear, 10);
    } else if (indInt >= 500 && indInt <= 749 && shortYearInt >= 54 && shortYearInt <= 99) {
      birthYear = parseInt('18' + shortYear, 10);
    } else if (indInt >= 500 && indInt <= 999 && shortYearInt >= 0 && shortYearInt <= 39) {
      birthYear = parseInt('20' + shortYear, 10);
    } else if (indInt >= 900 && indInt <= 999 && shortYearInt >= 40 && shortYearInt <= 99) {
      birthYear = parseInt('19' + shortYear, 10);
    } else {
      return null;
    }

    var bd = new Date();
    bd.setUTCFullYear(birthYear, parseInt(m1 + (parseInt(m2, 10) - 1), 10), parseInt(d1 + d2, 10));
    bd.setUTCHours(0);
    bd.setUTCMinutes(0);
    bd.setUTCSeconds(0);
    bd.setUTCMilliseconds(0);
    return bd;
  };

  SsnUtilities.isDNumber = function (ssn) {
    if (!_validators_ssn_validator__WEBPACK_IMPORTED_MODULE_0__[/* SsnValidator */ "a"].validate(ssn)) {
      return null;
    }

    return parseInt(ssn.charAt(0), 10) >= 4;
  };

  return SsnUtilities;
}();



/***/ }),

/***/ "./validators/account-number-validator.ts":
/*!************************************************!*\
  !*** ./validators/account-number-validator.ts ***!
  \************************************************/
/*! exports provided: AccountNumberValidator */
/*! exports used: AccountNumberValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountNumberValidator; });
/* harmony import */ var _utilities_mod11_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @utilities/mod11-utilities */ "./utilities/mod11-utilities.ts");


var AccountNumberValidator = function () {
  function AccountNumberValidator() {}

  AccountNumberValidator.validate = function (accountNumber) {
    var validAccountNumberPattern = new RegExp('\d{11}|\d{4}\.\d{2}\.\d{5}');

    if (!validAccountNumberPattern.test(accountNumber)) {
      return false;
    }

    accountNumber = accountNumber.toString().replace(/\./g, '');
    return parseInt(accountNumber.charAt(accountNumber.length - 1), 10) === _utilities_mod11_utilities__WEBPACK_IMPORTED_MODULE_0__[/* Mod11Utilities */ "a"].getControlDigit(accountNumber);
  };

  return AccountNumberValidator;
}();



/***/ }),

/***/ "./validators/kid-validator.ts":
/*!*************************************!*\
  !*** ./validators/kid-validator.ts ***!
  \*************************************/
/*! exports provided: KidValidator */
/*! exports used: KidValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KidValidator; });
/* harmony import */ var _utilities_mod11_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @utilities/mod11-utilities */ "./utilities/mod11-utilities.ts");
/* harmony import */ var _utilities_luhn_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @utilities/luhn-utilities */ "./utilities/luhn-utilities.ts");



var KidValidator = function () {
  function KidValidator() {}

  KidValidator.validate = function (kidNumber) {
    var controlDigit = kidNumber.charAt(kidNumber.length - 1);
    var kidWithoutControlDigit = kidNumber.substr(0, kidNumber.length - 1);
    var isMod11Compatible = parseInt(controlDigit, 10) === _utilities_mod11_utilities__WEBPACK_IMPORTED_MODULE_0__[/* Mod11Utilities */ "a"].getControlDigit(kidWithoutControlDigit);
    var isLuhnCompatible = parseInt(controlDigit, 10) === _utilities_luhn_utilities__WEBPACK_IMPORTED_MODULE_1__[/* LuhnUtilities */ "a"].getControlDigit(kidWithoutControlDigit);
    return isMod11Compatible || isLuhnCompatible;
  };

  return KidValidator;
}();



/***/ }),

/***/ "./validators/organization-number-validator.ts":
/*!*****************************************************!*\
  !*** ./validators/organization-number-validator.ts ***!
  \*****************************************************/
/*! exports provided: OrganizationNumberValidator */
/*! exports used: OrganizationNumberValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrganizationNumberValidator; });
/* harmony import */ var _utilities_mod11_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @utilities/mod11-utilities */ "./utilities/mod11-utilities.ts");


var OrganizationNumberValidator = function () {
  function OrganizationNumberValidator() {}

  OrganizationNumberValidator.validate = function (orgNumber) {
    orgNumber = orgNumber.replace(new RegExp(/ /g), '');

    if (!orgNumber || orgNumber.length !== 9) {
      return false;
    }

    return parseInt(orgNumber.charAt(orgNumber.length - 1), 10) === _utilities_mod11_utilities__WEBPACK_IMPORTED_MODULE_0__[/* Mod11Utilities */ "a"].getControlDigit(orgNumber.substr(0, orgNumber.length - 1));
  };

  return OrganizationNumberValidator;
}();



/***/ }),

/***/ "./validators/ssn-validator.ts":
/*!*************************************!*\
  !*** ./validators/ssn-validator.ts ***!
  \*************************************/
/*! exports provided: SsnValidator */
/*! exports used: SsnValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SsnValidator; });
/* harmony import */ var _utilities_mod11_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @utilities/mod11-utilities */ "./utilities/mod11-utilities.ts");


var SsnValidator = function () {
  function SsnValidator() {}

  SsnValidator.validate = function (ssn) {
    if (!ssn || ssn.length !== 11) {
      return false;
    }

    var factors = [3, 7, 6, 1, 8, 9, 4, 5, 2];
    var factorSum = 0;

    for (var i = 0; i < factors.length; i++) {
      factorSum += parseInt(ssn.charAt(i), 10) * factors[i];
    }

    var controlDigit1 = 11 - factorSum % 11;

    if (controlDigit1 === 11) {
      controlDigit1 = 0;
    }

    var controlDigit2 = _utilities_mod11_utilities__WEBPACK_IMPORTED_MODULE_0__[/* Mod11Utilities */ "a"].getControlDigit(ssn.substr(0, ssn.length - 1));
    return controlDigit1 === parseInt(ssn.charAt(9), 10) && controlDigit2 === parseInt(ssn.charAt(10), 10);
  };

  return SsnValidator;
}();



/***/ }),

/***/ 0:
/*!*************************!*\
  !*** multi ../index.ts ***!
  \*************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ../index.ts */"../index.ts");


/***/ })

/******/ });
//# sourceMappingURL=index.js.map