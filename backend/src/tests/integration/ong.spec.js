const request = require('supertest');
const app = require('../../app');
const connection = require('../../database/connection');

describe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.rollback(); //zera o banco de dados de testes gerados p não lotar o BD
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    });

    it('should be able to create a new ONG', async () => {
        const response = await request(app)
            .post('/ongs')
            .send({
                name: "APAD",
                email: "hdshh@gmail.com",
                whatsapp: "04554485",
                city: "Rio",
                uf: "RN"

            });
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);

    });
});
