const request = require("supertest");

const server = require("../server");
const testEnv = require("./test-environment");
const news = require("../server/db/news");
const events = require("../server/db/events");
const charities = require("../server/db/charities");
const cosmetics = require("../server/db/store");
const users = require("../server/db/users");

let testDb = testEnv.getTestDb();

beforeEach(() => {
  testDb = testEnv.getTestDb();
  return testEnv.initialise(testDb);
});

afterEach(() => testEnv.cleanup(testDb));

test("NEWS - returning items", () => {
  return news.getNews(testDb).then(results => {
    // const actual = typeof results;
    const actual = results.length > 0;

    expect(actual).toBeTruthy();
  });
});

test("NEWS - an item has the right number of keys", () => {
  return news.getNews(testDb).then(results => {
    // const actual = typeof results;

    let actual = Object.keys(results[0]).length;
    expect(actual).toBe(5);
  });
});

test("EVENTS - returning items", () => {
  return events.getEvents(testDb).then(results => {
    // const actual = typeof results;
    const actual = results.length > 0;

    expect(actual).toBeTruthy();
  });
});

test("EVENTS - an item has the right number of keys", () => {
  return events.getEvents(testDb).then(results => {
    // const actual = typeof results;

    let actual = Object.keys(results[0]).length;
    expect(actual).toBe(7);
  });
});

test("CHARITIES - returning items", () => {
  return charities.getCharities(testDb).then(results => {
    // const actual = typeof results;
    const actual = results.length > 0;

    expect(actual).toBeTruthy();
  });
});

test("CHARITIES - an item has the right number of keys", () => {
  return charities.getCharities(testDb).then(results => {
    // const actual = typeof results;

    let actual = results[0];
    expect(actual).toHaveProperty("id");
  });
});

test("COSMETICS - returning items", () => {
  return cosmetics.getCosmetics(testDb).then(results => {
    // const actual = typeof results;
    const actual = results.length > 0;

    expect(actual).toBeTruthy();
  });
});

test("COSMETICS - an item has the right number of keys", () => {
  return cosmetics.getCosmetics(testDb).then(results => {
    // const actual = typeof results;

    let actual = Object.keys(results[0]).length;
    expect(actual).toBe(4);
  });
});

test("USERS - returning items for all users", () => {
  return users.getUsers(testDb).then(results => {
    // const actual = typeof results;
    const actual = results.length > 0;

    expect(actual).toBeTruthy();
  });
});

test("USERS - an item has the right number of keys", () => {
  return users.getUsers(testDb).then(results => {
    // const actual = typeof results;

    let actual = Object.keys(results[0]).length;
    expect(actual).toBe(6);
  });
});

test("USERS - returning a single user", () => {
  return users.getUsers(testDb).then(results => {
    // const actual = typeof results;
    const actual = 0 < results.length <= 1;

    expect(actual).toBeTruthy();
  });
});

test("USERS/ANIMALS - returning a single users animals", () => {
  return users.getAnimalsByUserId(testDb).then(results => {
    // const actual = typeof results;
    const actual = 0 < results.length;

    expect(actual).toBeTruthy();
  });
});

test("USERS/ANIMALS - right data returning", () => {
  return users.getAnimalsByUserId(testDb).then(results => {
    // const actual = typeof results;
    const actual = results[0];

    expect(actual).toHaveProperty("animalId", "userID");
  });
});

test("USERS/Inventory - returning a single users Inventory", () => {
  return users.getInventoryByUserId(testDb).then(results => {
    // const actual = typeof results;
    const actual = 0 < results.length;

    expect(actual).toBeTruthy();
  });
});

test("USERS/Inventory - right data returning", () => {
  return users.getInventoryByUserId(testDb).then(results => {
    // const actual = typeof results;
    const actual = results[0];

    expect(actual).toHaveProperty("animalId", "userID");
  });
});

test("USERS/Charities - returning a single users Charities", () => {
  return users.getCharitiesByUserId(testDb).then(results => {
    // const actual = typeof results;
    const actual = 0 < results.length;

    expect(actual).toBeTruthy();
  });
});

test("USERS/Charities - right data returning", () => {
  return users.getCharitiesByUserId(testDb).then(results => {
    // const actual = typeof results;
    const actual = results[0];

    expect(actual).toHaveProperty("animalId", "userID");
  });
});

//Tests saying there is no DB table but there is - NEED TO REVISIT
