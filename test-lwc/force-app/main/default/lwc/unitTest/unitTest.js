import { LightningElement, api } from "lwc";
import { sum } from "./sum";

export default class UnitTest extends LightningElement {
  @api unitNumber = 5;

  handleChange(event) {
    this.unitNumber = event.target.value;
  }
}
