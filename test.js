import test from 'tape';

test("test integer addition", (t) => {
    t.plan(1);
    t.equal(1 + 1, 2);
});

test("test string addition", (t) => {
    t.plan();
    t.equal("1" + "1", 2);
});