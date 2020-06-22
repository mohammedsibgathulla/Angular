import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://www.telegraph.co.uk/content/dam/recipes/2020/03/13/227561993_A-Jenny-Zarins-wwwjennyzarinscom-contactjennyzarinscom-44-07958-208-486_trans_NvBQzQNjv4Bqeo_i_u9APj8RuoebjoAHt0k9u7HhRJvuo-ZLenGRumA.jpg?imwidth=450')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
