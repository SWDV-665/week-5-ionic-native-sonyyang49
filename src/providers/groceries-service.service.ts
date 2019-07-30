import { Injectable } from '@angular/core';
import { NativeAudio } from '@ionic-native/native-audio/ngx';

@Injectable({
  providedIn: 'root'
})
export class GroceriesServiceService {
  //Creates an empty list of items.
  items = [];

  constructor(public nativeAudio: NativeAudio) {}

  //Returns the items in the items array.
  getItems() {
    return this.items;
  }

  //Adds the new input item to the end of the items array.
  addItem(item) {
    this.items.push(item);
  }

  //Updates the item with specified index in the array.
  editItem(item, index) {
    this.items[index] = item;
  }

  //Remove the item with specified index in the array.
  removeItem(item, index) {
    this.items.splice(index, 1);
    this.deleteAudio();
  }

  deleteAudio() {
    this.nativeAudio.preloadSimple('uniqueId2', '../../assets/delete.mp3').then(
      function(msg) {
        console.log(msg);
      },
      function(error) {
        console.log(error);
      }
    );
    this.nativeAudio.play('uniqueId2').then(
      function(msg) {
        console.log(msg);
      },
      function(error) {
        console.log(error);
      }
    );
  }
}
