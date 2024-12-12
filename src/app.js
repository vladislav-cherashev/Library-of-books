import { MainView } from './views/main/main.js';

/**
 * @class Точка входа в программу
 */
class App {

    /**
     * @property {Object} - Текущая вью
     */
    currentView = null;

    /**
     * @namespace
     * @property {object} appState - Состояние приложения
     * @property {array} appState.favorites - Избранное
     */
    appState = {
        favorites: []
    };

    /**
     * @property {Array.<Object>} routes - Маршруты
     */
    routes = [
        { path: '', view: MainView }
    ];

    constructor() {
        window.addEventListener( 'hashchange', this.route.bind( this ) );
        this.route();
    }

    route() {
        if( this.currentView ) {
            this.currentView.destroy();
        }
        const view = this.routes.find( ( s ) => s.path === location.hash ).view;
        this.currentView = new view( this.appState );
        this.currentView.render();
    }
}

new App();
