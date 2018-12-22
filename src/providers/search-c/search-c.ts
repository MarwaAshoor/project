
import { Injectable } from '@angular/core';
import { UserProvider } from '../user/user';
import { FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class SearchCProvider {
  items: FirebaseListObservable<any>;
  itemList: any[];

  constructor( public us:UserProvider) {
   this.initializeItem();
  }

  initializeItem(){
    this.items=this.us.getClinics();
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