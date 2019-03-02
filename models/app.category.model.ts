export class Category {
  constructor(public CatId: number, public CategoryName: string) {}
}

export const Categories: Array<Category> = new Array<Category>();
Categories.push(new Category(101, "C1"));
Categories.push(new Category(102, "C2"));
Categories.push(new Category(103, "C3"));
