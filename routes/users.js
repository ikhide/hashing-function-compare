const router = require("express").Router();
const { SHA3, SHAKE } = require("sha3");
const bcrypt = require("bcrypt");
const { pbkdf2, pbkdf2Sync, scrypt } = require("crypto");
const salt = require("../config/keys").secretOrKey;

//create an array of 1 to 1000
const array1000 = Array.from({ length: 1000 }, (v, k) => k + 1);
//create an array of 1 to 1000000
const array1000000 = Array.from({ length: 1000000 }, (v, k) => k + 1);

router.post("/sha512", async (req, res) => {
  try {
    const hash = new SHA3(512);
    hash.reset();

    //hash the array and return time to complete
    const start = new Date().getTime();
    array1000.map((item) => hash.update(item.toString()).digest("hex"));
    const end = new Date().getTime();
    const time1 = end - start;

    //hash the array and return time to complete
    const start2 = new Date().getTime();
    array2.map((item) => hash.update(item.toString()).digest("hex"));
    const end2 = new Date().getTime();
    const time2 = end2 - start2;

    //return the time to complete
    res.json({ "1000 numbers": time1, "1000000 numbers": time2 });

    return;
  } catch (err) {
    console.log({ err });
    res.status(500).json({ err });
  }
});

router.post("/sha256", async (req, res) => {
  try {
    const hash = new SHA3(256);

    // reset hash
    hash.reset();

    //hash the array and return time to complete
    const start = new Date().getTime();
    array1000.map((item) => hash.update(item.toString()).digest("hex"));
    const end = new Date().getTime();
    const time1 = end - start;

    //hash the array and return time to complete
    const start2 = new Date().getTime();
    array2.map((item) => hash.update(item.toString()).digest("hex"));
    const end2 = new Date().getTime();
    const time2 = end2 - start2;

    //return the time to complete
    res.json({ "1000 numbers": time1, "1000000 numbers": time2 });
    return;
  } catch (err) {
    console.log({ err });
    res.status(500).json({ err });
  }
});
router.post("/shake128", async (req, res) => {
  try {
    const hash = new SHAKE(128);

    // reset hash
    hash.reset();

    //hash the array and return time to complete
    const start = new Date().getTime();
    array1000.map((item) => hash.update(item.toString()).digest("hex"));
    const end = new Date().getTime();
    const time1 = end - start;

    //hash the array and return time to complete
    const start2 = new Date().getTime();
    array2.map((item) => hash.update(item.toString()).digest("hex"));
    const end2 = new Date().getTime();
    const time2 = end2 - start2;

    //return the time to complete
    res.json({ "1000 numbers": time1, "1000000 numbers": time2 });

    return;
  } catch (err) {
    console.log({ err });
    res.status(500).json({ err });
  }
});

router.post("/shake256", async (req, res) => {
  try {
    const hash = new SHAKE(256);

    // reset hash
    hash.reset();

    //hash the array and return time to complete
    const start = new Date().getTime();
    array1000.map((item) => hash.update(item.toString()).digest("hex"));
    const end = new Date().getTime();
    const time1 = end - start;

    //hash the array and return time to complete
    const start2 = new Date().getTime();
    array2.map((item) => hash.update(item.toString()).digest("hex"));
    const end2 = new Date().getTime();
    const time2 = end2 - start2;

    //return the time to complete
    res.json({ "1000 numbers": time1, "1000000 numbers": time2 });

    return;
  } catch (err) {
    console.log({ err });
    res.status(500).json({ err });
  }
});

router.post("/bcrypt", async (req, res) => {
  try {
    //hash the array and return time to complete
    const start = new Date().getTime();
    array1000.map((item) => bcrypt.hashSync(item.toString(), 10));
    const end = new Date().getTime();
    const time1 = end - start;

    //hash the array and return time to complete
    const start2 = new Date().getTime();
    // array1000000.map((item) => bcrypt.hashSync(item, 10));
    const end2 = new Date().getTime();
    const time2 = end2 - start2;

    //return the time to complete
    res.json({ "1000 numbers": time1, "1000000 numbers": time2 });
  } catch (err) {
    console.log({ err });
    res.status(500).json({ err });
  }
});

