test("test common matcher", () => {
  expect(2 + 3).toBe(5);
  expect(5 + 5).not.toBe(20);
});

test("test to be true or false", () => {
    expect(1).toBeTruthy();
    expect(0).toBeFalsy();
})

test("test number", () => {
    expect(4).toBeGreaterThan(3)
    expect(4).toBeLessThan(6)
})

test("test object", () => {
    expect({name: 'bowerchen'}).toEqual({name: 'bowerchen'})
})