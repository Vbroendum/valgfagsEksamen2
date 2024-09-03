import React, { useState, useEffect } from 'react';
import {View, StyleSheet, Platform } from 'react-native'
import  Animated, { useAnimatedProps, useSharedValue, withTiming }  from 'react-native-reanimated'
import SVG, { Circle, Text, Line } from 'react-native-svg'
import { Pedometer } from 'expo-sensors';


(parameters) = {
    radius: Number,
    strokeWidth: Number,
}

const color = '#9AE200';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const RingProgress = ({ radius = 150 , strokeWidth = 35, progress, totalSteps=10000 }) => {
    const [currentStepCount, setCurrentStepCount] = useState (0);
    const [isPedometerAvailable, setPedometerAvailability] = useState(null);

    const innerRadius = radius - strokeWidth / 2;
    const omkreds = 2 * Math.PI * innerRadius;
    const fill = useSharedValue(0);

    useEffect(() => {
        const subscribe = async () => {
            const available = await Pedometer.isAvailableAsync();
            setPedometerAvailability(available);

            if (available) {
                Pedometer.watchStepCount(result => {
                    setCurrentStepCount(result.steps);
                    fill.value = withTiming(result.steps / totalSteps, { duration: 900 });
                });
            }
        };

        subscribe();

        return () => {
            Pedometer.stopObserving();
        };
    }, []);



    useEffect(()=>{
        fill.value = withTiming(progress, {duration: 900 });
    }, [progress])

    const animatedProps = useAnimatedProps(()=>({
        strokeDasharray: [omkreds * fill.value, omkreds ],
    }))
    
    return (
        <View style= { {width: radius * 2, height: radius * 2, alignSelf: 'center' }}>
            <SVG width={radius * 2} height={radius * 2}>
                <Circle
                    r= {innerRadius}
                    cx={radius}
                    cy={radius}
                    strokeWidth={strokeWidth}
                    stroke={color}
                    opacity={0.2}
                    />

                <AnimatedCircle
                    animatedProps={animatedProps}
                    r= {innerRadius}
                    cx={radius}
                    cy={radius}
                    strokeWidth={strokeWidth}
                    stroke={color}
                    strokeDasharray={[omkreds * progress, omkreds ]}
                    strokeLinecap='round'
                    rotation={-90 }
                    originX={radius}
                    originY={radius}
                />
                <Text
                x={radius}
                y={radius - 10}
                fontSize={"40"}
                fontWeight='bold'
                fill="#fff"
                textAnchor="middle"
                >
                     {isPedometerAvailable === null ? "Checking..." : isPedometerAvailable ? currentStepCount : "N/A"}
                </Text>
                <Line
                
                    x1={radius - 100} // Adjust as needed
                    y1={radius + 5}
                    x2={radius + 100} // Adjust as needed
                    y2={radius + 5}
                    stroke="#3C3C3C"
                    strokeWidth="2"
                >
                </Line>
                <Text
                    x={radius}
                    y={radius + 50}
                    fontSize={"40"}
                    fill="#fff"
                    textAnchor="middle"
                >
                    {totalSteps}
                </Text>
            </SVG>
        </View>
    );



const styles = StyleSheet.create({
    SVG: {
        paddingBottom: 24,
    }
})}

export default RingProgress;