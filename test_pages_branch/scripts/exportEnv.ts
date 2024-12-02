import * as path from 'path';
import * as fs from 'fs';
import { version, date, basePath } from '../src/config'; // 引入 config.ts 中的變數

// 定義輸出的目錄和檔案
const outputDir = path.resolve(__dirname, '../public'); // 將檔案放到 public 資料夾
const outputFile = path.join(outputDir, 'env.json');

// 準備要寫入的環境數據
const envData = {
    version,
    date,
    basePath,
};

// 確保 public 資料夾存在
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// 將數據寫入到 env.json
fs.writeFileSync(outputFile, JSON.stringify(envData, null, 2), 'utf8');

console.log('date update:', outputFile);
