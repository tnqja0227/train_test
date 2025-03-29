// This file contains the existing JavaScript code from GameMaster.js adapted for React Native environment.

import { Alert } from 'react-native';
import { useEffect, useState } from 'react';
import { get } from 'axios'; // Assuming axios is used for HTTP requests

const GameMaster = (() => {
    let instance;

    function createInstance(settings, webRoot, siteVersion, host) {
        const object = {
            data: {},
            rankings: [],
            trainRankings: [],
            groups: [],
            teamPools: [],
            loadedData: 0,
            allPokemon: {}
        };

        if (settings.gamemaster === "gamemaster-mega") {
            Alert.alert("Warning", "Mega Pokémon are enabled.");
        }

        let gmVersion = settings.gamemaster;

        if (gmVersion === "gamemaster-mega" || gmVersion === "gamemaster-paldea") {
            gmVersion = "gamemaster";
        }

        if (gmVersion === "gamemaster" && host.indexOf("localhost") === -1) {
            gmVersion = "gamemaster.min";
        }

        console.log("loading gamemaster");

        useEffect(() => {
            get(`${webRoot}data/${gmVersion}.json?v=${siteVersion}`)
                .then(response => {
                    object.data = response.data;
                    console.log("gamemaster loaded");

                    if (typeof updateFormatSelect === "function") {
                        updateFormatSelect(object.data.formats, InterfaceMaster.getInstance());
                    }

                    if (typeof updateCupSelect === "function") {
                        updateCupSelect(object.data.formats, InterfaceMaster.getInstance());
                    }

                    const formats = object.data.formats;

                    formats.forEach(format => {
                        if (format.showFormat && !format.hideRankings && format.title !== "Custom") {
                            // Logic to insert format links into ranking submenu
                        }
                    });

                    if (settings.gamemaster === "gamemaster") {
                        object.data.pokemon.sort((a, b) => (a.speciesName > b.speciesName ? 1 : -1));

                        if (typeof InterfaceMaster !== 'undefined') {
                            InterfaceMaster.getInstance().init(object);
                        }

                        if (typeof customRankingInterface !== 'undefined') {
                            customRankingInterface.init(object);
                        }
                    } else if (settings.gamemaster === "gamemaster-mega") {
                        get(`${webRoot}data/megas.json?v=${siteVersion}`)
                            .then(response => {
                                object.data.pokemon = object.data.pokemon.concat(response.data);
                                object.data.pokemon.sort((a, b) => (a.speciesName > b.speciesName ? 1 : -1));
                                InterfaceMaster.getInstance().init(object);
                            });
                    } else if (settings.gamemaster === "gamemaster-paldea") {
                        get(`${webRoot}data/paldea.json?v=${siteVersion}`)
                            .then(response => {
                                object.data.pokemon = object.data.pokemon.concat(response.data);
                                object.data.pokemon.sort((a, b) => (a.speciesName > b.speciesName ? 1 : -1));
                                InterfaceMaster.getInstance().init(object);
                            });
                    }
                })
                .catch(error => {
                    console.error("Request failed: ", error);
                });
        }, []);

        // Additional methods (getAllPokemon, getPokemonById, etc.) would be defined here

        return object;
    }

    return {
        getInstance: function(settings, webRoot, siteVersion, host) {
            if (!instance) {
                instance = createInstance(settings, webRoot, siteVersion, host);
            }
            return instance;
        }
    };
})();

export default GameMaster;