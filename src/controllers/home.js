var express = require("express");

/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
    res.end("Server is running");
};