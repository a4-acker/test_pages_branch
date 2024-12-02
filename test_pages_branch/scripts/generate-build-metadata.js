import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// 獲取當前文件目錄
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 獲取 package.json 的版本
const packageJsonPath = path.resolve(__dirname, '../package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
const version = packageJson.version;

// 動態生成 BASE_PATH
const now = new Date();
const year = now.getFullYear();
const month = String(now.getMonth() + 1).padStart(2, '0');
const day = String(now.getDate()).padStart(2, '0');
const date = `${year}${month}${day}`;

 // const version = 'V0.1.9'; 從 package.json 或其他來源獲取版本
const repositoryName = 'test_pages_branch';
const basePath = `${repositoryName}/${date}-${version}`;
const pagesPath = `${date}-${version}`;

// 寫入 `build-metadata.json`
const outputPath = path.resolve(__dirname, '../build-metadata.json');
const buildMetadata = { basePath, version, date, repositoryName, pagesPath };

try {
    fs.writeFileSync(outputPath, JSON.stringify(buildMetadata, null, 2));
    console.log(`Build metadata saved to: ${outputPath}`);
} catch (error) {
    console.error('Error writing build metadata:', error);
}
