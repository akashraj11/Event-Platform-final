import { Category } from "./Category";

​
export class Timing {
  showId:string;
  showTime:string;
  categories:Category[];
​
  public Timing(showTime:string, showId:string, categories:Category[]) {
     this.showTime = showTime;
     this.showId = showId;
     this.categories = categories;
  }
}