# React + Vite + Redux


## Installation

$ git clone ...

$ cd vite-project

$ pnpm install

$ pnpm run dev


## Installed

$ pnpm create vite

$ cd vite-project

$ pnpm install

$ pnpm add redux

$ pnpm add react-redux


## Goal

- EN

My motivation was to review and revise the fundamentals of Redux. Having learned another way of managing state, 
I wanted to understand how to use state correctly in Redux. For the example, I chose something simple
since it's a counter. The application only requires 4 files and I find it easier to learn this way. 

- FR

Ma motivation était de revoir et réviser les fondammentaux de Redux. Ayant appris une autre mannière de gérer les state, 
j'ai préféré comprendre comment utiliser correctement les state dans Redux. Pour l'exemple, j'ai choisi quelque chose de simple
puisqu'il s'agit d'un counter. L'application ne demande que 4 fichiers et je trouve qu'il est plus facile d'apprendre ainsi. 

---

## Subjects

1. store
2. state
3. actions
4. reducer
5. mapStateToProps
6. mapDispatchToProps

---

## EN

1. store

The store is an object that unifies state, actions and reducer.

- read the current state.
- dispatch actions.

2. state

The state can be read, but never modified.
It plays the most important role in Redux.

3. actions (+ type + dispatch)

An action in Redux is an object comprising a type and data.
This is known as a dispatched action.

4. reducer 

The reducer is a function that takes a state and a function as parameters and returns a new state.
It updates the state.

5. mapStateToProps

Mapping of states with component properties.

6. mapDispatchToProps

Mapping of dispatch actions to component properties.

## FR

1. store

Le store est un objet qui unifie le state, les actions et le reducer.

- lire le state courant.
- dispatch les actions.

2. state

Le state peut être lu, mais en aucun cas il peut être modifié.
Il a le rôle le plus important dans Redux.

3. actions (+ type + dispatch)

Une action dans Redux est un objet qui comprend un type et des données.
On parle d'action dispatchée.

4. reducer 

Le reducer est une fonction qui prend en paramètre un state et une fonction et qui renvoit un nouveau state.
C'est lui qui update le state.

5. mapStateToProps

Mapping des state avec les proprités du composant.

6. mapDispatchToProps

Mapping des actions à dispatcher avec les propriétés du composant.
