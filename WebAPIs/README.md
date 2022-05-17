# Exercices

# Exercice 1

Compléter la fonction `createTodoRow` pour quelle ajoute la checkbox et le bouton comme dans l'exemple :

```html
<div class="todo-row" data-todo-id="0.35335">
  <input type="checkbox" class="todo-completed">
  <span class="todo-title">ABC</span>
  <button class="todo-delete">-</button>
</div>
```

# Exercice 2

Au click d'un bouton `-`, supprimer la balise `<div class="todo-row">` parent.

# Exercice 3

Ajouter une checkbox dans le formulaire HTML.
Au clic de celle-ci, cocher ou décocher toutes les `<input type="checkbox" class="todo-completed">` (propriété `checked`)

# Exercice 4

En vous servant de `event.target` écouter le clic du bouton `-` dans le fichier `main.js``

# Exercice 5

Au clic de la balise span (à écoute dans main.js), passer à une balise input (utiliser la méthode replaceWith).

Au clic de document revenir à une balise span, vous servir des event phases et de stopPropagation si besoin.

