import { Controller, Get, Post, HttpCode, Body } from "routing-controllers";
import Adv from "./entity";

@Controller()
export default class AdvController {
  @Get("/advs")
  async allAdvs() {
    const advs = await Adv.find();
    return advs;
  }

  @Post("/advs")
  @HttpCode(201)
  createAdv(@Body() adv: Adv) {
    return adv.save();
  }
}
