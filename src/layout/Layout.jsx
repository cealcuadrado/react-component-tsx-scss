import Foo from '../shared/foo/Foo';
import Movie from '../shared/movie/Movie';
import './Layout.scss';

function Layout() {
    const movie = {
        title: 'The Bourne Identity',
        year: 2002,
        director: 'Doug Liman'
    };

    return (
        <div className="layout">
            <Foo name="Perico" />
            <hr />
            <Movie movie={movie}/>
        </div>
    );
}

export default Layout;