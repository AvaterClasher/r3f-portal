import {
  OrbitControls,
  useTexture,
  Environment,
  MeshPortalMaterial,
  RoundedBox,
  Text,
} from "@react-three/drei";
import * as THREE from "three";
import { Fish } from "./Fish";
import { Dragon } from "./Dragon_Evolved";
import { Ghost } from "./Ghost_Skull";

export const Experience = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <Environment preset="sunset" />
      <OrbitControls />
      <MonsterStage
        texture={
          "textures/fantasy_lands_oceanic_fantasy_lands_with_kraken_in.jpg"
        }
        name="Fish King"
      >
        <Fish scale={0.5} position-y={-1} />
      </MonsterStage>
      <MonsterStage
        texture={
          "textures/fantasy_lands_a_volcanos_with_dragons_in_the_backg.jpg"
        }
        name="Dragon King"
        position-x={-2.5}
        rotation-y={Math.PI / 8}
        >
        <Dragon scale={0.4} position-y={-1} />
      </MonsterStage>
      <MonsterStage
        name="Ghost King"
        texture={"textures/scenic_add_volcanos_of_purple_color.jpg"}
        position-x={2.5}
        rotation-y={-Math.PI / 8}
      >
        <Ghost scale={0.5} position-y={-1} />
      </MonsterStage>
    </>
  );
};

const MonsterStage = ({ children, name, texture, color, ...props }) => {
  const map = useTexture(texture);
  return (
    <group {...props}>
      <Text
        font="fonts/LobsterTwo-Regular.ttf"
        fontSize={0.3}
        position={[0, -1.3, 0.051]}
        anchorY={"bottom"}
      >
        {name}
        <meshBasicMaterial color={color} toneMapped={false} />
      </Text>
      <RoundedBox args={[2, 3, 0.2]}>
        <planeGeometry args={[2, 3]} />
        <MeshPortalMaterial side={THREE.DoubleSide}>
          <ambientLight intensity={1} />
          <Environment preset="sunset" />
          {children}
          <mesh>
            <sphereGeometry args={[5, 80, 80]} />
            <meshStandardMaterial map={map} side={THREE.BackSide} />
          </mesh>
        </MeshPortalMaterial>
      </RoundedBox>
    </group>
  );
};
