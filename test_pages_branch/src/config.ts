// src/config.ts

// 取得動態日期
const getCurrentDate = (): string => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return `${year}${month}${day}`;
};

const version = 'V0.1.9'; 
const repositoryName = 'test_pages_branch'; 
const date = getCurrentDate();

const basePath = `${repositoryName}/${date}-${version}`; 

export { version, repositoryName, date, basePath };
