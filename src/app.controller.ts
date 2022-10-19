import { All, Controller, Get, ImATeapotException, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Render('index')
  root() {
    return;
  }

  @All('/teapot')
  teapot() {
    throw new ImATeapotException(
      'The requested entity body is short and stout🤔 Tip me over and pour me out🫖',
    );
  }
}
