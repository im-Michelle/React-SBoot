import PropTypes from 'prop-types';
import { Book } from './components/Book';
import { Title } from './components/Title';
import { UserDetails } from './components/UserDetails';

export const HelloWorldApp = ( {user, id, title, book} ) => {
    // const name = 'Pepe';
    console.log(title);
    return (
        <>
            <Title title = {title}/>
            <UserDetails user={ user } id = {id} />
            <Book book={book} />
        </>
    );
}

HelloWorldApp.propTypes = {
    title : PropTypes.string.isRequired,
    id : PropTypes.number.isRequired,
    user : PropTypes.object.isRequired,
    book : PropTypes.string.isRequired,
}

HelloWorldApp.defaultProps = {
    title : 'Hello World Default',
    book : 'UML got a gota',
}