//bcrypt asynchronous hash
router.post("/bcryptAsync", async (req, res) => {
  try {
    //hash the array and return time to complete
    const start = new Date().getTime();
    await Promise.all(
      array1000.map((item) => bcrypt.hash(item.toString(), 10))
    );
    const end = new Date().getTime();
    const time1 = end - start;

    //hash the array and return time to complete
    const start2 = new Date().getTime();
    // await Promise.all(
    //   array1000000.map((item) => bcrypt.hash(item.toString(), 10))
    // );
    const end2 = new Date().getTime();
    const time2 = end2 - start2;

    //return the time to complete
    res.json({ "1000 numbers": time1, "1000000 numbers": time2 });
  } catch (err) {
    console.log({ err });
    res.status(500).json({ err });
  }
});

//pbkdf2 synchronous hash
router.post("/pbkdf2", async (req, res) => {
  try {
    //hash the array and return time to complete
    const start = new Date().getTime();
    array1000.map((item) =>
      pbkdf2Sync(item.toString(), salt, 10, 128, "sha512")
    );
    const end = new Date().getTime();
    const time1 = end - start;

    //hash the array and return time to complete
    const start2 = new Date().getTime();
    array1000000.map((item) =>
      pbkdf2Sync(item.toString(), salt, 10, 128, "sha512")
    );
    const end2 = new Date().getTime();
    const time2 = end2 - start2;

    //return the time to complete
    res.json({ "1000 numbers": time1, "1000000 numbers": time2 });
  } catch (err) {
    console.log({ err });
    res.status(500).json({ err });
  }
});

//pbkdf2 asynchronous hash
router.post("/pbkdf2Async", async (req, res) => {
  try {
    //hash the array and return time to complete
    const start = new Date().getTime();
    await Promise.all(
      array1000.map((item) =>
        asyncPbkdf2(item.toString(), salt, 10, 128, "sha512")
      )
    );
    const end = new Date().getTime();
    const time1 = end - start;

    //hash the array and return time to complete
    const start2 = new Date().getTime();
    await Promise.all(
      array1000000.map((item) =>
        asyncPbkdf2(item.toString(), salt, 10, 128, "sha512")
      )
    );
    const end2 = new Date().getTime();
    const time2 = end2 - start2;

    //return the time to complete
    res.json({ "1000 numbers": time1, "1000000 numbers": time2 });
  } catch (err) {
    console.log({ err });
    res.status(500).json({ err });
  }
});

//pbkdf2 asynchronous hash promise
const asyncPbkdf2 = (password, salt, iterations, keylen, digest) => {
  return new Promise((resolve, reject) => {
    pbkdf2(password, salt, iterations, keylen, digest, (err, derivedKey) => {
      if (err) reject(err);
      else resolve(derivedKey);
    });
  });
};

//scrypt async hash
router.post("/scrypt", async (req, res) => {
  try {
    //hash the array and return time to complete
    const start = new Date().getTime();
    await Promise.all(
      array1000.map((item) =>
        scryptHash(item.toString(), salt, 128, { N: 512 })
      )
    );
    const end = new Date().getTime();
    const time1 = end - start;

    //hash the array and return time to complete
    const start2 = new Date().getTime();
    await Promise.all(
      array1000000.map((item) =>
        scryptHash(item.toString(), salt, 128, { N: 512 })
      )
    );

    const end2 = new Date().getTime();
    const time2 = end2 - start2;

    //return the time to complete
    res.json({ "1000 numbers": time1, "100000 numbers": time2 });
  } catch (err) {
    console.log({ err });
    res.status(500).json({ err });
  }
});

//scrypt hash promise
const scryptHash = (password, salt, keylen, options) => {
  return new Promise((resolve, reject) => {
    scrypt(password, salt, keylen, options, (err, derivedKey) => {
      if (err) reject(err);
      else resolve(derivedKey);
    });
  });
};

module.exports = router;
