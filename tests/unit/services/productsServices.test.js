const { expect } = require("chai");

const ProductService = require("../../../services/Product");

const allProductsMock = [
  { id: 1, name: "Martelo de Thor" },
  { id: 2, name: "Traje de encolhimento" },
  { id: 3, name: "Escudo do Capitão América" },
];

const productMock = { id: 1, name: "Martelo de Thor" };

describe("Retorna todos os produtos do banco de dados", () => {
  it("quando é chamado", async () => {
    const response = await ProductService.getAll();

    expect(response).to.be.deep.equal(allProductsMock);
  });
});

describe("Retorna um produto pelo id", () => {
  it("quando passado um id válido", async () => {
    const response = await ProductService.findById(1);

    expect(response).to.be.deep.equal(productMock);
  });

  it("quando passado um id inválido", async () => {
    const response = await ProductService.findById(4);

    expect(response).to.be.null;
  });
});
