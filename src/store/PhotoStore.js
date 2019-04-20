import { observable, action } from "mobx";
import axios from 'axios'

class PhotoStore {
  @observable term = "";
  @observable images = [];
  @observable status = "initial";

  @action
  fetchImages = async term => {
    this.term = term;
    this.images = [];
    this.status = "searching";

    try {
      const response = await axios.get('https://api.unsplash.com/search/photos', {
        params: {
          client_id: "f38d0f1aa104ff3a7ea72fa9a90f0beccff30c1ab3621f28ff13ad5e722caf28",
          query: term
        }
      })
    }
  }
}
