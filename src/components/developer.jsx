import React, { useEffect, useRef } from 'react';
import { useAnimations, useFBX, useGLTF } from '@react-three/drei';

const Developer = ({ animationName = 'idle', ...props }) => {
    const group = useRef();

    // Load the GLTF model
    const { nodes, materials } = useGLTF('/models/human/developer.glb');

    // Load the idle animation
    const { animations: idleAnimation } = useFBX('/models/human/idle.fbx');
    if (idleAnimation && idleAnimation.length > 0) {
        idleAnimation[0].name = 'salute';
    }
    
    const { animations: saluteAnimation } = useFBX('/models/human/salute.fbx');
    if (saluteAnimation && saluteAnimation.length > 0) {
        idleAnimation[0].name = 'idle';
    }
    
    const { animations: clappingAnimation } = useFBX('/models/human/clapping.fbx');
    if (clappingAnimation && clappingAnimation.length > 0) {
        clappingAnimation[0].name = 'clapping';
    } 
    const { animations: victoryAnimation } = useFBX('/models/human/victory.fbx');
    if (victoryAnimation && victoryAnimation.length > 0) {
        victoryAnimation[0].name = 'victory';
    }

    // Load animations
    const { actions } = useAnimations(
        [...(idleAnimation || []), ...(saluteAnimation || []), ...(victoryAnimation || []), ...(clappingAnimation || [])],
        group
    );


    // Manage animation playback
    useEffect(() => {
        if (actions && actions[animationName]) {
            actions[animationName].reset().fadeIn(0.5).play();
        }
        return () => {
            if (actions && actions[animationName]) {
                actions[animationName].fadeOut(0.5);
            }
        };
    }, [actions, animationName]);

    // Ensure all meshes are rendered
    return (
        <group {...props} dispose={null} ref={group}>
            {nodes && materials ? (
                <>
                    {/* Attach all skinned meshes */}
                    <primitive object={nodes.Hips} />
                    {Object.keys(nodes).map((key) => {
                        const node = nodes[key];
                        if (node.isSkinnedMesh) {
                            return (
                                <skinnedMesh
                                    key={key}
                                    name={node.name}
                                    geometry={node.geometry}
                                    material={materials[node.material.name]}
                                    skeleton={node.skeleton}
                                    morphTargetDictionary={node.morphTargetDictionary}
                                    morphTargetInfluences={node.morphTargetInfluences}
                                />
                            );
                        }
                        return null;
                    })}
                </>
            ) : (
                <></>
            )}
        </group>
    );
};

// Preload the GLTF model
useGLTF.preload('/models/human/developer.glb');
export default Developer;
