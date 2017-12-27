export function sceneSketchCreate (moduleId) {
  return {
    type: 'SCENE_SKETCH_CREATE',
    payload: { moduleId }
  }
}

export function sceneSketchDelete (id) {
  return {
    type: 'SCENE_SKETCH_DELETE',
    payload: { id }
  }
}
