import { FormGroup, FormControl, Validators } from "@angular/forms";
import { DomSanitizer } from "@angular/platform-browser";
import { Component, OnInit } from "@angular/core";
import { ProductAdminService } from "../../services/product/product-admin.service";
import { Product } from "src/app/shared/models/product.model";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"]
})
export class ProductsComponent implements OnInit {
  products: Product[];
  oneProduct: Product;
  form: FormGroup;
  constructor(private product: ProductAdminService, public dom: DomSanitizer) {
    this.form = new FormGroup({
      id_category: new FormControl("", Validators.required),
      name: new FormControl("", [Validators.required, Validators.maxLength(20), Validators.minLength(3)]),
      price: new FormControl("", [Validators.required, Validators.maxLength(20), Validators.minLength(3)]),
      color: new FormControl("", [Validators.required, Validators.maxLength(20), Validators.minLength(3)]),
      popular_rating: new FormControl("", Validators.required),
      picture: new FormControl("")
    });
  }

  ngOnInit() {
    this.product.getAllProducts().subscribe((response: Product[]) => {
      this.products = response;
    });
  }

  deleteProduct(id: number) {
    this.product.deleteProduct(id).subscribe((response: number) => {
      console.log(response);
    });
  }

  getOne(id: number) {
    this.product.getOneProduct(id).subscribe((response: Product) => {
      console.log(response);
      this.oneProduct = response;
    });
  }

  insert() {
    const formData = new FormData();
    formData.append("picture", this.form.value.picture);
    formData.append("id_category", this.form.value.id_category);
    formData.append("name", this.form.value.name);
    formData.append("price", this.form.value.price);
    formData.append("color", this.form.value.color);
    formData.append("popular_rating", this.form.value.popular_rating);
    this.product.insertProduct(formData).subscribe((response: Object) => {
      console.log(response);
      this.product.getAllProducts().subscribe((response: Product[]) => {
        this.products = response;
      });
    });
  }

  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];

      this.form.get("picture").setValue(file);
    }
  }
}
