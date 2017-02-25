import createRoutes from './shared/router-utils';
import App from './App';
import Home from './Home';
import Films from './Films';
import FilmDetail from './FilmDetail';
import NoMatch from './NoMatch';

const routeConfig = [
  {
    path        : '/',
    component   : App,
    indexRoute  : {
      component     : Home,
    },
    childRoutes : [
      {
        path : 'films/',
        component : Films,
        childRoutes : {
          path : 'detail/:id',
          component : FilmDetail,
        }
      },
      {
        path : '/*',
        component : NoMatch
      }
    ]
  }
];

export default createRoutes(routeConfig);