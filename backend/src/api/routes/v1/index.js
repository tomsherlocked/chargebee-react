const express = require("express");
const userRoutes = require("./user.route");
const authRoutes = require("./auth.route");
const chargebeeProvider = require("../../services/chargeBee");
const router = express.Router();

/**
 * GET v1/status
 */
router.get("/status", (req, res) => res.send("OK"));

/*
 * GET v1/customers
 *
 */

router.get("/customers", async (req, res) => {
  console.log("hit customer API");
  const results = await chargebeeProvider.getCustomer();
  results.hasError
    ? res.status(results.error.code).send(results.error.message)
    : res.json({ customers: results.list, count: results.list.length });
});

/**
 * GET v1/docs
 */
router.use("/docs", express.static("docs"));

router.use("/users", userRoutes);
router.use("/auth", authRoutes);

module.exports = router;
