export class Product {
  constructor(
    public ProductId: number,
    public ProductName: string,
    public Price: number,
    public CategoryName: string,
    public Manufacturer: string
  ) {}
}

export class ProductData {
  constructor(
    public ProductRowId: number,
    public ProductId: string,
    public ProductName: string,
    public BasePrice: number,
    public CategoryName: string,
    public Manufacturer: string,
    public Description: string
  ) {}
}
