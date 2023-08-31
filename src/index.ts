declare var wx: any;

const BitwisePermissionManager = (): void => {
  console.log('hello');
};

// for commonjs es5 require
if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = BitwisePermissionManager;
}

export default BitwisePermissionManager;
