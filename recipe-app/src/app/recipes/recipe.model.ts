export class Recipe {
    public name: string;
    public desription: string;
    public imagePath: string;

    constructor(name: string, description: string, imagePath: string) {
        this.name = name;
        this.desription = description;
        this.imagePath = imagePath;
    }
}