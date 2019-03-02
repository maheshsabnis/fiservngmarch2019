export class ProductInfo {
  constructor(
    public ProdId: number,
    public ProdName: string,
    public CatId: number
  ) {}
}

export const Products: Array<ProductInfo> = new Array<ProductInfo>();

Products.push(new ProductInfo(10001, "P1", 101));
Products.push(new ProductInfo(10002, "P2", 102));
Products.push(new ProductInfo(10003, "P3", 103));
Products.push(new ProductInfo(10004, "P4", 101));
Products.push(new ProductInfo(10005, "P5", 102));
Products.push(new ProductInfo(10006, "P6", 103));
