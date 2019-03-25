/* Add your Application JavaScript */
Vue.component('app-header', {
    template: `
        <header>
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
              <a class="navbar-brand" href="#">VueJS App</a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item active">
                    <router-link to="/" class="nav-link">Home</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/news" class="nav-link">News</router-link>
                  </li>
                </ul>
              </div>
            </nav>
        </header>    
    `,
    data: function() {}
});

Vue.component('app-footer', {
    template: `
        <footer>
            <div class="container">
                <p>Copyright &copy {{ year }} Flask Inc.</p>
            </div>
        </footer>
    `,
    data: function() {
        return {
            year: (new Date).getFullYear()
        }
    }
});

const NewsList = Vue.component('news-list', {
    template:`
        <button class="btn btn-primary mb-2" @click="searchNews">Search</button>
    `,
    created: function(){
        let self = this;
        fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=<>')
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log(data);
            self.articles = data.articles;
        });
    },
    data: function(){
        return {
            articles: []
            searchTerm: ''
        }
    },
    methods: {
        searchNews: function() {
            let self = thi;
            
            fetch('https://newsapi.org/v2/everything?q='+ self.searchTerm + '&language=en&apiKey=eadb78625dc1407581fe6a1e95c075fd')
            .then(function(response){
                return response.json();
            })
            .then(function(data){
                console.log(data);
                self.articles = data.articles;
            });
        }
    }
    
        
});

const Home = Vue.component('home', {
    template: `
        <div class="home">
            <img src="/static/images/logo.png" alt="VueJS Logo">
            <h1>{{ welcome }}</h1>
        </div>
    `,
    data: function() {
        return {
            welcome: 'Hello World! Welcome to VueJS'
        }
    }
});

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: Home },
        { path: '/news', component: NewsList }
    ]
});

const app = new Vue({
    el: '#app',
    router
});

