import {
  Controller,
  Get,
  Post,
  HttpCode,
  Body,
  Param,
  Put,
  NotFoundError,
  Delete,
  OnUndefined
} from "routing-controllers";
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

  @Get("/advs/:id")
  getAdv(@Param("id") id: number) {
    return Adv.findOne(id);
  }

  @Put("/advs/:id")
  async updateAdv(@Param("id") id: number, @Body() update: Adv) {
    const adv = await Adv.findOne(id);
    if (!adv) throw new NotFoundError("Cannot find page");

    return Adv.merge(adv, update).save();
  }

  @Delete("/advs/:id")
  @OnUndefined(204)
  async remove(@Param("id") id: number) {
    const adv = await Adv.findOne(id);
    if (!adv) throw new NotFoundError("Cannot find page");
    Adv.delete(id);
  }
}
