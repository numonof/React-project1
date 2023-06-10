import React from 'react';
import './App.css';
import PakemonItem from './PakemonItem/PakemonItem';
class App extends React.Component {
    render() {
        var pakemons = [
            {
                id: 1,
                num: "001",
                name: "Bulbasaur",
                img: "http://www.serebii.net/pokemongo/pokemon/001.png"
            }, {
                id: 2,
                num: "002",
                name: "Ivysaur",
                img: "http://www.serebii.net/pokemongo/pokemon/002.png"
            }, {
                id: 3,
                num: "003",
                name: "Venusaur",
                img: "http://www.serebii.net/pokemongo/pokemon/003.png"
            }, {
                id: 4,
                num: "004",
                name: "Charmander",
                img: "http://www.serebii.net/pokemongo/pokemon/004.png"
            }, {
                id: 5,
                num: "005",
                name: "Charmeleon",
                img: "http://www.serebii.net/pokemongo/pokemon/005.png"
            }, {
                id: 6,
                num: "006",
                name: "Charizard",
                img: "http://www.serebii.net/pokemongo/pokemon/006.png"
            }, {
                id: 7,
                num: "007",
                name: "Squirtle",
                img: "http://www.serebii.net/pokemongo/pokemon/007.png"
            }, {
                id: 8,
                num: "008",
                name: "Wartortle",
                img: "http://www.serebii.net/pokemongo/pokemon/008.png"
            }, {
                id: 9,
                num: "009",
                name: "Blastoise",
                img: "http://www.serebii.net/pokemongo/pokemon/009.png"
            }, {
                id: 10,
                num: "010",
                name: "Caterpie",
                img: "http://www.serebii.net/pokemongo/pokemon/010.png"
            }, {
                id: 11,
                num: "011",
                name: "Metapod",
                img: "http://www.serebii.net/pokemongo/pokemon/011.png"
            }, {
                id: 12,
                num: "012",
                name: "Butterfree",
                img: "http://www.serebii.net/pokemongo/pokemon/012.png"
            }, {
                id: 13,
                num: "013",
                name: "Weedle",
                img: "http://www.serebii.net/pokemongo/pokemon/013.png"
            }, {
                id: 14,
                num: "014",
                name: "Kakuna",
                img: "http://www.serebii.net/pokemongo/pokemon/014.png"
            }, {
                id: 15,
                num: "015",
                name: "Beedrill",
                img: "http://www.serebii.net/pokemongo/pokemon/015.png"
            }, {
                id: 16,
                num: "016",
                name: "Pidgey",
                img: "http://www.serebii.net/pokemongo/pokemon/016.png"
            }, {
                id: 17,
                num: "017",
                name: "Pidgeotto"
            }, {
                id: 18,
                num: "018",
                name: "Pidgeot",
                img: "http://www.serebii.net/pokemongo/pokemon/018.png"
            }, {
                id: 19,
                num: "019",
                name: "Rattata",
                img: "http://www.serebii.net/pokemongo/pokemon/019.png"
            }, {
                id: 20,
                num: "020",
                name: "Raticate",
                img: "http://www.serebii.net/pokemongo/pokemon/020.png"
            }
        ];
        const title = <h1 className='title'>Packemon</h1>
        return (
            <section>
                <div className="container">
                    {title}
                    <ul className="pakemon__list">
                        <PakemonItem Pakemons={pakemons}/>
                    </ul>
                </div>
            </section>
        )
    }
};

export default App;
