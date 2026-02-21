import { Component } from '@angular/core';
import { Suggestion } from '../../models/suggestion';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-list-suggestion',
  templateUrl: './list-suggestion.component.html',
  styleUrl: './list-suggestion.component.css'
})
export class ListSuggestionComponent {
  suggestions: Suggestion[] = [
    {
      id: 1,
      title: 'Organiser une journée team building',
      description: 'Suggestion pour organiser une journée de team building pour renforcer lesliens entre les membres de l équipe.',
      category: 'Événements',
      date: new Date('2025-01-20'),
      status: 'acceptee',
      nbLikes:10
    },
    {
      id: 2,
      title: 'Améliorer le système de réservation',
      description: 'Proposition pour améliorer la gestion des réservations en ligne avec un système de confirmation automatique.',
      category: 'Technologie',
      date: new Date('2025-01-15'),
      status: 'refusee',
      nbLikes:0
    },
    {
      id: 3,
      title: 'Créer un système de récompenses',
      description: 'Mise en place d un programme de récompenses pour motiver les employéset reconnaître leurs efforts.',
      category: 'Ressources Humaines',
      date: new Date('2025-01-25'),
      status: 'refusee',
      nbLikes:0
    },
    {
      id: 4,
      title: 'Moderniser l interface utilisateur',
      description: 'Refonte complète de l interface utilisateur pour une meilleure expérience utilisateur.',
      category: 'Technologie',
      date: new Date('2025-01-30'),
      status: 'en_attente',
      nbLikes:0
    },
  ];
  searchTitle = '';

  get filteredSuggestions() {
    const t = this.searchTitle.trim().toLowerCase();
    return this.suggestions.filter(s =>
      !t || s.title.toLowerCase().includes(t)
    );
  }

  like(s: any) {
    s.nbLikes++;
  }

  favorites: Suggestion[] = [];

  addToFavorites(s: Suggestion) {
    const exists = this.favorites.some(f => f.id === s.id);
    if (!exists) {
      this.favorites.push(s);
    }
  }


}
