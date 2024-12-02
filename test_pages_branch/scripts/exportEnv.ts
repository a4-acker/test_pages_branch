import * as path from 'path';
import * as fs from 'fs';
import { version, date, basePath } from '../src/config'; // �ޤJ config.ts �����ܼ�

// �w�q��X���ؿ��M�ɮ�
const outputDir = path.resolve(__dirname, '../public'); // �N�ɮש�� public ��Ƨ�
const outputFile = path.join(outputDir, 'env.json');

// �ǳƭn�g�J�����Ҽƾ�
const envData = {
    version,
    date,
    basePath,
};

// �T�O public ��Ƨ��s�b
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// �N�ƾڼg�J�� env.json
fs.writeFileSync(outputFile, JSON.stringify(envData, null, 2), 'utf8');

console.log('date update:', outputFile);
