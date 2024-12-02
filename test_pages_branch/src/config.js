"use strict";
// src/config.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.basePath = exports.date = exports.repositoryName = exports.version = void 0;
// ���o�ʺA���
var getCurrentDate = function () {
    var now = new Date();
    var year = now.getFullYear();
    var month = String(now.getMonth() + 1).padStart(2, '0');
    var day = String(now.getDate()).padStart(2, '0');
    return "".concat(year).concat(month).concat(day);
};
// �򥻰t�m�H��
var version = 'V0.1.9'; // �M�ת���
exports.version = version;
var repositoryName = 'test_pages_branch'; // �M�צW��
exports.repositoryName = repositoryName;
var date = getCurrentDate();
exports.date = date;
// �զX���|
var basePath = "".concat(repositoryName, "/").concat(date, "-").concat(version);
exports.basePath = basePath;
