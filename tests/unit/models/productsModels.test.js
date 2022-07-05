const { expect } = require('chai');

const ProductModel = require('../../../models/Product');

const allProductsMock = [
  { id: 1, name: "Martelo de Thor" },
  { id: 2, name: "Traje de encolhimento" },
  { id: 3, name: "Escudo do Capitão América" },
];

const productMock = { id: 1, name: "Martelo de Thor" };

describe('Retorna todos os produtos do banco de dados', () => {
  it('quando é chamado', async () => {
    const response = await ProductModel.getAll();

    expect(response).to.be.deep.equal(allProductsMock);
  })
})

describe("Retorna um produto pelo id", () => {
  it("quando é chamado", async () => {
    const [response] = await ProductModel.findById(1);

    expect(response).to.be.deep.equal(productMock);
  });
});