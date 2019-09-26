export class Checkout {
  public id: number;
  public cart_id?: number;
  public user_id?: number;
  public created_at: Date;
  public product_id?: number;
  public quantity: number;
  public picture: string;
  public price: number;
}
