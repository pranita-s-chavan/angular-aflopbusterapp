import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // Add data elements for your name, the title, year released, rating, and imdb link of your favorite movie
  Name: 'Pranita';
  favFlop = {
    title: 'Batman',
    yearReleased: 2010,
    rating: 'PG-13',
    imdbLink: 'https://www.imdb.com/title/tt1877830/',
    soundtrack:{spotifyLink:"https://open.spotify.com/playlist/5jcu1LG141GiVpKuZVOTzn"
  }
}

onCheckout(event)
{

console.log( 'TITLE',event.target)

}

titleHover(message)   {
  
  console.log(message +'the title')
  }
  
}