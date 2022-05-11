import * as THREE from 'three'
import Experience from '../Experience.js'
import { gsap } from 'gsap'

export default class Shiranui {
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.time = this.experience.time
        this.debug = this.experience.debug

        // Debug
        if (this.debug.active) {
            this.debugFolder = this.debug.ui.addFolder('fox')
        }

        // Resource
        this.resource = this.resources.items.shiranui

        this.setModel()
    }

    setModel() {
        this.model = this.resource.scene
        this.model.scale.set(0.12, 0.12, 0.12)
        this.model.position.set(0, -3, 0)
        this.model.rotation.y = 1
        this.scene.add(this.model)

        this.model.traverse(child => {
            if (child instanceof THREE.Mesh) {
                child.castShadow = true
            }
        })
    }

    rotate() {
        gsap.to(this.model.rotation, {
            duration: 1,
            y: this.model.rotation.y + -Math.PI * 0.5,
            delay: 0,
        })
    }
}
