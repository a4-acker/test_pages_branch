"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
var fs = require("fs");
var config_1 = require("../src/config"); // �ޤJ config.ts �����ܼ�
// �w�q��X���ؿ��M�ɮ�
var outputDir = path.resolve(__dirname, '../public'); // �N�ɮש�� public ��Ƨ�
var outputFile = path.join(outputDir, 'env.json');
// �ǳƭn�g�J�����Ҽƾ�
var envData = {
    version: config_1.version,
    date: config_1.date,
    basePath: config_1.basePath,
};
// �T�O public ��Ƨ��s�b
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}
// �N�ƾڼg�J�� env.json
fs.writeFileSync(outputFile, JSON.stringify(envData, null, 2), 'utf8');
console.log('date update:', outputFile);
