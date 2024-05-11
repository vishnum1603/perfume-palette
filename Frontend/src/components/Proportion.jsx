import React, { useState, useEffect } from 'react';
import { Input, Button } from '@mui/material';
import Slide from '@mui/material/Slide';
import Output from './Output';

const Proportion = ({ selectedFlavors, flavors }) => {
    const [mlValues, setMlValues] = useState({});
    const [mixingInProgress, setMixingInProgress] = useState(false);
    const [animationCompleted, setAnimationCompleted] = useState(false);
    const [showOutput, setShowOutput] = useState(false);

    useEffect(() => {
        if (mixingInProgress) {
            const timeoutId = setTimeout(() => {
                setMixingInProgress(false);
                setAnimationCompleted(true);
            }, 3000);

            return () => clearTimeout(timeoutId);
        }
    }, [mixingInProgress]);

    const handleMlInputChange = (flavor, value) => {
        setMlValues(prevValues => ({
            ...prevValues,
            [flavor]: value
        }));
    };

    const handleMixingClick = () => {
        setMixingInProgress(true);
    };

    const handleOutputButtonClick = () => {
        setShowOutput(true);
    };

    const selectedFlavorsData = selectedFlavors.map((flavor) => {
        return flavors.find((item) => item.name === flavor);
    });

    return (
        <Slide direction="left" in={true} mountOnEnter unmountOnExit>
            <div>
                {!showOutput && (
                    <div>
                        <h2>Proportion Page</h2>
                        <div>
                            {selectedFlavors && selectedFlavors.length > 0 ? (
                                <div>
                                    <p>You selected the following flavors:</p>
                                    <ul>
                                        {selectedFlavors.map((flavor, index) => (
                                            <li key={index} style={{ display: 'flex', alignItems: 'center' }}>
                                                <span>{flavor} :</span>
                                                <Input
                                                    type="number"
                                                    defaultValue={100}
                                                    style={{ marginLeft: '10px' }}
                                                    onChange={(e) => handleMlInputChange(flavor, e.target.value)}
                                                />
                                                ml
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ) : (
                                <p>No flavors selected.</p>
                            )}

                            {Object.keys(mlValues).length > 0 && (
                                <div>
                                    <p>Mixing proportions:</p>
                                    <ul>
                                        {Object.keys(mlValues).map((flavor) => (
                                            <li key={flavor}>
                                                {flavor}: {mlValues[flavor]} mL
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {!mixingInProgress && !animationCompleted && (
                                <Button variant="contained" color="primary" onClick={handleMixingClick}>
                                    MIXING
                                </Button>
                            )}

                            {animationCompleted && !showOutput && (
                                <Button variant="contained" color="primary" onClick={handleOutputButtonClick}>
                                    Show Output
                                </Button>
                            )}
                        </div>

                        {mixingInProgress && (
                            <div className="mixing-animation">
                                Mixing in progress...
                            </div>
                        )}
                    </div>
                )}

                {showOutput && <Output flavors={selectedFlavorsData} mlValues={mlValues} />}
            </div>
        </Slide>
    );
};

export default Proportion;
