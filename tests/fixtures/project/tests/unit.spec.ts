// vitest: focused test should trigger
import { describe, it } from 'vitest';

describe('math', () => {
    // Missing expect should trigger vitest/expect-expect
    it('adds', () => {
        const x = 1 + 1;
        void x;
    });
});
