// src/config.ts

// 取得動態日期
const getCurrentDate = (): string => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return `${year}${month}${day}`;
};

// 基本配置信息
const version = 'V0.0.1'; // 專案版本
const repositoryName = 'test_pages_branch'; // 專案名稱
const date = getCurrentDate();

// 組合路徑
const basePath = `${repositoryName}/${date}-${version}`; 

export { version, repositoryName, date, basePath };
