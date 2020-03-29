const generateUniqueId = require('../../utils/generateUniqueId');

describe('Generate Unique ID', () => {
    it('should generate an unique ID', () => {
        const id = generateUniqueId();

        expect(id).toHaveLength(8);
        // expect(2 + 2).toBe(4); expera q 2+2 seja igual a 4, se colocar 5 dá erro no teste
    });
});