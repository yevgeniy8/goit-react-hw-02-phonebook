import PropTypes from 'prop-types';

const Filter = ({ filter, onChange }) => {
    return (
        <div>
            <label>
                Find contacts by name
                <input type="text" value={filter} onChange={onChange} />
            </label>
        </div>
    );
};

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default Filter;
