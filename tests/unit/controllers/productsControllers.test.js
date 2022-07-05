const sinon = require("sinon");
const { expect } = require("chai");

const ProductService = require("../../../services/Product");
const ProductController = require('../../../controllers/Product');

const allProductsMock = [
  { id: 2, name: "Martelo de Thor" },
  { id: 2, name: "Traje de encolhimento" },
  { id: 3, name: "Escudo do Capitão América" },
];

const productMock = { id: 1, name: "Martelo de Thor" };

describe("Ao chamar o controller de Product", () => {
  const response = {};
  const request = {};

  before(() => {
    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns();

    sinon.stub(ProductService, "getAll").resolves(allProductsMock);
  })
  
  after(() => {
    ProductService.getAll.restore();
  });

  it("é chamado o status com o código 200", async () => {
    await ProductController.getAll(request, response);

    expect(response.status.calledWith(200)).to.be.equal(true);
  });

  it('é chamado o json com a lista de produtos"', async () => {
    await ProductController.getAll(request, response);

    expect(response.json.calledWith(allProductsMock)).to.be.equal(true);
  });
});

describe("retorna um produto pelo id", () => {
  const response = {};
  const request = {};

  before(async () => {
    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns();

    request.params = {
      id: 2,
    }
  });

  it("é chamado o status com o código 200", async () => {
    await ProductController.findById(request, response);

    console.log(response)

    expect(response.status.calledWith(200)).to.be.equal(true);
  });
});
