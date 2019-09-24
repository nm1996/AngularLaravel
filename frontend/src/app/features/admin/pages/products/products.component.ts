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
  updateForm: FormGroup;

  pageOfItems: Array<any>;
  show: number = 10;
  productsPagionation: Product[];

  constructor(private product: ProductAdminService, public dom: DomSanitizer) {
    this.form = new FormGroup({
      id_category: new FormControl("", Validators.required),
      name: new FormControl("", [
        Validators.required,
        Validators.maxLength(20),
        Validators.minLength(3)
      ]),
      price: new FormControl("", [
        Validators.required,
        Validators.maxLength(20),
        Validators.minLength(3)
      ]),
      color: new FormControl("", [
        Validators.required,
        Validators.maxLength(20),
        Validators.minLength(3)
      ]),
      popular_rating: new FormControl("", Validators.required),
      picture: new FormControl("")
    });
    this.updateForm = new FormGroup({
      id_category: new FormControl("", Validators.required),
      name: new FormControl("", [
        Validators.required,
        Validators.maxLength(20),
        Validators.minLength(3)
      ]),
      price: new FormControl("", [
        Validators.required,
        Validators.maxLength(20),
        Validators.minLength(3)
      ]),
      color: new FormControl("", [
        Validators.required,
        Validators.maxLength(20),
        Validators.minLength(3)
      ]),
      popular_rating: new FormControl("", Validators.required),
      picture: new FormControl("")
    });
  }

  ngOnInit() {
    this.product.getAllProducts().subscribe((response: Product[]) => {
      this.products = response;
    });
  }

  onChangePage(pageOfItems: Array<any>) {
    this.pageOfItems = pageOfItems;
  }

  onChange(event) {
    console.log(event);
    this.show = +event;
  }

  deleteProduct(id: number) {
    this.product.deleteProduct(id).subscribe((response: number) => {
      console.log(response);
      this.product.getAllProducts().subscribe((response: Product[]) => {
        this.products = response;
      });
    });
  }

  getOne(id: number) {
    this.product.getOneProduct(id).subscribe((response: Product) => {
      console.log(response);
      this.oneProduct = response;
      this.updateForm.patchValue({ id_category: response.id_category });
      this.updateForm.patchValue({ name: response.name });
      this.updateForm.patchValue({ price: response.price });
      this.updateForm.patchValue({ color: response.color });
      this.updateForm.patchValue({ popular_rating: response.popular_rating });
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

  fileChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];

      this.updateForm.get("picture").setValue(file);
    }
  }

  update(id: number) {
    const formData = new FormData();
    formData.append("picture", this.updateForm.value.picture);
    formData.append("id_category", this.updateForm.value.id_category);
    formData.append("name", this.updateForm.value.name);
    formData.append("price", this.updateForm.value.price);
    formData.append("color", this.updateForm.value.color);
    formData.append("popular_rating", this.updateForm.value.popular_rating);
    console.log(formData.get("picture"));
    console.log(formData.get("id_category"));
    console.log(formData.get("name"));
    console.log(formData.get("price"));
    console.log(formData.get("color"));
    console.log(formData.get("popular_rating"));
    this.product.updateProduct(formData, id).subscribe((response: Object) => {
      console.log(response);
      this.product.getAllProducts().subscribe((response: Product[]) => {
        this.products = response;
      });
    });
  }
}
