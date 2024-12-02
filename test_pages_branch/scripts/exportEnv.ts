import * as path from 'path';
import * as fs from 'fs';
import { version, date, basePath } from '../src/config'; // �ޤJ config.ts �����ܼ�

const outputDir = path.resolve(__dirname, '../public');
const outputFile = path.join(outputDir, 'env.json');

const envData = {
    version,
    date,
    basePath,
};

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

fs.writeFileSync(outputFile, JSON.stringify(envData, null, 2), 'utf8');

console.log('date update:', outputFile);
