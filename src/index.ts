declare var wx: any;

class BitwisePermissionManager {
  static has(target: number, p: number) {
    return (target & p) === p;
  }

  static add(...args: number[]) {
    return args.reduce((acc, cur) => acc | cur, 0);
  }

  static remove(target: number, ...args: number[]) {
    return args.reduce((acc, cur) => acc & ~cur, target);
  }

  static toggle(target: number, ...args: number[]) {
    return args.reduce((acc, cur) => acc ^ cur, target);
  }
}

// for commonjs es5 require
if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = BitwisePermissionManager;
}

export default BitwisePermissionManager;
