import { AbstractView } from '../../common/view.js';
import onChange from 'on-change';

/**
 * @class Класс основного окна
 */
export class MainView extends AbstractView {

    /**
     * @property {Object} - Состояние программы
     */
    appState = null;

    /**
     * @property {Object} - Свойства состояния
     * @type {{offset: number, searchQuery: *, list: [], loading: boolean}}
     */
    state = {
        list       : [],
        loading    : false,
        searchQuery: undefined,
        offset     : 0
    }

    constructor( state ) {
        super();
        this.setTitle( 'Поиск книг' );
        this.appState = state;
        this.appState = onChange( this.appState, this.appStateHook.bind( this ) );
    }

    appStateHook( path ) {
        console.log( path )
    }

    /**
     * @desc Рендер
     */
    render() {
        const main = document.createElement( 'div' );
        const countBooks = this.appState.favorites.length;
        main.innerHTML = `Число книг: ${ countBooks } `;
        this.app.innerHTML = '';
        this.app.appendChild( main );
        this.appState.favorites.push( 'd' );
    }
}