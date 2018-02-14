export class Recipe {
  name: string;
  id: number;

  constructor() {}

  formattedName() {
    return this.name ? 
      this.name[0].toUpperCase() + this.name.substr(1) : "";
  }
}