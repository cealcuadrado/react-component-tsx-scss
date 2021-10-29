import Foo from '../shared/foo/Foo';
import './Layout.scss';

function Layout() {
    return (
        <div className="layout">
            <Foo name="Perico"/>
        </div>
    );
}

export default Layout;