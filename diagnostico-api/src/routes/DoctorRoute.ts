import { Router } from "express";
import { DoctorController } from "../controllers/DoctorController";

export class DoctorRoute {
  constructor(private controller: DoctorController = new DoctorController()) {}

  routes(app: Router) {
    app.post("/api/doctor", this.controller.post);
  }
}
