import { Component } from "@angular/core";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "escuela";
  carril_1: any;
  carril_2: any;
  carril_3: any;

  constructor(private db: AngularFireDatabase) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.db
      .list("carril_1")
      .valueChanges()
      .subscribe(data => {
        this.carril_1 = data;
      });
    this.db
      .list("carril_2")
      .valueChanges()
      .subscribe(data => {
        this.carril_2 = data;
      });
    this.db
      .list("carril_3")
      .valueChanges()
      .subscribe(data => {
        this.carril_3 = data;
      });
  }
}
