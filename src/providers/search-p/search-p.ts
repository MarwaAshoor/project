import { FirebaseListObservable } from 'angularfire2/database';
import { UserProvider } from '../user/user';
import { Injectable } from '@angular/core';

@Injectable()
export class SearchPProvider {

  items: FirebaseListObservable<any>;
  itemList: any[];

  constructor(public us: UserProvider) {
   this.initializeItem();
  }

  initializeItem(){
    this.items=this.us.getUsers();
    this.items.subscribe(p =>{
      this.itemList=p;
    });
  }

  filterItems(item,searchTerm){
    this.initializeItem();
    if(searchTerm && searchTerm.trim() != ''){
      return item.filter((i) => {
         return i.name.toLowerCase().includes(searchTerm.toLowerCase());
     });  
    }
    else
    return this.itemList;


 }

}
