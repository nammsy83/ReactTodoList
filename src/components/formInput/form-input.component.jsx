import React from 'react';
import './form-input.styles.scss';


class FormInput extends React.Component {
    render() {
        const { item, handleChange, handleSubmit } = this.props;
        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        className="input"
                        placeholder="title"
                        onChange={handleChange}
                        value={item}
                        name="title"
                    />
                    <button type="submit" className="addBtn">submit  </button>
                </form>
            </div>
        )
    }
}


export default FormInput;