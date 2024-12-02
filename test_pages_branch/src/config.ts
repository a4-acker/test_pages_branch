// src/config.ts

// ���o�ʺA���
const getCurrentDate = (): string => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return `${year}${month}${day}`;
};

// �򥻰t�m�H��
const version = 'V0.0.1'; // �M�ת���
const repositoryName = 'test_pages_branch'; // �M�צW��
const date = getCurrentDate();

// �զX���|
const basePath = `${repositoryName}/${date}-${version}`; 

export { version, repositoryName, date, basePath };
