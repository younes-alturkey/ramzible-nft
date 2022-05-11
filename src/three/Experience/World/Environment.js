import * as THREE from 'three'
import Experience from '../Experience.js'

export default class Environment {
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.debug = this.experience.debug

        // Debug
        if (this.debug.active) {
            this.debugFolder = this.debug.ui.addFolder('environment')
        }

        this.setSunLight()
        this.setEnvironmentMap()
    }

    setSunLight() {
        this.sunLight = new THREE.DirectionalLight('#ffffff', 20)
        this.sunLight.castShadow = true
        this.sunLight.shadow.camera.far = 15
        this.sunLight.shadow.mapSize.set(1024, 1024)
        this.sunLight.shadow.normalBias = 0.05
        this.sunLight.position.set(0, 10, 5)
        this.sunLight.rotation.x = 0.5
        this.scene.add(this.sunLight)

        this.sunLight2 = new THREE.DirectionalLight('#ffffff', 20)
        this.sunLight2.castShadow = true
        this.sunLight2.shadow.camera.far = 15
        this.sunLight2.shadow.mapSize.set(1024, 1024)
        this.sunLight2.shadow.normalBias = 0.05
        this.sunLight2.position.set(0, 10, -5)
        this.sunLight2.rotation.x = -0.5
        this.scene.add(this.sunLight2)

        // Debug
        if (this.debug.active) {
            this.debugFolder
                .add(this.sunLight, 'intensity')
                .name('sunLightIntensity')
                .min(0)
                .max(10)
                .step(0.001)

            this.debugFolder
                .add(this.sunLight.position, 'x')
                .name('sunLightX')
                .min(-5)
                .max(5)
                .step(0.001)

            this.debugFolder
                .add(this.sunLight.position, 'y')
                .name('sunLightY')
                .min(-5)
                .max(5)
                .step(0.001)

            this.debugFolder
                .add(this.sunLight.position, 'z')
                .name('sunLightZ')
                .min(-5)
                .max(5)
                .step(0.001)
        }
    }

    setEnvironmentMap() {
        const cubeTextureLoader = new THREE.CubeTextureLoader()
        this.environmentMap = cubeTextureLoader.load([
            'three/textures/environmentMap/px.jpg',
            'three/textures/environmentMap/nx.jpg',
            'three/textures/environmentMap/py.jpg',
            'three/textures/environmentMap/ny.jpg',
            'three/textures/environmentMap/pz.jpg',
            'three/textures/environmentMap/nz.jpg',
        ])

        this.environmentMap.encoding = THREE.sRGBEncoding
        this.scene.background = this.environmentMap
        this.scene.environment = this.environmentMap

        this.environmentMap.updateMaterials = () => {
            this.scene.traverse(child => {
                if (
                    child instanceof THREE.Mesh &&
                    child.material instanceof THREE.MeshStandardMaterial
                ) {
                    child.material.envMap = this.environmentMap.texture
                    child.material.envMapIntensity =
                        this.environmentMap.intensity
                    child.material.needsUpdate = true
                }
            })
        }
        this.environmentMap.updateMaterials()

        // Debug
        if (this.debug.active) {
            this.debugFolder
                .add(this.environmentMap, 'intensity')
                .name('envMapIntensity')
                .min(0)
                .max(4)
                .step(0.001)
                .onChange(this.environmentMap.updateMaterials)
        }
    }
}
