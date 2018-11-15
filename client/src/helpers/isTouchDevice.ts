function isTouchDevice(): boolean {
  return !!("ontouchstart" in window);
}

export default isTouchDevice;
