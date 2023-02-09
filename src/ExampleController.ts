import { ExampleService } from "./ExampleService";

export class ExampleController {
  constructor(
    private readonly exampleService: ExampleService = new ExampleService()
  ) {}

  public getExamples(): string[] {
    return this.exampleService.getExamples();
  }
}
