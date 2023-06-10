import React from 'react';
import PakemonCard from '../PacemonCard/PakemonCard';
class PakemonItem extends React.Component {
    render() {
        const {Pakemons} = this.props;
        // console.log(Pakemons);

        return (Pakemons.map((value) => {
            return(
             < li className = "pakemon__item" id={value.id} >
                < PakemonCard Pakemonsdata={value} /> 
            </li>
            )
        }));
    };
};
export default PakemonItem;