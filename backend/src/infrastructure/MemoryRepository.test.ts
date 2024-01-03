import { MemoryRepository } from './MemoryRepository';
import { runRepositoryTests } from '../repository/Repository.test';

describe('MemoryRepository', () => {
    runRepositoryTests(() => new MemoryRepository());
});
