import {Daemon} from "../src/js/Daemon";
import {Magician} from "../src/js/Magician";

test('test for magician attack', () => {
    const magician = new Magician('mag');
    magician.setAttack(100);
    expect(magician.getAttack(3)).toBe(80);
})

test('test fo magician attack of stoned', () => {
    const magician = new Magician('mag');
    magician.setAttack(100);
    magician.setStoned(true);
    expect(magician.getAttack(2)).toBe(85);

})

test('test for Daemon attack', () => {
    const daemon = new Daemon('demon');
    daemon.setAttack(100);
    expect(daemon.getAttack(6)).toBe(50);
})

test('test fo Daemon attack of stoned', () => {
    const daemon = new Daemon('demon');
    daemon.setAttack(100);
    daemon.setStoned(true);
    expect(daemon.getAttack(4)).toBe(60);

})

test('test getStoned for Magician', () => {
    const magician = new Magician();
    expect(magician.getStoned()).toBe(false);
    magician.setStoned(true);
    expect(magician.getStoned()).toBe(true);
})

test('test getStoned for Daemon', () => {
    const daemon = new Daemon();
    expect(daemon.getStoned()).toBe(false);
    daemon.setStoned(true);
    expect(daemon.getStoned()).toBe(true);
})