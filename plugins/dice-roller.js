import * as THREE from 'three';
import CANNON from 'cannon';
import { DiceD6, DiceD8, DiceD10, DiceD12, DiceD20, DiceManager } from 'threejs-dice';

window.THREE = THREE;
require('three/examples/js/controls/OrbitControls');

let OrbitControls = THREE.OrbitControls;

class DiceRoller {
  constructor(container) {
    this.container = container;
  }

  init(container) {
    let t = this;

    this.container = container;
    this.scene = new THREE.Scene();
    this.dices = []
    this.animationID = 0;

    let SCREEN_WIDTH = window.innerWidth,
      SCREEN_HEIGHT = window.innerHeight;
    let VIEW_ANGLE = 20,
      ASPECT = SCREEN_WIDTH / SCREEN_HEIGHT,
      NEAR = 0.01,
      FAR = 20000;

    this.camera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);
    this.camera.position.set(0, 90, 5);
    this.scene.add(this.camera);

    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    if (this.backupRenderer) {
      container.removeChild(this.backupRenderer.domElement);
    }

    container.appendChild(this.renderer.domElement);

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);

    const ambient = new THREE.AmbientLight(0xFFFFFF, 1);
    this.scene.add(ambient);

    const floorGeometry = new THREE.PlaneGeometry(30, 30);
    const floorMaterial = new THREE.MeshPhongMaterial({
      opacity: 0,
      transparent: true,
      side: THREE.DoubleSide
    });

    const floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.rotation.x = Math.PI / 2;
    this.scene.add(floor);

    this.world = new CANNON.World();
    this.world.gravity.set(0, -9.82 * 10, 0);
    this.world.broadphase = new CANNON.NaiveBroadphase();
    this.world.solver.iterations = 16;

    DiceManager.setWorld(this.world);

    let floorBody = new CANNON.Body({
      mass: 0,
      shape: new CANNON.Plane(),
      material: DiceManager.floorBodyMaterial,
    });

    floorBody.quaternion.setFromAxisAngle(
      new CANNON.Vec3(1, 0, 0),
      -Math.PI / 2
    );

    this.world.add(floorBody);

    this.animationID = requestAnimationFrame(animate);
    function animate() {
      t.world.step(1.0 / 60.0);
  
      t.renderer.render(t.scene, t.camera);
      t.dices.forEach(d => d.dice.updateMeshFromBody());
      t.controls.update();
  
      t.animationID = requestAnimationFrame(animate);
    }
  }

  randomDiceThrow(dices) {
    const diceValues = [];

    const newDices = dices.map(d => {
      let dice;
      switch (d.type) {
        case 'd8':
          dice = {
            dice: new DiceD8({ size: 1.2, backColor: '#ffff00' }),
            value: d.value,
          }
          break;
        case 'd10':
          dice = {
            dice: new DiceD10({ size: 1.2, backColor: '#ffff00' }),
            value: d.value,
          }
          break;
        case 'd12':
          dice = {
            dice: new DiceD12({ size: 1.2, backColor: '#ffff00' }),
            value: d.value,
          }
          break;
        case 'd20':
          dice = {
            dice: new DiceD20({ size: 1.2, backColor: '#ffff00' }),
            value: d.value,
          }
          break;
        default:
          dice = {
            dice: new DiceD6({ size: 1.2, backColor: '#ffff00' }),
            value: d.value,
          }
          break;
      }

      return dice;
    });

    for (var i = 0; i < newDices.length; i++) {
      const { dice, value } = newDices[i]
      this.scene.add(dice.getObject());

      let yRand = Math.random() * 5;
      dice.getObject().position.x = -15 - (i % 3) * 1.5;
			dice.getObject().position.y = 2 + Math.floor(i / 3) * 1.5;
			dice.getObject().position.z = -15 + (i % 3) * 1.5;
			dice.getObject().quaternion.x =
				((Math.random() * 90 - 45) * Math.PI) / 180;
			dice.getObject().quaternion.z =
				((Math.random() * 90 - 45) * Math.PI) / 180;
			dice.updateBodyFromMesh();
			let rand = Math.random() * 2;
			dice
				.getObject()
				.body.velocity.set(25 + rand, 20 + yRand, 15 + rand);
			dice
				.getObject()
				.body.angularVelocity.set(
					5 * Math.random() - 10,
					5 * Math.random() - 10,
					5 * Math.random() - 10
				);

      diceValues.push({ dice, value });
    }

    this.dices = diceValues;
    DiceManager.prepareValues(diceValues);
  }

  resetRoll() {
    let { animationID } = this;
    while(animationID--){
      cancelAnimationFrame(animationID);
    }

    this.backupRenderer = this.renderer;
    this.init(this.container);
  }
}

export default ({ app }, inject) => {
  inject('dice', container => new DiceRoller(container))
}