(function () {
    'use strict';

    class AbstractView {
        constructor() {
            this.app = document.getElementById( 'root' );
        }

        setTitle( title ) {
            document.title = title;
        }

        render() {
            const main = document.createElement( 'div' );
            main.innerHTML = `TEST`;
            this.app.innerHTML = '';
            this.app.appendChild( main );
        }

        destroy() {
            return;
        }
    }

    class MainView extends AbstractView {
        constructor() {
            super();
            this.setTitle( 'Поиск книг' );
        }
    }

    /**
     * Точка входа в программу
     */
    class App {
        /**
         * Текущая вью
         * @type {null}
         */
        currentView = null;

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
            console.log(view);
            this.currentView = new view();
            this.currentView.render();
        }
    }

    new App();

})();
