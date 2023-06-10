import React from 'react';
class PakemonCard extends React.Component {
    render() {
        const {data} = this.props
        const {Pakemonsdata} = this.props;
        console.log(Pakemonsdata);
        return (
            <div className="wrapper" >
            <img src={Pakemonsdata.img} alt={Pakemonsdata.name} />
            <div className="userIntroduction">
                <h2 className='userName'>{Pakemonsdata.name}</h2>
            </div>
          </div>
        )
    }
}
export default PakemonCard;