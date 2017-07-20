import Firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyCUko25Xfsj3-218DNVcIieImVk1Y1-cFI',
  authDomain: 'kanban-mini.firebaseapp.com',
  databaseURL: 'https://kanban-mini.firebaseio.com',
  projectId: 'kanban-mini',
  storageBucket: 'kanban-mini.appspot.com',
  messagingSenderId: '338697927972'
}

export var firebaseApp = Firebase.initializeApp(config)
