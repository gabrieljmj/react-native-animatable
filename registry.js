import createAnimation from './createAnimation';

const animationRegistry = {};

export function registerAnimation(animationName, animation) {
  animationRegistry[animationName] = animation;
}

export function getAnimationByName(animationName) {
  return animationRegistry[animationName];
}

export function getAnimationNames() {
  return Object.keys(animationRegistry);
}

 export function initializeRegistryWithDefinitions(definitions) {
  Object.keys(definitions).forEach(animationName => {
    if (animationName !== '__esModule') { // this got rid of the crash
      registerAnimation(
        animationName,
        createAnimation(definitions[animationName]),
      );
    }
  });
}
