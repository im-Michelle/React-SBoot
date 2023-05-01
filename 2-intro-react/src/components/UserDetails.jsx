import PropTypes from 'prop-types';

export const UserDetails = ({user, id}) => (
    <div>
        que tal! {user.name} {user.lastName} con el id {id}
    </div>
);


UserDetails.propTypes = {
    user : PropTypes.object.isRequired,
    id : PropTypes.number.isRequired,
}

