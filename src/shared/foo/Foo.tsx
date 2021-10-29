import './Foo.scss';

function Foo(props: {name: string}) {
    return (
        <div className="foo">
            <p>Name: {props.name}</p>
        </div>
    );
}

export default Foo;