export class AbstractView {
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