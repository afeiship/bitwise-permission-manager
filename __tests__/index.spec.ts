import bpm from '../src';

describe('api.basic', () => {
  let r = 0b100;
  let w = 0b010;
  let x = 0b001;

  test('normal user case - add', () => {
    const user1 = bpm.add(r, w);
    const user2 = bpm.add(r, x);
    const user3 = bpm.add(r);
    expect(user1).toBe(0b110);
    expect(user2).toBe(0b101);
    expect(user3).toBe(0b100);
  });

  test('normal user case - remove', () => {
    const target = 0b111;
    const user1 = bpm.remove(target, w);
    const user2 = bpm.remove(target, x);
    const user3 = bpm.remove(target, r);
    // user4 remove all
    const user4 = bpm.remove(target, r, w, x);
    expect(user1).toBe(0b101);
    expect(user2).toBe(0b110);
    expect(user3).toBe(0b011);
    expect(user4).toBe(0b000);
  });

  test('normal user case - toggle', () => {
    const target = 0b111;
    const user1 = bpm.toggle(target, r);
    const user2 = bpm.toggle(target, w);
    const user3 = bpm.toggle(target, x);
    // user4 toggle multiple
    const user4 = bpm.toggle(target, r, w, x);
    expect(user1).toBe(0b011);
    expect(user2).toBe(0b101);
    expect(user3).toBe(0b110);
    expect(user4).toBe(0b000);
  });

  test('normal user case - has', () => {
    const target = 0b111;
    const user1 = bpm.has(target, r);
    const user2 = bpm.has(target, w);
    const user3 = bpm.has(target, x);
    expect(user1).toBe(true);
    expect(user2).toBe(true);
    expect(user3).toBe(true);
  });
});
